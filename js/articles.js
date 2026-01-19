// Données des articles du portfolio
// Pour ajouter un article :
// 1) Dépose l'image dans assets/images/articles/
// 2) Ajoute un objet ci-dessous avec id unique, title, image (chemin relatif), excerpt, body (tableau de paragraphes ou sous-titres)

const articlesData = [
    {
        id: 'article-1',
        title: 'Pourquoi tant de projets informatiques échouent avant même la première ligne de code',
        image: 'assets/images/articles/projets informatiques echouent.png',
        excerpt: 'Pourquoi tant de projets informatiques échouent avant même la première ligne de code',
        category: 'Gouvernance produit',
        date: '2025-12-10',
        body: [
            'De nombreux projets sont fragilisés bien avant le démarrage du développement.',
            'L’échec prend souvent racine dans la phase de cadrage initial.',
            'Les objectifs sont imprécis, les priorités mal hiérarchisées et les contraintes métier sous-estimées.',
            'Le besoin réel est rarement formalisé de manière exploitable.',
            'Les choix techniques arrivent trop tôt, sans vision globale ni scénario d’évolution.',
            'Le périmètre évolue sans règles claires, créant des attentes contradictoires.',
            'Le projet progresse, mais sans direction stable.',
            'Le code devient alors une tentative d’adaptation permanente.',
            'Ce n’est pas un problème de compétences techniques, mais de décisions amont.',
            'Un projet bien cadré réduit les risques avant même d’écrire la première ligne de code.'
        ]
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
    }
];
