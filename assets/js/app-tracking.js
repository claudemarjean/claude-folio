// Orchestrator for Ivony tracking
(function () {
	let autoTrackingBound = false;

	function ensureApplicationId(applicationId) {
		if (applicationId) return applicationId;
		if (window.IVONY_CONFIG?.PORTFOLIO_APP_ID) return window.IVONY_CONFIG.PORTFOLIO_APP_ID;
		return null;
	}

	async function trackApplicationView(applicationId, options = {}) {
		const appId = ensureApplicationId(applicationId);
		if (!appId) {
			return { success: false, error: 'applicationId absent' };
		}

		if (!window.IvonyTracking || typeof window.IvonyTracking.trackConsultation !== 'function') {
			return { success: false, error: 'IvonyTracking non chargé' };
		}

		if (!window.supabaseClient) {
			return { success: false, error: 'supabaseClient non initialisé' };
		}

		return window.IvonyTracking.trackConsultation(window.supabaseClient, appId, options);
	}

	function initAutoTracking() {
		if (autoTrackingBound) return;
		autoTrackingBound = true;

		document.addEventListener('click', (event) => {
			const target = event.target.closest('[data-app-id]');
			if (!target) return;

			const appId = target.getAttribute('data-app-id');
			const appUrl = target.getAttribute('data-app-url') || null;
			trackApplicationView(appId, { source: 'click', appUrl }).catch((err) => {
				console.warn('AppTracking: échec tracking clic', err);
			});
		});
	}

	window.AppTracking = {
		trackApplicationView,
		initAutoTracking
	};
})();
