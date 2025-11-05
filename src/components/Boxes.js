import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles';

// Encadré pour les formules
export const FormulaBox = ({ children, title }) => (
  <View style={styles.formulaBox}>
    {title && <Text style={styles.boxTitle}>{title}</Text>}
    <Text style={styles.formulaText}>{children}</Text>
  </View>
);

// Encadré pour les éléments importants (rouge)
export const ImportantBox = ({ children, title }) => (
  <View style={styles.importantBox}>
    {title && <Text style={styles.boxTitle}>{title}</Text>}
    <Text style={styles.paragraph}>{children}</Text>
  </View>
);

// Encadré pour les exemples (orange)
export const ExampleBox = ({ children, title = "Exemple :" }) => (
  <View style={styles.exampleBox}>
    {title && <Text style={styles.boxTitle}>{title}</Text>}
    {children}
  </View>
);

// Encadré pour les avertissements (jaune)
export const WarningBox = ({ children, title = "⚠️ Attention :" }) => (
  <View style={styles.warningBox}>
    {title && <Text style={styles.boxTitle}>{title}</Text>}
    <Text style={styles.paragraph}>{children}</Text>
  </View>
);

// Encadré pour les informations (bleu)
export const InfoBox = ({ children, title }) => (
  <View style={styles.infoBox}>
    {title && <Text style={styles.boxTitle}>{title}</Text>}
    {children}
  </View>
);
