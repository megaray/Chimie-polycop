# Générateur de PDF - Polycopiés de Chimie EPFL

Ce projet génère des PDFs stylisés à partir des résumés de cours de chimie, en utilisant React et @react-pdf/renderer.

## 📋 Caractéristiques

- **Design professionnel** basé sur le style des polycopiés EPFL
- **Codes couleur cohérents** :
  - 🔵 Bleu marine pour les titres et formules
  - 🔴 Rouge pour les éléments importants
  - 🟠 Orange pour les exemples
  - 🟡 Jaune pour les avertissements
- **Schémas SVG intégrés** pour illustrer les concepts
- **Tableaux formatés** pour les données et comparaisons
- **Formules mathématiques** dans des encadrés dédiés

## 🚀 Installation

```bash
# Installer les dépendances
npm install
```

## 📝 Génération des PDFs

```bash
# Générer tous les PDFs
npm run generate
```

Les PDFs seront créés dans le dossier `output/`.

## 📚 Documents disponibles

### Semaine 5 - Lois des Gaz
- Introduction aux gaz et leurs propriétés
- Lois de Boyle, Charles, et Gay-Lussac
- Loi des gaz parfaits (PV = nRT)
- Loi de Dalton des pressions partielles
- Théorie cinétique des gaz
- Distribution de Maxwell des vitesses
- Schémas : Courbe de Boyle, Loi de Charles, Distribution de Maxwell

### Semaine 6 - Thermodynamique (à venir)
- Enthalpie et énergie libre de Gibbs
- Capacités calorifiques
- Changements de phase
- Thermochimie

### Semaine 7 - Matériaux (à venir)
- Tableau périodique et tendances
- Hydrures et oxydes
- Semiconducteurs
- Supraconducteurs

## 🎨 Structure du projet

```
Chimie-polycop/
├── package.json
├── README.md
├── summaries/                  # Résumés en markdown
│   ├── Semaine5_Lois_des_Gaz.md
│   ├── Semaine6_Thermodynamique.md
│   └── Semaine7_Materiaux.md
├── src/
│   ├── generate.js            # Script de génération
│   ├── components/            # Composants React réutilisables
│   │   ├── Boxes.js          # Encadrés (formules, exemples, important)
│   │   ├── Table.js          # Tableaux
│   │   ├── Diagrams.js       # Schémas SVG
│   │   └── CoverPage.js      # Page de couverture
│   ├── documents/            # Documents PDF complets
│   │   └── Week5_GasLaws.js
│   └── styles/               # Styles et couleurs
│       ├── colors.js
│       └── documentStyles.js
└── output/                    # PDFs générés
    └── Semaine5_Lois_des_Gaz.pdf
```

## 🎨 Palette de couleurs

Basée sur le PDF exemple EPFL :

| Élément | Couleur | Code |
|---------|---------|------|
| Titres principaux | Bleu marine | #1e3a8a |
| Formules (fond) | Bleu clair | #eff6ff |
| Formules (bordure) | Bleu | #2563eb |
| Important (fond) | Rouge clair | #fef2f2 |
| Important (bordure) | Rouge | #dc2626 |
| Exemples (fond) | Orange clair | #fff7ed |
| Exemples (bordure) | Orange | #ea580c |

## 🛠️ Personnalisation

### Ajouter un nouveau document

1. Créer un nouveau fichier dans `src/documents/`, par exemple `Week6_Thermodynamics.js`
2. Importer les composants nécessaires
3. Structurer le contenu avec les composants existants
4. Ajouter l'import et la génération dans `src/generate.js`

### Créer un nouveau schéma

1. Ouvrir `src/components/Diagrams.js`
2. Créer une fonction qui retourne un composant `<Svg>`
3. Utiliser les primitives SVG : `<Circle>`, `<Line>`, `<Rect>`, `<Path>`, etc.
4. Utiliser les couleurs définies dans `src/styles/colors.js`

## 📖 Utilisation des composants

### FormulaBox
```javascript
<FormulaBox title="Loi des gaz parfaits :">
  PV = nRT
</FormulaBox>
```

### ImportantBox
```javascript
<ImportantBox title="⚠️ Attention :">
  Toujours utiliser la température en Kelvin !
</ImportantBox>
```

### ExampleBox
```javascript
<ExampleBox title="Exemple pratique :">
  <FormulaBox>
    Si P₁ = 1 atm et V₁ = 10 L...
  </FormulaBox>
</ExampleBox>
```

### Table
```javascript
<Table
  headers={['Variable', 'Signification', 'Unités']}
  rows={[
    ['P', 'Pression', 'Pa, atm'],
    ['V', 'Volume', 'L, m³'],
    ['T', 'Température', 'K']
  ]}
/>
```

## 📝 Notes de développement

- Les PDFs sont générés avec `@react-pdf/renderer`
- Les schémas utilisent SVG pour une qualité vectorielle
- Les formules mathématiques utilisent des caractères Unicode (₁, ₂, ², ³, etc.)
- Le format A4 est utilisé par défaut

## 🤝 Contribution

Pour ajouter de nouveaux résumés ou améliorer les existants :

1. Créer ou modifier les fichiers dans `summaries/`
2. Créer le document PDF correspondant dans `src/documents/`
3. Ajouter des schémas pertinents dans `src/components/Diagrams.js`
4. Tester la génération avec `npm run generate`

## 📄 Licence

Ce projet est créé pour les polycopiés de chimie de l'EPFL.

---

**Auteur** : Dr. Arne Seitz - BioImaging & Optics Platform (BIOP)
**Institution** : École Polytechnique Fédérale de Lausanne (EPFL)
