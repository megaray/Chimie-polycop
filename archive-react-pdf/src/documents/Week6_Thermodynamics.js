import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles';
import { CoverPage } from '../components/CoverPage';
import { FormulaBox, ImportantBox, ExampleBox, InfoBox, WarningBox } from '../components/Boxes';
import { Table } from '../components/Table';
import { EnergyDiagram, HeatingCurveDiagram, GibbsEnergyDiagram, ATPCycleDiagram } from '../components/Diagrams';

const Week6Thermodynamics = () => (
  <Document>
    {/* Page de couverture */}
    <CoverPage
      week="Semaine 6"
      title="Thermodynamique"
      date="31 octobre 2025"
    />

    {/* Table des matières */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>Table des Matières</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.paragraph}>1. Introduction à la Thermodynamique</Text>
        <Text style={styles.paragraph}>2. Enthalpie (H)</Text>
        <Text style={styles.paragraph}>3. Capacités Calorifiques</Text>
        <Text style={styles.paragraph}>4. Enthalpie des Changements Physiques</Text>
        <Text style={styles.paragraph}>5. Thermochimie</Text>
        <Text style={styles.paragraph}>6. Enthalpie de Combustion</Text>
        <Text style={styles.paragraph}>7. Courbes de Chauffage</Text>
        <Text style={styles.paragraph}>8. Formulaire Récapitulatif</Text>
      </View>
    </Page>

    {/* Section 1: Introduction */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>1. INTRODUCTION À LA THERMODYNAMIQUE</Text>

      <Text style={styles.h2}>1.1 Rappel de la Première Loi</Text>

      <FormulaBox title="Première Loi de la Thermodynamique :">
        ΔU = q + w
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['ΔU', 'Variation d\'énergie interne', 'J (Joule)'],
          ['q', 'Chaleur échangée', 'J'],
          ['w', 'Travail effectué', 'J']
        ]}
      />

      <InfoBox title="Rappels importants :">
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>✓</Text>
          <Text style={styles.listContent}>La chaleur et le travail sont interconvertibles</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>✓</Text>
          <Text style={styles.listContent}>L'énergie interne (U) est une fonction d'état</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>✓</Text>
          <Text style={styles.listContent}>Le travail d'expansion peut être réversible ou irréversible</Text>
        </View>
      </InfoBox>

      <View style={{ marginVertical: 15, alignItems: 'center' }}>
        <EnergyDiagram />
      </View>

      <ImportantBox title="Conditions spéciales :">
        • À volume constant : ΔU = q (car w = 0){'\n'}
        • À pression constante : Introduction de l'enthalpie nécessaire
      </ImportantBox>
    </Page>

    {/* Section 2: Enthalpie */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>2. ENTHALPIE (H)</Text>

      <Text style={styles.h2}>2.1 Définition de l'Enthalpie</Text>

      <FormulaBox title="Définition :">
        H = U + PV
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['H', 'Enthalpie', 'J (Joule)'],
          ['U', 'Énergie interne', 'J'],
          ['P', 'Pression', 'Pa'],
          ['V', 'Volume', 'm³']
        ]}
      />

      <InfoBox title="Pourquoi l'enthalpie ?">
        <Text style={styles.paragraph}>
          • En chimie, beaucoup de réactions se font dans des récipients ouverts{'\n'}
          • La pression reste constante (pression atmosphérique){'\n'}
          • Les gaz peuvent se dilater contre l'atmosphère{'\n'}
          • Besoin d'une fonction d'état appropriée pour suivre l'énergie
        </Text>
      </InfoBox>

      <Text style={styles.h2}>2.2 Variation d'Enthalpie à Pression Constante</Text>

      <FormulaBox title="À pression constante :">
        ΔH = ΔU + PΔV{'\n\n'}
        Si P_ex = P :{'\n\n'}
        ΔH = q (à pression constante)
      </FormulaBox>

      <ImportantBox title="Comparaison :">
        • À volume constant : ΔU = q{'\n'}
        • À pression constante : ΔH = q
      </ImportantBox>

      <Text style={styles.h2}>2.3 Signe de ΔH</Text>

      <Table
        headers={['Type de réaction', 'Signe de ΔH', 'Signification']}
        rows={[
          ['Exothermique', 'ΔH < 0', 'Libère de la chaleur'],
          ['Endothermique', 'ΔH > 0', 'Absorbe de la chaleur']
        ]}
      />

      <ExampleBox title="Analogie du réservoir :">
        <Text style={styles.paragraph}>
          L'enthalpie est comme le niveau d'eau dans un réservoir :{'\n\n'}
          • Réaction exothermique : le niveau baisse (chaleur libérée){'\n'}
          • Réaction endothermique : le niveau monte (chaleur absorbée)
        </Text>
      </ExampleBox>
    </Page>

    {/* Section 3: Capacités Calorifiques */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>3. CAPACITÉS CALORIFIQUES</Text>

      <Text style={styles.h2}>3.1 Définitions</Text>

      <FormulaBox title="Capacités calorifiques :">
        C_v = ΔU/ΔT (à volume constant){'\n\n'}
        C_p = ΔH/ΔT (à pression constante)
      </FormulaBox>

      <Text style={styles.h2}>3.2 Relation entre C_p et C_v</Text>

      <FormulaBox title="Pour un gaz idéal :">
        C_p = C_v + nR{'\n\n'}
        Pour la capacité calorifique molaire :{'\n\n'}
        C_p,m = C_v,m + R
      </FormulaBox>

      <Text style={styles.h2}>3.3 Capacités Calorifiques des Gaz</Text>

      <Table
        headers={['Type', 'C_v,m', 'C_p,m']}
        rows={[
          ['Atomes', '(3/2)R', '(5/2)R'],
          ['Molécules linéaires', '(5/2)R', '(7/2)R'],
          ['Molécules non-linéaires', '3R', '4R']
        ]}
      />

      <InfoBox title="Explication :">
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Gaz monoatomiques :</Text>{'\n'}
          Énergie interne : U_m = (3/2)RT{'\n'}
          Donc C_v,m = (3/2)R{'\n\n'}
          <Text style={styles.bold}>Molécules linéaires :</Text>{'\n'}
          Énergie de translation + rotation{'\n'}
          C_v,m = (5/2)R{'\n\n'}
          <Text style={styles.bold}>Molécules non-linéaires :</Text>{'\n'}
          Énergie de translation + rotation (3 axes){'\n'}
          C_v,m = 3R
        </Text>
      </InfoBox>

      <Text style={styles.h2}>3.4 Contribution Vibrationnelle</Text>

      <InfoBox title="Température et modes d'énergie :">
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Basse température : Seule la translation contribue</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Température moyenne : Translation + rotation</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Haute température : Translation + rotation + vibration</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Très haute température : Dissociation (C_p très grand)</Text>
        </View>
      </InfoBox>
    </Page>

    {/* Section 4: Changements Physiques */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>4. ENTHALPIE DES CHANGEMENTS PHYSIQUES</Text>

      <Text style={styles.h2}>4.1 Enthalpie de Vaporisation (ΔH_vap)</Text>

      <InfoBox title="Définition :">
        <Text style={styles.paragraph}>
          La vaporisation est la transition d'un liquide vers un gaz.
        </Text>
      </InfoBox>

      <FormulaBox>
        ΔH_vap = H_m(vapeur) − H_m(liquide)
      </FormulaBox>

      <ExampleBox title="Exemple : Eau">
        <Text style={styles.paragraph}>
          • À 100 °C : ΔH_vap = 40.7 kJ·mol⁻¹{'\n'}
          • À 25 °C : ΔH_vap = 44.0 kJ·mol⁻¹
        </Text>
      </ExampleBox>

      <ImportantBox>
        ΔH_vap est toujours positif (processus endothermique)
      </ImportantBox>

      <Text style={styles.h2}>4.2 Enthalpie de Fusion (ΔH_fus)</Text>

      <InfoBox title="Définition :">
        <Text style={styles.paragraph}>
          La fusion est la transition d'un solide vers un liquide.
        </Text>
      </InfoBox>

      <FormulaBox>
        ΔH_fus = H_m(liquide) − H_m(solide)
      </FormulaBox>

      <ExampleBox title="Exemple : Eau">
        <Text style={styles.paragraph}>
          À 0 °C : ΔH_fus = 6.0 kJ·mol⁻¹
        </Text>
      </ExampleBox>

      <InfoBox title="Pourquoi ΔH_vap >> ΔH_fus ?">
        <Text style={styles.paragraph}>
          • <Text style={styles.bold}>Vaporisation :</Text> séparation complète des molécules,
          augmentation importante de l'énergie cinétique{'\n\n'}
          • <Text style={styles.bold}>Fusion :</Text> molécules restent proches, forces
          intermoléculaires similaires au solide
        </Text>
      </InfoBox>

      <Text style={styles.h2}>4.3 Enthalpie de Sublimation (ΔH_sub)</Text>

      <InfoBox title="Définition :">
        <Text style={styles.paragraph}>
          La sublimation est la transition directe d'un solide vers un gaz.
        </Text>
      </InfoBox>

      <FormulaBox title="Relation fondamentale :">
        ΔH_sub = ΔH_fus + ΔH_vap
      </FormulaBox>

      <ExampleBox title="Exemples de sublimation :">
        <Text style={styles.paragraph}>
          • Givre qui disparaît par temps froid et sec{'\n'}
          • Glace sèche (CO₂ solide){'\n'}
          • Iode solide
        </Text>
      </ExampleBox>
    </Page>

    {/* Section 4.4: Forces Intermoléculaires */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h2}>4.4 Forces Intermoléculaires et ΔH_vap</Text>

      <Table
        headers={['Substance', 'Formule', 'ΔH_fus / ΔH_vap (kJ·mol⁻¹)']}
        rows={[
          ['Argon', 'Ar', '1.2 / 6.5'],
          ['Méthane', 'CH₄', '0.94 / 8.2'],
          ['Acétone', 'CH₃COCH₃', '5.72 / 29.1'],
          ['Méthanol*', 'CH₃OH', '3.16 / 35.3'],
          ['Ammoniac*', 'NH₃', '5.65 / 23.4'],
          ['Eau*', 'H₂O', '6.01 / 40.7']
        ]}
      />

      <Text style={{ fontSize: 9, color: '#6b7280', marginTop: 5 }}>
        *Molécules avec liaisons hydrogène
      </Text>

      <ImportantBox>
        Les substances avec liaisons hydrogène ont des ΔH_vap plus élevés.
      </ImportantBox>

      <View style={{ marginVertical: 20, alignItems: 'center' }}>
        <HeatingCurveDiagram />
      </View>
    </Page>

    {/* Section 5: Thermochimie */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>5. THERMOCHIMIE</Text>

      <Text style={styles.h2}>5.1 Définitions</Text>

      <InfoBox title="Thermochimie :">
        <Text style={styles.paragraph}>
          Branche de la thermodynamique qui étudie la chaleur absorbée ou dégagée
          lors de réactions chimiques.
        </Text>
      </InfoBox>

      <InfoBox title="Équation thermochimique :">
        <Text style={styles.paragraph}>
          Équation chimique accompagnée de la variation d'enthalpie de réaction.
        </Text>
      </InfoBox>

      <ExampleBox>
        <FormulaBox>
          CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l){'\n\n'}
          ΔH = −890 kJ
        </FormulaBox>
      </ExampleBox>

      <Text style={styles.h2}>5.2 Propriétés de ΔH</Text>

      <Text style={styles.h3}>1. Stoichiométrie</Text>
      <Text style={styles.paragraph}>
        ΔH correspond aux coefficients de l'équation.
      </Text>

      <ExampleBox>
        <FormulaBox>
          CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l){'\n'}
          ΔH = −890 kJ{'\n\n'}
          2 CH₄(g) + 4 O₂(g) → 2 CO₂(g) + 4 H₂O(l){'\n'}
          ΔH = −1780 kJ
        </FormulaBox>
      </ExampleBox>

      <Text style={styles.h3}>2. Réaction inverse</Text>
      <Text style={styles.paragraph}>
        Le signe de ΔH change pour la réaction inverse.
      </Text>

      <ExampleBox>
        <FormulaBox>
          CO₂(g) + 2 H₂O(l) → CH₄(g) + 2 O₂(g){'\n'}
          ΔH = +890 kJ
        </FormulaBox>
      </ExampleBox>

      <Text style={styles.h3}>3. États physiques</Text>

      <WarningBox>
        Toujours spécifier l'état de chaque substance !
      </WarningBox>

      <ExampleBox>
        <FormulaBox>
          CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g){'\n'}
          ΔH = −802 kJ{'\n\n'}
          CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l){'\n'}
          ΔH = −890 kJ{'\n\n'}
          Différence : 88 kJ = 2 × ΔH_vap(H₂O)
        </FormulaBox>
      </ExampleBox>
    </Page>

    {/* Section 5.3: Relation ΔH et ΔU */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h2}>5.3 Relation entre ΔH et ΔU</Text>

      <FormulaBox title="Formule générale :">
        ΔH = ΔU + Δn_gaz RT
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['Δn_gaz', 'Variation du nombre de moles de gaz', 'mol'],
          ['', 'Δn_gaz = n_final − n_initial', ''],
          ['R', 'Constante des gaz', '8.314 J·K⁻¹·mol⁻¹'],
          ['T', 'Température', 'K']
        ]}
      />

      <InfoBox title="Cas particuliers :">
        <Text style={styles.paragraph}>
          • Si aucun gaz n'est produit ou consommé : ΔH ≈ ΔU{'\n'}
          • Si Δn_gaz ≠ 0 : la différence peut être significative
        </Text>
      </InfoBox>

      <Text style={styles.h3}>Dérivation :</Text>
      <FormulaBox>
        Puisque H = U + PV et PV = nRT pour un gaz idéal :{'\n\n'}
        H_initial = U_initial + n_initial RT{'\n'}
        H_final = U_final + n_final RT{'\n\n'}
        ΔH = ΔU + (n_final − n_initial)RT{'\n'}
        ΔH = ΔU + Δn_gaz RT
      </FormulaBox>
    </Page>

    {/* Section 6: Combustion */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>6. ENTHALPIE DE COMBUSTION</Text>

      <Text style={styles.h2}>6.1 Définition</Text>

      <InfoBox title="Enthalpie standard de combustion (ΔH_c°) :">
        <Text style={styles.paragraph}>
          Variation d'enthalpie par mole d'une substance brûlée dans une réaction
          de combustion complète dans les conditions standard.
        </Text>
      </InfoBox>

      <ImportantBox title="Conditions standard :">
        • Pression : exactement 1 bar{'\n'}
        • Température : 298 K (25 °C){'\n'}
        • Symbole : °
      </ImportantBox>

      <Text style={styles.h2}>6.2 Tableau des Enthalpies de Combustion</Text>

      <Table
        headers={['Substance', 'Formule', 'ΔH_c° (kJ·mol⁻¹)']}
        rows={[
          ['Hydrogène', 'H₂(g)', '−286'],
          ['Méthane', 'CH₄(g)', '−890'],
          ['Éthanol', 'CH₃CH₂OH(l)', '−1368'],
          ['Propane', 'CH₃CH₂CH₃(g)', '−2220'],
          ['Glucose', 'C₆H₁₂O₆(s)', '−2808'],
          ['Benzène', 'C₆H₆(l)', '−3268'],
          ['Octane', 'C₈H₁₈(l)', '−5471']
        ]}
      />

      <Text style={styles.h2}>6.3 Enthalpie Spécifique</Text>

      <FormulaBox title="Enthalpie spécifique :">
        Enthalpie spécifique = ΔH° / masse{'\n\n'}
        Unités : kJ·g⁻¹
      </FormulaBox>

      <InfoBox title="Utilité :">
        <Text style={styles.paragraph}>
          • Comparaison de l'efficacité des carburants{'\n'}
          • Choix du carburant pour une application donnée{'\n'}
          • Transport et stockage d'énergie
        </Text>
      </InfoBox>
    </Page>

    {/* Section 6.4: Carburants Renouvelables */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h2}>6.4 Carburants Renouvelables</Text>

      <Text style={styles.h3}>1. Hydrogène (H₂)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Source : électrolyse de l'eau</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Enthalpie spécifique très élevée : 142 kJ·g⁻¹</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Produit uniquement H₂O lors de la combustion</Text>
      </View>

      <Text style={styles.h3}>2. Éthanol (CH₃CH₂OH)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Source : fermentation de biomasse (maïs, canne à sucre)</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Utilisé comme additif à l'essence (~10% en volume)</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>1 boisseau de maïs (30 L) → 10 L d'éthanol</Text>
      </View>

      <Text style={styles.h3}>3. Méthane (CH₄)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Source : digestion anaérobie de déchets biologiques</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Stations d'épuration : utilisent le méthane produit</Text>
      </View>

      <Text style={styles.h3}>4. Biodiesel</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Source : algues, huile végétale</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Densité énergétique élevée</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Plus visqueux que le diesel traditionnel</Text>
      </View>

      <ImportantBox title="Avantages et inconvénients :">
        ✓ Renouvelables{'\n'}
        ✓ Réduisent la dépendance aux combustibles fossiles{'\n'}
        ✗ Produisent du CO₂ (effet de serre){'\n'}
        ✗ Défis techniques (stockage, transport)
      </ImportantBox>
    </Page>

    {/* Section 7: Courbes de Chauffage */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>7. COURBES DE CHAUFFAGE</Text>

      <Text style={styles.h2}>7.1 Interprétation d'une Courbe de Chauffage</Text>

      <InfoBox>
        <Text style={styles.paragraph}>
          • Axe horizontal : Énergie fournie sous forme de chaleur (q){'\n'}
          • Axe vertical : Température (T)
        </Text>
      </InfoBox>

      <Text style={styles.h3}>Régions de la courbe :</Text>

      <Text style={styles.h4}>1. Chauffage du solide (Pente raide)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Molécules oscillent autour de positions fixes</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Température augmente</Text>
      </View>

      <Text style={styles.h4}>2. Fusion (Plateau horizontal)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Température constante</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Toute l'énergie sert à briser les forces d'attraction</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Durée du plateau ∝ ΔH_fus</Text>
      </View>

      <Text style={styles.h4}>3. Chauffage du liquide (Pente moins raide)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Molécules se déplacent librement</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Pente plus faible → capacité calorifique plus élevée</Text>
      </View>

      <Text style={styles.h4}>4. Vaporisation (Plateau horizontal long)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Température constante</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Toute l'énergie sert à séparer complètement les molécules</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Durée du plateau ∝ ΔH_vap (beaucoup plus long que fusion)</Text>
      </View>

      <Text style={styles.h4}>5. Chauffage de la vapeur (Pente raide)</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Molécules libres</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Température augmente</Text>
      </View>
    </Page>

    {/* Section 7.2: Pentes et Capacités */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h2}>7.2 Pentes et Capacités Calorifiques</Text>

      <FormulaBox title="Relation pente-capacité calorifique :">
        Pente = ΔT/Δq = 1/C
      </FormulaBox>

      <InfoBox>
        <Text style={styles.paragraph}>
          • <Text style={styles.bold}>Pente raide</Text> → Faible capacité calorifique{'\n'}
          • <Text style={styles.bold}>Pente douce</Text> → Grande capacité calorifique
        </Text>
      </InfoBox>

      <ImportantBox title="Ordre pour l'eau :">
        C_solide &lt; C_vapeur &lt; C_liquide
      </ImportantBox>

      <InfoBox title="Pourquoi le liquide a une grande capacité calorifique ?">
        <Text style={styles.paragraph}>
          • Présence de liaisons hydrogène qui se brisent et se reforment{'\n'}
          • Nécessite plus d'énergie pour augmenter la température
        </Text>
      </InfoBox>
    </Page>

    {/* Section 8: Formulaire */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>8. FORMULAIRE RÉCAPITULATIF</Text>

      <Text style={styles.h2}>8.1 Fonctions d'État</Text>

      <Table
        headers={['Fonction', 'Formule', 'Conditions']}
        rows={[
          ['Enthalpie', 'H = U + PV', 'Toujours'],
          ['Variation d\'enthalpie', 'ΔH = ΔU + PΔV', 'Pression constante'],
          ['Chaleur à P constant', 'ΔH = q', 'Pression constante'],
          ['Chaleur à V constant', 'ΔU = q', 'Volume constant']
        ]}
      />

      <Text style={styles.h2}>8.2 Capacités Calorifiques</Text>

      <Table
        headers={['Type', 'Formule', 'Pour gaz idéal']}
        rows={[
          ['À volume constant', 'C_v = ΔU/ΔT', ''],
          ['À pression constante', 'C_p = ΔH/ΔT', ''],
          ['Relation', 'C_p,m = C_v,m + R', '']
        ]}
      />

      <Text style={styles.h3}>Valeurs pour différents types de molécules :</Text>

      <Table
        headers={['Type', 'C_v,m', 'C_p,m']}
        rows={[
          ['Atomes', '(3/2)R', '(5/2)R'],
          ['Molécules linéaires', '(5/2)R', '(7/2)R'],
          ['Molécules non-linéaires', '3R', '4R']
        ]}
      />

      <Text style={styles.h2}>8.3 Changements de Phase</Text>

      <Table
        headers={['Transition', 'Formule', 'Signe']}
        rows={[
          ['Vaporisation', 'ΔH_vap = H_m(vapeur) − H_m(liquide)', '+'],
          ['Condensation', 'ΔH_cond = −ΔH_vap', '−'],
          ['Fusion', 'ΔH_fus = H_m(liquide) − H_m(solide)', '+'],
          ['Congélation', 'ΔH_frz = −ΔH_fus', '−'],
          ['Sublimation', 'ΔH_sub = ΔH_fus + ΔH_vap', '+']
        ]}
      />

      <Text style={styles.h2}>8.4 Relations ΔH - ΔU</Text>

      <FormulaBox>
        ΔH = ΔU + Δn_gaz RT{'\n\n'}
        où Δn_gaz = (moles de gaz produit) − (moles de gaz réactif)
      </FormulaBox>
    </Page>

    {/* Page finale: Conseils */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>CONSEILS POUR LA RÉSOLUTION DE PROBLÈMES</Text>

      <Text style={styles.h2}>✓ Liste de Vérification</Text>

      <View style={styles.listItem}>
        <Text style={styles.listBullet}>1.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Identifier le type de processus</Text> (volume ou pression constant)
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>2.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Choisir la fonction appropriée</Text> (ΔU ou ΔH)
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>3.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Vérifier les états physiques</Text> de toutes les substances
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>4.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Utiliser les conditions standard</Text> si ΔH° est demandé
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>5.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Attention aux signes</Text> (exothermique vs endothermique)
        </Text>
      </View>

      <Text style={styles.h2}>⚠️ Erreurs Courantes</Text>

      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Confondre ΔH et ΔU</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Oublier de spécifier les états physiques</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Utiliser la mauvaise capacité calorifique (C_p vs C_v)</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Se tromper de signe pour les processus inverses</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Négliger Δn_gaz dans la relation ΔH = ΔU + Δn_gaz RT</Text>
      </View>

      <Text style={styles.h2}>APPLICATIONS PRATIQUES</Text>

      <View style={styles.listItem}>
        <Text style={styles.listBullet}>1.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Calorimétrie :</Text> Mesure de ΔH par calorimètre à bombe
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>2.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Métabolisme :</Text> Combustion du glucose dans le corps
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>3.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Carburants :</Text> Comparaison de l'efficacité énergétique
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>4.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Changements de phase :</Text> Réfrigération, climatisation
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>5.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Processus industriels :</Text> Optimisation énergétique
        </Text>
      </View>

      <View style={{ marginTop: 40, borderTopWidth: 2, borderTopColor: '#1e3a8a', paddingTop: 15 }}>
        <Text style={{ textAlign: 'center', fontSize: 10, color: '#64748b' }}>
          Résumé créé selon le modèle du polycopié EPFL{'\n'}
          Dr. Arne Seitz - BioImaging & Optics Platform (BIOP)
        </Text>
      </View>
    </Page>
  </Document>
);

export default Week6Thermodynamics;
