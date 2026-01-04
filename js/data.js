/**
 * Données du portfolio
 * Toutes les informations personnelles, projets, compétences, expériences, etc.
 */

// Données personnelles
const personalData = {
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
    stackOverflow: '',
    devUsername: "C109",
    resume: "https://drive.google.com/file/d/1qeqaymm_tZzq4mII60nRlG7_LoIM63df/view"
};

// Projets
const projectsData = [
    {
        id: 1,
        name: 'Texteur',
        description: "Conception et pilotage de l’équipe pour le développement d’une application collaborative en temps réel, avec une architecture modulaire orientée performance, scalabilité et sécurité.",
        tools: ['Vue.js 3', 'CodeIgniter', 'PHP Ratchet', 'WebSocket', 'Nginx'],
        role: 'Développeur Full-Stack / Lead Technique',
        code: '',
        demo: 'https://manao.eu/fr/fiche-technique-texteur',
        image: 'assets/images/logo-log-texteur.png'
    },
    {
        id: 2,
        name: 'AB Air Support – Page Vitrine B2B',
        description: "Réalisation et déploiement d'une page vitrine professionnelle pour AB Air Support, présentant ses services de courtage, conseil et gestion aéronautique B2B de manière claire et structurée.",
        tools: ['Wordpress', 'Elementor', 'PHP', 'Javascript'],
        role: 'Webmaster',
        code: '',
        demo: 'https://abairsupport.com/',
        image: 'assets/images/projects/AB Air Support.jpg'
    },
    {
        id: 3,
        name: 'Site vitrine d\'Extratoo pour la vente de produits Mactoo',
        description: "Maintenance du site vitrine de Mactoo, le site présente les différents produits et abonnements proposés par Extratoo, avec une navigation intuitive et des sections claires pour faciliter le parcours client et la prise de contact.",
        tools: ['Wordpress', 'Elementor', 'PHP', 'Javascript'],
        role: 'Webmaster',
        code: '',
        demo: 'https://www.mactoo.fr/',
        image: 'assets/images/projects/mactoo.png'
    },
    {
        id: 4,
        name: 'Licences utilisateurs',
        description: "Conception et développement d'un module destiné aux administrateurs sur une plateforme interne, permettant de gérer les droits d'accès des utilisateurs sur différents logiciels du système. Réalisation également d'une API dédiée, afin que les autres applications de l'écosystème puissent interagir de manière sécurisée avec ce système de gestion des autorisations.",
        tools: ['CodeIgniter', 'JQuery', 'Bootstrap'],
        role: 'Développeur full-stack',
        code: '',
        demo: 'https://manao.eu/fr/logiciels-plateforme',
        image: 'assets/images/projects/Licences utilisateur.jpg'
    },
    {
        id: 5,
        name: 'API SMS',
        description: "Développement dans le cadre de la transition d'un système interne de gestion des SMS, avec le remplacement d'une API SOAP existante par une API REST plus moderne. Cela a permis de garantir la continuité des opérations tout en améliorant l'interopérabilité avec des services tiers de messagerie.",
        tools: ['Laravel', 'Webhoock', 'allmysms'],
        role: 'Développeur backend',
        code: '',
        demo: 'https://www.allmysms.com/',
        image: 'assets/images/projects/api-sms.jpg'
    },
    {
        id: 6,
        name: 'Manao Gescom',
        description: "Participation au développement d'un module de gestion des documents commerciaux, plus précisément sur le volet livraison. Ce module permet de créer, consulter, filtrer et exporter des bons de livraison liés aux clients, en s'intégrant dans le processus global de vente (devis, commandes, factures). L'objectif principal était d'assurer la traçabilité, la fiabilité des livraisons et leur intégration fluide dans le cycle commercial de l'entreprise.",
        tools: ['CodeIgniter', 'Javascript ES6', 'Bootstrap'],
        role: 'Développeur full-stack',
        code: '',
        demo: 'https://manao.eu/fr/fiche-technique-gescom',
        image: 'assets/images/projects/gescom.png'
    },
    {
        id: 7,
        name: 'Quiz Marvel',
        description: "Développement d'un site de quiz interactif en React.js destiné aux fans de l'univers Marvel, avec questions à choix multiples, résultats commentés par les héros et système de classement dynamique selon les performances. Utilisation des Hooks pour la gestion de l'état et de la logique applicative.",
        tools: ['React.js', 'Javascript ES6', 'Firebase'],
        role: 'Développeur front-end',
        code: '',
        demo: 'https://marvel-quiz-b896b.firebaseapp.com/',
        image: 'assets/images/projects/marvel.jpg'
    },
    {
        id: 8,
        name: 'Manao Paie (Paie Mada)',
        description: "Conception et développement d'un module de validation et diffusion des bulletins de paie, permettant une gestion efficace des employés et des déclarations fiscales, avec un outil intuitif pour les responsables RH.",
        tools: ['PHP', 'JavaScript', 'CodeIgniter', 'Bootstrap', 'MySQL'],
        role: 'Développeur Full-Stack',
        code: '',
        demo: 'https://manao.eu/fr/logiciels-paie',
        image: 'assets/images/projects/Manao Paie.jpg'
    },
    {
        id: 9,
        name: 'Manao Comptabilité',
        description: "Conception et développement d'un module de saisie comptable multi-devises avec gestion intégrée des pièces justificatives via GED. Optimisation de l'expérience utilisateur pour les écritures comptables, amélioration du suivi client, et mise en place d'un système de droits de communication pour faciliter la déclaration fiscale.",
        tools: ['Angular.js', 'CodeIgniter', 'Bootstrap'],
        role: 'Développeur full-stack',
        code: '',
        demo: 'https://manao.eu/fr/fiche-technique-comptabilite',
        image: 'assets/images/projects/comptabilite.jpg'
    }
];

// Compétences
const skillsData = [
    'Angular',
    'Bootstrap',
    'CSS',
    'Docker',
    'Firebase',
    'Flutter',
    'Git',
    'HTML',
    'Javascript',
    'MySQL',
    'Next JS',
    'Photoshop',
    'PostgreSQL',
    'Premiere Pro',
    'Python',
    'React',
    'Tailwind',
    'Typescript',
    'Vue',
    'Wordpress'
];

// Expériences professionnelles
const experiences = [
    {
        id: 1,
        title: 'Directeur Adjoint au Développement',
        company: "MANAO Logiciels",
        duration: "(Jan 2024 - Présent)",
        location: "Madagascar",
        description: "Direction et coordination des équipes de développement, gestion de projets stratégiques et innovation technologique."
    },
    {
        id: 2,
        title: "Responsable Informatique",
        company: "AFAMITA (alternance)",
        duration: "(Nov 2020 - Présent)",
        location: "Madagascar",
        description: "Gestion du système d’information, des plateformes de transfert monétaire et du support technique."
    },
    {
        id: 3,
        title: "Webmaster/Développeur",
        company: "AB Air Support (freelance)",
        duration: "(Mars 2025)",
        location: "Remote",
        description: "Développement et déploiement d'une page vitrine professionnelle B2B."
    },
    {
        id: 4,
        title: "Auditeur en assistance du SI",
        company: "-",
        duration: "(Décembre 2024)",
        location: "Madagascar",
        description: "Audit et évaluation des systèmes d'information."
    },
    {
        id: 5,
        title: "Webmaster/Développeur",
        company: "ExtraToo (freelance)",
        duration: "(Juillet 2024 - Août 2024)",
        location: "Remote",
        description: "Maintenance et amélioration du site vitrine de produits Mactoo."
    },
    {
        id: 6,
        title: "Chef de projet en développement",
        company: "MANAO Logiciels",
        duration: "(Juillet 2023 - Janvier 2024)",
        location: "Madagascar",
        description: "Gestion et coordination de projets de développement logiciel."
    },
    {
        id: 7,
        title: "Développeur Web Full Stack (PHP-JS)",
        company: "MANAO Logiciels",
        duration: "(Avril 2022 - Juin 2023)",
        location: "Madagascar",
        description: "Développement d'applications web complètes avec PHP et JavaScript."
    },
    {
        id: 8,
        title: "Stages professionnels significatifs",
        company: "-",
        duration: "",
        location: "",
        description: "Stages techniques et fonctionnels ayant permis l’acquisition de solides bases en développement logiciel, systèmes d’information et gestion de projets IT."
    }
];

// Formation
const educations = [
    {
        id: 1,
        title: "Master 2",
        duration: "2021 - 2022",
        institution: "École Nationale D'Informatique",
        location: "Madagascar",
        description: "Master en Informatique avec spécialisation en développement logiciel"
    },
    {
        id: 2,
        title: "Licence",
        duration: "2019 - 2020",
        institution: "École Nationale D'Informatique",
        location: "Madagascar",
        description: "Licence en Informatique"
    }
];
