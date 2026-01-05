/**
 * Gestion multilingue (FR/EN) pour le portfolio
 * Toutes les chaînes et données localisées sont centralisées ici
 */

const AVAILABLE_LANGS = ['fr', 'en'];
const DEFAULT_LANG = localStorage.getItem('portfolio-lang') || 'fr';
let currentLanguage = AVAILABLE_LANGS.includes(DEFAULT_LANG) ? DEFAULT_LANG : 'fr';

// --- Données localisées ---
const portfolioData = {
    fr: {
        personalData: {
            name: "Marjean Claude",
            profile: 'assets/images/profile.jpg',
            designation: "l'innovation technologique",
            description: "Ingénieur Logiciel et Développeur Full-Stack, je suis passionné par la conception et l'optimisation de solutions numériques. Avec une solide expérience en développement web. Curieux et ouvert, j'aime relever de nouveaux défis pour créer des solutions innovantes et performantes.",
            email: 'marjean.8888@gmail.com',
            phone: '+261 34 50 488 88',
            address: 'Fianarantsoa, Madagascar',
            github: 'https://github.com/claudemarjean',
            facebook: 'https://web.facebook.com/claude.marjean/',
            linkedIn: 'https://mg.linkedin.com/in/marjean-claude-andriamahatradraide-65873b246',
            resume: 'https://drive.google.com/file/d/1qeqaymm_tZzq4mII60nRlG7_LoIM63df/view'
        },
        about: {
            paragraphs: [
                "Ingénieur Logiciel et Développeur Full-Stack, je suis passionné par la conception et l'optimisation de solutions numériques. Avec une solide expérience en développement web, je maîtrise un large éventail de technologies modernes.",
                "Curieux et ouvert, j'aime relever de nouveaux défis pour créer des solutions innovantes et performantes. Mon approche combine rigueur technique et créativité pour livrer des produits de qualité."
            ]
        },
        projectsData: [
            { id: 1, name: 'Texteur', description: "Conception et pilotage de l’équipe pour le développement d’une application collaborative en temps réel, avec une architecture modulaire orientée performance, scalabilité et sécurité.", tools: ['Vue.js 3', 'CodeIgniter', 'PHP Ratchet', 'WebSocket', 'Nginx'], role: 'Développeur Full-Stack / Lead Technique', code: '', demo: 'https://manao.eu/fr/fiche-technique-texteur', image: 'assets/images/logo-log-texteur.png' },
            { id: 2, name: 'AB Air Support – Page Vitrine B2B', description: "Réalisation et déploiement d'une page vitrine professionnelle pour AB Air Support, présentant ses services de courtage, conseil et gestion aéronautique B2B de manière claire et structurée.", tools: ['Wordpress', 'Elementor', 'PHP', 'Javascript'], role: 'Webmaster', code: '', demo: 'https://abairsupport.com/', image: 'assets/images/projects/AB Air Support.jpg' },
            { id: 3, name: "Site vitrine d'Extratoo pour la vente de produits Mactoo", description: "Maintenance du site vitrine de Mactoo, le site présente les différents produits et abonnements proposés par Extratoo, avec une navigation intuitive et des sections claires pour faciliter le parcours client et la prise de contact.", tools: ['Wordpress', 'Elementor', 'PHP', 'Javascript'], role: 'Webmaster', code: '', demo: 'https://www.mactoo.fr/', image: 'assets/images/projects/mactoo.png' },
            { id: 4, name: 'Licences utilisateurs', description: "Conception et développement d'un module destiné aux administrateurs sur une plateforme interne, permettant de gérer les droits d'accès des utilisateurs sur différents logiciels du système. Réalisation également d'une API dédiée, afin que les autres applications de l'écosystème puissent interagir de manière sécurisée avec ce système de gestion des autorisations.", tools: ['CodeIgniter', 'JQuery', 'Bootstrap'], role: 'Développeur full-stack', code: '', demo: 'https://manao.eu/fr/logiciels-plateforme', image: 'assets/images/projects/Licences utilisateur.jpg' },
            { id: 5, name: 'API SMS', description: "Développement dans le cadre de la transition d'un système interne de gestion des SMS, avec le remplacement d'une API SOAP existante par une API REST plus moderne. Cela a permis de garantir la continuité des opérations tout en améliorant l'interopérabilité avec des services tiers de messagerie.", tools: ['Laravel', 'Webhoock', 'allmysms'], role: 'Développeur backend', code: '', demo: 'https://www.allmysms.com/', image: 'assets/images/projects/api-sms.jpg' },
            { id: 6, name: 'Manao Gescom', description: "Participation au développement d'un module de gestion des documents commerciaux, plus précisément sur le volet livraison. Ce module permet de créer, consulter, filtrer et exporter des bons de livraison liés aux clients, en s'intégrant dans le processus global de vente (devis, commandes, factures). L'objectif principal était d'assurer la traçabilité, la fiabilité des livraisons et leur intégration fluide dans le cycle commercial de l'entreprise.", tools: ['CodeIgniter', 'Javascript ES6', 'Bootstrap'], role: 'Développeur full-stack', code: '', demo: 'https://manao.eu/fr/fiche-technique-gescom', image: 'assets/images/projects/gescom.png' },
            { id: 7, name: 'Quiz Marvel', description: "Développement d'un site de quiz interactif en React.js destiné aux fans de l'univers Marvel, avec questions à choix multiples, résultats commentés par les héros et système de classement dynamique selon les performances. Utilisation des Hooks pour la gestion de l'état et de la logique applicative.", tools: ['React.js', 'Javascript ES6', 'Firebase'], role: 'Développeur front-end', code: '', demo: 'https://marvel-quiz-b896b.firebaseapp.com/', image: 'assets/images/projects/marvel.jpg' },
            { id: 8, name: 'Score Karate', description: "Développement d'une application pour l'affichage des scores de karaté lors de la compétition nationale.", tools: ['Javascript ES6', 'Tailwind CSS'], role: 'Développeur front-end', code: '', demo: 'https://score-karate.vercel.app/', image: 'assets/images/projects/scoreKarate.jpg' },
            { id: 9, name: 'Manao Paie (Paie Mada)', description: "Conception et développement d'un module de validation et diffusion des bulletins de paie, permettant une gestion efficace des employés et des déclarations fiscales, avec un outil intuitif pour les responsables RH.", tools: ['PHP', 'JavaScript', 'CodeIgniter', 'Bootstrap', 'MySQL'], role: 'Développeur Full-Stack', code: '', demo: 'https://manao.eu/fr/logiciels-paie', image: 'assets/images/projects/Manao Paie.jpg' },
            { id: 10, name: 'Manao Comptabilité', description: "Conception et développement d'un module de saisie comptable multi-devises avec gestion intégrée des pièces justificatives via GED. Optimisation de l'expérience utilisateur pour les écritures comptables, amélioration du suivi client, et mise en place d'un système de droits de communication pour faciliter la déclaration fiscale.", tools: ['Angular.js', 'CodeIgniter', 'Bootstrap'], role: 'Développeur full-stack', code: '', demo: 'https://manao.eu/fr/fiche-technique-comptabilite', image: 'assets/images/projects/comptabilite.jpg' }
        ],
        skillsData: ['Angular','Bootstrap','CSS','Docker','Firebase','Flutter','Git','HTML','Javascript','MySQL','Next JS','Photoshop','PostgreSQL','Premiere Pro','Python','React','Tailwind','Typescript','Vue','Wordpress'],
        experiences: [
            { id: 1, title: 'Directeur Adjoint au Développement', company: 'MANAO Logiciels', duration: '(Jan 2024 - Présent)', location: 'Madagascar', description: 'Direction et coordination des équipes de développement, gestion de projets stratégiques et innovation technologique.' },
            { id: 2, title: 'Responsable Informatique', company: 'AFAMITA (alternance)', duration: '(Nov 2020 - Présent)', location: 'Madagascar', description: "Gestion du système d’information, des plateformes de transfert monétaire et du support technique." },
            { id: 3, title: 'Webmaster/Développeur', company: 'AB Air Support (freelance)', duration: '(Mars 2025)', location: 'Remote', description: "Développement et déploiement d'une page vitrine professionnelle B2B." },
            { id: 4, title: 'Auditeur en assistance du SI', company: '-', duration: '(Décembre 2024)', location: 'Madagascar', description: "Audit et évaluation des systèmes d'information." },
            { id: 5, title: 'Webmaster/Développeur', company: 'ExtraToo (freelance)', duration: '(Juillet 2024 - Août 2024)', location: 'Remote', description: 'Maintenance et amélioration du site vitrine de produits Mactoo.' },
            { id: 6, title: 'Chef de projet en développement', company: 'MANAO Logiciels', duration: '(Juillet 2023 - Janvier 2024)', location: 'Madagascar', description: 'Gestion et coordination de projets de développement logiciel.' },
            { id: 7, title: 'Développeur Web Full Stack (PHP-JS)', company: 'MANAO Logiciels', duration: '(Avril 2022 - Juin 2023)', location: 'Madagascar', description: "Développement d'applications web complètes avec PHP et JavaScript." },
            { id: 8, title: 'Stages professionnels significatifs', company: '-', duration: '', location: '', description: "Stages techniques et fonctionnels ayant permis l’acquisition de solides bases en développement logiciel, systèmes d’information et gestion de projets IT." }
        ],
        educations: [
            { id: 1, title: 'Master 2', duration: '2021 - 2022', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Master en Informatique avec spécialisation en développement logiciel' },
            { id: 2, title: 'Licence', duration: '2019 - 2020', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Licence en Informatique' }
        ],
        articlesData: [
            { id: 'article-1', title: "Pourquoi tant de projets informatiques échouent avant même la première ligne de code", image: 'assets/images/articles/projets informatiques echouent.png', excerpt: "Pourquoi tant de projets informatiques échouent avant même la première ligne de code", body: ['De nombreux projets sont fragilisés bien avant le démarrage du développement.', 'L’échec prend souvent racine dans la phase de cadrage initial.', 'Les objectifs sont imprécis, les priorités mal hiérarchisées et les contraintes métier sous-estimées.', 'Le besoin réel est rarement formalisé de manière exploitable.', 'Les choix techniques arrivent trop tôt, sans vision globale ni scénario d’évolution.', 'Le périmètre évolue sans règles claires, créant des attentes contradictoires.', 'Le projet progresse, mais sans direction stable.', 'Le code devient alors une tentative d’adaptation permanente.', 'Ce n’est pas un problème de compétences techniques, mais de décisions amont.', 'Un projet bien cadré réduit les risques avant même d’écrire la première ligne de code.'] },
            { id: 'article-2', title: "Le vrai problème d'un projet n'est presque jamais technique", image: 'assets/images/articles/placeholder.svg', excerpt: "Le vrai problème d'un projet n'est presque jamais technique", body: ["Le vrai problème d'un projet n'est presque jamais technique"] },
            { id: 'article-3', title: 'Ce que les cahiers des charges oublient systématiquement', image: 'assets/images/articles/placeholder.svg', excerpt: 'Ce que les cahiers des charges oublient systématiquement', body: ['Ce que les cahiers des charges oublient systématiquement'] },
            { id: 'article-4', title: 'Les décisions non techniques qui sabotent un projet IT', image: 'assets/images/articles/placeholder.svg', excerpt: 'Les décisions non techniques qui sabotent un projet IT', body: ['Les décisions non techniques qui sabotent un projet IT'] },
            { id: 'article-5', title: 'La dette technique ne commence pas dans le code', image: 'assets/images/articles/placeholder.svg', excerpt: 'La dette technique ne commence pas dans le code', body: ['La dette technique ne commence pas dans le code'] },
            { id: 'article-6', title: "PHP n'est pas le problème, son utilisation l'est", image: 'assets/images/articles/placeholder.svg', excerpt: "PHP n'est pas le problème, son utilisation l'est", body: ["PHP n'est pas le problème, son utilisation l'est"] },
            { id: 'article-7', title: "JavaScript devient dangereux quand il n'est pas structuré", image: 'assets/images/articles/placeholder.svg', excerpt: "JavaScript devient dangereux quand il n'est pas structuré", body: ["JavaScript devient dangereux quand il n'est pas structuré"] },
            { id: 'article-8', title: "Séparer le front et le back n'est pas une option", image: 'assets/images/articles/placeholder.svg', excerpt: "Séparer le front et le back n'est pas une option", body: ["Séparer le front et le back n'est pas une option"] },
            { id: 'article-9', title: 'La sécurité web est souvent prise trop tard', image: 'assets/images/articles/placeholder.svg', excerpt: 'La sécurité web est souvent prise trop tard', body: ['La sécurité web est souvent prise trop tard'] },
            { id: 'article-10', title: "Une application lente coûte plus qu'on ne le pense", image: 'assets/images/articles/placeholder.svg', excerpt: "Une application lente coûte plus qu'on ne le pense", body: ["Une application lente coûte plus qu'on ne le pense"] }
        ],
        ui: {
            nav: { home: 'Accueil', about: 'À propos', experience: 'Expérience', skills: 'Compétences', projects: 'Projets', education: 'Formation', articles: 'Articles', contact: 'Contact' },
            hero: {
                title: "Bonjour,<br>Je suis <span class=\"text-gradient-pink\">Marjean Claude</span>,<br>ingénieur en informatique passionné par <span class=\"text-gradient-green\">l'innovation technologique</span>.",
                description: "Ingénieur Logiciel et Développeur Full-Stack, je suis passionné par la conception et l'optimisation de solutions numériques. Avec une solide expérience en développement web, je relève de nouveaux défis pour créer des solutions innovantes et performantes.",
                ctaPrimary: 'Me contacter',
                ctaSecondary: 'Télécharger CV'
            },
            sections: {
                about: 'À propos de moi',
                experience: 'Expériences professionnelles',
                skills: 'Compétences techniques',
                projects: 'Projets réalisés',
                education: 'Formation',
                articles: 'Articles',
                contact: 'Contactez-moi'
            },
            about: { email: 'Email', phone: 'Téléphone', location: 'Localisation' },
            contact: {
                title: 'Discutons de votre projet',
                body: "Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de vos projets.",
                form: { name: 'Nom complet', email: 'Email', subject: 'Sujet', message: 'Message', submit: 'Envoyer le message' }
            },
            footer: {
                rights: 'Tous droits réservés.',
                built: 'Développé avec <i class="fas fa-heart"></i> en JavaScript et CSS'
            }
        }
    },
    en: {
        personalData: {
            name: 'Marjean Claude',
            profile: 'assets/images/profile.jpg',
            designation: 'technological innovation',
            description: 'Software Engineer and Full-Stack Developer, passionate about designing and optimizing digital solutions. With solid experience in web development, I enjoy tackling new challenges to build innovative, high-performance products.',
            email: 'marjean.8888@gmail.com',
            phone: '+261 34 50 488 88',
            address: 'Fianarantsoa, Madagascar',
            github: 'https://github.com/claudemarjean',
            facebook: 'https://web.facebook.com/claude.marjean/',
            linkedIn: 'https://mg.linkedin.com/in/marjean-claude-andriamahatradraide-65873b246',
            resume: 'https://drive.google.com/file/d/1qeqaymm_tZzq4mII60nRlG7_LoIM63df/view'
        },
        about: {
            paragraphs: [
                'Software Engineer and Full-Stack Developer, passionate about designing and optimizing digital solutions. With solid experience in web development, I master a wide range of modern technologies.',
                'Curious and open-minded, I enjoy taking on new challenges to craft innovative and high-performing solutions. My approach combines technical rigor and creativity to deliver quality products.'
            ]
        },
        projectsData: [
            { id: 1, name: 'Texteur', description: 'Led and architected a real-time collaborative application with a modular, performance-driven, and secure stack.', tools: ['Vue.js 3', 'CodeIgniter', 'PHP Ratchet', 'WebSocket', 'Nginx'], role: 'Full-Stack Developer / Tech Lead', code: '', demo: 'https://manao.eu/fr/fiche-technique-texteur', image: 'assets/images/logo-log-texteur.png' },
            { id: 2, name: 'AB Air Support – B2B Showcase', description: 'Built and launched a professional showcase page for AB Air Support, presenting brokerage and aviation management services.', tools: ['Wordpress', 'Elementor', 'PHP', 'Javascript'], role: 'Webmaster', code: '', demo: 'https://abairsupport.com/', image: 'assets/images/projects/AB Air Support.jpg' },
            { id: 3, name: 'Extratoo showcase for Mactoo products', description: 'Maintained the Mactoo showcase site with clear sections and intuitive navigation to present products and subscriptions.', tools: ['Wordpress', 'Elementor', 'PHP', 'Javascript'], role: 'Webmaster', code: '', demo: 'https://www.mactoo.fr/', image: 'assets/images/projects/mactoo.png' },
            { id: 4, name: 'User Licenses', description: 'Designed and built an admin module to manage access rights across internal software, plus a dedicated API for secure ecosystem integrations.', tools: ['CodeIgniter', 'JQuery', 'Bootstrap'], role: 'Full-Stack Developer', code: '', demo: 'https://manao.eu/fr/logiciels-plateforme', image: 'assets/images/projects/Licences utilisateur.jpg' },
            { id: 5, name: 'SMS API', description: 'Rebuilt an internal SMS platform, replacing a SOAP API with a modern REST API to keep operations running and improve interoperability.', tools: ['Laravel', 'Webhoock', 'allmysms'], role: 'Backend Developer', code: '', demo: 'https://www.allmysms.com/', image: 'assets/images/projects/api-sms.jpg' },
            { id: 6, name: 'Manao Gescom', description: 'Contributed to the delivery module of a commercial documents system, enabling creation, filtering, and export of delivery notes with full sales flow integration.', tools: ['CodeIgniter', 'Javascript ES6', 'Bootstrap'], role: 'Full-Stack Developer', code: '', demo: 'https://manao.eu/fr/fiche-technique-gescom', image: 'assets/images/projects/gescom.png' },
            { id: 7, name: 'Marvel Quiz', description: 'Interactive React quiz for Marvel fans with MCQs, hero-themed feedback, and dynamic leaderboard using hooks for state management.', tools: ['React.js', 'Javascript ES6', 'Firebase'], role: 'Front-end Developer', code: '', demo: 'https://marvel-quiz-b896b.firebaseapp.com/', image: 'assets/images/projects/marvel.jpg' },
            { id: 8, name: 'Karate Score', description: 'Built a web app to display karate competition scores during the national event.', tools: ['Javascript ES6', 'Tailwind CSS'], role: 'Front-end Developer', code: '', demo: 'https://score-karate.vercel.app/', image: 'assets/images/projects/scoreKarate.jpg' },
            { id: 9, name: 'Manao Payroll', description: 'Designed and developed a payslip validation and distribution module to streamline employee management and tax declarations with an intuitive HR tool.', tools: ['PHP', 'JavaScript', 'CodeIgniter', 'Bootstrap', 'MySQL'], role: 'Full-Stack Developer', code: '', demo: 'https://manao.eu/fr/logiciels-paie', image: 'assets/images/projects/Manao Paie.jpg' },
            { id: 10, name: 'Manao Accounting', description: 'Built a multi-currency bookkeeping module with GED-based attachments, improved UX for accounting entries, and communication rights for tax filing.', tools: ['Angular.js', 'CodeIgniter', 'Bootstrap'], role: 'Full-Stack Developer', code: '', demo: 'https://manao.eu/fr/fiche-technique-comptabilite', image: 'assets/images/projects/comptabilite.jpg' }
        ],
        skillsData: ['Angular','Bootstrap','CSS','Docker','Firebase','Flutter','Git','HTML','Javascript','MySQL','Next JS','Photoshop','PostgreSQL','Premiere Pro','Python','React','Tailwind','Typescript','Vue','Wordpress'],
        experiences: [
            { id: 1, title: 'Deputy Development Director', company: 'MANAO Logiciels', duration: '(Jan 2024 - Present)', location: 'Madagascar', description: 'Leading dev teams, steering strategic projects, and driving tech innovation.' },
            { id: 2, title: 'IT Manager', company: 'AFAMITA (apprenticeship)', duration: '(Nov 2020 - Present)', location: 'Madagascar', description: 'Managing the information system, money transfer platforms, and technical support.' },
            { id: 3, title: 'Webmaster/Developer', company: 'AB Air Support (freelance)', duration: '(Mar 2025)', location: 'Remote', description: 'Built and deployed a professional B2B showcase page.' },
            { id: 4, title: 'IT Audit Support', company: '-', duration: '(Dec 2024)', location: 'Madagascar', description: 'Audited and assessed information systems.' },
            { id: 5, title: 'Webmaster/Developer', company: 'ExtraToo (freelance)', duration: '(Jul 2024 - Aug 2024)', location: 'Remote', description: 'Maintained and improved the Mactoo product showcase site.' },
            { id: 6, title: 'Development Project Lead', company: 'MANAO Logiciels', duration: '(Jul 2023 - Jan 2024)', location: 'Madagascar', description: 'Managed and coordinated software development projects.' },
            { id: 7, title: 'Full Stack Web Developer (PHP-JS)', company: 'MANAO Logiciels', duration: '(Apr 2022 - Jun 2023)', location: 'Madagascar', description: 'Built complete web applications with PHP and JavaScript.' },
            { id: 8, title: 'Significant Professional Internships', company: '-', duration: '', location: '', description: 'Technical and functional internships that built strong foundations in software development, information systems, and IT project management.' }
        ],
        educations: [
            { id: 1, title: 'Master 2', duration: '2021 - 2022', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Master in Computer Science, specialized in software development' },
            { id: 2, title: 'Bachelor', duration: '2019 - 2020', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Bachelor in Computer Science' }
        ],
        articlesData: [
            { id: 'article-1', title: 'Why so many IT projects fail before the first line of code', image: 'assets/images/articles/projets informatiques echouent.png', excerpt: 'Why so many IT projects fail before the first line of code', body: ['Many projects are weakened long before development starts.', 'Failure often begins during the initial framing phase.', 'Goals are vague, priorities unclear, and business constraints underestimated.', 'The real need is rarely expressed in an actionable way.', 'Technical choices come too early without a global vision or evolution scenarios.', 'Scope drifts without clear rules, creating conflicting expectations.', 'The project moves forward without stable direction.', 'Code becomes a constant attempt to adapt.', "It is not a skills issue but an upstream decision issue.", 'A well-framed project reduces risks before any code is written.'] },
            { id: 'article-2', title: "The real problem in a project is almost never technical", image: 'assets/images/articles/placeholder.svg', excerpt: "The real problem in a project is almost never technical", body: ["The real problem in a project is almost never technical"] },
            { id: 'article-3', title: 'What specifications systematically forget', image: 'assets/images/articles/placeholder.svg', excerpt: 'What specifications systematically forget', body: ['What specifications systematically forget'] },
            { id: 'article-4', title: 'Non-technical decisions that sink an IT project', image: 'assets/images/articles/placeholder.svg', excerpt: 'Non-technical decisions that sink an IT project', body: ['Non-technical decisions that sink an IT project'] },
            { id: 'article-5', title: 'Technical debt does not start in the code', image: 'assets/images/articles/placeholder.svg', excerpt: 'Technical debt does not start in the code', body: ['Technical debt does not start in the code'] },
            { id: 'article-6', title: 'PHP is not the problem, its usage is', image: 'assets/images/articles/placeholder.svg', excerpt: 'PHP is not the problem, its usage is', body: ['PHP is not the problem, its usage is'] },
            { id: 'article-7', title: 'JavaScript becomes dangerous when unstructured', image: 'assets/images/articles/placeholder.svg', excerpt: 'JavaScript becomes dangerous when unstructured', body: ['JavaScript becomes dangerous when unstructured'] },
            { id: 'article-8', title: 'Splitting front and back is not optional', image: 'assets/images/articles/placeholder.svg', excerpt: 'Splitting front and back is not optional', body: ['Splitting front and back is not optional'] },
            { id: 'article-9', title: 'Web security is often considered too late', image: 'assets/images/articles/placeholder.svg', excerpt: 'Web security is often considered too late', body: ['Web security is often considered too late'] },
            { id: 'article-10', title: 'A slow app costs more than you think', image: 'assets/images/articles/placeholder.svg', excerpt: 'A slow app costs more than you think', body: ['A slow app costs more than you think'] }
        ],
        ui: {
            nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', education: 'Education', articles: 'Articles', contact: 'Contact' },
            hero: {
                title: "Hello,<br>I'm <span class=\"text-gradient-pink\">Marjean Claude</span>,<br>a software engineer passionate about <span class=\"text-gradient-green\">technological innovation</span>.",
                description: 'Software Engineer and Full-Stack Developer, passionate about designing and optimizing digital solutions. With solid web experience, I love tackling new challenges to build innovative and performant products.',
                ctaPrimary: 'Contact me',
                ctaSecondary: 'Download resume'
            },
            sections: {
                about: 'About me',
                experience: 'Professional experience',
                skills: 'Technical skills',
                projects: 'Featured projects',
                education: 'Education',
                articles: 'Articles',
                contact: 'Get in touch'
            },
            about: { email: 'Email', phone: 'Phone', location: 'Location' },
            contact: {
                title: "Let's talk about your project",
                body: 'I am always open to new opportunities and collaborations. Feel free to reach out to discuss your projects.',
                form: { name: 'Full name', email: 'Email', subject: 'Subject', message: 'Message', submit: 'Send message' }
            },
            footer: {
                rights: 'All rights reserved.',
                built: 'Built with <i class="fas fa-heart"></i> using JavaScript and CSS'
            }
        }
    }
};

function getLanguageData(lang) {
    return portfolioData[AVAILABLE_LANGS.includes(lang) ? lang : 'fr'];
}

function getCurrentData() {
    return getLanguageData(currentLanguage);
}

function getCurrentLanguage() {
    return currentLanguage;
}

function setLanguage(lang) {
    currentLanguage = AVAILABLE_LANGS.includes(lang) ? lang : 'fr';
    localStorage.setItem('portfolio-lang', currentLanguage);
    applyLanguage();
}

function updateNavText(navLabels) {
    const mapping = [
        { selector: '.nav-link[href="#home"]', text: navLabels.home },
        { selector: '.nav-link[href="#about"]', text: navLabels.about },
        { selector: '.nav-link[href="#experience"]', text: navLabels.experience },
        { selector: '.nav-link[href="#skills"]', text: navLabels.skills },
        { selector: '.nav-link[href="#projects"]', text: navLabels.projects },
        { selector: '.nav-link[href="#education"]', text: navLabels.education },
        { selector: '.nav-link[href="#articles"]', text: navLabels.articles },
        { selector: '.nav-link[href="#contact"]', text: navLabels.contact }
    ];
    mapping.forEach(({ selector, text }) => {
        const el = document.querySelector(selector);
        if (el && text) el.textContent = text;
    });
}

function updateSectionTitles(sectionTexts) {
    const mapping = [
        { selector: '#about .section-title', text: sectionTexts.about },
        { selector: '#experience .section-title', text: sectionTexts.experience },
        { selector: '#skills .section-title', text: sectionTexts.skills },
        { selector: '#projects .section-title', text: sectionTexts.projects },
        { selector: '#education .section-title', text: sectionTexts.education },
        { selector: '#articles .section-title', text: sectionTexts.articles },
        { selector: '#contact .section-title', text: sectionTexts.contact }
    ];
    mapping.forEach(({ selector, text }) => {
        const container = document.querySelector(selector);
        if (container) {
            const number = container.querySelector('.title-number')?.outerHTML || '';
            container.innerHTML = `${number}${text ? `<span>${text}</span>` : ''}`;
        }
    });
}

function updateHeroText(hero, personal) {
    const title = document.querySelector('.hero-title');
    const desc = document.querySelector('.hero-description');
    const primaryCta = document.querySelector('.hero-actions .btn-primary');
    const secondaryCta = document.querySelector('.hero-actions .btn-secondary');
    if (title) title.innerHTML = hero.title;
    if (desc) desc.textContent = hero.description;
    if (primaryCta) primaryCta.lastChild.textContent = ` ${hero.ctaPrimary}`;
    if (secondaryCta) secondaryCta.lastChild.textContent = ` ${hero.ctaSecondary}`;
    const profileImg = document.querySelector('.profile-img');
    if (profileImg && personal?.name) profileImg.alt = personal.name;
}

function updateAboutSection(data, ui) {
    const paragraphs = data.about?.paragraphs || [];
    const aboutText = document.querySelector('#about .about-text');
    if (aboutText) {
        aboutText.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    }
    const infoItems = document.querySelectorAll('#about .info-item');
    const labels = [ui.about.email, ui.about.phone, ui.about.location];
    infoItems.forEach((item, idx) => {
        const label = labels[idx];
        if (!item || !label) return;
        const icon = item.querySelector('i')?.outerHTML || '';
        const value = [data.personalData.email, data.personalData.phone, data.personalData.address][idx];
        item.innerHTML = `${icon}<span>${value}</span>`;
    });
}

function updateContactSection(data, ui) {
    const contactTitle = document.querySelector('#contact h3');
    const contactBody = document.querySelector('#contact .contact-info > p');
    if (contactTitle) contactTitle.textContent = ui.contact.title;
    if (contactBody) contactBody.textContent = ui.contact.body;

    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems[0]) contactItems[0].querySelector('h4').textContent = ui.about.email;
    if (contactItems[0]) contactItems[0].querySelector('a').textContent = data.personalData.email;
    if (contactItems[1]) contactItems[1].querySelector('h4').textContent = ui.about.phone;
    if (contactItems[1]) contactItems[1].querySelector('a').textContent = data.personalData.phone;
    if (contactItems[2]) contactItems[2].querySelector('h4').textContent = ui.about.location;
    if (contactItems[2]) contactItems[2].querySelector('p').textContent = data.personalData.address;

    const form = document.getElementById('contactForm');
    if (form) {
        const { form: formTexts } = ui.contact;
        form.querySelector('label[for="name"]').textContent = formTexts.name;
        form.querySelector('label[for="email"]').textContent = formTexts.email;
        form.querySelector('label[for="subject"]').textContent = formTexts.subject;
        form.querySelector('label[for="message"]').textContent = formTexts.message;
        const submit = form.querySelector('button[type="submit"]');
        if (submit) submit.lastChild.textContent = ` ${formTexts.submit}`;
    }
}

function updateFooter(ui, personal) {
    const footerText = document.querySelector('.footer-text');
    if (!footerText) return;
    const year = new Date().getFullYear();
    footerText.innerHTML = `<p>&copy; ${year} ${personal.name}. ${ui.footer.rights}</p><p>${ui.footer.built}</p>`;
}

function refreshDataDrivenSections(data) {
    loadProjects(data.projectsData);
    loadArticles(data.articlesData);
    loadSkills(data.skillsData);
    loadExperiences(data.experiences);
    loadEducation(data.educations);
}

function applyLanguage(lang = currentLanguage) {
    currentLanguage = AVAILABLE_LANGS.includes(lang) ? lang : 'fr';
    localStorage.setItem('portfolio-lang', currentLanguage);
    document.documentElement.lang = currentLanguage;

    const data = getLanguageData(currentLanguage);
    const ui = data.ui;

    updateNavText(ui.nav);
    updateSectionTitles(ui.sections);
    updateHeroText(ui.hero, data.personalData);
    updateAboutSection(data, ui);
    updateContactSection(data, ui);
    updateFooter(ui, data.personalData);
    refreshDataDrivenSections(data);
    initScrollAnimations();

    // Mettre à jour les liens sociaux / contact
    const githubLinks = document.querySelectorAll('a[aria-label="GitHub"]');
    githubLinks.forEach(a => a.setAttribute('href', data.personalData.github));
    const linkedinLinks = document.querySelectorAll('a[aria-label="LinkedIn"]');
    linkedinLinks.forEach(a => a.setAttribute('href', data.personalData.linkedIn));
    const facebookLinks = document.querySelectorAll('a[aria-label="Facebook"]');
    facebookLinks.forEach(a => a.setAttribute('href', data.personalData.facebook));

    window.currentPortfolioData = data;
    highlightActiveLang();
}

function highlightActiveLang() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
}

function initLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    if (!switcher) return;
    switcher.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (!btn) return;
        const lang = btn.dataset.lang;
        if (lang !== currentLanguage) {
            setLanguage(lang);
        }
    });
    highlightActiveLang();
}
