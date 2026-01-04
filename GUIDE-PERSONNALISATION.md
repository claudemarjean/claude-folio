# Guide de personnalisation rapide

Ce guide vous aide à personnaliser rapidement votre portfolio.

## 📝 1. Informations personnelles

**Fichier :** `js/data.js` (lignes 7-19)

Modifiez l'objet `personalData` :

```javascript
const personalData = {
    name: "Votre Nom",
    designation: "votre passion",
    description: "Votre description...",
    email: 'votre@email.com',
    phone: '+XXX XX XX XX XX',
    address: 'Votre ville, Pays',
    github: 'https://github.com/votre-username',
    facebook: 'https://facebook.com/votre-profile',
    linkedIn: 'https://linkedin.com/in/votre-profile',
    resume: "https://lien-vers-votre-cv.pdf"
};
```

## 🎨 2. Couleurs du thème

**Fichier :** `css/style.css` (lignes 8-15)

```css
:root {
    --color-primary: #ec4899;      /* Votre couleur principale */
    --color-secondary: #16f2b3;    /* Votre couleur secondaire */
    --color-bg: #0d1224;           /* Couleur de fond */
}
```

## 💼 3. Ajouter un projet

**Fichier :** `js/data.js` (section `projectsData`)

```javascript
{
    id: 9,  // Numéro unique
    name: 'Nom du projet',
    description: "Description détaillée...",
    tools: ['Tech1', 'Tech2', 'Tech3'],
    role: 'Votre rôle',
    code: 'https://github.com/...',  // Optionnel
    demo: 'https://demo.com',        // Optionnel
    image: 'assets/images/projects/mon-projet.jpg'
}
```

## 🛠️ 4. Ajouter une compétence

**Fichier :** `js/data.js` (section `skillsData`)

Ajoutez simplement le nom :

```javascript
const skillsData = [
    'Angular',
    'Bootstrap',
    'Votre Nouvelle Compétence',  // ← Ajoutez ici
    // ...
];
```

## 💼 5. Ajouter une expérience

**Fichier :** `js/data.js` (section `experiences`)

```javascript
{
    id: 8,
    title: 'Votre poste',
    company: "Nom de l'entreprise",
    duration: "(Date début - Date fin)",
    location: "Ville, Pays",
    description: "Description de vos responsabilités..."
}
```

## 🎓 6. Ajouter une formation

**Fichier :** `js/data.js` (section `educations`)

```javascript
{
    id: 3,
    title: "Votre diplôme",
    duration: "Année - Année",
    institution: "Nom de l'établissement",
    location: "Ville, Pays",
    description: "Description optionnelle"
}
```

## 🖼️ 7. Changer les images

### Image de profil

Remplacez `assets/images/profile.jpg` par votre photo.

### Images de projets

Ajoutez vos images dans `assets/images/projects/` et mettez à jour le champ `image` dans `projectsData`.

### Favicon

Remplacez `assets/icons/favicon.svg` par votre icône.

## 📱 8. Modifier les réseaux sociaux

**Hero Section :** `index.html` (lignes 72-84)

```html
<a href="https://votre-lien" target="_blank">
    <i class="fab fa-votre-icone"></i>
</a>
```

**Footer :** `index.html` (lignes 287-299)

Mêmes modifications.

## 🎯 9. Ajouter une nouvelle section

1. **HTML** (`index.html`) : Ajoutez une nouvelle `<section>`
2. **Navigation** (`index.html`) : Ajoutez un lien dans `<nav>`
3. **CSS** (`css/style.css`) : Ajoutez les styles
4. **JS** (optionnel) : Ajoutez la logique dans `js/components.js`

## 🚀 10. Tester vos modifications

1. Sauvegardez tous les fichiers
2. Lancez `start-server.bat` (Windows) ou `./start-server.sh` (Linux/Mac)
3. Ouvrez `http://localhost:8000`
4. Testez sur différents écrans (responsive)

## ✅ Checklist avant déploiement

- [ ] Toutes les informations personnelles sont à jour
- [ ] Les liens vers les réseaux sociaux fonctionnent
- [ ] Toutes les images sont optimisées (< 500 KB)
- [ ] Le formulaire de contact est configuré
- [ ] Les meta tags SEO sont remplis
- [ ] Le site est testé sur mobile et desktop
- [ ] Pas d'erreurs dans la console du navigateur

## 🆘 Besoin d'aide ?

Consultez le fichier `README.md` pour plus de détails ou créez une issue sur GitHub.

---

**Bon développement ! 🎉**
