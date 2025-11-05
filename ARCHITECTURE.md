# Architecture du Projet - Générateur de PDF Chimie

## 📁 Structure du Projet

```
Chimie-polycop/
├── README.md                      # Documentation principale
├── ARCHITECTURE.md                # Ce fichier - architecture détaillée
├── package.json                   # Dépendances du projet
├── .babelrc.json                  # Configuration Babel
│
├── summaries/                     # Résumés en markdown (source)
│   ├── Semaine5_Lois_des_Gaz.md
│   ├── Semaine6_Thermodynamique.md
│   └── Semaine7_Materiaux.md
│
├── src/                          # Code source React
│   ├── styles/                   # Styles et couleurs
│   │   ├── colors.js            # Palette de couleurs EPFL
│   │   └── documentStyles.js    # Styles des documents PDF
│   │
│   ├── components/              # Composants réutilisables
│   │   ├── Boxes.js            # Encadrés (FormulaBox, ImportantBox, etc.)
│   │   ├── Table.js            # Composant tableau
│   │   ├── Diagrams.js         # Schémas SVG
│   │   └── CoverPage.js        # Page de couverture
│   │
│   ├── documents/              # Documents PDF complets
│   │   └── Week5_GasLaws.js   # PDF Semaine 5 complet
│   │
│   └── generate-main.js        # Script de génération
│
├── generate-simple.cjs          # Version simplifiée (un seul fichier)
├── generate-wrapper.cjs         # Wrapper Babel
│
└── output/                      # PDFs générés (créé automatiquement)
    └── Semaine5_Lois_des_Gaz.pdf
```

## 🎨 Système de Design

### Palette de Couleurs

Basée sur le style des polycopiés EPFL (`style exemple.pdf`) :

| Élément | Usage | Couleur | Code Hex |
|---------|-------|---------|----------|
| **Titres principaux** | H1, H2 | Bleu marine foncé | `#1e3a8a` |
| **Formules (fond)** | FormulaBox | Bleu très clair | `#eff6ff` |
| **Formules (bordure)** | FormulaBox | Bleu | `#2563eb` |
| **Important (fond)** | ImportantBox | Rouge clair | `#fef2f2` |
| **Important (bordure)** | ImportantBox | Rouge | `#dc2626` |
| **Exemples (fond)** | ExampleBox | Orange clair | `#fff7ed` |
| **Exemples (bordure)** | ExampleBox | Orange | `#ea580c` |
| **Avertissements (fond)** | WarningBox | Jaune clair | `#fefce8` |
| **Avertissements (bordure)** | WarningBox | Jaune | `#ca8a04` |
| **Texte principal** | Paragraphes | Noir grisâtre | `#1f2937` |
| **Texte secondaire** | Notes, légendes | Gris | `#6b7280` |

### Hiérarchie Typographique

```
H1 : 24pt, gras, bleu marine, bordure inférieure
H2 : 18pt, gras, bleu marine
H3 : 14pt, gras, bleu marine
H4 : 12pt, gras, texte normal
Body : 11pt, Helvetica
Code/Formules : 12pt, Courier
```

## 🧩 Composants Disponibles

### 1. Encadrés (Boxes.js)

#### FormulaBox
```javascript
<FormulaBox title="Loi des gaz parfaits :">
  PV = nRT
</FormulaBox>
```
- Fond bleu clair
- Bordure bleue à gauche
- Texte centré en Courier

#### ImportantBox
```javascript
<ImportantBox title="⚠️ IMPORTANT :">
  Toujours utiliser la température en Kelvin !
</ImportantBox>
```
- Fond rouge clair
- Bordure rouge à gauche
- Pour les informations critiques

#### ExampleBox
```javascript
<ExampleBox title="Exemple pratique :">
  <FormulaBox>Si P₁ = 1 atm...</FormulaBox>
</ExampleBox>
```
- Fond orange clair
- Bordure orange à gauche
- Pour les exemples et applications

#### InfoBox
```javascript
<InfoBox title="Contexte :">
  <Text>Cette formule permet de...</Text>
</InfoBox>
```
- Fond bleu ciel
- Pour les informations contextuelles

### 2. Tableaux (Table.js)

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
- En-tête avec fond gris
- Bordures grises
- Responsive

### 3. Schémas (Diagrams.js)

#### AtomDiagram
```javascript
<AtomDiagram />
```
- Schéma d'atome avec orbites
- Utilisé sur la page de couverture

#### BoyleLawDiagram
```javascript
<BoyleLawDiagram />
```
- Courbe hyperbolique P vs V
- Illustre la loi de Boyle

#### CharlesLawDiagram
```javascript
<CharlesLawDiagram />
```
- Droite V vs T passant par le zéro absolu
- Illustre la loi de Charles

#### MaxwellDistribution
```javascript
<MaxwellDistribution />
```
- Distribution des vitesses moléculaires
- Deux courbes pour différentes températures

#### BandGapDiagram
```javascript
<BandGapDiagram />
```
- Diagramme des bandes d'énergie
- Conducteur, semiconducteur, isolant

#### PeriodicTableSimple
```javascript
<PeriodicTableSimple />
```
- Tableau périodique simplifié
- Blocs s, p, d, f colorés

### 4. Page de Couverture (CoverPage.js)

```javascript
<CoverPage
  week="Semaine 5"
  title="Lois des Gaz"
  date="31 octobre 2025"
/>
```
- Style EPFL
- Schéma d'atome centré
- Informations de l'auteur

## 📚 Structure d'un Document PDF

### Exemple complet (Week5_GasLaws.js)

```javascript
import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles';
import { CoverPage } from '../components/CoverPage';
import { FormulaBox, ImportantBox } from '../components/Boxes';
import { Table } from '../components/Table';
import { BoyleLawDiagram } from '../components/Diagrams';

const Week5GasLaws = () => (
  <Document>
    {/* Page de couverture */}
    <CoverPage
      week="Semaine 5"
      title="Lois des Gaz"
      date="31 octobre 2025"
    />

    {/* Table des matières */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>Table des Matières</Text>
      {/* ... */}
    </Page>

    {/* Contenu */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>1. INTRODUCTION AUX GAZ</Text>

      <Text style={styles.h2}>1.1 Nature des Gaz</Text>

      <InfoBox title="Définition :">
        {/* ... */}
      </InfoBox>

      <FormulaBox title="Formule :">
        P = F/A
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[ /* ... */ ]}
      />

      <BoyleLawDiagram />
    </Page>
  </Document>
);

export default Week5GasLaws;
```

## 🔧 Configuration Technique

### Dépendances Principales

```json
{
  "@react-pdf/renderer": "^3.1.14",  // Générateur PDF
  "react": "^18.2.0",                // Framework
  "@babel/register": "^7.22.15",     // Transpilation JSX
  "@babel/preset-react": "^7.22.15"  // Preset React
}
```

### Configuration Babel (.babelrc.json)

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": { "node": "current" }
    }],
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}
```

## 🎯 Bonnes Pratiques

### 1. Organisation du Contenu

- **Une page par section majeure** : Évite les coupures de page au milieu d'un concept
- **Grouper les informations liées** : Formules, tableaux et schémas ensemble
- **Progression logique** : Définition → Formule → Exemple → Application

### 2. Utilisation des Encadrés

```javascript
// ✓ BON
<ImportantBox>
  Information critique courte et claire
</ImportantBox>

// ✗ MAUVAIS
<ImportantBox>
  Trop de texte qui devient difficile à lire et perd son impact...
</ImportantBox>
```

### 3. Tableaux

```javascript
// ✓ BON : Colonnes équilibrées
<Table
  headers={['Variable', 'Signification', 'Unités']}
  rows={[...]}
/>

// ✗ MAUVAIS : Trop de colonnes (devient illisible)
<Table
  headers={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
  rows={[...]}
/>
```

### 4. Schémas SVG

```javascript
// ✓ BON : Utiliser les couleurs du thème
<Circle fill={colors.schemaBlue} />

// ✓ BON : Taille appropriée (200-300px de large)
<Svg width="250" height="150" viewBox="0 0 250 150">

// ✗ MAUVAIS : Couleurs arbitraires
<Circle fill="#ff00ff" />
```

## 🚀 Création d'un Nouveau Document

### Étapes

1. **Créer le fichier** : `src/documents/WeekX_Topic.js`

2. **Structure de base** :
```javascript
import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles';
import { CoverPage } from '../components/CoverPage';

const WeekXTopic = () => (
  <Document>
    <CoverPage
      week="Semaine X"
      title="Titre du Chapitre"
      date="Date"
    />

    <Page size="A4" style={styles.page}>
      {/* Contenu */}
    </Page>
  </Document>
);

export default WeekXTopic;
```

3. **Ajouter au générateur** : Importer et ajouter dans `src/generate-main.js`

### Checklist pour un Nouveau Document

- [ ] Page de couverture avec titre approprié
- [ ] Table des matières
- [ ] Au moins un schéma illustratif
- [ ] Formules dans des FormulaBox
- [ ] Tableaux pour les données structurées
- [ ] Exemples dans des ExampleBox
- [ ] Points importants dans des ImportantBox
- [ ] Page de résumé/formulaire
- [ ] Footer avec attribution EPFL

## 📊 Métriques de Qualité

### Un Bon PDF Doit :

✓ Avoir une hiérarchie claire (H1, H2, H3)
✓ Utiliser les couleurs de manière cohérente
✓ Inclure des schémas pour les concepts visuels
✓ Avoir des exemples concrets
✓ Être aéré (marges, espacements)
✓ Utiliser des tableaux pour les comparaisons
✓ Avoir une pagination logique

### Anti-patterns

✗ Texte trop dense sans respiration
✗ Manque de hiérarchie visuelle
✗ Schémas trop petits ou illisibles
✗ Couleurs incohérentes
✗ Formules mal formatées
✗ Tableaux débordants

## 🔍 Dépannage

### Problème : Texte coupé

**Solution** : Utiliser `<View wrap={false}>` pour garder ensemble

```javascript
<View wrap={false}>
  <Text style={styles.h2}>Titre</Text>
  <FormulaBox>Formule</FormulaBox>
</View>
```

### Problème : Tableau trop large

**Solution** : Réduire le nombre de colonnes ou utiliser des abréviations

### Problème : Police non trouvée

**Solution** : Utiliser uniquement Helvetica, Courier, ou Times (polices standard)

## 📝 Notes de Développement

### Limitations de @react-pdf/renderer

- Pas de CSS Grid
- Flexbox limité
- Pas de media queries
- SVG basique seulement
- Pas de JavaScript dynamique dans le PDF

### Optimisations

- Réutiliser les composants
- Définir les styles une fois
- Utiliser des constantes pour les couleurs
- Minimiser les calculs dans le rendu

---

**Architecture créée pour les polycopiés de chimie EPFL**
**Dr. Arne Seitz - BioImaging & Optics Platform (BIOP)**
