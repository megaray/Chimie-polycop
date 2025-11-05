import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles';
import { AtomDiagram } from './Diagrams';

export const CoverPage = ({ week, title, date }) => (
  <Page size="A4" style={styles.coverPage}>
    <Text style={styles.coverTitle}>POLYCOPIÉ DE CHIMIE</Text>
    <Text style={styles.coverTitle}>GÉNÉRALE</Text>

    <View style={styles.coverAtom}>
      <AtomDiagram />
    </View>

    <Text style={styles.coverSubtitle}>{week}</Text>
    <Text style={styles.coverSubtitle}>{title}</Text>

    <Text style={styles.coverAuthor}>Dr. Arne Seitz</Text>
    <Text style={styles.coverInstitution}>BioImaging & Optics Platform (BIOP)</Text>
    <Text style={styles.coverInstitution}>École Polytechnique Fédérale de Lausanne</Text>

    <Text style={styles.coverDate}>{date}</Text>
  </Page>
);
