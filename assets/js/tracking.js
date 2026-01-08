// Client-side tracking helper for ivony_consultation
// Exposes window.IvonyTracking.trackConsultation(supabase, applicationId, options?)

(function () {
	const STORAGE_KEY = 'ivony_session_id';
	const IPIFY_URL = 'https://api.ipify.org?format=json';
	const IPAPI_URL = 'https://ipapi.co';
	const MAX_RETRY = 3;
	const EMPTY_GEO = { ip_address: null, country: null, region: null, city: null };

	function normalizeGeo(raw = {}) {
		return {
			ip_address: raw.ip_address || raw.ip || null,
			country: raw.country || raw.country_name || null,
			region: raw.region || raw.region_name || null,
			city: raw.city || null
		};
	}

	function uuid() {
		if (typeof crypto !== 'undefined' && crypto.randomUUID) {
			return crypto.randomUUID();
		}
		const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
		return template.replace(/[xy]/g, (c) => {
			const r = (Math.random() * 16) | 0;
			const v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}

	function getStoredSessionId() {
		try {
			return window.localStorage.getItem(STORAGE_KEY) || null;
		} catch (err) {
			console.warn('IvonyTracking: localStorage inaccessible', err);
			return null;
		}
	}

	function persistSessionId(id) {
		try {
			window.localStorage.setItem(STORAGE_KEY, id);
		} catch (err) {
			console.warn('IvonyTracking: impossible de stocker le session_id', err);
		}
	}

	function getOrCreateSessionId() {
		const existing = getStoredSessionId();
		if (existing) return existing;
		const newId = uuid();
		persistSessionId(newId);
		return newId;
	}

	function detectDevice() {
		const ua = navigator.userAgent || '';
		const lowerUA = ua.toLowerCase();
		const deviceType = /mobile|iphone|android|ipad/.test(lowerUA)
			? 'mobile'
			: /tablet|ipad/.test(lowerUA)
				? 'tablet'
				: 'desktop';

		let browser = 'unknown';
		if (/edg\//i.test(ua)) browser = 'edge';
		else if (/chrome|crios/i.test(ua)) browser = 'chrome';
		else if (/safari/i.test(ua)) browser = 'safari';
		else if (/firefox|fxios/i.test(ua)) browser = 'firefox';
		else if (/opr\//i.test(ua)) browser = 'opera';

		let os = 'unknown';
		if (/windows nt/i.test(ua)) os = 'windows';
		else if (/android/i.test(ua)) os = 'android';
		else if (/iphone|ipad|ipod/i.test(ua)) os = 'ios';
		else if (/mac os x/i.test(ua)) os = 'macos';
		else if (/linux/i.test(ua)) os = 'linux';

		return { deviceType, browser, os };
	}

	async function fetchIpData(overrideGeo) {
		const provided = normalizeGeo(overrideGeo);
		if (provided.ip_address || provided.country || provided.region || provided.city) {
			return provided;
		}

		try {
			const autoRes = await fetch(`${IPAPI_URL}/json/`);
			const autoJson = await autoRes.json();
			const autoGeo = normalizeGeo({
				ip_address: autoJson?.ip,
				country: autoJson?.country_name,
				region: autoJson?.region,
				city: autoJson?.city
			});

			if (autoGeo.ip_address || autoGeo.country || autoGeo.region || autoGeo.city) {
				return autoGeo;
			}
		} catch (err) {
			console.warn('IvonyTracking: géoloc auto ipapi échouée', err);
		}

		try {
			const ipRes = await fetch(IPIFY_URL);
			const ipJson = await ipRes.json();
			const ip = ipJson?.ip || null;

			if (!ip) {
				return EMPTY_GEO;
			}

			try {
				const geoRes = await fetch(`${IPAPI_URL}/${ip}/json/`);
				const geoJson = await geoRes.json();
				return normalizeGeo({
					ip_address: ip,
					country: geoJson?.country_name,
					region: geoJson?.region,
					city: geoJson?.city
				});
			} catch (geoError) {
				console.warn('IvonyTracking: géoloc par IP échouée', geoError);
				return { ...EMPTY_GEO, ip_address: ip };
			}
		} catch (err) {
			console.warn('IvonyTracking: IP non récupérée', err);
		}

		return EMPTY_GEO;
	}

	async function isUniqueVisit(supabase, applicationId, sessionId) {
		try {
			const { data, error } = await supabase
				.from('ivony_consultation')
				.select('id')
				.eq('application_id', applicationId)
				.eq('session_id', sessionId)
				.limit(1);

			if (error) {
				console.warn('IvonyTracking: échec vérif unicité', error);
				return true;
			}

			return !data || data.length === 0;
		} catch (err) {
			console.warn('IvonyTracking: erreur vérif unicité', err);
			return true;
		}
	}

	async function insertWithRetry(supabase, payload) {
		let lastError = null;
		for (let attempt = 1; attempt <= MAX_RETRY; attempt += 1) {
			const { error } = await supabase
				.from('ivony_consultation')
				.insert([payload]);

			if (!error) {
				return { success: true };
			}

			lastError = error;
			const backoff = attempt * 300;
			await new Promise((resolve) => setTimeout(resolve, backoff));
		}

		return { success: false, error: lastError };
	}

	async function trackConsultation(supabase, applicationId, options = {}) {
    console.log('[IvonyTracking] Début du tracking...');
    
    if (!supabase || typeof supabase.from !== 'function') {
      console.error('[IvonyTracking] Supabase client manquant ou invalide');
      return { success: false, error: 'Supabase client manquant' };
    }

    if (!applicationId) {
      console.error('[IvonyTracking] applicationId manquant');
      return { success: false, error: 'applicationId manquant' };
    }

    console.log('[IvonyTracking] Application ID:', applicationId);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const activeSession = sessionData?.session || null;
      const isAuthenticated = Boolean(activeSession?.user?.id);

      console.log('[IvonyTracking] Authentifié:', isAuthenticated);

      const sessionId = isAuthenticated
        ? activeSession?.access_token || activeSession?.user?.id || getOrCreateSessionId()
        : getOrCreateSessionId();

      console.log('[IvonyTracking] Session ID:', sessionId);

			const { deviceType, browser, os } = detectDevice();
      console.log('[IvonyTracking] Device info:', { deviceType, browser, os });
      
			const geo = await fetchIpData(options.geo);
      console.log('[IvonyTracking] Geo data:', geo);
      
      const isUnique = await isUniqueVisit(supabase, applicationId, sessionId);
      console.log('[IvonyTracking] Visite unique:', isUnique);

      const payload = {
        application_id: applicationId,
        user_id: activeSession?.user?.id || null,
        is_authenticated: isAuthenticated,
        is_unique: isUnique,
        session_id: sessionId,
        ip_address: geo.ip_address,
        country: geo.country,
        region: geo.region,
        city: geo.city,
        browser,
        os,
        device_type: deviceType,
        visited_at: new Date().toISOString(),
        is_deleted: false
      };

      console.log('[IvonyTracking] Payload:', payload);
      console.log('[IvonyTracking] Envoi vers Supabase...');

      const result = await insertWithRetry(supabase, payload);
      if (!result.success) {
        console.error('[IvonyTracking] Échec insertion:', result.error);
        return { success: false, error: result.error };
      }

      console.log('[IvonyTracking] ✅ Données envoyées avec succès !');
      return { success: true };
    } catch (err) {
      console.error('[IvonyTracking] Erreur:', err);
		}
	}

	window.IvonyTracking = {
		trackConsultation
	};
})();
