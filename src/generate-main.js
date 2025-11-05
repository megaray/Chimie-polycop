const React = require('react');
const ReactPDF = require('@react-pdf/renderer');
const fs = require('fs');
const path = require('path');

// Import documents
const Week5GasLaws = require('./documents/Week5_GasLaws.js').default;

const OUTPUT_DIR = path.join(__dirname, '../output');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate PDFs
async function generatePDFs() {
  console.log('🚀 Début de la génération des PDFs...\n');

  try {
    // Week 5 - Gas Laws
    console.log('📄 Génération de Semaine5_Lois_des_Gaz.pdf...');
    await ReactPDF.render(
      React.createElement(Week5GasLaws),
      path.join(OUTPUT_DIR, 'Semaine5_Lois_des_Gaz.pdf')
    );
    console.log('✅ Semaine5_Lois_des_Gaz.pdf généré avec succès!\n');

    console.log('🎉 Tous les PDFs ont été générés avec succès!');
    console.log(`📁 Les PDFs sont disponibles dans le dossier: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error('❌ Erreur lors de la génération des PDFs:', error);
    process.exit(1);
  }
}

generatePDFs();
