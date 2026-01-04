# Portfolio Vanilla JavaScript

Un portfolio moderne et performant développé en **JavaScript pur** (Vanilla JS) et **CSS3**, sans framework ni bibliothèque JavaScript externe.

## 🚀 Caractéristiques

- ✨ **SPA (Single Page Application)** avec navigation fluide
- 🎨 **Design moderne** et professionnel
- 📱 **Responsive** (mobile, tablette, desktop)
- 🌈 **Animations CSS** élégantes
- ⚡ **Performances optimales** (pas de framework lourd)
- 🎯 **SEO-friendly** avec meta tags
- ♿ **Accessible** (attributs ARIA, navigation clavier)
- 🔄 **Router JavaScript** personnalisé avec History API
- 📧 **Formulaire de contact** fonctionnel

## 📁 Structure du projet

```
vanilla-portfolio/
│
├── index.html              # Page HTML principale
│
├── css/
│   └── style.css          # Styles CSS (design complet)
│
├── js/
│   ├── app.js             # Fichier principal de l'application
│   ├── router.js          # Gestion de la navigation SPA
│   ├── components.js      # Composants (projets, skills, etc.)
│   └── data.js            # Données du portfolio
│
├── assets/
│   ├── images/            # Images (profil, projets, etc.)
│   │   └── projects/      # Images des projets
│   └── icons/             # Icônes et favicon
│
└── README.md              # Ce fichier
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS, Grid, Flexbox
- **JavaScript ES6+** - Logique applicative (vanilla JS)
- **Font Awesome 6** - Icônes vectorielles
- **Google Fonts (Inter)** - Typographie

## 📋 Sections du portfolio

1. **Accueil** - Hero section avec présentation
2. **À propos** - Informations personnelles et coordonnées
3. **Expérience** - Timeline des expériences professionnelles
4. **Compétences** - Grille des compétences techniques
5. **Projets** - Showcase des projets réalisés
6. **Formation** - Parcours académique
7. **Contact** - Formulaire de contact et informations

## 🚀 Installation et lancement

### Prérequis

Aucune installation nécessaire ! Le projet utilise uniquement des technologies natives du navigateur.

### Méthode 1 : Ouvrir directement le fichier HTML

1. Ouvrez le dossier du projet
2. Double-cliquez sur `index.html`
3. Le portfolio s'ouvre dans votre navigateur par défaut

### Méthode 2 : Serveur HTTP local (recommandé)

Pour un meilleur fonctionnement (notamment pour les requêtes AJAX futures), utilisez un serveur HTTP local :

#### Avec Python :

```bash
# Python 3
cd vanilla-portfolio
python -m http.server 8000
```

Puis ouvrez : `http://localhost:8000`

#### Avec Node.js (http-server) :

```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
cd vanilla-portfolio
http-server -p 8000
```

Puis ouvrez : `http://localhost:8000`

#### Avec VS Code (Live Server) :

1. Installez l'extension **Live Server**
2. Clic droit sur `index.html` → **Open with Live Server**

### Méthode 3 : Avec PHP :

```bash
cd vanilla-portfolio
php -S localhost:8000
```

Puis ouvrez : `http://localhost:8000`

## 🎨 Personnalisation

### Modifier les données

Éditez le fichier `js/data.js` pour personnaliser :

- **personalData** : Informations personnelles, coordonnées, réseaux sociaux
- **projectsData** : Liste des projets avec descriptions, technologies, liens
- **skillsData** : Liste des compétences techniques
- **experiences** : Expériences professionnelles
- **educations** : Formations académiques

### Modifier les couleurs

Éditez les variables CSS dans `css/style.css` (lignes 8-15) :

```css
:root {
    --color-primary: #ec4899;          /* Couleur principale (rose)
    --color-secondary: #16f2b3;        /* Couleur secondaire (vert)
    --color-bg: #0d1224;               /* Fond principal
    --color-text: #d3d8e8;             /* Texte principal
    /* ... */
}
```

### Ajouter/Modifier des images

1. **Image de profil** : Remplacez `assets/images/profile.jpg`
2. **Images de projets** : Ajoutez vos images dans `assets/images/projects/`
3. **Favicon** : Remplacez `assets/icons/favicon.svg` (ou .png)

### Modifier le style

Tous les styles se trouvent dans `css/style.css`, organisés en sections :

- Variables CSS
- Reset & Base
- Navigation
- Hero Section
- Projets, Compétences, etc.
- Responsive (media queries)

## 🌐 Déploiement

### GitHub Pages

1. Créez un dépôt GitHub
2. Poussez le code
3. Allez dans **Settings** → **Pages**
4. Source : `main` branch, dossier `/vanilla-portfolio`
5. Votre site sera disponible à : `https://username.github.io/repo-name/`

### Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Glissez-déposez le dossier `vanilla-portfolio`
3. Votre site est en ligne en quelques secondes !

### Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
cd vanilla-portfolio
vercel
```

## 📱 Compatibilité navigateurs

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)

## 🔧 Fonctionnalités techniques

### Router SPA

Le fichier `js/router.js` gère la navigation sans rechargement :

- Utilise l'**History API** (`pushState`, `popstate`)
- Détection automatique de la section visible au scroll
- Mise à jour de l'URL et de la navigation active
- Scroll fluide vers les sections

### Composants dynamiques

Le fichier `js/components.js` génère dynamiquement :

- Cartes de projets avec overlay et liens
- Cartes de compétences avec icônes
- Timeline d'expériences
- Cartes de formation

### Animations au scroll

Système d'animation simple basé sur **Intersection Observer** :

- Détection de l'entrée dans le viewport
- Animations de fade et zoom
- Performances optimales

## 📝 Licence

Ce projet est libre d'utilisation. Vous pouvez le modifier et l'adapter à vos besoins.

## 👤 Auteur

**Marjean Claude**

- GitHub: [@claudemarjean](https://github.com/claudemarjean)
- LinkedIn: [Marjean Claude](https://mg.linkedin.com/in/marjean-claude-andriamahatradraide-65873b246)
- Email: marjean.8888@gmail.com

## 🙏 Remerciements

- [Font Awesome](https://fontawesome.com/) pour les icônes
- [Google Fonts](https://fonts.google.com/) pour la typographie Inter
- Communauté des développeurs web pour l'inspiration

---

**Développé avec ❤️ en JavaScript pur et CSS3**
