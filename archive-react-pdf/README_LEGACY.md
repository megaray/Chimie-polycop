# ⚠️ ANCIEN SYSTÈME @react-pdf/renderer (OBSOLÈTE)

Ce dossier contient l'ancien système de génération de PDFs utilisant **@react-pdf/renderer**.

## ❌ Pourquoi ce système a été abandonné

### Problèmes Rencontrés

1. **Formules mathématiques illisibles**
   - Pas de support natif pour LaTeX
   - Caractères spéciaux qui se chevauchent
   - Indices et exposants mal formatés

2. **Problèmes typographiques**
   - Caractères Unicode mal rendus
   - Texte qui se "merge" ensemble
   - Espacement incohérent

3. **Format A4 approximatif**
   - Dimensions pas exactement 210mm × 297mm
   - Marges incohérentes
   - Problèmes de pagination

4. **Complexité de maintenance**
   - Nécessite transpilation JSX (Babel/esbuild)
   - Structure de code complexe (React components)
   - Difficile à personnaliser

5. **Diagrammes limités**
   - SVG support basique
   - Qualité de rendu variable

## ✅ Solution Adoptée

Migration vers **HTML + MathJax** (voir dossier `2-html-a4/`)

### Avantages du Nouveau Système

✅ Formules parfaites avec MathJax
✅ Format A4 exact (CSS @page)
✅ Personnalisation facile (CSS)
✅ Pas de build nécessaire
✅ Génération simple (Ctrl+P)

## 📁 Contenu de ce Dossier

```
archive-react-pdf/
├── src/
│   ├── components/        # Composants React
│   ├── documents/         # Fichiers de génération des 3 semaines
│   ├── styles/           # Styles @react-pdf
│   └── generate-main.js  # Script de génération
│
├── output/               # PDFs générés avec @react-pdf (obsolètes)
├── output-html/         # Première tentative HTML (remplacée par 2-html-a4/)
├── generate-simple.cjs  # Tentatives de simplification
└── generate-wrapper.cjs # Wrapper Babel
```

## 🔧 Si Vous Voulez Quand Même L'Utiliser

**⚠️ Non recommandé** - Le système actuel (HTML) est bien meilleur.

### Installation

```bash
npm install
```

### Génération

```bash
npx babel-node src/generate-main.js
```

Les PDFs seront dans `output/`.

### Limitations

- Formules mathématiques mal rendues
- Caractères qui se chevauchent
- Format A4 approximatif
- Nécessite Node.js + Babel

## 📚 Documentation Legacy

Les anciens guides sont toujours disponibles :

- **ARCHITECTURE.md** - Architecture technique (déplacé vers `4-documentation/`)
- **DEMARRAGE_RAPIDE.md** - Guide de démarrage (déplacé vers `4-documentation/`)
- **PROJET_ACCOMPLI.md** - Historique (déplacé vers `4-documentation/`)

## 🎯 Recommandation

**Utilisez le système HTML + MathJax** dans le dossier `2-html-a4/` pour :
- ✅ Formules parfaites
- ✅ Format A4 exact
- ✅ Simplicité d'utilisation
- ✅ Meilleur rendu

---

**Ce système est conservé à titre d'archive uniquement.**

Pour générer des PDFs, utilisez `2-html-a4/` ! 🚀
