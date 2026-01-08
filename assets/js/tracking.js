// Client-side tracking helper for ivony_consultation
// Exposes window.IvonyTracking.trackConsultation(supabase, applicationId, options?)

(function () {
	const STORAGE_KEY = 'ivony_session_id';
	const IPIFY_URL = 'https://api.ipify.org?format=json';
	const IPAPI_URL = 'https://ipapi.co';
	const MAX_RETRY = 3;

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

	async function fetchIpData() {
		try {
			const ipRes = await fetch(IPIFY_URL);
			const ipJson = await ipRes.json();
			const ip = ipJson?.ip || null;

			if (!ip) {
				return { ip_address: null, country: null, region: null, city: null };
			}

			try {
				const geoRes = await fetch(`${IPAPI_URL}/${ip}/json/`);
				const geoJson = await geoRes.json();
				return {
					ip_address: ip,
					country: geoJson?.country_name || null,
					region: geoJson?.region || null,
					city: geoJson?.city || null
				};
			} catch (geoError) {
				console.warn('IvonyTracking: géoloc non disponible', geoError);
				return { ip_address: ip, country: null, region: null, city: null };
			}
		} catch (err) {
			console.warn('IvonyTracking: IP non récupérée', err);
			return { ip_address: null, country: null, region: null, city: null };
		}
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
		if (!supabase || typeof supabase.from !== 'function') {
			return { success: false, error: 'Supabase client manquant' };
		}

		if (!applicationId) {
			return { success: false, error: 'applicationId manquant' };
		}

		try {
			const { data: sessionData } = await supabase.auth.getSession();
			const activeSession = sessionData?.session || null;
			const isAuthenticated = Boolean(activeSession?.user?.id);

			const sessionId = isAuthenticated
				? activeSession?.access_token || activeSession?.user?.id || getOrCreateSessionId()
				: getOrCreateSessionId();

			const { deviceType, browser, os } = detectDevice();
			const geo = await fetchIpData();
			const isUnique = await isUniqueVisit(supabase, applicationId, sessionId);

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

			const result = await insertWithRetry(supabase, payload);
			if (!result.success) {
				return { success: false, error: result.error };
			}

			return { success: true };
		} catch (err) {
			return { success: false, error: err?.message || err };
		}
	}

	window.IvonyTracking = {
		trackConsultation
	};
})();
