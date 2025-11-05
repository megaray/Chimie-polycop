# 📚 Polycopié de Chimie Générale - EPFL

Résumés de cours de chimie générale pour les étudiants de l'École Polytechnique Fédérale de Lausanne (EPFL).

**Dr. Arne Seitz** - BioImaging & Optics Platform (BIOP)

---

## 🎯 Comment Générer vos PDFs A4

### ⚡ Méthode Rapide (Recommandée)

1. **Allez dans** `2-html-a4/`
2. **Double-cliquez** sur un fichier HTML (ex: `Semaine5_Lois_des_Gaz.html`)
3. **Attendez 2-3 secondes** que les formules s'affichent
4. **Imprimez** : `Ctrl+P` (Windows/Linux) ou `Cmd+P` (Mac)
5. **Configurez** :
   - Destination : **Enregistrer au format PDF**
   - Format : **A4**
   - Échelle : **100%**
   - ☑ **Graphiques d'arrière-plan** (important !)
6. **Enregistrez** votre PDF

### 📖 Guide Complet

Voir [`4-documentation/HTML_PDF_GUIDE.md`](4-documentation/HTML_PDF_GUIDE.md) pour plus de détails.

---

## 📁 Structure du Projet

```
Chimie-polycop/
│
├── 1-summaries/              📝 Résumés markdown sources
│   ├── Semaine5_Lois_des_Gaz.md
│   ├── Semaine6_Thermodynamique.md
│   └── Semaine7_Materiaux.md
│
├── 2-html-a4/                ⭐ FICHIERS HTML POUR PDF (UTILISEZ CECI)
│   ├── README.md                # Guide rapide
│   ├── styles.css               # Styles A4 + EPFL
│   ├── Semaine5_Lois_des_Gaz.html
│   ├── Semaine6_Thermodynamique.html
│   └── Semaine7_Materiaux.html
│
├── 3-generated-pdfs/         📄 PDFs générés (exemples)
│   ├── Semaine5_Lois_des_Gaz.pdf
│   ├── Semaine6_Thermodynamique.pdf
│   └── Semaine7_Materiaux.pdf
│
├── 4-documentation/          📚 Documentation et guides
│   ├── HTML_PDF_GUIDE.md        # Guide complet HTML + MathJax
│   ├── ARCHITECTURE.md          # Architecture technique
│   ├── DEMARRAGE_RAPIDE.md      # Guide de démarrage (legacy)
│   └── PROJET_ACCOMPLI.md       # Historique du projet
│
├── 5-course-pdfs/            📖 Fichiers PDF du cours EPFL
│   ├── Chem_Week5_Lecture00.pdf
│   ├── Chem_Week6_Lecture01.pdf
│   ├── Chem_Week7_Lecture01.pdf
│   └── style_exemple.pdf        # Guide de style EPFL
│
└── archive-react-pdf/        🗄️ Ancien système @react-pdf (OBSOLÈTE)
    ├── src/                     # Code React-PDF (ne plus utiliser)
    └── README_LEGACY.md         # Explications sur l'ancien système
```

---

## 📋 Contenu des Résumés

### Semaine 5 : Lois des Gaz
- Loi de Boyle-Mariotte
- Loi de Charles
- Loi d'Avogadro
- Loi des gaz parfaits (PV = nRT)
- Loi de Dalton
- Théorie cinétique des gaz
- Distribution de Maxwell-Boltzmann
- Gaz réels et équation de Van der Waals

### Semaine 6 : Thermodynamique
- Premier principe de la thermodynamique
- Enthalpie (H = U + PV)
- Capacités calorifiques (Cp, Cv)
- Enthalpies de vaporisation, fusion, sublimation
- Thermochimie
- Enthalpies de combustion
- Courbes de chauffage

### Semaine 7 : Matériaux
- Énergie libre de Gibbs (ΔG = ΔH - TΔS)
- Tableau périodique et configuration électronique
- Tendances périodiques (rayon, ionisation, électronégativité)
- Hydrures (salin, métallique, moléculaire)
- Oxydes (basique, amphotère, acide)
- Théorie des bandes
- Semiconducteurs (type n, type p, jonctions p-n)
- Supraconducteurs

---

## ✨ Fonctionnalités du Système HTML

✅ **Formules mathématiques parfaites** - MathJax rend LaTeX professionnellement
✅ **Format A4 exact** - Dimensions 210mm × 297mm pour impression
✅ **Couleurs EPFL** - Bleu (#1e3a8a), Rouge (#dc2626), Orange (#ea580c)
✅ **Encadrés colorés** - Formules, exemples, avertissements, informations
✅ **Formules chimiques** - Support complet avec mhchem (`\ce{H2O}`)
✅ **Diagrammes SVG** - Graphiques nets et vectoriels
✅ **Tableaux professionnels** - Formatage cohérent
✅ **Typographie impeccable** - Aucun chevauchement de caractères

---

## 🚀 Démarrage Rapide

### Pour Générer un PDF

```bash
# 1. Ouvrir un fichier HTML
cd 2-html-a4/
open Semaine5_Lois_des_Gaz.html  # Mac
xdg-open Semaine5_Lois_des_Gaz.html  # Linux
start Semaine5_Lois_des_Gaz.html  # Windows

# 2. Dans le navigateur : Ctrl+P → Enregistrer PDF
```

### Pour Modifier les Styles

Éditez `2-html-a4/styles.css` pour personnaliser :
- Couleurs
- Polices
- Espacements
- Marges

### Pour Modifier le Contenu

Éditez directement les fichiers HTML dans `2-html-a4/` avec votre éditeur préféré.

---

## 📊 Comparaison des Systèmes

| Aspect | React-PDF (obsolète) | HTML + MathJax (actuel) |
|--------|---------------------|------------------------|
| Formules | Texte simple ❌ | LaTeX parfait ✅ |
| Lisibilité | Chevauchement ❌ | Impeccable ✅ |
| Format A4 | Approximatif ❌ | Exact (210×297mm) ✅ |
| Génération | `npm run generate` | Ctrl+P dans navigateur ✅ |
| Personnalisation | Limitée ❌ | CSS complet ✅ |
| Maintenance | Complexe ❌ | Simple ✅ |

---

## 💡 Conseils

1. **Toujours attendre** que MathJax charge (formules passent de texte à symboles)
2. **Activer "Graphiques d'arrière-plan"** pour voir les couleurs
3. **Utiliser Chrome ou Firefox** pour meilleurs résultats
4. **Format A4 + Échelle 100%** = dimensions parfaites
5. **Vérifier l'aperçu** avant d'enregistrer

---

## 🔧 Dépendances

### Pour Visualiser (navigateur moderne suffit !)
- Chrome, Firefox, Safari ou Edge
- Connexion Internet (pour charger MathJax depuis CDN)

### Pour Développement (optionnel)
```bash
npm install  # Installe jspdf, html2canvas (pour automatisation future)
```

---

## 📞 Support et Documentation

### Guides Disponibles

- **[2-html-a4/README.md](2-html-a4/README.md)** - Guide rapide pour générer des PDFs
- **[4-documentation/HTML_PDF_GUIDE.md](4-documentation/HTML_PDF_GUIDE.md)** - Guide complet avec troubleshooting
- **[4-documentation/ARCHITECTURE.md](4-documentation/ARCHITECTURE.md)** - Détails techniques (legacy)

### Problèmes Courants

| Problème | Solution |
|----------|----------|
| Formules ne s'affichent pas | Attendre 2-3 secondes que MathJax charge |
| Pas de couleurs | Activer "Graphiques d'arrière-plan" |
| Mauvaises dimensions | Format A4, Échelle 100% |
| PDF coupé | Marges "Par défaut", pas "Aucune" |

---

## 📜 Licence et Attribution

**Auteur** : Dr. Arne Seitz
**Institution** : École Polytechnique Fédérale de Lausanne (EPFL)
**Plateforme** : BioImaging & Optics Platform (BIOP)

Ce matériel pédagogique est destiné aux étudiants de l'EPFL.

---

## 🗂️ Historique du Projet

1. **Phase 1** : Résumés markdown créés à partir du cours
2. **Phase 2** : Tentative avec @react-pdf/renderer (problèmes de rendu)
3. **Phase 3** : Migration vers HTML + MathJax (système actuel) ✅

Voir `4-documentation/PROJET_ACCOMPLI.md` pour l'historique détaillé.

---

## 🎓 Pour les Étudiants

Ce projet contient des résumés complets pour vous aider à réviser. **Les fichiers à utiliser sont dans `2-html-a4/`**.

Bonne révision ! 📖✨
