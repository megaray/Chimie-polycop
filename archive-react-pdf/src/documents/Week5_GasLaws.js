import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles';
import { CoverPage } from '../components/CoverPage';
import { FormulaBox, ImportantBox, ExampleBox, InfoBox } from '../components/Boxes';
import { Table } from '../components/Table';
import { BoyleLawDiagram, CharlesLawDiagram, MaxwellDistribution } from '../components/Diagrams';

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
      <View style={{ marginTop: 20 }}>
        <Text style={styles.paragraph}>1. Introduction aux Gaz</Text>
        <Text style={styles.paragraph}>2. Pression des Gaz</Text>
        <Text style={styles.paragraph}>3. Loi de Boyle</Text>
        <Text style={styles.paragraph}>4. Loi de Charles</Text>
        <Text style={styles.paragraph}>5. Principe d'Avogadro</Text>
        <Text style={styles.paragraph}>6. Loi des Gaz Parfaits</Text>
        <Text style={styles.paragraph}>7. Loi de Dalton des Pressions Partielles</Text>
        <Text style={styles.paragraph}>8. Densité des Gaz</Text>
        <Text style={styles.paragraph}>9. Théorie Cinétique des Gaz (KMT)</Text>
        <Text style={styles.paragraph}>10. Distribution de Maxwell des Vitesses</Text>
        <Text style={styles.paragraph}>11. Formulaire Récapitulatif</Text>
      </View>
    </Page>

    {/* Section 1: Introduction */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>1. INTRODUCTION AUX GAZ</Text>

      <Text style={styles.h2}>1.1 Nature des Gaz</Text>

      <InfoBox title="Définition :">
        <Text style={styles.paragraph}>
          Un gaz est une phase de la matière caractérisée par des molécules en mouvement
          aléatoire et continu, largement espacées les unes des autres.
        </Text>
      </InfoBox>

      <Text style={styles.h3}>Caractéristiques principales :</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>✓</Text>
        <Text style={styles.listContent}>Compressibles (beaucoup d'espace entre les molécules)</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>✓</Text>
        <Text style={styles.listContent}>Expansion pour remplir tout l'espace disponible</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>✓</Text>
        <Text style={styles.listContent}>Faible densité comparé aux liquides et solides</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>✓</Text>
        <Text style={styles.listContent}>Mouvement chaotique et rapide des molécules</Text>
      </View>

      <Text style={styles.h3}>Propriétés mesurables :</Text>
      <Table
        headers={['Variable', 'Signification', 'Unités courantes']}
        rows={[
          ['P', 'Pression', 'Pa, atm, bar'],
          ['V', 'Volume', 'm³, L'],
          ['T', 'Température', 'K (Kelvin)'],
          ['n', 'Quantité de matière', 'mol']
        ]}
      />

      <Text style={styles.h2}>2. PRESSION DES GAZ</Text>

      <Text style={styles.h3}>2.1 Définition de la Pression</Text>

      <FormulaBox title="Formule fondamentale :">
        P = F/A
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['P', 'Pression', 'Pa (Pascal), atm, bar'],
          ['F', 'Force exercée', 'N (Newton) = kg·m·s⁻²'],
          ['A', 'Aire de la surface', 'm²']
        ]}
      />

      <Text style={styles.h3}>2.2 Unités de Pression - Conversions</Text>

      <Table
        headers={['Unité', 'Équivalence', 'Utilisation']}
        rows={[
          ['1 atm', '101 325 Pa', 'Pression atmosphérique standard'],
          ['1 bar', '10⁵ Pa', 'Unité SI pratique'],
          ['1 Torr', '1 mmHg ≈ 133.322 Pa', 'Baromètre à mercure'],
          ['1 psi', '6894.76 Pa', 'Industrie (livres/pouce²)']
        ]}
      />

      <ImportantBox title="Relation fondamentale :">
        760 Torr = 760 mmHg = 1 atm = 101 325 Pa = 1.01325 bar
      </ImportantBox>
    </Page>

    {/* Section 3: Loi de Boyle */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>3. LOI DE BOYLE</Text>

      <Text style={styles.h2}>3.1 Énoncé de la Loi</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          À température constante (isotherme), le volume d'un gaz est inversement
          proportionnel à sa pression.
        </Text>
      </Text>

      <FormulaBox title="Formule :">
        P × V = constante{'\n\n'}
        ou{'\n\n'}
        P₁V₁ = P₂V₂
      </FormulaBox>

      <View style={{ marginVertical: 15, alignItems: 'center' }}>
        <BoyleLawDiagram />
      </View>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['P₁', 'Pression initiale', 'Pa, atm, bar'],
          ['V₁', 'Volume initial', 'L, m³'],
          ['P₂', 'Pression finale', 'Pa, atm, bar'],
          ['V₂', 'Volume final', 'L, m³']
        ]}
      />

      <InfoBox title="Contexte d'utilisation :">
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>
            Prédire le volume d'un gaz lorsqu'on change la pression (T et n constants)
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Exemple : Compression d'air dans une seringue</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Si P↑ alors V↓ (relation inverse)</Text>
        </View>
      </InfoBox>

      <ExampleBox title="Exemple pratique :">
        <FormulaBox>
          Si P₁ = 1 atm, V₁ = 10 L{'\n'}
          P₂ = 2 atm, V₂ = ?{'\n\n'}
          V₂ = P₁V₁/P₂ = (1 atm × 10 L)/2 atm = 5 L
        </FormulaBox>
      </ExampleBox>
    </Page>

    {/* Section 4: Loi de Charles */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>4. LOI DE CHARLES</Text>

      <Text style={styles.h2}>4.1 Énoncé de la Loi</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          À pression constante (isobare), le volume d'un gaz est directement proportionnel
          à sa température absolue.
        </Text>
      </Text>

      <FormulaBox title="Formule :">
        V/T = constante{'\n\n'}
        ou{'\n\n'}
        V₁/T₁ = V₂/T₂
      </FormulaBox>

      <View style={{ marginVertical: 15, alignItems: 'center' }}>
        <CharlesLawDiagram />
      </View>

      <ImportantBox title="⚠️ IMPORTANT :">
        Toujours utiliser la température en Kelvin !{'\n\n'}
        T(K) = T(°C) + 273.15
      </ImportantBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['V₁', 'Volume initial', 'L, m³'],
          ['T₁', 'Température initiale', 'K (Kelvin) ⚠️'],
          ['V₂', 'Volume final', 'L, m³'],
          ['T₂', 'Température finale', 'K (Kelvin) ⚠️']
        ]}
      />

      <InfoBox title="Concept clé : Le zéro absolu">
        <Text style={styles.paragraph}>
          À T = 0 K = -273.15°C, le volume théorique d'un gaz parfait est zéro.{'\n'}
          C'est la température la plus basse possible.
        </Text>
      </InfoBox>

      <Text style={styles.h3}>Contexte d'utilisation :</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>
          Prédire le volume d'un gaz lorsqu'on change la température (P et n constants)
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>
          Exemple : Expansion d'une montgolfière lors du chauffage
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Si T↑ alors V↑ (relation directe)</Text>
      </View>
    </Page>

    {/* Section 5: Principe d'Avogadro */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>5. PRINCIPE D'AVOGADRO</Text>

      <Text style={styles.h2}>5.1 Énoncé du Principe</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          À température et pression constantes, des volumes égaux de gaz différents
          contiennent le même nombre de molécules.
        </Text>
      </Text>

      <FormulaBox title="Formule :">
        V/n = constante = Vₘ (volume molaire)
      </FormulaBox>

      <Text style={styles.h3}>Valeurs standards :</Text>
      <Table
        headers={['Conditions', 'Température', 'Pression', 'Volume molaire']}
        rows={[
          ['STP', '0°C (273.15 K)', '1 atm', '22.41 L·mol⁻¹'],
          ['SATP', '25°C (298.15 K)', '1 bar', '24.79 L·mol⁻¹']
        ]}
      />

      <InfoBox title="Contexte d'utilisation :">
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>
            Calcul du nombre de moles à partir du volume (et vice-versa)
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>
            Conversion volume ↔ moles dans les calculs stœchiométriques
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Base de la loi des gaz parfaits</Text>
        </View>
      </InfoBox>

      <Text style={styles.h1}>6. LOI DES GAZ PARFAITS</Text>

      <Text style={styles.h2}>6.1 Formule Fondamentale</Text>

      <ImportantBox title="La loi qui combine toutes les lois précédentes :">
        PV = nRT
      </ImportantBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['P', 'Pression', 'Pa, atm, bar'],
          ['V', 'Volume', 'm³, L'],
          ['n', 'Quantité de matière', 'mol'],
          ['R', 'Constante des gaz parfaits', '8.314 J·K⁻¹·mol⁻¹'],
          ['T', 'Température absolue', 'K (Kelvin)']
        ]}
      />

      <Text style={styles.h3}>Valeurs de R selon les unités :</Text>
      <Table
        headers={['Unités de P et V', 'Valeur de R']}
        rows={[
          ['Pa et m³', 'R = 8.314 J·K⁻¹·mol⁻¹'],
          ['atm et L', 'R = 0.08206 L·atm·K⁻¹·mol⁻¹'],
          ['bar et L', 'R = 0.08314 L·bar·K⁻¹·mol⁻¹']
        ]}
      />

      <InfoBox title="Contexte d'utilisation :">
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>
            Calculer n'importe laquelle des 4 variables (P, V, n, T) si les 3 autres sont connues
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>
            Décrit le comportement des gaz "idéaux" (basse pression, haute température)
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Base de nombreux calculs en chimie et physique</Text>
        </View>
      </InfoBox>
    </Page>

    {/* Section 7: Loi de Dalton */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>7. LOI DE DALTON DES PRESSIONS PARTIELLES</Text>

      <Text style={styles.h2}>7.1 Énoncé de la Loi</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          Dans un mélange de gaz, la pression totale est la somme des pressions partielles
          de chaque gaz.
        </Text>
      </Text>

      <FormulaBox title="Formule :">
        P_totale = P_A + P_B + P_C + ...
      </FormulaBox>

      <Text style={styles.h2}>7.2 Pression Partielle et Fraction Molaire</Text>

      <FormulaBox title="Fraction molaire :">
        x_A = n_A/(n_A + n_B + n_C + ...){'\n\n'}
        Relation :{'\n'}
        P_A = x_A × P_totale
      </FormulaBox>

      <ExampleBox title="Exemple : Air atmosphérique">
        <FormulaBox>
          Air : 78% N₂, 21% O₂, 1% autres{'\n'}
          À P = 1 atm :{'\n\n'}
          P_N₂ = 0.78 × 1 atm = 0.78 atm{'\n'}
          P_O₂ = 0.21 × 1 atm = 0.21 atm
        </FormulaBox>
      </ExampleBox>

      <InfoBox title="Applications pratiques :">
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Analyse de mélanges gazeux (air, gaz de combustion)</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Respiration et physiologie (pression partielle de O₂, CO₂)</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listContent}>Réactions chimiques en phase gazeuse</Text>
        </View>
      </InfoBox>

      <Text style={styles.h1}>8. DENSITÉ DES GAZ</Text>

      <FormulaBox title="Formule de la densité :">
        d = m/V{'\n\n'}
        À partir de la loi des gaz parfaits :{'\n\n'}
        d = MP/(RT)
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['d', 'Densité du gaz', 'kg·m⁻³, g·L⁻¹'],
          ['m', 'Masse du gaz', 'kg, g'],
          ['M', 'Masse molaire', 'kg·mol⁻¹, g·mol⁻¹'],
          ['P', 'Pression', 'Pa'],
          ['R', 'Constante des gaz', '8.314 J·K⁻¹·mol⁻¹'],
          ['T', 'Température', 'K']
        ]}
      />

      <ImportantBox title="Relations importantes :">
        • Si T↑ alors d↓ (l'air chaud monte){'\n'}
        • Si P↑ alors d↑ (compression augmente la densité){'\n'}
        • Si M↑ alors d↑ (gaz lourds plus denses)
      </ImportantBox>
    </Page>

    {/* Section 9: Théorie Cinétique */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>9. THÉORIE CINÉTIQUE DES GAZ (KMT)</Text>

      <Text style={styles.h2}>9.1 Les 5 Postulats de Base</Text>

      <View style={styles.listItem}>
        <Text style={styles.listBullet}>1.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Mouvement :</Text> Les molécules de gaz sont en mouvement
          aléatoire continu
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>2.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Taille :</Text> Le volume des molécules est négligeable
          devant le volume du conteneur
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>3.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Collisions :</Text> Les molécules se déplacent en ligne
          droite jusqu'à une collision
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>4.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Interactions :</Text> Aucune force d'attraction ou de
          répulsion entre molécules (sauf lors des collisions)
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>5.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Élasticité :</Text> Les collisions sont parfaitement
          élastiques (pas de perte d'énergie)
        </Text>
      </View>

      <Text style={styles.h2}>9.2 Vitesse Quadratique Moyenne (RMS)</Text>

      <FormulaBox title="Formule fondamentale :">
        v_rms = √(3RT/M)
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['v_rms', 'Vitesse quadratique moyenne', 'm·s⁻¹'],
          ['R', 'Constante des gaz', '8.314 J·K⁻¹·mol⁻¹'],
          ['T', 'Température absolue', 'K'],
          ['M', 'Masse molaire', 'kg·mol⁻¹']
        ]}
      />

      <ImportantBox title="Relations importantes :">
        • Si T↑ alors v_rms↑ (température = énergie cinétique){'\n'}
        • Si M↑ alors v_rms↓ (molécules lourdes plus lentes)
      </ImportantBox>

      <Text style={styles.h2}>9.3 Température et Énergie Cinétique</Text>

      <FormulaBox>
        T = Mv²_rms/(3R){'\n\n'}
        Énergie cinétique moyenne = (1/2)mv²_rms = (3/2)k_BT{'\n\n'}
        où k_B = constante de Boltzmann = 1.381 × 10⁻²³ J·K⁻¹
      </FormulaBox>

      <InfoBox>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Signification :</Text> La température absolue est
          proportionnelle à l'énergie cinétique moyenne des molécules.
        </Text>
      </InfoBox>
    </Page>

    {/* Section 10: Distribution de Maxwell */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>10. DISTRIBUTION DE MAXWELL DES VITESSES</Text>

      <Text style={styles.h2}>10.1 Fonction de Distribution</Text>

      <FormulaBox title="La fonction de Maxwell :">
        f(v) = 4π(M/(2πRT))^(3/2) × v² × e^(-Mv²/(2RT))
      </FormulaBox>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Signification :</Text> f(v) donne la fraction de molécules
        ayant une vitesse v à la température T.
      </Text>

      <View style={{ marginVertical: 15, alignItems: 'center' }}>
        <MaxwellDistribution />
      </View>

      <Text style={styles.h2}>10.2 Interprétation Graphique</Text>

      <Text style={styles.h3}>Caractéristiques de la courbe :</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>1.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Facteur v² :</Text> La courbe part de zéro
          (peu de molécules à vitesse nulle)
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>2.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Facteur exponentiel :</Text> La courbe diminue
          rapidement aux grandes vitesses
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>3.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Maximum :</Text> Correspond à la vitesse la plus probable
        </Text>
      </View>

      <Text style={styles.h3}>Effets de la température :</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>T↑ : le pic se déplace vers les vitesses plus élevées</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>T↑ : la courbe s'élargit (plus grande dispersion)</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>T↑ : le pic devient plus bas (normalisation)</Text>
      </View>

      <Text style={styles.h3}>Effets de la masse molaire :</Text>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>M↑ : le pic se déplace vers les vitesses plus faibles</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>M↑ : la courbe devient plus étroite</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Molécules légères (H₂) : vitesses élevées</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>•</Text>
        <Text style={styles.listContent}>Molécules lourdes (CO₂) : vitesses faibles</Text>
      </View>
    </Page>

    {/* Section 11: Formulaire */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>11. FORMULAIRE RÉCAPITULATIF</Text>

      <Text style={styles.h2}>11.1 Lois des Gaz</Text>

      <Table
        headers={['Loi', 'Formule', 'Conditions']}
        rows={[
          ['Boyle', 'P₁V₁ = P₂V₂', 'T, n constants'],
          ['Charles', 'V₁/T₁ = V₂/T₂', 'P, n constants'],
          ['Gay-Lussac', 'P₁/T₁ = P₂/T₂', 'V, n constants'],
          ['Avogadro', 'V₁/n₁ = V₂/n₂', 'P, T constants'],
          ['Gaz Parfaits', 'PV = nRT', 'Toutes conditions'],
          ['Combinée', 'P₁V₁/(n₁T₁) = P₂V₂/(n₂T₂)', 'Changement d\'état'],
          ['Dalton', 'P_tot = P_A + P_B + ...', 'Mélanges de gaz']
        ]}
      />

      <Text style={styles.h2}>11.2 Formules Dérivées</Text>

      <Table
        headers={['Grandeur', 'Formule', 'Unités']}
        rows={[
          ['Densité', 'd = MP/(RT)', 'kg·m⁻³, g·L⁻¹'],
          ['Masse molaire', 'M = dRT/P', 'g·mol⁻¹'],
          ['Vitesse RMS', 'v_rms = √(3RT/M)', 'm·s⁻¹'],
          ['Fraction molaire', 'x_A = n_A/n_total', 'sans dimension'],
          ['Pression partielle', 'P_A = x_A × P_total', 'Pa, atm']
        ]}
      />

      <Text style={styles.h2}>11.3 Constantes Importantes</Text>

      <Table
        headers={['Constante', 'Symbole', 'Valeur', 'Unités']}
        rows={[
          ['Constante des gaz', 'R', '8.314', 'J·K⁻¹·mol⁻¹'],
          ['Constante des gaz', 'R', '0.08206', 'L·atm·K⁻¹·mol⁻¹'],
          ['Nombre d\'Avogadro', 'N_A', '6.022 × 10²³', 'mol⁻¹'],
          ['Constante de Boltzmann', 'k_B', '1.381 × 10⁻²³', 'J·K⁻¹'],
          ['Volume molaire (STP)', 'V_m', '22.41', 'L·mol⁻¹'],
          ['Volume molaire (SATP)', 'V_m', '24.79', 'L·mol⁻¹']
        ]}
      />

      <Text style={styles.h2}>11.4 Conversions Essentielles</Text>

      <FormulaBox title="Température :">
        T(K) = T(°C) + 273.15
      </FormulaBox>

      <FormulaBox title="Pression :">
        1 atm = 101 325 Pa = 1.01325 bar = 760 Torr = 760 mmHg
      </FormulaBox>

      <FormulaBox title="Volume :">
        1 L = 10⁻³ m³ = 1 dm³{'\n'}
        1 mL = 10⁻⁶ m³ = 1 cm³
      </FormulaBox>
    </Page>

    {/* Page finale: Conseils */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>CONSEILS POUR LA RÉSOLUTION DE PROBLÈMES</Text>

      <Text style={styles.h2}>✓ Liste de Vérification</Text>

      <View style={styles.listItem}>
        <Text style={styles.listBullet}>1.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Toujours convertir T en Kelvin</Text> (T(K) = T(°C) + 273.15)
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>2.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Vérifier la cohérence des unités</Text> (P, V, n, R)
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>3.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Identifier les variables constantes et variables</Text>
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>4.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Choisir la loi appropriée</Text> selon les conditions
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>5.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Vérifier le sens physique du résultat</Text>
        </Text>
      </View>

      <Text style={styles.h2}>⚠️ Erreurs Courantes</Text>

      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Utiliser T en °C au lieu de K</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Mélanger les unités de P (atm vs Pa)</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Oublier que PV a des dimensions d'énergie</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>❌</Text>
        <Text style={styles.listContent}>Confondre masse molaire (g/mol) et masse (g)</Text>
      </View>

      <Text style={styles.h2}>APPLICATIONS PRATIQUES</Text>

      <Text style={styles.h3}>Exemples d'Utilisation :</Text>

      <View style={styles.listItem}>
        <Text style={styles.listBullet}>1.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Respiration :</Text> Pressions partielles de O₂ et CO₂ dans le sang
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>2.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Plongée :</Text> Loi de Boyle et décompression
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>3.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Montgolfières :</Text> Loi de Charles et expansion thermique
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>4.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Météorologie :</Text> Baromètres et pressions atmosphériques
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listBullet}>5.</Text>
        <Text style={styles.listContent}>
          <Text style={styles.bold}>Industrie :</Text> Stockage et transport de gaz comprimés
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

export default Week5GasLaws;
