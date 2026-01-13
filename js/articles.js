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
    { id: 'article-3', title: 'Ce que les cahiers des charges oublient systématiquement', image: 'assets/images/articles/placeholder.svg', excerpt: 'Ce que les cahiers des charges oublient systématiquement', body: ['Ce que les cahiers des charges oublient systématiquement'] },
    { id: 'article-4', title: 'Les décisions non techniques qui sabotent un projet IT', image: 'assets/images/articles/placeholder.svg', excerpt: 'Les décisions non techniques qui sabotent un projet IT', body: ['Les décisions non techniques qui sabotent un projet IT'] },
    { id: 'article-5', title: 'La dette technique ne commence pas dans le code', image: 'assets/images/articles/placeholder.svg', excerpt: 'La dette technique ne commence pas dans le code', body: ['La dette technique ne commence pas dans le code'] },
    { id: 'article-6', title: 'PHP n\'est pas le problème, son utilisation l\'est', image: 'assets/images/articles/placeholder.svg', excerpt: 'PHP n\'est pas le problème, son utilisation l\'est', body: ['PHP n\'est pas le problème, son utilisation l\'est'] },
    { id: 'article-7', title: 'JavaScript devient dangereux quand il n\'est pas structuré', image: 'assets/images/articles/placeholder.svg', excerpt: 'JavaScript devient dangereux quand il n\'est pas structuré', body: ['JavaScript devient dangereux quand il n\'est pas structuré'] },
    { id: 'article-8', title: 'Séparer le front et le back n\'est pas une option', image: 'assets/images/articles/placeholder.svg', excerpt: 'Séparer le front et le back n\'est pas une option', body: ['Séparer le front et le back n\'est pas une option'] },
    { id: 'article-9', title: 'La sécurité web est souvent prise trop tard', image: 'assets/images/articles/placeholder.svg', excerpt: 'La sécurité web est souvent prise trop tard', body: ['La sécurité web est souvent prise trop tard'] },
    { id: 'article-10', title: 'Une application lente coûte plus qu\'on ne le pense', image: 'assets/images/articles/placeholder.svg', excerpt: 'Une application lente coûte plus qu\'on ne le pense', body: ['Une application lente coûte plus qu\'on ne le pense'] }
   
];
