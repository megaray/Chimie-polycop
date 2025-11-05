const React = require('react');
const { Document, Page, Text, View, StyleSheet, Svg, Circle, Line, Rect, Path } = require('@react-pdf/renderer');
const ReactPDF = require('@react-pdf/renderer');
const fs = require('fs');
const path = require('path');

// Colors
const colors = {
  primary: '#1e3a8a',
  formulaBg: '#eff6ff',
  formulaBorder: '#2563eb',
  importantBg: '#fef2f2',
  importantBorder: '#dc2626',
  exampleBg: '#fff7ed',
  exampleBorder: '#ea580c',
  text: '#1f2937',
  textLight: '#6b7280',
  tableBorder: '#d1d5db',
  tableHeaderBg: '#f3f4f6',
};

// Styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    color: colors.text,
    lineHeight: 1.6,
  },
  coverPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  coverSubtitle: {
    fontSize: 24,
    color: colors.primary,
    marginBottom: 60,
    textAlign: 'center',
  },
  coverAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 40,
    textAlign: 'center',
  },
  coverInstitution: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
    textAlign: 'center',
  },
  coverDate: {
    fontSize: 11,
    color: colors.textLight,
    marginTop: 30,
    textAlign: 'center',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 30,
    marginBottom: 20,
    borderBottom: `3px solid ${colors.primary}`,
    paddingBottom: 8,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 25,
    marginBottom: 12,
  },
  h3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 18,
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  formulaBox: {
    backgroundColor: colors.formulaBg,
    borderLeftWidth: 4,
    borderLeftColor: colors.formulaBorder,
    padding: 15,
    marginVertical: 12,
    borderRadius: 4,
  },
  formulaText: {
    fontFamily: 'Courier',
    fontSize: 12,
    color: colors.text,
    textAlign: 'center',
    marginVertical: 5,
  },
  importantBox: {
    backgroundColor: colors.importantBg,
    borderLeftWidth: 4,
    borderLeftColor: colors.importantBorder,
    padding: 12,
    marginVertical: 12,
    borderRadius: 4,
  },
  exampleBox: {
    backgroundColor: colors.exampleBg,
    borderLeftWidth: 4,
    borderLeftColor: colors.exampleBorder,
    padding: 12,
    marginVertical: 12,
    borderRadius: 4,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginVertical: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.tableBorder,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.tableBorder,
  },
  tableRowLast: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: colors.tableHeaderBg,
  },
  tableCol: {
    padding: 8,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: colors.tableBorder,
  },
  tableColLast: {
    padding: 8,
    flex: 1,
  },
  tableCell: {
    fontSize: 10,
  },
  tableCellHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.primary,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 15,
  },
  listBullet: {
    width: 15,
    color: colors.primary,
  },
  listContent: {
    flex: 1,
  },
});

// Atom Diagram Component
const AtomDiagram = () => (
  <Svg width="150" height="150" viewBox="0 0 150 150">
    <Circle cx="75" cy="75" r="10" fill="#dc2626" />
    <Circle cx="75" cy="75" r="30" fill="none" stroke="#1e3a8a" strokeWidth="2" />
    <Circle cx="75" cy="75" r="50" fill="none" stroke="#1e3a8a" strokeWidth="2" />
    <Circle cx="75" cy="75" r="70" fill="none" stroke="#1e3a8a" strokeWidth="2" />
    <Circle cx="105" cy="75" r="4" fill="#3b82f6" />
    <Circle cx="75" cy="105" r="4" fill="#3b82f6" />
    <Circle cx="45" cy="75" r="4" fill="#3b82f6" />
  </Svg>
);

// Document
const Week5Document = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <Text style={styles.coverTitle}>POLYCOPIÉ DE CHIMIE</Text>
      <Text style={styles.coverTitle}>GÉNÉRALE</Text>

      <View style={{ marginVertical: 60 }}>
        <AtomDiagram />
      </View>

      <Text style={styles.coverSubtitle}>Semaine 5</Text>
      <Text style={styles.coverSubtitle}>Lois des Gaz</Text>

      <Text style={styles.coverAuthor}>Dr. Arne Seitz</Text>
      <Text style={styles.coverInstitution}>BioImaging & Optics Platform (BIOP)</Text>
      <Text style={styles.coverInstitution}>École Polytechnique Fédérale de Lausanne</Text>

      <Text style={styles.coverDate}>31 octobre 2025</Text>
    </Page>

    {/* Content Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>Table des Matières</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.paragraph}>1. Introduction aux Gaz</Text>
        <Text style={styles.paragraph}>2. Pression des Gaz</Text>
        <Text style={styles.paragraph}>3. Loi de Boyle</Text>
        <Text style={styles.paragraph}>4. Loi de Charles</Text>
        <Text style={styles.paragraph}>5. Principe d'Avogadro</Text>
        <Text style={styles.paragraph}>6. Loi des Gaz Parfaits</Text>
        <Text style={styles.paragraph}>7. Loi de Dalton</Text>
        <Text style={styles.paragraph}>8. Théorie Cinétique des Gaz</Text>
      </View>
    </Page>

    {/* Introduction */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>1. INTRODUCTION AUX GAZ</Text>

      <Text style={styles.h2}>1.1 Nature des Gaz</Text>

      <View style={styles.formulaBox}>
        <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Définition :</Text>
        <Text style={styles.paragraph}>
          Un gaz est une phase de la matière caractérisée par des molécules en mouvement
          aléatoire et continu, largement espacées les unes des autres.
        </Text>
      </View>

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
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Variable</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Signification</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCellHeader}>Unités</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>P</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Pression</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>Pa, atm, bar</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>V</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Volume</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>m³, L</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>T</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Température</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>K (Kelvin)</Text>
          </View>
        </View>
        <View style={styles.tableRowLast}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>n</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Quantité de matière</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>mol</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Lois des Gaz */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>2. LOI DE BOYLE</Text>

      <Text style={styles.paragraph}>
        À température constante (isotherme), le volume d'un gaz est inversement proportionnel à sa pression.
      </Text>

      <View style={styles.formulaBox}>
        <Text style={styles.formulaText}>P × V = constante</Text>
        <Text style={styles.formulaText}>ou</Text>
        <Text style={styles.formulaText}>P₁V₁ = P₂V₂</Text>
      </View>

      <View style={styles.importantBox}>
        <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Relations importantes :</Text>
        <Text style={styles.paragraph}>• Si P↑ alors V↓ (relation inverse)</Text>
        <Text style={styles.paragraph}>• Exemple : Compression d'air dans une seringue</Text>
      </View>

      <Text style={styles.h1}>3. LOI DE CHARLES</Text>

      <Text style={styles.paragraph}>
        À pression constante (isobare), le volume d'un gaz est directement proportionnel
        à sa température absolue.
      </Text>

      <View style={styles.formulaBox}>
        <Text style={styles.formulaText}>V/T = constante</Text>
        <Text style={styles.formulaText}>ou</Text>
        <Text style={styles.formulaText}>V₁/T₁ = V₂/T₂</Text>
      </View>

      <View style={styles.importantBox}>
        <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>⚠️ IMPORTANT :</Text>
        <Text style={styles.paragraph}>
          Toujours utiliser la température en Kelvin !{'\n'}
          T(K) = T(°C) + 273.15
        </Text>
      </View>

      <Text style={styles.h1}>4. LOI DES GAZ PARFAITS</Text>

      <View style={styles.formulaBox}>
        <Text style={styles.formulaText}>PV = nRT</Text>
      </View>

      <Text style={styles.paragraph}>
        Où R = 8.314 J·K⁻¹·mol⁻¹ (constante des gaz parfaits)
      </Text>

      <View style={styles.exampleBox}>
        <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Exemple pratique :</Text>
        <Text style={styles.paragraph}>
          Calculer le volume de 2 moles de gaz à 298 K et 1 atm :{'\n\n'}
          V = nRT/P = (2 mol × 0.08206 L·atm·K⁻¹·mol⁻¹ × 298 K) / 1 atm{'\n'}
          V ≈ 48.9 L
        </Text>
      </View>
    </Page>

    {/* Formulaire */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>FORMULAIRE RÉCAPITULATIF</Text>

      <Text style={styles.h2}>Lois des Gaz</Text>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Loi</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>Formule</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCellHeader}>Conditions</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Boyle</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>P₁V₁ = P₂V₂</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>T, n constants</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Charles</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>V₁/T₁ = V₂/T₂</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>P, n constants</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Gaz Parfaits</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>PV = nRT</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>Toutes conditions</Text>
          </View>
        </View>
        <View style={styles.tableRowLast}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Dalton</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>P_tot = ΣP_i</Text>
          </View>
          <View style={styles.tableColLast}>
            <Text style={styles.tableCell}>Mélanges</Text>
          </View>
        </View>
      </View>

      <Text style={styles.h2}>Constantes Importantes</Text>

      <View style={styles.formulaBox}>
        <Text style={styles.formulaText}>R = 8.314 J·K⁻¹·mol⁻¹</Text>
        <Text style={styles.formulaText}>R = 0.08206 L·atm·K⁻¹·mol⁻¹</Text>
        <Text style={styles.formulaText}>N_A = 6.022 × 10²³ mol⁻¹</Text>
      </View>

      <Text style={styles.h2}>Conversions</Text>

      <View style={styles.formulaBox}>
        <Text style={styles.formulaText}>T(K) = T(°C) + 273.15</Text>
        <Text style={styles.formulaText}>1 atm = 101 325 Pa = 1.01325 bar</Text>
        <Text style={styles.formulaText}>1 L = 10⁻³ m³</Text>
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

// Generate PDF
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🚀 Génération du PDF Semaine 5 - Lois des Gaz...\n');

ReactPDF.render(
  <Week5Document />,
  path.join(outputDir, 'Semaine5_Lois_des_Gaz.pdf')
).then(() => {
  console.log('✅ PDF généré avec succès!');
  console.log(`📁 Fichier : ${path.join(outputDir, 'Semaine5_Lois_des_Gaz.pdf')}`);
}).catch((error) => {
  console.error('❌ Erreur lors de la génération:', error);
  process.exit(1);
});
