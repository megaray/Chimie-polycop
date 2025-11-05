import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles.js';
import { CoverPage } from '../components/CoverPage.js';
import { FormulaBox, ImportantBox, ExampleBox, InfoBox, WarningBox } from '../components/Boxes.js';
import { Table } from '../components/Table.js';
import {
  PeriodicTableSimple,
  PeriodicTrendsDiagram,
  BandGapDiagram,
  PNJunctionDiagram,
  GibbsEnergyDiagram,
  ATPCycleDiagram
} from '../components/Diagrams.js';

const Week7Materials = () => (
  <Document>
    {/* Page de couverture */}
    <CoverPage
      week="Semaine 7"
      title="Matériaux"
      date="31 octobre 2025"
    />

    {/* Table des matières */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>Table des Matières</Text>

      <View style={styles.tocSection}>
        <Text style={styles.tocItem}>1. Rappel de Thermodynamique ......................................... 3</Text>
        <Text style={styles.tocItem}>2. Énergie Libre et Vie ......................................................... 4</Text>
        <Text style={styles.tocItem}>3. Tableau Périodique des Éléments ................................ 5</Text>
        <Text style={styles.tocItem}>4. Tendances Périodiques ................................................. 6</Text>
        <Text style={styles.tocItem}>5. Propriétés Chimiques (Hydrures, Oxydes) ................... 8</Text>
        <Text style={styles.tocItem}>6. Classification Électrique des Solides ........................... 10</Text>
        <Text style={styles.tocItem}>7. Théorie des Bandes ...................................................... 11</Text>
        <Text style={styles.tocItem}>8. Semiconducteurs ........................................................... 12</Text>
        <Text style={styles.tocItem}>9. Supraconducteurs .......................................................... 14</Text>
        <Text style={styles.tocItem}>10. Formulaire Récapitulatif .............................................. 15</Text>
      </View>
    </Page>

    {/* 1. RAPPEL DE THERMODYNAMIQUE */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>1. RAPPEL DE THERMODYNAMIQUE</Text>

      <Text style={styles.h2}>1.1 Entropie</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          L'entropie est une mesure du désordre d'un système. Pour qu'un processus soit spontané,
          l'entropie totale de l'univers (système + environs) doit augmenter.
        </Text>
      </InfoBox>

      <ImportantBox title="Points clés">
        <Text style={styles.paragraph}>• L'entropie du système ET des environs doit être considérée</Text>
        <Text style={styles.paragraph}>• Les processus spontanés augmentent l'entropie totale de l'univers</Text>
        <Text style={styles.paragraph}>• L'entropie est une fonction d'état</Text>
      </ImportantBox>

      <Text style={styles.h2}>1.2 Énergie Libre de Gibbs</Text>

      <FormulaBox title="Formule fondamentale">
        ΔG = ΔH − TΔS
      </FormulaBox>

      <Table
        headers={['Symbole', 'Signification', 'Unités']}
        rows={[
          ['ΔG', 'Variation d\'énergie libre de Gibbs', 'J, kJ'],
          ['ΔH', 'Variation d\'enthalpie', 'J, kJ'],
          ['T', 'Température absolue', 'K'],
          ['ΔS', 'Variation d\'entropie', 'J·K⁻¹']
        ]}
      />

      <GibbsEnergyDiagram />

      <FormulaBox title="Critère de spontanéité">
        ΔG &lt; 0  →  Réaction spontanée{'\n'}
        ΔG = 0  →  Équilibre{'\n'}
        ΔG &gt; 0  →  Réaction non spontanée
      </FormulaBox>

      <Text style={styles.h2}>1.3 Effet de la Température</Text>

      <Table
        headers={['ΔH', 'ΔS', 'Spontanéité', 'Conditions']}
        rows={[
          ['< 0', '> 0', 'Toujours spontané', 'À toute température'],
          ['< 0', '< 0', 'Spontané à basse T', 'T doit être faible'],
          ['> 0', '> 0', 'Spontané à haute T', 'T doit être élevée'],
          ['> 0', '< 0', 'Jamais spontané', 'À aucune température']
        ]}
      />
    </Page>

    {/* 2. ÉNERGIE LIBRE ET VIE */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>2. ÉNERGIE LIBRE ET VIE</Text>

      <Text style={styles.h2}>2.1 Oxydation du Glucose</Text>

      <FormulaBox title="Réaction">
        C₆H₁₂O₆(s) + 6 O₂(g) → 6 CO₂(g) + 6 H₂O(l){'\n'}
        ΔG = −2879 kJ·mol⁻¹
      </FormulaBox>

      <ExampleBox title="Application pratique">
        <Text style={styles.paragraph}>
          Construction de liens peptidiques : 17 kJ par mole
        </Text>
        <Text style={styles.paragraph}>
          1 mole de glucose peut construire ≈ 170 moles de liens peptidiques
        </Text>
        <Text style={styles.paragraph}>
          Plusieurs molécules de glucose sont nécessaires pour une protéine complète
        </Text>
      </ExampleBox>

      <Text style={styles.h2}>2.2 ATP/ADP : La Monnaie Énergétique</Text>

      <ATPCycleDiagram />

      <FormulaBox title="Cycle ATP/ADP">
        ATP → ADP + Pᵢ        ΔG ≈ −30 kJ·mol⁻¹ (hydrolyse){'\n'}
        ADP + Pᵢ → ATP        ΔG ≈ +30 kJ·mol⁻¹ (synthèse)
      </FormulaBox>

      <InfoBox title="Principe du couplage énergétique">
        <Text style={styles.paragraph}>
          • L'hydrolyse de l'ATP fournit l'énergie pour les réactions non spontanées
        </Text>
        <Text style={styles.paragraph}>
          • La combustion du glucose "recharge" l'ADP en ATP
        </Text>
        <Text style={styles.paragraph}>
          • ≈ 80 moles d'ADP peuvent être rechargées par mole de glucose
        </Text>
      </InfoBox>

      <ExampleBox title="Analogie de la poulie">
        <Text style={styles.paragraph}>
          • Poids lourd (réaction spontanée) → descend et fournit de l'énergie
        </Text>
        <Text style={styles.paragraph}>
          • Poids léger (réaction non spontanée) → monte grâce à l'énergie fournie
        </Text>
        <Text style={styles.paragraph}>
          • Le couplage permet aux réactions non spontanées de se produire
        </Text>
      </ExampleBox>
    </Page>

    {/* 3. TABLEAU PÉRIODIQUE */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>3. TABLEAU PÉRIODIQUE DES ÉLÉMENTS</Text>

      <Text style={styles.h2}>3.1 Principe de Construction</Text>

      <FormulaBox title="Ordre de remplissage des orbitales">
        1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p →{'\n'}
        6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p
      </FormulaBox>

      <ImportantBox title="Règles fondamentales">
        <Text style={styles.paragraph}>
          1. Principe d'Aufbau : remplissage par ordre d'énergie croissante
        </Text>
        <Text style={styles.paragraph}>
          2. Principe d'exclusion de Pauli : max 2 électrons par orbitale
        </Text>
        <Text style={styles.paragraph}>
          3. Règle de Hund : orbitales dégénérées remplies avec spins parallèles d'abord
        </Text>
      </ImportantBox>

      <Text style={styles.h2}>3.2 Blocs du Tableau Périodique</Text>

      <PeriodicTableSimple />

      <Table
        headers={['Bloc', 'Groupes', 'Configuration', 'Caractéristiques']}
        rows={[
          ['s-block', '1-2', 'ns¹ ou ns²', 'Métaux alcalins, très réactifs'],
          ['p-block', '13-18', 'ns²np¹⁻⁶', 'Métaux, métalloïdes, non-métaux'],
          ['d-block', '3-12', '(n-1)d¹⁻¹⁰ns¹⁻²', 'Métaux de transition'],
          ['f-block', '-', '(n-2)f¹⁻¹⁴', 'Lanthanides et actinides']
        ]}
      />
    </Page>

    {/* 4. TENDANCES PÉRIODIQUES */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>4. TENDANCES PÉRIODIQUES</Text>

      <PeriodicTrendsDiagram />

      <Text style={styles.h2}>4.1 Charge Nucléaire Effective (Zₑff)</Text>

      <InfoBox title="Concept">
        <Text style={styles.paragraph}>
          • Les électrons de valence subissent une charge nucléaire réduite
        </Text>
        <Text style={styles.paragraph}>
          • Les électrons de cœur "écrantent" la charge nucléaire
        </Text>
        <Text style={styles.paragraph}>
          • Zₑff augmente de gauche à droite dans une période
        </Text>
        <Text style={styles.paragraph}>
          • Zₑff diminue en descendant un groupe
        </Text>
      </InfoBox>

      <Text style={styles.h2}>4.2 Rayon Atomique</Text>

      <FormulaBox title="Tendances">
        Augmente ↓ en descendant un groupe (plus de couches){'\n'}
        Diminue → de gauche à droite (Zₑff augmente)
      </FormulaBox>

      <ImportantBox title="Rayon ionique">
        <Text style={styles.paragraph}>• Cations : plus petits que l'atome neutre</Text>
        <Text style={styles.paragraph}>• Anions : plus grands que l'atome neutre</Text>
      </ImportantBox>

      <Text style={styles.h2}>4.3 Contraction Lanthanide</Text>

      <InfoBox title="Définition et conséquences">
        <Text style={styles.paragraph}>
          Diminution progressive des rayons atomiques des lanthanides due au remplissage des orbitales 4f.
        </Text>
      </InfoBox>

      <ExampleBox title="Conséquences importantes">
        <Text style={styles.paragraph}>
          • Les éléments des Périodes 5 et 6 ont des rayons similaires
        </Text>
        <Text style={styles.paragraph}>
          • Densités plus élevées pour les éléments de Période 6
        </Text>
        <Text style={styles.paragraph}>
          • Faible réactivité de l'or et de l'argent
        </Text>
        <Text style={styles.paragraph}>
          • Exemple : Zr (Période 5, r = 160 pm) ≈ Hf (Période 6, r = 156 pm)
        </Text>
      </ExampleBox>

      <Text style={styles.h2}>4.4 Énergie de Première Ionisation</Text>

      <FormulaBox title="Définition">
        M(g) → M⁺(g) + e⁻        I₁ &gt; 0
      </FormulaBox>

      <Table
        headers={['Propriété', 'Gauche → Droite', 'Haut → Bas']}
        rows={[
          ['Rayon atomique', 'Diminue', 'Augmente'],
          ['Énergie d\'ionisation', 'Augmente', 'Diminue'],
          ['Électronégativité', 'Augmente', 'Diminue'],
          ['Polarisabilité', 'Diminue', 'Augmente']
        ]}
      />
    </Page>

    {/* 4. TENDANCES PÉRIODIQUES (suite) */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h2}>4.5 Affinité Électronique</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Énergie libérée quand un électron est ajouté à un atome gazeux.
        </Text>
      </InfoBox>

      <ImportantBox title="Points clés">
        <Text style={styles.paragraph}>
          • Tendances moins régulières que pour l'énergie d'ionisation
        </Text>
        <Text style={styles.paragraph}>
          • Affinités les plus élevées : haut à droite du tableau périodique
        </Text>
        <Text style={styles.paragraph}>
          • Halogènes : affinités électroniques très élevées
        </Text>
      </ImportantBox>

      <Text style={styles.h2}>4.6 Électronégativité</Text>

      <InfoBox title="Définition (Échelle de Pauling)">
        <Text style={styles.paragraph}>
          Tendance d'un atome à attirer les électrons de liaison.
        </Text>
      </InfoBox>

      <Table
        headers={['Élément', 'Électronégativité', 'Position']}
        rows={[
          ['F (Fluor)', '4.0', 'La plus élevée'],
          ['O (Oxygène)', '3.5', 'Très élevée'],
          ['Cl (Chlore)', '3.0', 'Élevée'],
          ['Cs (Césium)', '0.7', 'La plus faible']
        ]}
      />

      <Text style={styles.h2}>4.7 Polarisabilité</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Facilité avec laquelle le nuage électronique d'un atome peut être déformé.
        </Text>
      </InfoBox>

      <FormulaBox title="Tendances (opposées à l'électronégativité)">
        Polarisabilité diminue de gauche à droite{'\n'}
        Polarisabilité augmente en descendant un groupe
      </FormulaBox>

      <ExampleBox title="Relation importante">
        <Text style={styles.paragraph}>
          • Atomes à haute polarisabilité : gros, riches en électrons
        </Text>
        <Text style={styles.paragraph}>
          • Atomes à haute capacité polarisante : petits, fortement chargés
        </Text>
      </ExampleBox>
    </Page>

    {/* 5. PROPRIÉTÉS CHIMIQUES */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>5. TENDANCES CHIMIQUES</Text>

      <Text style={styles.h2}>5.1 Hydrures</Text>

      <Text style={styles.h3}>A. Hydrures Salin (Salt-like)</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Formés par les métaux des Groupes 1 et 2 (sauf Be)
        </Text>
        <Text style={styles.paragraph}>
          • Composés ioniques M⁺H⁻
        </Text>
        <Text style={styles.paragraph}>
          • Solides cristallins
        </Text>
      </InfoBox>

      <FormulaBox title="Préparation">
        2 K(s) + H₂(g) →[Δ] 2 KH(s){'\n'}
        Ca(s) + H₂(g) →[Δ] CaH₂(s)
      </FormulaBox>

      <Text style={styles.h3}>B. Hydrures Métalliques</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Formés par certains métaux du bloc d
        </Text>
        <Text style={styles.paragraph}>
          • Solides noirs, poudreux, conducteurs
        </Text>
        <Text style={styles.paragraph}>
          • Formule non stœchiométrique
        </Text>
      </InfoBox>

      <ExampleBox title="Applications">
        <Text style={styles.paragraph}>
          • Stockage et transport de l'hydrogène
        </Text>
        <Text style={styles.paragraph}>
          • Libèrent H₂ par chauffage ou traitement acide
        </Text>
      </ExampleBox>

      <FormulaBox title="Réactions">
        2 CuH →[Δ] x Cu + (2−x)CuH + ½x H₂(g){'\n'}
        CuH + HCl → CuCl + H₂(g)
      </FormulaBox>

      <Text style={styles.h3}>C. Hydrures Moléculaires</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Formés par les non-métaux
        </Text>
        <Text style={styles.paragraph}>
          • Composés covalents, souvent volatils
        </Text>
      </InfoBox>

      <Table
        headers={['Groupe', 'Formule générale', 'Exemples']}
        rows={[
          ['14 (IV)', 'CH₄', 'Méthane'],
          ['15 (V)', 'NH₃', 'Ammoniac'],
          ['16 (VI)', 'H₂O', 'Eau'],
          ['17 (VII)', 'HF, HCl, HBr, HI', 'Halogénures d\'hydrogène']
        ]}
      />
    </Page>

    {/* 5.2 OXYDES */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h2}>5.2 Oxydes</Text>

      <Text style={styles.h3}>A. Oxydes Basiques</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Formés par les métaux à faible énergie d'ionisation
        </Text>
        <Text style={styles.paragraph}>
          • Ioniques, souvent solubles
        </Text>
        <Text style={styles.paragraph}>
          • Réagissent avec l'eau pour former des bases
        </Text>
      </InfoBox>

      <FormulaBox title="Exemples">
        Na₂O + H₂O → 2 NaOH{'\n'}
        CaO + H₂O → Ca(OH)₂
      </FormulaBox>

      <Text style={styles.h3}>B. Oxydes Amphotères</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Formés par Be, Al, et les métalloïdes
        </Text>
        <Text style={styles.paragraph}>
          • Ne réagissent pas avec l'eau
        </Text>
        <Text style={styles.paragraph}>
          • Solubles en milieu acide ET basique
        </Text>
      </InfoBox>

      <FormulaBox title="Exemples">
        Al₂O₃ + 6 HCl → 2 AlCl₃ + 3 H₂O{'\n'}
        Al₂O₃ + 2 NaOH → 2 NaAlO₂ + H₂O
      </FormulaBox>

      <Text style={styles.h3}>C. Oxydes Acides (Anhydrides)</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Formés par les non-métaux
        </Text>
        <Text style={styles.paragraph}>
          • Moléculaires, souvent gazeux
        </Text>
        <Text style={styles.paragraph}>
          • Forment des acides dans l'eau
        </Text>
      </InfoBox>

      <FormulaBox title="Exemples">
        CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻{'\n'}
        SO₃ + H₂O → H₂SO₄{'\n'}
        N₂O₅ + H₂O → 2 HNO₃
      </FormulaBox>

      <Text style={styles.h2}>5.3 États d'Oxydation (Bloc d)</Text>

      <ImportantBox title="Règles générales">
        <Text style={styles.paragraph}>
          1. Perte des électrons s en premier
        </Text>
        <Text style={styles.paragraph}>
          2. Puis perte variable d'électrons d
        </Text>
        <Text style={styles.paragraph}>
          3. Plusieurs états d'oxydation possibles
        </Text>
      </ImportantBox>

      <Table
        headers={['Oxyde', 'État d\'oxydation', 'Comportement']}
        rows={[
          ['CrO', '+2', 'Basique'],
          ['Cr₂O₃', '+3', 'Amphotère'],
          ['CrO₃', '+6', 'Acide']
        ]}
      />
    </Page>

    {/* 6. CLASSIFICATION ÉLECTRIQUE */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>6. CLASSIFICATION ÉLECTRIQUE DES SOLIDES</Text>

      <Text style={styles.h2}>6.1 Types de Conduction</Text>

      <Text style={styles.h3}>A. Conduction Électronique</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Charge transportée par les électrons
        </Text>
        <Text style={styles.paragraph}>
          • Type de conduction dans les métaux et le graphite
        </Text>
        <Text style={styles.paragraph}>
          • Résistance augmente avec la température
        </Text>
      </InfoBox>

      <Text style={styles.h3}>B. Conduction Ionique</Text>

      <InfoBox title="Caractéristiques">
        <Text style={styles.paragraph}>
          • Charge transportée par les ions
        </Text>
        <Text style={styles.paragraph}>
          • Sels fondus ou solutions d'électrolytes
        </Text>
        <Text style={styles.paragraph}>
          • Application : Batteries lithium-ion
        </Text>
      </InfoBox>

      <Text style={styles.h2}>6.2 Classification selon la Résistance</Text>

      <Table
        headers={['Type', 'Résistance vs T', 'Conductivité', 'Exemples']}
        rows={[
          ['Conducteur', 'R augmente avec T', 'Élevée', 'Cu, Ag, Au'],
          ['Semiconducteur', 'R diminue avec T', 'Intermédiaire', 'Si, Ge, GaAs'],
          ['Isolant', 'R très élevée', 'Très faible', 'Diamond, SiO₂'],
          ['Supraconducteur', 'R = 0 si T < Tc', 'Infinie', 'YBa₂Cu₃O₇']
        ]}
      />

      <ImportantBox title="Points clés">
        <Text style={styles.paragraph}>
          • Conducteurs : électrons de conduction mobiles
        </Text>
        <Text style={styles.paragraph}>
          • Semiconducteurs : bande interdite petite (0.1-4 eV)
        </Text>
        <Text style={styles.paragraph}>
          • Isolants : bande interdite large (&gt; 4 eV)
        </Text>
        <Text style={styles.paragraph}>
          • Supraconducteurs : résistance nulle en dessous de Tc
        </Text>
      </ImportantBox>
    </Page>

    {/* 7. THÉORIE DES BANDES */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>7. THÉORIE DES ORBITALES MOLÉCULAIRES</Text>

      <Text style={styles.h2}>7.1 Formation des Bandes</Text>

      <InfoBox title="Principe fondamental">
        <Text style={styles.paragraph}>
          • N orbitales atomiques → N orbitales moléculaires
        </Text>
        <Text style={styles.paragraph}>
          • Dans un solide, N ≈ 10²³ (énorme !)
        </Text>
        <Text style={styles.paragraph}>
          • Les OM sont si proches qu'elles forment une bande quasi-continue
        </Text>
      </InfoBox>

      <BandGapDiagram />

      <Text style={styles.h2}>7.2 Bande de Valence</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Bande d'orbitales moléculaires remplie par les électrons de valence.
        </Text>
      </InfoBox>

      <ImportantBox title="Caractéristiques">
        <Text style={styles.paragraph}>• Électrons liants</Text>
        <Text style={styles.paragraph}>• Stabilise la structure</Text>
        <Text style={styles.paragraph}>• Généralement remplie dans les isolants</Text>
      </ImportantBox>

      <Text style={styles.h2}>7.3 Bande de Conduction</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Bande d'orbitales moléculaires vide ou partiellement remplie.
        </Text>
      </InfoBox>

      <ImportantBox title="Caractéristiques">
        <Text style={styles.paragraph}>• Électrons mobiles</Text>
        <Text style={styles.paragraph}>• Permet la conductivité</Text>
        <Text style={styles.paragraph}>• Partiellement remplie dans les métaux</Text>
      </ImportantBox>

      <Text style={styles.h2}>7.4 Bande Interdite (Band Gap)</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Écart énergétique entre la bande de valence et la bande de conduction.
        </Text>
      </InfoBox>

      <Table
        headers={['Matériau', 'Eg', 'Comportement']}
        rows={[
          ['Conducteur', '0 ou chevauchement', 'Conduction facile'],
          ['Semiconducteur', '0.1 - 4 eV', 'Conduction thermique'],
          ['Isolant', '> 4 eV', 'Pas de conduction']
        ]}
      />

      <ExampleBox title="Exemples de band gap">
        <Text style={styles.paragraph}>• Si : Eg = 1.1 eV (semiconducteur)</Text>
        <Text style={styles.paragraph}>• GaAs : Eg = 1.4 eV (semiconducteur)</Text>
        <Text style={styles.paragraph}>• Diamond : Eg = 5.5 eV (isolant)</Text>
        <Text style={styles.paragraph}>• SiO₂ : Eg = 9 eV (isolant)</Text>
      </ExampleBox>
    </Page>

    {/* 8. SEMICONDUCTEURS */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>8. SEMICONDUCTEURS</Text>

      <Text style={styles.h2}>8.1 Semiconducteurs Intrinsèques</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Semiconducteur pur où la conductivité provient uniquement de l'excitation thermique.
        </Text>
      </InfoBox>

      <FormulaBox title="Mécanisme">
        Électron excité thermiquement :{'\n'}
        Bande de valence → Bande de conduction
      </FormulaBox>

      <ImportantBox title="Résultat">
        <Text style={styles.paragraph}>
          • Électron mobile dans la bande de conduction
        </Text>
        <Text style={styles.paragraph}>
          • "Trou" (hole) mobile dans la bande de valence
        </Text>
        <Text style={styles.paragraph}>
          • Conductivité augmente avec T
        </Text>
      </ImportantBox>

      <Text style={styles.h2}>8.2 Semiconducteurs Extrinsèques (Dopés)</Text>

      <Text style={styles.h3}>A. Semiconducteur de type n</Text>

      <InfoBox title="Dopage">
        <Text style={styles.paragraph}>
          Élément du Groupe 15 (As, P, Sb) dans Si ou Ge
        </Text>
      </InfoBox>

      <ExampleBox title="Exemple : Si dopé avec As">
        <Text style={styles.paragraph}>• Si : 4 électrons de valence</Text>
        <Text style={styles.paragraph}>• As : 5 électrons de valence</Text>
        <Text style={styles.paragraph}>• 1 électron "en trop" → facilement excité vers BC</Text>
        <Text style={styles.paragraph}>• Porteurs de charge : électrons (négatifs)</Text>
      </ExampleBox>

      <Text style={styles.h3}>B. Semiconducteur de type p</Text>

      <InfoBox title="Dopage">
        <Text style={styles.paragraph}>
          Élément du Groupe 13 (B, Al, Ga, In) dans Si ou Ge
        </Text>
      </InfoBox>

      <ExampleBox title="Exemple : Si dopé avec In">
        <Text style={styles.paragraph}>• Si : 4 électrons de valence</Text>
        <Text style={styles.paragraph}>• In : 3 électrons de valence</Text>
        <Text style={styles.paragraph}>• 1 électron "manquant" → crée un trou</Text>
        <Text style={styles.paragraph}>• Porteurs de charge : trous (positifs)</Text>
      </ExampleBox>

      <Table
        headers={['Type', 'Dopage', 'Porteurs de charge', 'Exemple']}
        rows={[
          ['Intrinsèque', 'Aucun', 'Électrons et trous (égaux)', 'Si pur'],
          ['Type n', 'Groupe 15 (As, P)', 'Électrons (excès)', 'Si:As'],
          ['Type p', 'Groupe 13 (B, In)', 'Trous (déficit)', 'Si:In']
        ]}
      />
    </Page>

    {/* 8.3 JONCTION p-n */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h2}>8.3 Jonction p-n</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Interface entre un semiconducteur de type p et un de type n.
        </Text>
      </InfoBox>

      <ImportantBox title="Propriété fondamentale">
        <Text style={styles.paragraph}>
          Le courant ne peut circuler que dans un sens (rectification).
        </Text>
      </ImportantBox>

      <PNJunctionDiagram />

      <Text style={styles.h3}>A. Polarisation Inverse (Reverse Bias)</Text>

      <InfoBox title="Configuration">
        <Text style={styles.paragraph}>
          • Type p connecté au pôle négatif
        </Text>
        <Text style={styles.paragraph}>
          • Type n connecté au pôle positif
        </Text>
      </InfoBox>

      <FormulaBox title="Résultat">
        Les trous migrent vers le pôle négatif (côté p){'\n'}
        Les électrons migrent vers le pôle positif (côté n){'\n'}
        La jonction s'élargit → PAS DE COURANT
      </FormulaBox>

      <Text style={styles.h3}>B. Polarisation Directe (Forward Bias)</Text>

      <InfoBox title="Configuration">
        <Text style={styles.paragraph}>
          • Type p connecté au pôle positif
        </Text>
        <Text style={styles.paragraph}>
          • Type n connecté au pôle négatif
        </Text>
      </InfoBox>

      <FormulaBox title="Résultat">
        Les trous sont repoussés vers la jonction{'\n'}
        Les électrons sont repoussés vers la jonction{'\n'}
        Recombinaison électron-trou → COURANT CIRCULE
      </FormulaBox>

      <Text style={styles.h2}>8.4 Applications des Jonctions p-n</Text>

      <Text style={styles.h3}>A. Diodes</Text>

      <InfoBox title="Fonction">
        <Text style={styles.paragraph}>
          Rectification du courant (passage dans un seul sens)
        </Text>
      </InfoBox>

      <Text style={styles.h3}>B. LED (Light-Emitting Diode)</Text>

      <InfoBox title="Principe">
        <Text style={styles.paragraph}>
          • Polarisation directe → recombinaison électron-trou
        </Text>
        <Text style={styles.paragraph}>
          • Énergie libérée sous forme de photon
        </Text>
        <Text style={styles.paragraph}>
          • Eg détermine la couleur de la lumière
        </Text>
      </InfoBox>

      <FormulaBox title="Relation énergie-couleur">
        Eg = hν = hc/λ
      </FormulaBox>

      <Table
        headers={['Matériau', 'Eg (eV)', 'Couleur']}
        rows={[
          ['GaN', '3.4', 'UV/Bleu'],
          ['GaP', '2.3', 'Vert'],
          ['GaAs', '1.4', 'Infrarouge']
        ]}
      />

      <Text style={styles.h3}>C. Cellules Solaires (Photovoltaïques)</Text>

      <InfoBox title="Principe">
        <Text style={styles.paragraph}>
          • Photon absorbé → création paire électron-trou
        </Text>
        <Text style={styles.paragraph}>
          • Champ électrique à la jonction sépare les charges
        </Text>
        <Text style={styles.paragraph}>
          • Courant électrique généré
        </Text>
      </InfoBox>
    </Page>

    {/* 9. SUPRACONDUCTEURS */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>9. SUPRACONDUCTEURS</Text>

      <Text style={styles.h2}>9.1 Supraconductivité</Text>

      <InfoBox title="Définition">
        <Text style={styles.paragraph}>
          Perte totale de résistance électrique en dessous d'une température critique Tc.
        </Text>
      </InfoBox>

      <ExampleBox title="Historique des records de Tc">
        <Text style={styles.paragraph}>• 1911 : Découverte (Hg, Tc = 4 K)</Text>
        <Text style={styles.paragraph}>• 1988 : Tc = 125 K</Text>
        <Text style={styles.paragraph}>• 2015 : Tc = 138 K</Text>
        <Text style={styles.paragraph}>• 2020 : Tc = 287 K (mais à très haute pression)</Text>
      </ExampleBox>

      <Text style={styles.h2}>9.2 Paires de Cooper</Text>

      <InfoBox title="Mécanisme de formation">
        <Text style={styles.paragraph}>
          1. Un électron distord le réseau cationique
        </Text>
        <Text style={styles.paragraph}>
          2. Distortion attire un deuxième électron
        </Text>
        <Text style={styles.paragraph}>
          3. Formation d'une paire d'électrons faiblement liée
        </Text>
        <Text style={styles.paragraph}>
          4. À basse T, vibrations du réseau réduites
        </Text>
        <Text style={styles.paragraph}>
          5. Paires de Cooper ne sont pas séparées par les vibrations
        </Text>
      </InfoBox>

      <ImportantBox title="Propriétés des paires de Cooper">
        <Text style={styles.paragraph}>
          • Liaison très faible entre les deux électrons
        </Text>
        <Text style={styles.paragraph}>
          • Stable uniquement à basse température
        </Text>
        <Text style={styles.paragraph}>
          • Permet un transport sans résistance
        </Text>
      </ImportantBox>

      <Text style={styles.h2}>9.3 Applications</Text>

      <ExampleBox title="Avantages potentiels">
        <Text style={styles.paragraph}>
          • Transport d'électricité sans perte
        </Text>
        <Text style={styles.paragraph}>
          • Aimants puissants (IRM, trains maglev)
        </Text>
        <Text style={styles.paragraph}>
          • Dispositifs électroniques ultra-rapides
        </Text>
        <Text style={styles.paragraph}>
          • Exemple : 25 kg de fil supraconducteur = 1800 kg de fil de cuivre
        </Text>
      </ExampleBox>

      <WarningBox title="Défis actuels">
        <Text style={styles.paragraph}>
          • Températures critiques encore trop basses
        </Text>
        <Text style={styles.paragraph}>
          • Matériaux fragiles
        </Text>
        <Text style={styles.paragraph}>
          • Coût de refroidissement élevé
        </Text>
      </WarningBox>
    </Page>

    {/* 10. FORMULAIRE */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>10. FORMULAIRE RÉCAPITULATIF</Text>

      <Text style={styles.h2}>10.1 Thermodynamique</Text>

      <Table
        headers={['Fonction', 'Formule', 'Application']}
        rows={[
          ['Énergie libre de Gibbs', 'ΔG = ΔH − TΔS', 'Critère de spontanéité'],
          ['Spontanéité', 'ΔG < 0', 'Réaction spontanée'],
          ['Équilibre', 'ΔG = 0', 'Système à l\'équilibre']
        ]}
      />

      <Text style={styles.h2}>10.2 Tendances Périodiques</Text>

      <Table
        headers={['Propriété', 'Gauche → Droite', 'Haut → Bas']}
        rows={[
          ['Rayon atomique', 'Diminue', 'Augmente'],
          ['Énergie d\'ionisation', 'Augmente', 'Diminue'],
          ['Affinité électronique', 'Augmente (irrégulier)', 'Diminue'],
          ['Électronégativité', 'Augmente', 'Diminue'],
          ['Polarisabilité', 'Diminue', 'Augmente']
        ]}
      />

      <Text style={styles.h2}>10.3 Hydrures</Text>

      <Table
        headers={['Type', 'Éléments', 'Caractère', 'Exemples']}
        rows={[
          ['Salin', 'Groupes 1, 2', 'Ionique M⁺H⁻', 'NaH, CaH₂'],
          ['Métallique', 'Métaux bloc d', 'Conducteur', 'TiH₂, PdH'],
          ['Moléculaire', 'Non-métaux', 'Covalent', 'H₂O, NH₃, CH₄']
        ]}
      />

      <Text style={styles.h2}>10.4 Oxydes</Text>

      <Table
        headers={['Type', 'Éléments', 'Comportement', 'Exemples']}
        rows={[
          ['Basique', 'Métaux (faible IE)', 'Soluble, forme bases', 'Na₂O, CaO'],
          ['Amphotère', 'Be, Al, métalloïdes', 'Soluble acide et base', 'Al₂O₃, ZnO'],
          ['Acide', 'Non-métaux', 'Forme des acides', 'CO₂, SO₃, N₂O₅']
        ]}
      />

      <Text style={styles.h2}>10.5 Classification Électrique</Text>

      <Table
        headers={['Type', 'Band Gap', 'R vs T', 'Exemples']}
        rows={[
          ['Conducteur', '0 ou chevauchement', 'R ↑ avec T', 'Cu, Ag, Au'],
          ['Semiconducteur', '0.1 - 4 eV', 'R ↓ avec T', 'Si, Ge, GaAs'],
          ['Isolant', '> 4 eV', 'R très élevée', 'Diamond, SiO₂'],
          ['Supraconducteur', '-', 'R = 0 si T < Tc', 'YBa₂Cu₃O₇']
        ]}
      />

      <Text style={styles.h2}>10.6 Semiconducteurs</Text>

      <Table
        headers={['Type', 'Dopage', 'Porteurs', 'Exemple']}
        rows={[
          ['Intrinsèque', 'Aucun', 'e⁻ et trous (égaux)', 'Si pur'],
          ['Type n', 'Groupe 15 (As, P)', 'Électrons (excès)', 'Si:As'],
          ['Type p', 'Groupe 13 (B, In)', 'Trous (déficit)', 'Si:In']
        ]}
      />

      <Text style={styles.h2}>10.7 Constantes Importantes</Text>

      <Table
        headers={['Constante', 'Symbole', 'Valeur', 'Unités']}
        rows={[
          ['Constante de Planck', 'h', '6.626 × 10⁻³⁴', 'J·s'],
          ['Vitesse de la lumière', 'c', '3.00 × 10⁸', 'm·s⁻¹'],
          ['Charge élémentaire', 'e', '1.602 × 10⁻¹⁹', 'C']
        ]}
      />
    </Page>

    {/* CONSEILS PRATIQUES */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>CONSEILS POUR LA RÉSOLUTION DE PROBLÈMES</Text>

      <Text style={styles.h2}>✓ Liste de Vérification</Text>

      <ExampleBox title="Pour la thermodynamique">
        <Text style={styles.paragraph}>
          • Identifier les signes de ΔH et ΔS
        </Text>
        <Text style={styles.paragraph}>
          • Déterminer la plage de températures de spontanéité
        </Text>
        <Text style={styles.paragraph}>
          • Vérifier les unités (J vs kJ, T en K)
        </Text>
      </ExampleBox>

      <ExampleBox title="Pour les tendances périodiques">
        <Text style={styles.paragraph}>
          • Repérer la position dans le tableau périodique
        </Text>
        <Text style={styles.paragraph}>
          • Considérer Zₑff et le nombre de couches
        </Text>
        <Text style={styles.paragraph}>
          • Attention aux exceptions (contraction lanthanide)
        </Text>
      </ExampleBox>

      <ExampleBox title="Pour les semiconducteurs">
        <Text style={styles.paragraph}>
          • Identifier le type de dopage (n ou p)
        </Text>
        <Text style={styles.paragraph}>
          • Comprendre la direction du courant
        </Text>
        <Text style={styles.paragraph}>
          • Vérifier la polarisation (directe ou inverse)
        </Text>
      </ExampleBox>

      <Text style={styles.h2}>⚠️ Erreurs Courantes</Text>

      <WarningBox title="À éviter absolument">
        <Text style={styles.paragraph}>
          ❌ Confondre ΔG et ΔH pour le critère de spontanéité
        </Text>
        <Text style={styles.paragraph}>
          ❌ Oublier que les tendances s'inversent pour les rayons ioniques
        </Text>
        <Text style={styles.paragraph}>
          ❌ Mélanger les porteurs de charge dans les semiconducteurs n et p
        </Text>
        <Text style={styles.paragraph}>
          ❌ Ignorer la contraction lanthanide pour les éléments de Période 6
        </Text>
      </WarningBox>

      <Text style={styles.h2}>Applications Pratiques</Text>

      <InfoBox title="Exemples d'utilisation">
        <Text style={styles.paragraph}>
          1. Biochimie : Couplage ATP/ADP pour réactions non spontanées
        </Text>
        <Text style={styles.paragraph}>
          2. Électronique : Diodes, LED, transistors (jonctions p-n)
        </Text>
        <Text style={styles.paragraph}>
          3. Énergie : Cellules solaires (semiconducteurs)
        </Text>
        <Text style={styles.paragraph}>
          4. Médecine : IRM (supraconducteurs)
        </Text>
        <Text style={styles.paragraph}>
          5. Transport : Trains maglev (supraconducteurs)
        </Text>
        <Text style={styles.paragraph}>
          6. Catalyse : Métaux de transition (états d'oxydation variables)
        </Text>
      </InfoBox>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Résumé créé selon le modèle du polycopié EPFL
        </Text>
        <Text style={styles.footerText}>
          Dr. Arne Seitz - BioImaging & Optics Platform (BIOP)
        </Text>
        <Text style={styles.footerText}>
          École Polytechnique Fédérale de Lausanne (EPFL)
        </Text>
      </View>
    </Page>
  </Document>
);

export default Week7Materials;
