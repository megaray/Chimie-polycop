import { StyleSheet } from '@react-pdf/renderer';
import { colors } from './colors';

export const styles = StyleSheet.create({
  // Structure de la page
  page: {
    backgroundColor: colors.background,
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    color: colors.text,
    lineHeight: 1.6,
  },

  // Page de couverture
  coverPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
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

  coverAtom: {
    width: 150,
    height: 150,
    marginBottom: 60,
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

  // Titres
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

  h4: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
  },

  // Texte
  paragraph: {
    marginBottom: 10,
    textAlign: 'justify',
  },

  bold: {
    fontWeight: 'bold',
  },

  italic: {
    fontStyle: 'italic',
  },

  // Listes
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

  // Encadrés
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

  warningBox: {
    backgroundColor: colors.warningBg,
    borderLeftWidth: 4,
    borderLeftColor: colors.warningBorder,
    padding: 12,
    marginVertical: 12,
    borderRadius: 4,
  },

  infoBox: {
    backgroundColor: colors.infoBg,
    borderLeftWidth: 4,
    borderLeftColor: colors.infoBorder,
    padding: 12,
    marginVertical: 12,
    borderRadius: 4,
  },

  boxTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 11,
  },

  // Tableaux
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

  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: colors.textLight,
    fontSize: 9,
    borderTopWidth: 1,
    borderTopColor: colors.tableBorder,
    paddingTop: 8,
  },

  pageNumber: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    fontSize: 9,
    color: colors.textLight,
  },
});
