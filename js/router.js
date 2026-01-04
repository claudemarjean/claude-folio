/**
 * Router - Gestion de la navigation SPA
 * Utilise l'API History pour gérer les sections sans rechargement de page
 */

class Router {
    constructor() {
        this.routes = {};
        this.currentSection = null;
        this.isInitialLoad = true;
        this.init();
    }

    /**
     * Initialise le routeur
     */
    init() {
        // Écouter les changements d'URL
        window.addEventListener('popstate', () => this.handleRouteChange());
        
        // Écouter les clics sur les liens de navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const hash = e.target.getAttribute('href');
                this.navigate(hash);
            }
        });

        // Charger la section initiale
        this.handleRouteChange();
        
        // Désactiver le flag après 1 seconde
        setTimeout(() => {
            this.isInitialLoad = false;
        }, 1000);
    }

    /**
     * Enregistre une route
     * @param {string} path - Le chemin de la route (ex: '#home')
     * @param {Function} callback - La fonction à exécuter
     */
    register(path, callback) {
        this.routes[path] = callback;
    }

    /**
     * Navigue vers une section
     * @param {string} hash - Le hash de la section (ex: '#home')
     */
    navigate(hash) {
        if (!hash || hash === '#') {
            hash = '#home';
        }

        // Mettre à jour l'URL sans recharger
        history.pushState(null, null, hash);
        
        // Gérer le changement de route
        this.handleRouteChange();
    }

    /**
     * Gère le changement de route
     */
    handleRouteChange() {
        let hash = window.location.hash || '#home';
        
        // Si aucun hash n'est présent (première visite), forcer #home
        if (!window.location.hash) {
            hash = '#home';
            history.replaceState(null, null, hash);
        }
        
        const sectionId = hash.replace('#', '');

        // Mettre à jour la navigation active
        this.updateActiveNavLink(hash);

        // Scroll vers la section
        this.scrollToSection(sectionId);

        // Exécuter le callback de la route si elle existe
        if (this.routes[hash]) {
            this.routes[hash]();
        }

        // Mettre à jour la section courante
        this.currentSection = sectionId;
    }

    /**
     * Met à jour le lien actif dans la navigation
     * @param {string} hash - Le hash actif
     */
    updateActiveNavLink(hash) {
        // Retirer la classe active de tous les liens
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Ajouter la classe active au lien correspondant
        const activeLink = document.querySelector(`.nav-link[href="${hash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    /**
     * Scroll fluide vers une section
     * @param {string} sectionId - L'ID de la section
     */
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            // Si c'est la section home, scroll tout en haut
            if (sectionId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const sectionTop = section.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        }
    }

    /**
     * Détecte la section visible au scroll
     */
    detectVisibleSection() {
        // Ne pas détecter pendant le chargement initial
        if (this.isInitialLoad) {
            return;
        }
        
        // Si on est tout en haut de la page, forcer home
        if (window.scrollY < 100) {
            if (this.currentSection !== 'home') {
                this.currentSection = 'home';
                history.replaceState(null, null, '#home');
                this.updateActiveNavLink('#home');
            }
            return;
        }
        
        const sections = document.querySelectorAll('.section');
        const navHeight = document.getElementById('navbar').offsetHeight;
        const scrollPosition = window.scrollY + navHeight + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.id;
                if (this.currentSection !== sectionId) {
                    this.currentSection = sectionId;
                    history.replaceState(null, null, `#${sectionId}`);
                    this.updateActiveNavLink(`#${sectionId}`);
                }
            }
        });
    }
}

// Instance globale du routeur
const router = new Router();

// Détecter la section visible au scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        router.detectVisibleSection();
    }, 100);
});
