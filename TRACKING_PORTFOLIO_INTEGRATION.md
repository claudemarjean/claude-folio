# 🎯 Guide d'Intégration du Tracking Ivony dans Portfolio

## 📋 Informations du Projet

**Application Portfolio**
- Type : Site web statique (HTML/CSS/JS)
- Authentification : ❌ Aucune (visiteurs anonymes uniquement)
- Base de données : ✅ Partagée avec Ivony (Supabase)
- ID Application : `00da2367-d90d-4735-8f42-cf99adebf881`

**Objectif** : Enregistrer chaque visite de votre portfolio dans la table `ivony_consultation` pour suivre le trafic.

---

## 📦 Fichiers à copier depuis Ivony

Copiez ces fichiers depuis votre projet Ivony vers votre projet Portfolio :

```
Portfolio/
├── assets/
│   ├── js/
│   │   └── tracking.js          ← Copier depuis Ivony
│   └── libs/
│       └── supabase.js          ← Copier depuis Ivony (si pas déjà présent)
```

**Fichiers sources** :
- `E:\C109\Ivony\assets\js\tracking.js`
- `E:\C109\Ivony\assets\libs\supabase.js`

---

## 🔧 Étape 1 : Configuration Supabase

### A. Ajouter Supabase à votre Portfolio

Dans votre fichier HTML principal (ex: `index.html`), ajoutez **AVANT la balise `</body>`** :

```html
<!-- Supabase JS -->
<script src="assets/libs/supabase.js"></script>

<!-- Module de tracking Ivony -->
<script src="assets/js/tracking.js"></script>

<!-- Initialisation du tracking -->
<script>
    // ========================================
    // CONFIGURATION SUPABASE
    // ========================================
    const SUPABASE_URL = 'https://jzabkrztgkayunjbzlzj.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_6KKGLI74VNMAnzbGkk6xew_ZZv3QyJu';
    
    // Initialiser le client Supabase
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // ========================================
    // TRACKING AUTOMATIQUE
    // ========================================
    const PORTFOLIO_APP_ID = '00da2367-d90d-4735-8f42-cf99adebf881';
    
    // Tracker la visite au chargement de la page
    document.addEventListener('DOMContentLoaded', async () => {
        console.log('📊 Initialisation du tracking portfolio...');
        
        try {
            const result = await IvonyTracking.trackConsultation(
                supabaseClient,
                PORTFOLIO_APP_ID
            );
            
            if (result.success) {
                console.log('✅ Visite enregistrée:', result.data);
                console.log('📍 Localisation:', result.data.city, result.data.country);
                console.log('📱 Appareil:', result.data.device_type);
                console.log('🆔 Session:', result.data.session_id);
            } else {
                console.warn('⚠️ Tracking échoué:', result.error);
            }
        } catch (error) {
            console.error('❌ Erreur tracking:', error);
        }
    });
</script>
```

---

## 🎯 Étape 2 : Exemple HTML Complet

Voici un exemple de structure HTML complète pour votre portfolio :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    
    <!-- Vos styles CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Votre contenu portfolio -->
    <header>
        <h1>Mon Portfolio</h1>
        <nav>
            <!-- Votre navigation -->
        </nav>
    </header>
    
    <main>
        <!-- Votre contenu -->
    </main>
    
    <footer>
        <p>&copy; 2026 Mon Portfolio</p>
    </footer>
    
    <!-- ========================================
         TRACKING IVONY - NE PAS MODIFIER
         ======================================== -->
    
    <!-- Supabase JS -->
    <script src="assets/libs/supabase.js"></script>
    
    <!-- Module de tracking -->
    <script src="assets/js/tracking.js"></script>
    
    <!-- Configuration -->
    <script>
        // Configuration Supabase
        const SUPABASE_URL = 'https://jzabkrztgkayunjbzlzj.supabase.co';
        const SUPABASE_ANON_KEY = 'sb_publishable_6KKGLI74VNMAnzbGkk6xew_ZZv3QyJu';
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        
        // ID de votre application portfolio
        const PORTFOLIO_APP_ID = '00da2367-d90d-4745-8f42-cf99adebf881';
        
        // Tracker automatiquement au chargement
        document.addEventListener('DOMContentLoaded', async () => {
            const result = await IvonyTracking.trackConsultation(
                supabaseClient,
                PORTFOLIO_APP_ID
            );
            
            if (result.success) {
                console.log('✅ Visite trackée');
            }
        });
    </script>
    
    <!-- Vos autres scripts -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

---

## 📊 Étape 3 : Tracking sur Plusieurs Pages

Si votre portfolio a plusieurs pages, vous pouvez :

### Option A : Copier le script sur chaque page

Copiez la section tracking (Supabase + tracking.js + script d'init) sur **chaque page HTML**.

### Option B : Créer un fichier de tracking global

**Créez** : `assets/js/portfolio-tracking.js`

```javascript
// ========================================
// TRACKING AUTOMATIQUE PORTFOLIO
// ========================================

// Configuration
const SUPABASE_URL = 'https://jzabkrztgkayunjbzlzj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_6KKGLI74VNMAnzbGkk6xew_ZZv3QyJu';
const PORTFOLIO_APP_ID = '00da2367-d90d-4735-8f42-cf99adebf881';

// Initialiser Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fonction de tracking
async function trackPortfolioVisit() {
    console.log('📊 Tracking visite portfolio...');
    
    try {
        const result = await IvonyTracking.trackConsultation(
            supabaseClient,
            PORTFOLIO_APP_ID
        );
        
        if (result.success) {
            console.log('✅ Visite enregistrée');
            
            // Optionnel : afficher les infos en dev
            if (window.location.hostname === 'localhost') {
                console.table({
                    'Unique': result.data.is_unique ? 'Oui' : 'Non',
                    'Pays': result.data.country || 'N/A',
                    'Ville': result.data.city || 'N/A',
                    'Appareil': result.data.device_type,
                    'Navigateur': result.data.browser,
                    'Session ID': result.data.session_id.substring(0, 8) + '...'
                });
            }
        } else {
            console.warn('⚠️ Tracking échoué:', result.error);
        }
    } catch (error) {
        console.error('❌ Erreur tracking:', error);
        // Ne pas bloquer le site en cas d'erreur
    }
}

// Lancer au chargement
document.addEventListener('DOMContentLoaded', trackPortfolioVisit);
```

**Puis dans chaque HTML** :

```html
<!-- Scripts -->
<script src="assets/libs/supabase.js"></script>
<script src="assets/js/tracking.js"></script>
<script src="assets/js/portfolio-tracking.js"></script>
```

---

## 🎨 Étape 4 : Tracking Avancé (Optionnel)

### A. Tracker des événements spécifiques

Si vous voulez tracker des actions spécifiques (clic sur projet, téléchargement CV, etc.) :

```javascript
// Tracker un clic sur un projet
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', async (e) => {
        const projectName = card.dataset.project;
        
        console.log(`📌 Clic sur projet: ${projectName}`);
        
        // Enregistrer la consultation (une nouvelle ligne)
        await IvonyTracking.trackConsultation(
            supabaseClient,
            PORTFOLIO_APP_ID
        );
    });
});

// Tracker téléchargement CV
document.getElementById('download-cv')?.addEventListener('click', async () => {
    console.log('📄 Téléchargement CV');
    
    await IvonyTracking.trackConsultation(
        supabaseClient,
        PORTFOLIO_APP_ID
    );
});
```

### B. Afficher le compteur de visites

```javascript
// Récupérer et afficher le nombre total de visites
async function displayVisitCount() {
    try {
        const { data, error } = await supabaseClient
            .from('ivony_consultation')
            .select('id', { count: 'exact' })
            .eq('application_id', PORTFOLIO_APP_ID)
            .eq('is_deleted', false);
        
        if (!error && data) {
            const count = data.length;
            document.getElementById('visit-count').textContent = count;
        }
    } catch (error) {
        console.error('Erreur compteur:', error);
    }
}

// Appeler après le tracking
document.addEventListener('DOMContentLoaded', async () => {
    await trackPortfolioVisit();
    await displayVisitCount();
});
```

**HTML** :
```html
<p>👁️ <span id="visit-count">-</span> visites</p>
```

---

## ✅ Étape 5 : Vérification

### 1. Vérifier la configuration Supabase

Les politiques RLS doivent être configurées. **Exécutez ce SQL dans Supabase** si ce n'est pas déjà fait :

```sql
-- Vérifier que la politique existe
SELECT * FROM pg_policies 
WHERE tablename = 'ivony_consultation' 
AND policyname = 'Allow public insert';

-- Si elle n'existe pas, la créer
CREATE POLICY "Allow public insert" ON ivony_consultation
    FOR INSERT
    WITH CHECK (true);
```

### 2. Tester en local

1. Ouvrez votre portfolio : `http://localhost:8000` (ou votre serveur local)
2. Ouvrez la console (F12)
3. Vérifiez les logs :
   ```
   📊 Initialisation du tracking portfolio...
   ✅ Visite enregistrée: {id: "...", ...}
   ```

### 3. Vérifier dans Supabase

Allez dans Supabase → Table Editor → `ivony_consultation` :

```sql
SELECT 
    id,
    application_id,
    is_authenticated,
    is_unique,
    session_id,
    ip_address,
    country,
    city,
    device_type,
    browser,
    visited_at
FROM ivony_consultation
WHERE application_id = '00da2367-d90d-4735-8f42-cf99adebf881'
ORDER BY visited_at DESC
LIMIT 10;
```

Vous devriez voir vos visites enregistrées !

---

## 📊 Étape 6 : Visualiser les Stats dans Ivony

Une fois le tracking configuré, vous pourrez voir les consultations de votre portfolio dans l'application Ivony :

1. Connectez-vous à Ivony
2. Allez dans **Suivi vue**
3. Filtrez par **Application** : Sélectionnez votre Portfolio
4. Vous verrez :
   - Nombre total de vues
   - Vues uniques
   - Localisation des visiteurs
   - Types d'appareils
   - Navigateurs utilisés

---

## 🚀 Étape 7 : Déploiement

### Netlify / Vercel

Le tracking fonctionne automatiquement sur Netlify, Vercel, GitHub Pages, etc.

**Aucune configuration supplémentaire nécessaire !**

### Headers de sécurité (Optionnel)

Si vous déployez sur Netlify, créez `netlify.toml` :

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://unpkg.com https://jzabkrztgkayunjbzlzj.supabase.co; connect-src 'self' https://jzabkrztgkayunjbzlzj.supabase.co https://api.ipify.org https://ipapi.co;"
```

---

## 🐛 Dépannage

### Erreur : "IvonyTracking is not defined"

**Cause** : `tracking.js` n'est pas chargé ou chargé après votre script

**Solution** : Vérifiez l'ordre des scripts :
```html
<script src="assets/libs/supabase.js"></script>
<script src="assets/js/tracking.js"></script>
<!-- Puis votre script -->
```

### Erreur : "new row violates row-level security policy"

**Cause** : Politique RLS non configurée

**Solution** : Exécutez le SQL de l'Étape 5.1

### Aucune donnée dans la console

**Cause** : Erreur réseau ou configuration Supabase

**Solution** :
1. Vérifiez la console (F12) pour les erreurs
2. Vérifiez que Supabase URL et KEY sont corrects
3. Testez la connexion Supabase :
```javascript
console.log('Test Supabase:', await supabaseClient.from('ivony_consultation').select('id').limit(1));
```

---

## 📋 Checklist Finale

Avant de déployer, vérifiez :

- [ ] `tracking.js` copié dans votre projet
- [ ] `supabase.js` copié dans votre projet
- [ ] Scripts ajoutés dans l'ordre correct
- [ ] ID application correct : `00da2367-d90d-4735-8f42-cf99adebf881`
- [ ] URL Supabase correcte
- [ ] Clé ANON correcte
- [ ] Politique RLS créée
- [ ] Test en local réussi (console affiche ✅)
- [ ] Vérification dans Supabase (données présentes)
- [ ] Test sur plusieurs pages (si multi-pages)

---

## 🎯 Résumé Ultra-Rapide

**3 étapes seulement** :

1. **Copier** : `tracking.js` et `supabase.js` dans votre portfolio

2. **Ajouter dans HTML** :
```html
<script src="assets/libs/supabase.js"></script>
<script src="assets/js/tracking.js"></script>
<script>
const supabaseClient = supabase.createClient(
    'https://jzabkrztgkayunjbzlzj.supabase.co',
    'sb_publishable_6KKGLI74VNMAnzbGkk6xew_ZZv3QyJu'
);

document.addEventListener('DOMContentLoaded', async () => {
    await IvonyTracking.trackConsultation(
        supabaseClient,
        '00da2367-d90d-4735-8f42-cf99adebf881'
    );
});
</script>
```

3. **Vérifier** : Console + Supabase

C'est tout ! 🎉

---

## 📚 Fichiers à Copier - Récapitulatif

**Depuis Ivony** :
```
E:\C109\Ivony\assets\js\tracking.js
E:\C109\Ivony\assets\libs\supabase.js
```

**Vers Portfolio** :
```
VotrePortfolio/assets/js/tracking.js
VotrePortfolio/assets/libs/supabase.js
```

---

## 💡 Conseils

1. **Ne pas tracker en développement** (optionnel) :
```javascript
if (window.location.hostname !== 'localhost') {
    await IvonyTracking.trackConsultation(...);
}
```

2. **Mode debug** :
```javascript
// Voir les détails du tracking
console.log('Détails tracking:', result.data);
```

3. **Éviter le double tracking** :
Si vous avez un Single Page Application (SPA), trackez uniquement au premier chargement, pas à chaque changement de route.

---

## 🎉 Félicitations !

Votre portfolio est maintenant connecté au système de tracking Ivony !

Toutes vos visites seront enregistrées et visibles dans le dashboard Ivony sous **Suivi vue** → Filtrer par Portfolio.

**Données trackées automatiquement** :
- ✅ Date et heure de visite
- ✅ Adresse IP (anonymisée)
- ✅ Pays, Région, Ville
- ✅ Type d'appareil (Mobile/Desktop/Tablet)
- ✅ Navigateur et OS
- ✅ Session unique (localStorage)
- ✅ Visite unique (première fois ou retour)

**Aucune donnée personnelle** n'est collectée sans consentement. Tout est conforme RGPD pour des stats anonymes.
