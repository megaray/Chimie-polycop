# 🚀 Démarrage Rapide - Génération de PDFs

## Installation et Premier PDF en 3 Minutes

### Étape 1: Installer les dépendances (si pas déjà fait)

```bash
cd /home/user/Chimie-polycop
npm install
```

### Étape 2: Installer esbuild pour la transpilation JSX

```bash
npm install --save-dev esbuild
```

### Étape 3: Créer le script de génération

Créer un fichier `build-and-generate.js` :

```bash
cat > build-and-generate.js << 'EOF'
const esbuild = require('esbuild');
const { execSync } = require('child_process');

console.log('🔨 Compilation du code JSX...\n');

esbuild.buildSync({
  entryPoints: ['src/generate-main.js'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: 'dist/generate.js',
  external: ['canvas', '@react-pdf/renderer'],
});

console.log('✅ Compilation réussie!\n');
console.log('📄 Génération des PDFs...\n');

require('./dist/generate.js');
EOF
```

### Étape 4: Mettre à jour package.json

```bash
npm pkg set scripts.generate="node build-and-generate.js"
```

### Étape 5: Générer !

```bash
npm run generate
```

Le PDF sera créé dans `output/Semaine5_Lois_des_Gaz.pdf` 🎉

---

## Alternative : Utiliser babel-node (plus simple mais plus lent)

### Méthode 1: babel-node

```bash
# Installer
npm install --save-dev @babel/node

# Générer
npx babel-node src/generate-main.js
```

### Méthode 2: Configuration npm script

```bash
# Ajouter au package.json
npm pkg set scripts.generate="babel-node src/generate-main.js"

# Puis utiliser
npm run generate
```

---

## Vérification de l'Installation

### Test rapide

```bash
# Vérifier que Node.js est installé
node --version

# Vérifier que les dépendances sont installées
ls node_modules/@react-pdf/renderer

# Vérifier que Babel ou esbuild est installé
ls node_modules/esbuild || ls node_modules/@babel/node
```

---

## Résolution de Problèmes

### Erreur: "Cannot find module '@react-pdf/renderer'"

```bash
npm install
```

### Erreur: "Unexpected token '<'" (JSX non transpilé)

Vous devez utiliser esbuild ou babel-node (voir ci-dessus)

### Erreur: "ENOENT: no such file or directory, open 'output/...'"

Le dossier output est créé automatiquement. Vérifiez les permissions.

### Les schémas ne s'affichent pas

Vérifiez que vous avez les dernières versions :
```bash
npm update @react-pdf/renderer
```

---

## Commandes Utiles

```bash
# Générer les PDFs
npm run generate

# Installer une nouvelle dépendance
npm install <package-name>

# Nettoyer node_modules et réinstaller
rm -rf node_modules
npm install

# Voir la structure du projet
tree -I 'node_modules' -L 3
```

---

## Prochaines Étapes

1. ✅ Générer le PDF Semaine 5
2. 📝 Adapter pour Semaine 6 (Thermodynamique)
3. 📝 Adapter pour Semaine 7 (Matériaux)
4. 🎨 Personnaliser les couleurs si nécessaire
5. 📊 Ajouter de nouveaux schémas

Consultez `ARCHITECTURE.md` pour les détails !

---

## Ressources

- **README.md** : Documentation complète
- **ARCHITECTURE.md** : Guide de l'architecture
- **PROJET_ACCOMPLI.md** : Résumé de ce qui a été créé
- **src/documents/Week5_GasLaws.js** : Exemple complet d'un PDF

---

**Bon courage avec la génération de vos PDFs ! 🎓**
