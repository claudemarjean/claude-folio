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
            resume: 'https://drive.google.com/file/d/1K-j9cRFQZBtzVseUs8rmpNELJz-HEBl5/view'
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
            { id: 1, title: 'Directeur du développement', company: 'MANAO Logiciels', duration: '(Jan 2026 - Présent)', location: 'Madagascar', description: 'Pilotage de la stratégie de développement, arbitrage technologique, supervision des architectures et accompagnement des équipes projets et techniques.' },
            { id: 2, title: 'Directeur Adjoint au Développement', company: 'MANAO Logiciels', duration: '(Jan 2024 - Déc 2025)', location: 'Madagascar', description: 'Direction et coordination des équipes de développement, gestion de projets stratégiques et innovation technologique.' },
            { id: 3, title: 'Responsable Informatique', company: 'AFAMITA (alternance)', duration: '(Nov 2020 - Présent)', location: 'Madagascar', description: "Gestion du système d’information, des plateformes de transfert monétaire et du support technique." },
            { id: 4, title: 'Webmaster/Développeur', company: 'AB Air Support (freelance)', duration: '(Mars 2025)', location: 'Remote', description: "Développement et déploiement d'une page vitrine professionnelle B2B." },
            { id: 5, title: 'Auditeur en assistance du SI', company: '-', duration: '(Décembre 2024)', location: 'Madagascar', description: "Audit et évaluation des systèmes d'information." },
            { id: 6, title: 'Webmaster/Développeur', company: 'ExtraToo (freelance)', duration: '(Juillet 2024 - Août 2024)', location: 'Remote', description: 'Maintenance et amélioration du site vitrine de produits Mactoo.' },
            { id: 7, title: 'Chef de projet en développement', company: 'MANAO Logiciels', duration: '(Juillet 2023 - Janvier 2024)', location: 'Madagascar', description: 'Gestion et coordination de projets de développement logiciel.' },
            { id: 8, title: 'Développeur Web Full Stack (PHP-JS)', company: 'MANAO Logiciels', duration: '(Avril 2022 - Juin 2023)', location: 'Madagascar', description: "Développement d'applications web complètes avec PHP et JavaScript." },
            { id: 9, title: 'Stages professionnels significatifs', company: '-', duration: '', location: '', description: "Stages techniques et fonctionnels ayant permis l’acquisition de solides bases en développement logiciel, systèmes d’information et gestion de projets IT." }
        ],
        educations: [
            { id: 1, title: 'Master 2', duration: '2021 - 2022', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Master en Informatique avec spécialisation en développement logiciel' },
            { id: 2, title: 'Licence', duration: '2019 - 2020', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Licence en Informatique' }
        ],
        articlesData: [
            {
                id: 'article-1',
                title: "Pourquoi tant de projets informatiques échouent avant même la première ligne de code",
                image: 'assets/images/articles/projets informatiques echouent.png',
                excerpt: "Pourquoi tant de projets informatiques échouent avant même la première ligne de code",
                category: 'Gouvernance produit',
                date: '2025-12-10',
                body: ['De nombreux projets sont fragilisés bien avant le démarrage du développement.', 'L’échec prend souvent racine dans la phase de cadrage initial.', 'Les objectifs sont imprécis, les priorités mal hiérarchisées et les contraintes métier sous-estimées.', 'Le besoin réel est rarement formalisé de manière exploitable.', 'Les choix techniques arrivent trop tôt, sans vision globale ni scénario d’évolution.', 'Le périmètre évolue sans règles claires, créant des attentes contradictoires.', 'Le projet progresse, mais sans direction stable.', 'Le code devient alors une tentative d’adaptation permanente.', 'Ce n’est pas un problème de compétences techniques, mais de décisions amont.', 'Un projet bien cadré réduit les risques avant même d’écrire la première ligne de code.']
            },
            {
                id: 'article-2',
                title: 'Ce qui fait réellement démarrer un projet IT sur de bonnes bases',
                image: 'assets/images/articles/demarrer-un-projet-ITsur-de-bonnes-bases.png',
                excerpt: 'Ce qui fait réellement démarrer un projet IT sur de bonnes bases',
                category: 'Pilotage projet',
                date: '2026-01-13',
                body: [
                    'Un projet IT démarre avant tout par une compréhension partagée.',
                    'Tout commence par une définition claire du problème à résoudre.',
                    'Les objectifs doivent être compréhensibles, mesurables et alignés entre les parties prenantes.',
                    'Le besoin métier gagne à être traduit en exigences concrètes et priorisées.',
                    'Un démarrage solide repose sur un périmètre défini et maîtrisé.',
                    'Les contraintes doivent être identifiées dès le départ.',
                    'Les rôles et responsabilités doivent être clairement établis.',
                    'Les décisions efficaces s’appuient sur des éléments factuels.',
                    'La vision produit guide les choix techniques.',
                    'La technologie intervient comme un outil au service de cette vision.',
                    'Un cadrage structuré facilite les arbitrages et sécurise l’exécution.',
                    'Il améliore durablement la qualité du projet.'
                ]
            },
            {
                id: 'article-3',
                title: 'Ce que les cahiers des charges devraient toujours contenir',
                image: 'assets/images/articles/Ce que les cahiers des charges devraient toujours contenir.png',
                excerpt: 'Ce que les cahiers des charges devraient toujours contenir',
                category: 'Cadrage',
                date: '2026-01-20',
                body: [
                    'Un cahier des charges sert avant tout à créer une compréhension commune.',
                    '- Dans de nombreux projets, il se limite à une liste de fonctionnalités.',
                    '- Les objectifs réels, les contraintes et les priorités restent implicites.',
                    '- Résultat : chacun interprète le document selon son propre point de vue.',
                    '',
                    'Un bon cahier des charges commence par le problème à résoudre, pas par la solution.',
                    '- Il précise les objectifs attendus, les indicateurs de succès et les contraintes métier.',
                    '- Il définit clairement le périmètre, les hypothèses et les dépendances.',
                    "- Les règles d'évolution, de validation et d'arbitrage y ont aussi leur place.",
                    '',
                    'La technique peut alors être choisie en connaissance de cause.',
                    '- Le projet gagne en lisibilité, en cohérence et en prévisibilité.',
                    "- Un cahier des charges incomplet crée de l'incertitude dès le départ.",
                    '- Un cahier des charges structuré devient un véritable outil de pilotage.'
                ]
            },
            {
                id: 'article-4',
                title: 'Les décisions non techniques qui influencent le succès d\'un projet',
                image: 'assets/images/articles/Décisions_cles_hors_technique.png',
                excerpt: 'Les décisions non techniques qui influencent le succès d\'un projet',
                category: 'Gouvernance produit',
                date: '2026-01-27',
                body: [
                    'La réussite d\'un projet ne dépend pas uniquement de la technologie.',
                    '',
                    '- Sur le terrain, les écarts apparaissent souvent avant même les choix techniques.',
                    '- Les priorités sont parfois floues, les responsabilités mal définies et les arbitrages retardés.',
                    '- Les contraintes métier, budgétaires ou organisationnelles sont sous-estimées.',
                    '',
                    '- Un projet progresse lorsque les objectifs sont clairs et partagés.',
                    '- Lorsque les rôles sont définis et les décisions assumées.',
                    '- Lorsque le périmètre est maîtrisé et les changements encadrés.',
                    '- Lorsque la communication entre métiers et équipes techniques est continue.',
                    '',
                    '- La technique s\'adapte ensuite à ce cadre.',
                    '- Sans ces décisions amont, même la meilleure architecture peine à tenir.',
                    '',
                    '- Le succès d\'un projet repose d\'abord sur la qualité des décisions non techniques.',
                    '',
                    '- Selon vous, laquelle de ces décisions est la plus déterminante dans un projet IT ?'
                ]
            },
            {
                id: 'article-5',
                title: 'Comprendre la dette technique avant qu\'elle ne devienne un problème',
                image: 'assets/images/articles/dette-technique.png',
                excerpt: 'Comprendre la dette technique avant qu\'elle ne devienne un problème',
                category: 'Qualité logicielle',
                date: '2026-02-02',
                body: [
                    'La dette technique n\'apparaît jamais par hasard.',
                    '',
                    'Elle s\'installe progressivement, souvent sous l\'effet de contraintes de délai ou de budget.',
                    'Des choix rapides, des compromis temporaires et des contournements s\'accumulent.',
                    'À court terme, le projet avance. À long terme, la complexité augmente.',
                    '',
                    'La dette technique n\'est pas uniquement du code mal écrit.',
                    'Elle concerne aussi l\'architecture, la documentation, les tests et les décisions repoussées.',
                    'Chaque ajout devient plus coûteux, chaque correction plus risquée.',
                    '',
                    'Comprendre cette dette permet de la piloter.',
                    'Identifier ce qui peut être différé et ce qui doit être traité rapidement est essentiel.',
                    'Le refactoring devient alors un investissement, pas une perte de temps.',
                    '',
                    'Ignorer la dette technique finit toujours par ralentir le projet.',
                    'La maîtriser permet de préserver la qualité et la capacité d\'évolution.'
                ]
            },
            {
                id: 'article-6',
                title: 'Front-end moderne : performance, UX et frameworks orientés production',
                image: 'assets/images/articles/Frontend-Moderne.jpg',
                excerpt: 'Front-end moderne : performance, UX et frameworks orientés production',
                category: 'Performance front-end',
                date: '2026-02-10',
                body: [
                    'Le front-end ne se limite plus à afficher une interface.',
                    '',
                    'Sur de nombreux projets, les difficultés apparaissent après la mise en ligne.',
                    'Temps de chargement instables, interactions peu fluides, dette JavaScript croissante.',
                    'La complexité ne vient pas du design, mais des choix techniques initiaux.',
                    '',
                    'Les frameworks modernes répondent à ces enjeux en plaçant la production au centre.',
                    'Rendu côté serveur, génération statique, gestion fine de l\'hydratation.',
                    'Moins de JavaScript inutile, plus de performance perçue.',
                    'Une meilleure maîtrise des Core Web Vitals et de l\'expérience utilisateur réelle.',
                    '',
                    'Un front-end efficace s\'appuie sur des décisions mesurables.',
                    'Choisir un framework, c\'est d\'abord choisir un mode de rendu et une stratégie de performance.',
                    'L\'UX devient alors une conséquence directe de l\'architecture.',
                    '',
                    'Aujourd\'hui, le front-end est un sujet d\'ingénierie autant que d\'interface.',
                    'Les projets durables sont ceux qui traitent la performance comme une exigence de départ.'
                ]
            },
            {
                id: 'article-7',
                title: 'Backend moderne : robustesse, scalabilité et architecture orientée production',
                image: 'assets/images/articles/Backend-moderne.jpg',
                excerpt: 'Backend moderne : robustesse, scalabilité et architecture orientée production',
                category: 'Architecture backend',
                date: '2026-02-17',
                body: [
                    'Un backend efficace ne se juge pas à la complexité de son architecture.',
                    '',
                    'Sur le terrain, beaucoup d\'applications fonctionnent en environnement de test, mais montrent leurs limites en production.',
                    'Temps de réponse irréguliers, endpoints mal structurés, montée en charge imprévue.',
                    'La difficulté ne vient pas du langage choisi, mais de la manière dont le système a été pensé.',
                    '',
                    'Un backend moderne repose d\'abord sur des API claires et cohérentes.',
                    'Contrats bien définis, gestion explicite des erreurs, versionnement maîtrisé.',
                    'La scalabilité n\'est pas un ajout tardif, mais une contrainte intégrée dès la conception.',
                    '',
                    'L\'architecture doit rester lisible.',
                    'Monolithe modulaire, microservices ou serverless : le choix dépend du contexte, pas de la tendance.',
                    'Ce qui compte, c\'est la capacité à observer, mesurer et ajuster en production.',
                    '',
                    'Un backend orienté production privilégie la robustesse, la performance mesurable et la simplicité maîtrisée.',
                    'La sophistication inutile devient rapidement une dette.',
                    '',
                    'Un système backend réussi est celui qui reste stable lorsque l\'usage réel commence.'
                ]            },
            {
                id: 'article-8',
                title: 'De la page statique aux architectures hybrides : 30 ans d\'évolution du front-end et du back-end',
                image: 'assets/images/articles/Back-front historique.jpg',
                excerpt: 'De la page statique aux architectures hybrides : 30 ans d\'évolution du front-end et du back-end',
                category: 'Histoire du web',
                date: '2026-02-24',
                body: [
                    'La séparation entre front-end et back-end n\'a pas été une décision immédiate.',
                    'Elle s\'est construite progressivement, au rythme des avancées technologiques du web.',
                    '',
                    'En 1989–1991, Tim Berners-Lee conçoit le World Wide Web au CERN.',
                    'Le modèle est simple : un serveur envoie un document HTML, le navigateur l\'affiche.',
                    'L\'architecture est centralisée, sans logique côté client.',
                    '',
                    'Milieu des années 1990 : le web devient dynamique.',
                    '- PHP apparaît en 1995',
                    '- ASP est lancé en 1996',
                    '- Java (1995) s\'impose côté serveur',
                    '',
                    'Les pages sont désormais générées à la volée à partir de bases de données.',
                    'Le back-end structure l\'application. Le front-end reste essentiellement déclaratif.',
                    '',
                    'Années 2005–2010 : rupture majeure.',
                    'L\'AJAX (popularisé vers 2005) permet des échanges asynchrones.',
                    'Puis émergent les frameworks JavaScript :',
                    '- AngularJS en 2010',
                    '- React en 2013',
                    '- Vue.js en 2014',
                    'Le navigateur devient une plateforme d\'exécution.',
                    'Les applications front-end gèrent l\'état, les routes, les interactions complexes.',
                    'Les API REST se généralisent.',
                    'La séparation front-end / back-end devient une stratégie d\'architecture.',
                    '',
                    'À partir de 2016–2020, nouvelle évolution.',
                    'Les limites des SPA lourdes apparaissent : performance, SEO, dette JavaScript.',
                    'Des frameworks hybrides émergent :',
                    '- Next.js (2016)',
                    '- Remix (2020)',
                    '- Astro (2021)',
                    'Ils combinent rendu serveur, génération statique et hydratation partielle.',
                    'La séparation ne disparaît pas, mais elle devient plus fine et mieux orchestrée.',
                    '',
                    'En trois décennies, l\'architecture web est passée :',
                    '- du serveur centralisé',
                    '- à la séparation stricte client / API',
                    '- puis à des modèles hybrides orientés performance et production',
                    '',
                    'L\'histoire montre une constante :',
                    'les choix d\'architecture évoluent pour répondre aux contraintes réelles d\'usage.',
                    '',
                    'Comprendre cette trajectoire permet de concevoir des systèmes cohérents aujourd\'hui,',
                    'non pas en suivant une tendance, mais en s\'appuyant sur l\'expérience accumulée du web.'
                ]
            },
            {
                id: 'article-9',
                title: 'Intégrer la sécurité dès la conception d\'une application',
                image: 'assets/images/articles/Sécurité dès la conception.png',
                excerpt: 'Intégrer la sécurité dès la conception d\'une application',
                category: 'Sécurité',
                date: '2026-03-03',
                body: [
                    '« Chef, la nouvelle application est prête ! Elle va hyper vite, le design est incroyable, on va tout casser !',
                    '— Super ! Et pour la sécurité, on est bons ?',
                    '— Ah... la sécurité... On va dire qu\'on rajoutera les freins en roulant, au prochain sprint ! »',
                    '',
                    'Ça vous fait sourire ? Pourtant, c\'est encore une réalité trop fréquente.',
                    '',
                    'La sécurité ne devrait jamais être une correction de fin de projet.',
                    '',
                    'Sur le terrain, elle est encore trop souvent traitée après le développement.',
                    'Audit tardif, correctifs urgents, dette de sécurité accumulée.',
                    'Le coût devient alors technique, financier et réputationnel.',
                    '',
                    'Intégrer la sécurité dès la conception change la trajectoire.',
                    'Cela commence par une analyse des risques adaptée au contexte métier.',
                    'Définir les flux sensibles, les niveaux d’accès, les surfaces d’exposition.',
                    'Appliquer le principe du moindre privilège et segmenter les responsabilités.',
                    '',
                    'La sécurité n\'est pas uniquement un pare-feu ou un outil.',
                    'Elle se matérialise dans l\'architecture :',
                    'gestion des identités, validation des entrées, chiffrement, journalisation, supervision.',
                    '',
                    'Plus elle est intégrée tôt, plus elle est simple et cohérente.',
                    'Ajoutée tardivement, elle devient complexe et fragile.',
                    '',
                    'Une application sécurisée n\'est pas celle qui n\'a jamais été attaquée.',
                    'C\'est celle qui a été pensée pour résister, détecter et réagir.',
                    '',
                    'La sécurité est une décision d\'architecture, pas un module optionnel.'
                ]
            },
            {
                id: 'article-10',
                title: 'Monolithe ou microservices : choisir selon le contexte',
                image: 'assets/images/articles/Monolithe ou microservices  choisir selon le contexte.png',
                excerpt: 'Monolithe ou microservices : choisir selon le contexte',
                category: 'Architecture logicielle',
                date: '2026-03-10',
                body: [
                    '"On part sur des microservices, c\'est plus moderne !"',
                    '6 mois plus tard : "Quelqu\'un sait pourquoi le service A n\'arrive plus à parler au service B, et où est passé mon log de transaction ?"',
                    'Le mimétisme architectural fait des ravages. Il est temps d\'en parler.',
                    '',
                    'Le débat monolithe contre microservices est souvent mal posé.',
                    '',
                    'Sur le terrain, beaucoup de projets choisissent une architecture sans tenir compte du contexte réel.',
                    'Le mot microservices arrive souvent avant l\'analyse des besoins.',
                    '',
                    'Un monolithe bien structuré est souvent pertinent quand :',
                    '- une équipe de 2 à 6 développeurs',
                    '- un produit encore en construction',
                    '- des évolutions fonctionnelles fréquentes',
                    '- une exploitation simple à assurer',
                    'Résultat : moins d\'infrastructure, moins d\'opérations, plus de vitesse.',
                    '',
                    'Les microservices deviennent pertinents dans d\'autres situations :',
                    '- plus de 15 à 20 développeurs',
                    '- plusieurs équipes autonomes',
                    '- des domaines métier clairement séparés',
                    '- des besoins de montée en charge indépendants',
                    'Mais ils introduisent des coûts réels :',
                    'déploiements multiples, supervision distribuée, gestion des incidents plus complexe.',
                    '',
                    'Le choix dépend de facteurs concrets.',
                    'Taille de l\'équipe, maturité technique, fréquence des changements, contraintes métier.',
                    'Une architecture efficace est celle que l\'organisation peut réellement maîtriser.',
                    '',
                    'Commencer simple n\'est pas une faiblesse.',
                    'Évoluer vers plus de découplage peut être une décision stratégique, pas une obligation.',
                    '',
                    'L\'architecture doit servir le produit, pas l\'inverse.'
                ]
            }
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
            resume: 'https://drive.google.com/file/d/1K-j9cRFQZBtzVseUs8rmpNELJz-HEBl5/view'
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
            { id: 1, title: 'Director of Development', company: 'MANAO Logiciels', duration: '(Jan 2026 - Present)', location: 'Madagascar', description: 'Steers the development strategy, drives architectural decisions, ensures scalability, security, and performance, and mentors product and engineering teams.' },
            { id: 2, title: 'Deputy Development Director', company: 'MANAO Logiciels', duration: '(Jan 2024 - Dec 2025)', location: 'Madagascar', description: 'Led dev teams, drove strategic projects, and innovation initiatives.' },
            { id: 3, title: 'IT Manager', company: 'AFAMITA (apprenticeship)', duration: '(Nov 2020 - Present)', location: 'Madagascar', description: 'Managing the information system, money transfer platforms, and technical support.' },
            { id: 4, title: 'Webmaster/Developer', company: 'AB Air Support (freelance)', duration: '(Mar 2025)', location: 'Remote', description: 'Built and deployed a professional B2B showcase page.' },
            { id: 5, title: 'IT Audit Support', company: '-', duration: '(Dec 2024)', location: 'Madagascar', description: 'Audited and assessed information systems.' },
            { id: 6, title: 'Webmaster/Developer', company: 'ExtraToo (freelance)', duration: '(Jul 2024 - Aug 2024)', location: 'Remote', description: 'Maintained and improved the Mactoo product showcase site.' },
            { id: 7, title: 'Development Project Lead', company: 'MANAO Logiciels', duration: '(Jul 2023 - Jan 2024)', location: 'Madagascar', description: 'Managed and coordinated software development projects.' },
            { id: 8, title: 'Full Stack Web Developer (PHP-JS)', company: 'MANAO Logiciels', duration: '(Apr 2022 - Jun 2023)', location: 'Madagascar', description: 'Built complete web applications with PHP and JavaScript.' },
            { id: 9, title: 'Significant Professional Internships', company: '-', duration: '', location: '', description: 'Technical and functional internships that built strong foundations in software development, information systems, and IT project management.' }
        ],
        educations: [
            { id: 1, title: 'Master 2', duration: '2021 - 2022', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Master in Computer Science, specialized in software development' },
            { id: 2, title: 'Bachelor', duration: '2019 - 2020', institution: "École Nationale D'Informatique", location: 'Madagascar', description: 'Bachelor in Computer Science' }
        ],
        articlesData: [
            {
                id: 'article-1',
                title: 'Why so many IT projects fail before the first line of code',
                image: 'assets/images/articles/projets informatiques echouent.png',
                excerpt: 'Why so many IT projects fail before the first line of code',
                category: 'Product governance',
                date: '2025-12-10',
                body: ['Many projects are weakened long before development starts.', 'Failure often begins during the initial framing phase.', 'Goals are vague, priorities unclear, and business constraints underestimated.', 'The real need is rarely expressed in an actionable way.', 'Technical choices come too early without a global vision or evolution scenarios.', 'Scope drifts without clear rules, creating conflicting expectations.', 'The project moves forward without stable direction.', 'Code becomes a constant attempt to adapt.', "It is not a skills issue but an upstream decision issue.", 'A well-framed project reduces risks before any code is written.']
            },
            {
                id: 'article-2',
                title: 'What really gets an IT project started on the right foot',
                image: 'assets/images/articles/demarrer-un-projet-ITsur-de-bonnes-bases.png',
                excerpt: 'What really gets an IT project started on the right foot',
                category: 'Project leadership',
                date: '2026-01-13',
                body: [
                    'An IT project starts first and foremost with a shared understanding.',
                    'Everything begins with a clear definition of the problem to solve.',
                    'Objectives must be understandable, measurable, and aligned among stakeholders.',
                    'Business needs should be translated into concrete, prioritized requirements.',
                    'A solid start relies on a defined and controlled scope.',
                    'Constraints must be identified from the outset.',
                    'Roles and responsibilities must be clearly established.',
                    'Effective decisions are based on factual elements.',
                    'Product vision guides technical choices.',
                    'Technology serves as a tool in support of this vision.',
                    'Structured framing facilitates arbitration and secures execution.',
                    'It sustainably improves project quality.'
                ]
            },
            {
                id: 'article-3',
                title: 'What specifications should always contain',
                image: 'assets/images/articles/Ce que les cahiers des charges devraient toujours contenir.png',
                excerpt: 'What specifications should always contain',
                category: 'Scoping',
                date: '2026-01-20',
                body: [
                    'A specification document serves primarily to create a common understanding.',
                    '- In many projects, it is limited to a list of features.',
                    '- Real objectives, constraints, and priorities remain implicit.',
                    '- Result: everyone interprets the document from their own perspective.',
                    '',
                    'A good specification starts with the problem to solve, not the solution.',
                    '- It specifies expected objectives, success indicators, and business constraints.',
                    '- It clearly defines the scope, assumptions, and dependencies.',
                    "- Evolution, validation, and arbitration rules also have their place.",
                    '',
                    'Technology can then be chosen with full knowledge.',
                    '- The project gains clarity, consistency, and predictability.',
                    '- An incomplete specification creates uncertainty from the start.',
                    '- A structured specification becomes a real management tool.'
                ]
            },
            {
                id: 'article-4',
                title: 'Non-technical decisions that influence project success',
                image: 'assets/images/articles/Décisions_cles_hors_technique.png',
                excerpt: 'Non-technical decisions that influence project success',
                category: 'Product governance',
                date: '2026-01-27',
                body: [
                    'Project success does not depend solely on technology.',
                    '',
                    '- In the field, gaps often appear even before technical choices.',
                    '- Priorities are sometimes unclear, responsibilities poorly defined, and arbitrations delayed.',
                    '- Business, budgetary, or organizational constraints are underestimated.',
                    '',
                    '- A project progresses when objectives are clear and shared.',
                    '- When roles are defined and decisions are owned.',
                    '- When scope is controlled and changes are managed.',
                    '- When communication between business and technical teams is continuous.',
                    '',
                    '- Technology then adapts to this framework.',
                    '- Without these upstream decisions, even the best architecture struggles to hold.',
                    '',
                    '- Project success is based first on the quality of non-technical decisions.',
                    '',
                    '- In your opinion, which of these decisions is the most critical in an IT project?'
                ]
            },
            {
                id: 'article-5',
                title: 'Understanding technical debt before it becomes a problem',
                image: 'assets/images/articles/dette-technique.png',
                excerpt: 'Understanding technical debt before it becomes a problem',
                category: 'Software quality',
                date: '2026-02-02',
                body: [
                    'Technical debt never appears by chance.',
                    '',
                    'It builds up gradually, often under the pressure of time or budget constraints.',
                    'Quick decisions, temporary compromises, and workarounds accumulate.',
                    'In the short term, the project moves forward. In the long term, complexity increases.',
                    '',
                    'Technical debt is not just poorly written code.',
                    'It also concerns architecture, documentation, tests, and postponed decisions.',
                    'Each addition becomes more expensive, each fix more risky.',
                    '',
                    'Understanding this debt allows you to manage it.',
                    'Identifying what can be deferred and what must be addressed quickly is essential.',
                    'Refactoring then becomes an investment, not a waste of time.',
                    '',
                    'Ignoring technical debt always ends up slowing down the project.',
                    'Mastering it helps preserve quality and the capacity for evolution.'
                ]
            },
            {
                id: 'article-6',
                title: 'Modern front-end: performance, UX and production-oriented frameworks',
                image: 'assets/images/articles/Frontend-Moderne.jpg',
                excerpt: 'Modern front-end: performance, UX and production-oriented frameworks',
                category: 'Front-end performance',
                date: '2026-02-10',
                body: [
                    'Front-end is no longer just about displaying an interface.',
                    '',
                    'On many projects, difficulties appear after going live.',
                    'Unstable loading times, sluggish interactions, growing JavaScript debt.',
                    'Complexity does not come from design, but from initial technical choices.',
                    '',
                    'Modern frameworks address these challenges by placing production at the center.',
                    'Server-side rendering, static generation, fine-grained hydration management.',
                    'Less unnecessary JavaScript, more perceived performance.',
                    'Better control of Core Web Vitals and real user experience.',
                    '',
                    'An effective front-end relies on measurable decisions.',
                    'Choosing a framework means first choosing a rendering mode and a performance strategy.',
                    'UX then becomes a direct consequence of the architecture.',
                    '',
                    'Today, front-end is as much an engineering topic as it is an interface one.',
                    'Sustainable projects are those that treat performance as a starting requirement.'
                ]
            },
            {
                id: 'article-7',
                title: 'Modern backend: robustness, scalability and production-oriented architecture',
                image: 'assets/images/articles/Backend-moderne.jpg',
                excerpt: 'Modern backend: robustness, scalability and production-oriented architecture',
                category: 'Backend architecture',
                date: '2026-02-17',
                body: [
                    'An effective backend is not judged by the complexity of its architecture.',
                    '',
                    'In practice, many applications work in test environments, but show their limits in production.',
                    'Irregular response times, poorly structured endpoints, unexpected scaling issues.',
                    'The difficulty does not come from the chosen language, but from how the system was designed.',
                    '',
                    'A modern backend is first based on clear and consistent APIs.',
                    'Well-defined contracts, explicit error handling, controlled versioning.',
                    'Scalability is not a late addition, but a constraint integrated from the design phase.',
                    '',
                    'The architecture must remain readable.',
                    'Modular monolith, microservices or serverless: the choice depends on the context, not the trend.',
                    'What matters is the ability to observe, measure and adjust in production.',
                    '',
                    'A production-oriented backend prioritizes robustness, measurable performance and controlled simplicity.',
                    'Unnecessary sophistication quickly becomes debt.',
                    '',
                    'A successful backend system is one that remains stable when real usage begins.'
                ]
            },
            {
                id: 'article-8',
                title: 'From static pages to hybrid architectures: 30 years of front-end and back-end evolution',
                image: 'assets/images/articles/Back-front historique.jpg',
                excerpt: 'From static pages to hybrid architectures: 30 years of front-end and back-end evolution',
                category: 'Web history',
                date: '2026-02-24',
                body: [
                    'The separation between front-end and back-end was not an immediate decision.',
                    'It was built gradually, at the pace of technological advances on the web.',
                    '',
                    'In 1989–1991, Tim Berners-Lee designed the World Wide Web at CERN.',
                    'The model is simple: a server sends an HTML document, the browser displays it.',
                    'The architecture is centralized, with no client-side logic.',
                    '',
                    'Mid-1990s: the web becomes dynamic.',
                    '- PHP appears in 1995',
                    '- ASP is launched in 1996',
                    '- Java (1995) establishes itself on the server side',
                    '',
                    'Pages are now generated on the fly from databases.',
                    'The back-end structures the application. The front-end remains essentially declarative.',
                    '',
                    'Years 2005–2010: major breakthrough.',
                    'AJAX (popularized around 2005) enables asynchronous exchanges.',
                    'Then JavaScript frameworks emerge:',
                    '- AngularJS in 2010',
                    '- React in 2013',
                    '- Vue.js in 2014',
                    'The browser becomes an execution platform.',
                    'Front-end applications manage state, routes, and complex interactions.',
                    'REST APIs become widespread.',
                    'Front-end / back-end separation becomes an architectural strategy.',
                    '',
                    'From 2016–2020, new evolution.',
                    'The limits of heavy SPAs appear: performance, SEO, JavaScript debt.',
                    'Hybrid frameworks emerge:',
                    '- Next.js (2016)',
                    '- Remix (2020)',
                    '- Astro (2021)',
                    'They combine server rendering, static generation and partial hydration.',
                    'The separation does not disappear, but it becomes finer and better orchestrated.',
                    '',
                    'In three decades, web architecture has evolved:',
                    '- from centralized server',
                    '- to strict client / API separation',
                    '- then to hybrid models oriented towards performance and production',
                    '',
                    'History shows a constant:',
                    'architectural choices evolve to meet real usage constraints.',
                    '',
                    'Understanding this trajectory allows us to design coherent systems today,',
                    'not by following a trend, but by building on the accumulated experience of the web.'
                ]
            },
            {
                id: 'article-9',
                title: 'Integrating security from the design phase of an application',
                image: 'assets/images/articles/Sécurité dès la conception.png',
                excerpt: 'Integrating security from the design phase of an application',
                category: 'Security',
                date: '2026-03-03',
                body: [
                    '“Boss, the new app is ready! It\'s super fast, the design is amazing, we\'re going to crush it!',
                    '— Great! And what about security, are we good?',
                    '— Ah... security... Let\'s say we\'ll add the brakes while driving, in the next sprint!”',
                    '',
                    'Does that make you smile? Yet, it\'s still a reality too often.',
                    '',
                    'Security should never be an end-of-project fix.',
                    '',
                    'In practice, it is still too often addressed after development.',
                    'Late audits, urgent fixes, accumulated security debt.',
                    'The cost then becomes technical, financial and reputational.',
                    '',
                    'Integrating security from the design phase changes the trajectory.',
                    'It starts with a risk analysis adapted to the business context.',
                    'Define sensitive flows, access levels, exposure surfaces.',
                    'Apply the principle of least privilege and segment responsibilities.',
                    '',
                    'Security is not just a firewall or a tool.',
                    'It materializes in the architecture:',
                    'identity management, input validation, encryption, logging, monitoring.',
                    '',
                    'The earlier it is integrated, the simpler and more consistent it is.',
                    'Added late, it becomes complex and fragile.',
                    '',
                    'A secure application is not one that has never been attacked.',
                    'It is one that has been designed to resist, detect and respond.',
                    '',
                    'Security is an architectural decision, not an optional module.'
                ]
            },
            {
                id: 'article-10',
                title: 'Monolith or microservices: choosing based on context',
                image: 'assets/images/articles/Monolithe ou microservices  choisir selon le contexte.png',
                excerpt: 'Monolith or microservices: choosing based on context',
                category: 'Software architecture',
                date: '2026-03-10',
                body: [
                    '"Let\'s go with microservices, it\'s more modern!"',
                    '6 months later: "Does anyone know why service A can no longer talk to service B, and where did my transaction log go?"',
                    'Architectural mimicry is wreaking havoc. It\'s time to talk about it.',
                    '',
                    'The monolith vs. microservices debate is often poorly framed.',
                    '',
                    'In practice, many projects choose an architecture without considering the real context.',
                    'The word microservices often appears before needs analysis.',
                    '',
                    'A well-structured monolith is often relevant when:',
                    '- a team of 2 to 6 developers',
                    '- a product still under construction',
                    '- frequent functional changes',
                    '- simple operation to ensure',
                    'Result: less infrastructure, fewer operations, more speed.',
                    '',
                    'Microservices become relevant in other situations:',
                    '- more than 15 to 20 developers',
                    '- several autonomous teams',
                    '- clearly separated business domains',
                    '- independent scaling needs',
                    'But they introduce real costs:',
                    'multiple deployments, distributed monitoring, more complex incident management.',
                    '',
                    'The choice depends on concrete factors.',
                    'Team size, technical maturity, frequency of changes, business constraints.',
                    'An effective architecture is one that the organization can truly master.',
                    '',
                    'Starting simple is not a weakness.',
                    'Evolving towards more decoupling can be a strategic decision, not an obligation.',
                    '',
                    'Architecture should serve the product, not the other way around.'
                ]
            }
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
        { selector: '.nav-link[href="#articles-page"]', text: navLabels.articles },
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
        { selector: '#articles-page .section-title', text: sectionTexts.articles },
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

    if (typeof updateThemeToggleUI === 'function') {
        updateThemeToggleUI();
    }

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
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.textContent = currentLanguage.toUpperCase();
    const nextLang = currentLanguage === 'fr' ? 'en' : 'fr';
    const langText = currentLanguage === 'fr' ? 'Passer en anglais' : 'Switch to French';
    btn.setAttribute('aria-label', langText);
    btn.setAttribute('data-next-lang', nextLang);
}

function initLanguageSwitcher() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const next = btn.getAttribute('data-next-lang') || (currentLanguage === 'fr' ? 'en' : 'fr');
        setLanguage(next);
    });
    highlightActiveLang();
}
