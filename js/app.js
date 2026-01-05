const THEME_STORAGE_KEY = 'portfolio-theme';
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
let currentTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'dark');

document.documentElement.setAttribute('data-theme', currentTheme);

function getThemeTexts() {
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'fr';
    if (lang === 'en') {
        return {
            light: 'Light',
            dark: 'Dark',
            toLight: 'Switch to light mode',
            toDark: 'Switch to dark mode'
        };
    }
    return {
        light: 'Clair',
        dark: 'Sombre',
        toLight: 'Passer en mode clair',
        toDark: 'Passer en mode sombre'
    };
}

function updateThemeToggleUI() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const icon = btn.querySelector('i');
    const label = btn.querySelector('.theme-toggle__label');
    const texts = getThemeTexts();
    const isLight = currentTheme === 'light';
    if (icon) icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    if (label) label.textContent = isLight ? texts.light : texts.dark;
    btn.setAttribute('aria-pressed', isLight);
    btn.setAttribute('aria-label', isLight ? texts.toDark : texts.toLight);
}

function setTheme(theme) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
    updateThemeToggleUI();
}

function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    updateThemeToggleUI();
    btn.addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    prefersDarkScheme.addEventListener('change', (event) => {
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            setTheme(event.matches ? 'dark' : 'light');
        }
    });
}

/**
 * Application principale
 * Initialise et coordonne tous les composants du portfolio
 */

class PortfolioApp {
    constructor() {
        this.init();
    }

    /**
     * Initialise l'application
     */
    init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }

    /**
     * Exécuté quand le DOM est prêt
     */
    onDOMReady() {
        // Masquer l'overlay de chargement
        this.hideLoading();

        initThemeToggle();
        applyLanguage(getCurrentLanguage());
        setTimeout(() => initScrollAnimations(), 100);
        this.initEvents();
        this.initNavbar();
        this.initScrollToTop();
        this.initContactForm();
        this.initProfileImageEffects();
        initLanguageSwitcher();
    }

    /**
     * Masque l'overlay de chargement
     */
    hideLoading() {
        const loading = document.getElementById('loading');
        if (loading) {
            setTimeout(() => {
                loading.style.opacity = '0';
                setTimeout(() => {
                    loading.style.display = 'none';
                }, 300);
            }, 500);
        }
    }

    /**
     * Initialise tous les événements
     */
    initEvents() {
        // Gérer le redimensionnement de la fenêtre
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Gérer le scroll
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    /**
     * Initialise la navigation
     */
    initNavbar() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Toggle du menu mobile
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });
        }

        // Fermer le menu au clic sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });

        // Fermer le menu au clic en dehors
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }

    /**
     * Initialise le bouton scroll to top
     */
    initScrollToTop() {
        const scrollToTopBtn = document.getElementById('scrollToTop');

        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    /**
     * Initialise le formulaire de contact
     */
    initContactForm() {
        const form = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                // Récupérer les données du formulaire
                const formData = {
                    name: form.name.value,
                    email: form.email.value,
                    subject: form.subject.value,
                    message: form.message.value
                };

                // Simuler l'envoi du formulaire
                this.handleFormSubmit(formData, form, formMessage);
            });
        }
    }

    /**
     * Gère la soumission du formulaire
     * @param {Object} formData - Les données du formulaire
     * @param {HTMLFormElement} form - Le formulaire
     * @param {HTMLElement} formMessage - L'élément pour afficher les messages
     */
    handleFormSubmit(formData, form, formMessage) {
        // Afficher un message de chargement
        const lang = getCurrentLanguage();
        const sendingText = lang === 'en' ? 'Sending...' : 'Envoi en cours...';
        const successText = lang === 'en' ? 'Your mail client will open. Thank you!' : "Votre client mail va s'ouvrir. Merci !";

        formMessage.style.display = 'block';
        formMessage.className = 'form-message loading';
        formMessage.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${sendingText}`;

        // Simuler un délai d'envoi
        setTimeout(() => {
            // Créer le lien mailto
            const { personalData } = getCurrentData();
            const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            
            // Ouvrir le client mail
            window.location.href = mailtoLink;

            // Afficher un message de succès
            formMessage.className = 'form-message success';
            formMessage.innerHTML = `<i class="fas fa-check-circle"></i> ${successText}`;

            // Réinitialiser le formulaire
            form.reset();

            // Masquer le message après 5 secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    }

    /**
     * Active le passage de la photo du profil du noir et blanc à la couleur
     */
    initProfileImageEffects() {
        const profileImg = document.querySelector('.profile-img');

        if (!profileImg) return;

        profileImg.setAttribute('tabindex', '0');

        const toggleColor = () => {
            profileImg.classList.toggle('is-colored');
        };

        profileImg.addEventListener('click', toggleColor);
        profileImg.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleColor();
            }
        });
    }

    /**
     * Gère le scroll de la page
     */
    handleScroll() {
        const navbar = document.getElementById('navbar');
        const scrollToTopBtn = document.getElementById('scrollToTop');

        // Ajouter une classe à la navbar si on a scrollé
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Afficher/masquer le bouton scroll to top
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    /**
     * Gère le redimensionnement de la fenêtre
     */
    handleResize() {
        // Fermer le menu mobile si on passe en desktop
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    }
}

// Initialiser l'application
const app = new PortfolioApp();

// Fonctions utilitaires globales
window.utils = {
    /**
     * Debounce une fonction
     * @param {Function} func - La fonction à debouncer
     * @param {number} wait - Le délai en ms
     * @returns {Function}
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle une fonction
     * @param {Function} func - La fonction à throttler
     * @param {number} limit - Le délai en ms
     * @returns {Function}
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Vérifie si un élément est visible dans le viewport
     * @param {HTMLElement} element - L'élément à vérifier
     * @returns {boolean}
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};
