import React from 'react';
import { Svg, Circle, Line, Rect, Text, Path, G } from '@react-pdf/renderer';
import { colors } from '../styles/colors';

// Schéma d'un atome (pour la page de couverture)
export const AtomDiagram = () => (
  <Svg width="150" height="150" viewBox="0 0 150 150">
    {/* Noyau */}
    <Circle cx="75" cy="75" r="10" fill={colors.importantBorder} />

    {/* Orbites */}
    <Circle cx="75" cy="75" r="30" fill="none" stroke={colors.primary} strokeWidth="2" />
    <Circle cx="75" cy="75" r="50" fill="none" stroke={colors.primary} strokeWidth="2" />
    <Circle cx="75" cy="75" r="70" fill="none" stroke={colors.primary} strokeWidth="2" />

    {/* Électrons */}
    <Circle cx="105" cy="75" r="4" fill={colors.schemaBlue} />
    <Circle cx="75" cy="105" r="4" fill={colors.schemaBlue} />
    <Circle cx="45" cy="75" r="4" fill={colors.schemaBlue} />
    <Circle cx="125" cy="105" r="4" fill={colors.schemaBlue} />
    <Circle cx="25" cy="95" r="4" fill={colors.schemaBlue} />
  </Svg>
);

// Schéma de la loi de Boyle (P vs V)
export const BoyleLawDiagram = () => (
  <Svg width="200" height="150" viewBox="0 0 200 150">
    {/* Axes */}
    <Line x1="30" y1="120" x2="180" y2="120" stroke={colors.text} strokeWidth="2" />
    <Line x1="30" y1="120" x2="30" y2="20" stroke={colors.text} strokeWidth="2" />

    {/* Courbe hyperbolique */}
    <Path
      d="M 35 30 Q 50 40, 70 60 Q 90 80, 110 95 Q 130 105, 160 112"
      fill="none"
      stroke={colors.schemaBlue}
      strokeWidth="3"
    />

    {/* Labels */}
    <Text x="90" y="140" fontSize="10" fill={colors.text}>Volume (V)</Text>
    <Text x="5" y="70" fontSize="10" fill={colors.text}>P</Text>

    {/* Flèches */}
    <Path d="M 170 115 L 165 113 L 165 117 Z" fill={colors.schemaRed} />
    <Text x="145" y="125" fontSize="8" fill={colors.schemaRed}>V ↑</Text>
    <Text x="145" y="135" fontSize="8" fill={colors.schemaRed}>P ↓</Text>
  </Svg>
);

// Schéma de la loi de Charles (V vs T)
export const CharlesLawDiagram = () => (
  <Svg width="200" height="150" viewBox="0 0 200 150">
    {/* Axes */}
    <Line x1="30" y1="120" x2="180" y2="120" stroke={colors.text} strokeWidth="2" />
    <Line x1="30" y1="120" x2="30" y2="20" stroke={colors.text} strokeWidth="2" />

    {/* Ligne droite passant par l'origine */}
    <Line x1="30" y1="120" x2="170" y2="30" stroke={colors.schemaBlue} strokeWidth="3" />

    {/* Point zéro absolu */}
    <Circle cx="30" cy="120" r="4" fill={colors.schemaRed} />
    <Text x="10" y="135" fontSize="8" fill={colors.schemaRed}>0 K</Text>

    {/* Labels */}
    <Text x="80" y="140" fontSize="10" fill={colors.text}>Température (K)</Text>
    <Text x="5" y="70" fontSize="10" fill={colors.text}>V</Text>
  </Svg>
);

// Schéma d'échange d'énergie (Thermodynamique)
export const EnergyDiagram = () => (
  <Svg width="250" height="120" viewBox="0 0 250 120">
    {/* Système */}
    <Rect x="90" y="30" width="70" height="60" fill={colors.formulaBg} stroke={colors.primary} strokeWidth="2" />
    <Text x="105" y="65" fontSize="12" fill={colors.primary}>Système</Text>

    {/* Flèche chaleur (q) */}
    <Path d="M 60 50 L 85 50" stroke={colors.schemaRed} strokeWidth="3" />
    <Path d="M 85 50 L 80 45 L 80 55 Z" fill={colors.schemaRed} />
    <Text x="55" y="45" fontSize="10" fill={colors.schemaRed}>q</Text>

    {/* Flèche travail (w) */}
    <Path d="M 60 70 L 85 70" stroke={colors.schemaBlue} strokeWidth="3" />
    <Path d="M 85 70 L 80 65 L 80 75 Z" fill={colors.schemaBlue} />
    <Text x="55" y="85" fontSize="10" fill={colors.schemaBlue}>w</Text>

    {/* ΔU */}
    <Text x="115" y="50" fontSize="14" fill={colors.primary}>ΔU</Text>

    {/* Environnement */}
    <Text x="10" y="15" fontSize="11" fill={colors.textLight}>Environnement</Text>
    <Text x="180" y="15" fontSize="11" fill={colors.textLight}>Environnement</Text>
  </Svg>
);

// Schéma des bandes d'énergie (Semiconducteurs)
export const BandGapDiagram = () => (
  <Svg width="300" height="180" viewBox="0 0 300 180">
    {/* Conducteur */}
    <G>
      <Text x="20" y="30" fontSize="12" fontWeight="bold" fill={colors.text}>Conducteur</Text>
      <Rect x="10" y="40" width="80" height="30" fill={colors.schemaBlue} opacity="0.7" />
      <Rect x="10" y="70" width="80" height="30" fill={colors.schemaBlue} opacity="0.3" />
      <Text x="25" y="60" fontSize="9" fill={colors.text}>BC</Text>
      <Text x="25" y="90" fontSize="9" fill={colors.text}>BV</Text>
      <Line x1="90" y1="70" x2="100" y2="70" stroke={colors.text} strokeWidth="2" />
      <Text x="105" y="75" fontSize="8" fill={colors.text}>Eg = 0</Text>
    </G>

    {/* Semiconducteur */}
    <G>
      <Text x="10" y="130" fontSize="12" fontWeight="bold" fill={colors.text}>Semiconducteur</Text>
      <Rect x="10" y="140" width="80" height="15" fill={colors.schemaBlue} opacity="0.7" />
      <Text x="20" y="151" fontSize="8" fill={colors.text}>BC</Text>
      {/* Gap */}
      <Rect x="10" y="155" width="80" height="10" fill="none" stroke={colors.schemaRed} strokeWidth="1" strokeDasharray="3,3" />
      <Rect x="10" y="165" width="80" height="15" fill={colors.schemaBlue} opacity="0.3" />
      <Text x="20" y="176" fontSize="8" fill={colors.text}>BV</Text>
      <Text x="100" y="165" fontSize="8" fill={colors.schemaRed}>Eg ≈ 1 eV</Text>
    </G>

    {/* Isolant */}
    <G>
      <Text x="160" y="130" fontSize="12" fontWeight="bold" fill={colors.text}>Isolant</Text>
      <Rect x="160" y="140" width="80" height="15" fill={colors.schemaBlue} opacity="0.7" />
      <Text x="185" y="151" fontSize="8" fill={colors.text}>BC</Text>
      {/* Gap large */}
      <Rect x="160" y="155" width="80" height="25" fill="none" />
      <Rect x="160" y="180" width="80" height="15" fill={colors.schemaBlue} opacity="0.3" />
      <Text x="185" y="191" fontSize="8" fill={colors.text}>BV</Text>
      <Text x="245" y="170" fontSize="8" fill={colors.schemaRed}>Eg > 4 eV</Text>
    </G>
  </Svg>
);

// Distribution de Maxwell
export const MaxwellDistribution = () => (
  <Svg width="250" height="150" viewBox="0 0 250 150">
    {/* Axes */}
    <Line x1="30" y1="120" x2="230" y2="120" stroke={colors.text} strokeWidth="2" />
    <Line x1="30" y1="120" x2="30" y2="20" stroke={colors.text} strokeWidth="2" />

    {/* Courbe basse température */}
    <Path
      d="M 35 120 Q 50 70, 70 50 Q 90 40, 110 60 Q 130 90, 150 110 Q 170 120, 190 125"
      fill="none"
      stroke={colors.schemaBlue}
      strokeWidth="2"
    />

    {/* Courbe haute température */}
    <Path
      d="M 35 120 Q 70 90, 110 70 Q 140 65, 170 80 Q 200 100, 220 118"
      fill="none"
      stroke={colors.schemaRed}
      strokeWidth="2"
      strokeDasharray="5,5"
    />

    {/* Labels */}
    <Text x="110" y="140" fontSize="10" fill={colors.text}>Vitesse (v)</Text>
    <Text x="5" y="70" fontSize="10" fill={colors.text}>f(v)</Text>

    {/* Légende */}
    <Line x1="180" y1="30" x2="200" y2="30" stroke={colors.schemaBlue} strokeWidth="2" />
    <Text x="205" y="35" fontSize="9" fill={colors.schemaBlue}>T₁</Text>

    <Line x1="180" y1="45" x2="200" y2="45" stroke={colors.schemaRed} strokeWidth="2" strokeDasharray="5,5" />
    <Text x="205" y="50" fontSize="9" fill={colors.schemaRed}>T₂ > T₁</Text>
  </Svg>
);

// Tableau périodique simplifié
export const PeriodicTableSimple = () => (
  <Svg width="300" height="150" viewBox="0 0 300 150">
    {/* s-block */}
    <Rect x="10" y="20" width="40" height="80" fill={colors.schemaRed} opacity="0.3" stroke={colors.schemaRed} strokeWidth="2" />
    <Text x="18" y="65" fontSize="12" fontWeight="bold" fill={colors.text}>s</Text>
    <Text x="12" y="110" fontSize="8" fill={colors.text}>Groupes 1-2</Text>

    {/* d-block */}
    <Rect x="60" y="40" width="100" height="60" fill={colors.schemaBlue} opacity="0.3" stroke={colors.schemaBlue} strokeWidth="2" />
    <Text x="100" y="75" fontSize="12" fontWeight="bold" fill={colors.text}>d</Text>
    <Text x="75" y="110" fontSize="8" fill={colors.text}>Groupes 3-12</Text>

    {/* p-block */}
    <Rect x="170" y="20" width="60" height="80" fill={colors.schemaGreen} opacity="0.3" stroke={colors.schemaGreen} strokeWidth="2" />
    <Text x="190" y="65" fontSize="12" fontWeight="bold" fill={colors.text}>p</Text>
    <Text x="172" y="110" fontSize="8" fill={colors.text}>Groupes 13-18</Text>

    {/* f-block */}
    <Rect x="80" y="120" width="80" height="20" fill={colors.schemaPurple} opacity="0.3" stroke={colors.schemaPurple} strokeWidth="2" />
    <Text x="112" y="135" fontSize="10" fontWeight="bold" fill={colors.text}>f</Text>
  </Svg>
);

// Courbe de chauffage (Thermodynamique)
export const HeatingCurveDiagram = () => (
  <Svg width="280" height="180" viewBox="0 0 280 180">
    {/* Axes */}
    <Line x1="30" y1="160" x2="260" y2="160" stroke={colors.text} strokeWidth="2" />
    <Line x1="30" y1="160" x2="30" y2="20" stroke={colors.text} strokeWidth="2" />

    {/* Courbe de chauffage */}
    {/* Solide */}
    <Line x1="30" y1="140" x2="60" y2="100" stroke={colors.schemaBlue} strokeWidth="3" />
    {/* Fusion (plateau) */}
    <Line x1="60" y1="100" x2="90" y2="100" stroke={colors.schemaRed} strokeWidth="3" />
    {/* Liquide */}
    <Line x1="90" y1="100" x2="140" y2="60" stroke={colors.schemaBlue} strokeWidth="3" />
    {/* Vaporisation (plateau) */}
    <Line x1="140" y1="60" x2="200" y2="60" stroke={colors.schemaRed} strokeWidth="3" />
    {/* Vapeur */}
    <Line x1="200" y1="60" x2="230" y2="30" stroke={colors.schemaBlue} strokeWidth="3" />

    {/* Labels des phases */}
    <Text x="35" y="125" fontSize="9" fill={colors.text}>Solide</Text>
    <Text x="95" y="80" fontSize="9" fill={colors.text}>Liquide</Text>
    <Text x="205" y="45" fontSize="9" fill={colors.text}>Vapeur</Text>

    {/* Labels des transitions */}
    <Text x="65" y="95" fontSize="8" fill={colors.schemaRed}>Fusion</Text>
    <Text x="155" y="55" fontSize="8" fill={colors.schemaRed}>Vaporisation</Text>

    {/* Axes labels */}
    <Text x="120" y="178" fontSize="10" fill={colors.text}>Chaleur ajoutée (q)</Text>
    <Text x="5" y="90" fontSize="10" fill={colors.text}>T</Text>
  </Svg>
);

// Diagramme ΔG = ΔH - TΔS (Thermodynamique)
export const GibbsEnergyDiagram = () => (
  <Svg width="280" height="140" viewBox="0 0 280 140">
    {/* Formule centrale */}
    <Rect x="80" y="40" width="120" height="40" fill={colors.formulaBg} stroke={colors.formulaBorder} strokeWidth="2" />
    <Text x="105" y="65" fontSize="16" fontWeight="bold" fill={colors.primary}>ΔG = ΔH - TΔS</Text>

    {/* ΔG < 0 (spontané) */}
    <Rect x="10" y="100" width="80" height="30" fill={colors.schemaGreen} opacity="0.3" stroke={colors.schemaGreen} strokeWidth="2" />
    <Text x="20" y="120" fontSize="10" fill={colors.text}>ΔG &lt; 0</Text>
    <Text x="15" y="130" fontSize="8" fill={colors.text}>Spontané</Text>

    {/* ΔG = 0 (équilibre) */}
    <Rect x="100" y="100" width="80" height="30" fill={colors.schemaYellow} opacity="0.3" stroke={colors.schemaYellow} strokeWidth="2" />
    <Text x="115" y="120" fontSize="10" fill={colors.text}>ΔG = 0</Text>
    <Text x="110" y="130" fontSize="8" fill={colors.text}>Équilibre</Text>

    {/* ΔG > 0 (non spontané) */}
    <Rect x="190" y="100" width="80" height="30" fill={colors.schemaRed} opacity="0.3" stroke={colors.schemaRed} strokeWidth="2" />
    <Text x="205" y="120" fontSize="10" fill={colors.text}>ΔG &gt; 0</Text>
    <Text x="195" y="130" fontSize="8" fill={colors.text}>Non spontané</Text>

    {/* Titre */}
    <Text x="70" y="20" fontSize="12" fontWeight="bold" fill={colors.primary}>Critère de Spontanéité</Text>
  </Svg>
);

// Diagramme ATP/ADP (Thermodynamique - Biologie)
export const ATPCycleDiagram = () => (
  <Svg width="250" height="150" viewBox="0 0 250 150">
    {/* ATP */}
    <Circle cx="60" cy="60" r="35" fill={colors.schemaGreen} opacity="0.3" stroke={colors.schemaGreen} strokeWidth="2" />
    <Text x="45" y="65" fontSize="12" fontWeight="bold" fill={colors.text}>ATP</Text>

    {/* ADP */}
    <Circle cx="190" cy="60" r="35" fill={colors.schemaRed} opacity="0.3" stroke={colors.schemaRed} strokeWidth="2" />
    <Text x="175" y="65" fontSize="12" fontWeight="bold" fill={colors.text}>ADP</Text>

    {/* Flèche ATP -> ADP (hydrolyse) */}
    <Path d="M 95 50 L 155 50" stroke={colors.schemaRed} strokeWidth="3" />
    <Path d="M 155 50 L 150 45 L 150 55 Z" fill={colors.schemaRed} />
    <Text x="105" y="45" fontSize="9" fill={colors.schemaRed}>Hydrolyse</Text>
    <Text x="105" y="70" fontSize="8" fill={colors.text}>-30 kJ/mol</Text>

    {/* Flèche ADP -> ATP (synthèse) */}
    <Path d="M 155 80 L 95 80" stroke={colors.schemaGreen} strokeWidth="3" />
    <Path d="M 95 80 L 100 75 L 100 85 Z" fill={colors.schemaGreen} />
    <Text x="105" y="95" fontSize="9" fill={colors.schemaGreen}>Synthèse</Text>
    <Text x="105" y="110" fontSize="8" fill={colors.text}>+30 kJ/mol</Text>

    {/* Glucose */}
    <Text x="80" y="135" fontSize="10" fill={colors.schemaYellow}>Glucose → Énergie</Text>
  </Svg>
);

// Jonction p-n (Semiconducteurs)
export const PNJunctionDiagram = () => (
  <Svg width="280" height="160" viewBox="0 0 280 160">
    {/* Type p */}
    <Rect x="10" y="40" width="120" height="80" fill={colors.schemaRed} opacity="0.2" stroke={colors.schemaRed} strokeWidth="2" />
    <Text x="45" y="30" fontSize="14" fontWeight="bold" fill={colors.schemaRed}>Type p</Text>
    <Text x="35" y="85" fontSize="10" fill={colors.text}>Trous (○)</Text>
    {/* Trous */}
    <Circle cx="40" cy="60" r="5" fill="none" stroke={colors.schemaRed} strokeWidth="2" />
    <Circle cx="70" cy="60" r="5" fill="none" stroke={colors.schemaRed} strokeWidth="2" />
    <Circle cx="100" cy="60" r="5" fill="none" stroke={colors.schemaRed} strokeWidth="2" />
    <Circle cx="40" cy="100" r="5" fill="none" stroke={colors.schemaRed} strokeWidth="2" />
    <Circle cx="70" cy="100" r="5" fill="none" stroke={colors.schemaRed} strokeWidth="2" />
    <Circle cx="100" cy="100" r="5" fill="none" stroke={colors.schemaRed} strokeWidth="2" />

    {/* Type n */}
    <Rect x="150" y="40" width="120" height="80" fill={colors.schemaBlue} opacity="0.2" stroke={colors.schemaBlue} strokeWidth="2" />
    <Text x="185" y="30" fontSize="14" fontWeight="bold" fill={colors.schemaBlue}>Type n</Text>
    <Text x="165" y="85" fontSize="10" fill={colors.text}>Électrons (•)</Text>
    {/* Électrons */}
    <Circle cx="170" cy="60" r="4" fill={colors.schemaBlue} />
    <Circle cx="200" cy="60" r="4" fill={colors.schemaBlue} />
    <Circle cx="230" cy="60" r="4" fill={colors.schemaBlue} />
    <Circle cx="170" cy="100" r="4" fill={colors.schemaBlue} />
    <Circle cx="200" cy="100" r="4" fill={colors.schemaBlue} />
    <Circle cx="230" cy="100" r="4" fill={colors.schemaBlue} />

    {/* Jonction */}
    <Line x1="135" y1="40" x2="135" y2="120" stroke={colors.text} strokeWidth="2" strokeDasharray="5,5" />
    <Text x="110" y="145" fontSize="9" fill={colors.text}>Jonction p-n</Text>
  </Svg>
);

// Tendances périodiques (flèches)
export const PeriodicTrendsDiagram = () => (
  <Svg width="250" height="180" viewBox="0 0 250 180">
    {/* Grille du tableau */}
    <Rect x="40" y="40" width="180" height="100" fill="none" stroke={colors.tableBorder} strokeWidth="1" />

    {/* Flèche rayon atomique (↓ vers le bas) */}
    <Path d="M 30 50 L 30 120" stroke={colors.schemaBlue} strokeWidth="3" />
    <Path d="M 30 120 L 25 110 L 35 110 Z" fill={colors.schemaBlue} />
    <Text x="5" y="90" fontSize="10" fill={colors.schemaBlue}>r ↑</Text>

    {/* Flèche rayon atomique (← vers la gauche) */}
    <Path d="M 200 25 L 60 25" stroke={colors.schemaBlue} strokeWidth="3" />
    <Path d="M 60 25 L 70 20 L 70 30 Z" fill={colors.schemaBlue} />
    <Text x="120" y="20" fontSize="10" fill={colors.schemaBlue}>r ↓</Text>

    {/* Flèche électronégativité (→ vers la droite) */}
    <Path d="M 60 155 L 200 155" stroke={colors.schemaRed} strokeWidth="3" />
    <Path d="M 200 155 L 190 150 L 190 160 Z" fill={colors.schemaRed} />
    <Text x="115" y="170" fontSize="10" fill={colors.schemaRed}>χ ↑</Text>

    {/* Flèche électronégativité (↑ vers le haut) */}
    <Path d="M 230 120 L 230 50" stroke={colors.schemaRed} strokeWidth="3" />
    <Path d="M 230 50 L 225 60 L 235 60 Z" fill={colors.schemaRed} />
    <Text x="235" y="90" fontSize="10" fill={colors.schemaRed}>χ ↑</Text>

    {/* Labels */}
    <Text x="80" y="95" fontSize="12" fill={colors.text}>Tableau Périodique</Text>
  </Svg>
);
