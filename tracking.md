# Tracking Supabase – ivony_consultation

Cette note décrit comment envoyer, depuis un portfolio statique sans authentification, un événement de consultation vers la table `ivony_consultation` de Supabase. Elle documente les modules déjà présents dans Ivony et fournit un guide d’intégration minimal utilisable par Copilot.

## Architecture existante

- **Client Supabase** : chargé via `assets/libs/supabase.js` (bundle officiel). Un helper global `createClient` est disponible. La configuration publique se trouve dans `assets/js/config.js` (`IVONY_CONFIG.SUPABASE_URL` / `SUPABASE_ANON_KEY`).
- **Module cœur tracking** : `assets/js/tracking.js` expose `window.IvonyTracking` avec la fonction clé `trackConsultation(supabase, applicationId, options?)`. Ce module :
  - crée / persiste un `session_id` anonyme (UUID localStorage) ;
  - vérifie la session Supabase (`supabase.auth.getSession()`) pour savoir si le visiteur est authentifié ;
  - récupère la géoloc via ipapi (auto `/json`), puis retente avec ipify + ipapi si besoin ; accepte un override manuel `options.geo` ;
  - collecte `browser`, `os`, `device_type` ;
  - vérifie l’unicité de la visite par couple `(application_id, session_id)` ;
  - insère dans `ivony_consultation` avec retry (3 tentatives).
- **Module orchestrateur** : `assets/js/app-tracking.js` expose `window.AppTracking.trackApplicationView(applicationId, options?)` et `initAutoTracking()`. Il valide la présence de `IvonyTracking` et `supabaseClient`, et déclenche `trackConsultation`.

## Schéma attendu (table `ivony_consultation`)

Les colonnes utilisées par le code :
- `id` (UUID, PK)
- `application_id` (UUID) – l’ID logique de la page/app consultée
- `user_id` (UUID, nullable) – présent si utilisateur authentifié
- `is_authenticated` (bool)
- `is_unique` (bool) – calculée côté client via requête préalable
- `session_id` (text) – UUID anonyme ou token de session Supabase
- `ip_address` (text, nullable)
- `country`, `region`, `city` (text, nullable)
- `browser`, `os`, `device_type` (text)
- `visited_at` (timestamptz)
- `is_deleted` (bool, défaut false)

> Prévoir des politiques RLS qui autorisent l’insert pour le rôle `anon` sur ces colonnes.

## Chargement des scripts (portfolio)

Dans la page du portfolio (ex. `index.html`), ajouter ces imports, idéalement en bas du `<body>` :

```html
<script src="/assets/libs/supabase.js"></script>
<script src="/assets/js/config.js"></script>
<script>
  // Initialisation du client Supabase global
  window.supabaseClient = createClient(
    IVONY_CONFIG.SUPABASE_URL,
    IVONY_CONFIG.SUPABASE_ANON_KEY
  );
</script>
<script src="/assets/js/tracking.js"></script>
<script src="/assets/js/app-tracking.js"></script>
```

## Envoi d’un événement au rechargement de page

Pour tracker le chargement de la page portfolio (sans authentification) vers `ivony_consultation` :

```html
<script>
  document.addEventListener('DOMContentLoaded', async () => {
    // ID applicatif à stocker dans application_id
    const portfolioAppId = '<UUID-de-votre-portfolio>'; 

    const result = await AppTracking.trackApplicationView(portfolioAppId, {
      source: 'page_load'
    });

    if (!result.success) {
      console.warn('Tracking portfolio échoué', result.error);
    }
  });
</script>
```

Notes :
- `trackApplicationView` vérifie `IvonyTracking` et `supabaseClient` puis délègue à `trackConsultation`.
- Si le visiteur est anonyme, `session_id` est persisté en localStorage pour conserver l’unicité.
- Vous pouvez forcer des données de géoloc connues (ex. côté serveur) via `AppTracking.trackApplicationView(appId, { geo: { ip_address, country, region, city } })`.

## Tracking automatique des clics (optionnel)

`AppTracking.initAutoTracking()` écoute les clics sur tout élément portant `data-app-id` (et facultatif `data-app-url`). Exemple :

```html
<button data-app-id="<UUID-app>" data-app-url="/mon-app">Visiter</button>
<script>
  AppTracking.initAutoTracking();
</script>
```

## Points de vigilance

- **Réseau** : IP et géoloc sont best-effort. En cas d’échec, l’insert se fait quand même avec champs `null`.
- **RLS** : vérifier que `anon` peut `insert` dans `ivony_consultation`. Le code ne réalise que des `select` limités et un `insert`.
- **CORS** : `api.ipify.org` et `ipapi.co` sont appelés depuis le navigateur ; si bloqués, l’enregistrement continue.
- **Déduplication** : l’unicité est calculée client-side par `(application_id, session_id)`. Si vous changez la logique côté base, ajustez RLS/contrainte unique.
- **Clés publiques** : `SUPABASE_ANON_KEY` est exposée ; la protection repose sur RLS.

## Résumé Copilot

1) Charger `supabase.js`, `config.js`, `tracking.js`, `app-tracking.js` dans la page portfolio.  
2) Initialiser `window.supabaseClient = createClient(IVONY_CONFIG.SUPABASE_URL, IVONY_CONFIG.SUPABASE_ANON_KEY)`.  
3) Appeler `AppTracking.trackApplicationView('<UUID-app>', { source: 'page_load' })` au chargement.  
4) Facultatif : `AppTracking.initAutoTracking()` pour traquer les clics sur `[data-app-id]`.  
5) S’assurer que RLS autorise l’insert anon dans `ivony_consultation` avec les colonnes listées.
