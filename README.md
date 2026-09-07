# IASA — site officiel

« IA au service de ton avenir » — site vitrine de l'agence IASA : sites web, vidéos UGC IA,
montage vidéo et publicités produits.

## Pages du site

Accueil · Services (+ 4 pages détaillées : sites web, UGC IA, montage vidéo, publicités) ·
Portfolio · Tarifs · À propos · Vision (co-fondatrice) · Collaboration · Processus · FAQ · Contact.

Contact : WhatsApp +243 835 526 603 · rachete718@gmail.com

## Mettre le site en ligne sur Netlify

1. Créez un compte gratuit sur https://netlify.com
2. Envoyez ce projet sur GitHub (bouton GitHub dans Lovable), puis dans Netlify :
   **Add new site → Import an existing project → GitHub** et choisissez le dépôt.
3. Netlify lit automatiquement le fichier `netlify.toml` fourni :
   - commande de build : `npm run build`
   - dossier publié : `.output/public`
4. Cliquez sur **Deploy**. Après quelques minutes, le site est en ligne.
5. Onglet **Domain settings** pour brancher votre propre nom de domaine.

Rien d'autre à configurer : aucune variable secrète n'est nécessaire.

## Modifier le site plus tard

- Textes, prix, délais, messages WhatsApp : `src/lib/iasa.ts`
- Pages : `src/routes/`
- Couleurs et style : `src/styles.css`
- Logo et photos : `src/assets/*.asset.json`

## Développement local

```sh
npm install
npm run dev
```
