# Guide de Génération des PDFs A4 avec HTML + MathJax

## 📚 Nouveau Système de Génération

Ce système utilise **HTML + CSS + MathJax** pour créer des PDFs parfaitement formatés au **format A4** avec des formules mathématiques impeccables.

---

## 🎯 Avantages du Nouveau Système

✅ **Formules mathématiques parfaites** - MathJax rend les formules LaTeX de manière professionnelle
✅ **Format A4 cohérent** - Dimensions exactes (210mm × 297mm)
✅ **Pas de caractères qui se chevauchent** - Rendu typographique optimal
✅ **Formules chimiques** - Support complet avec mhchem
✅ **Impression directe** - Ctrl+P depuis n'importe quel navigateur

---

## 📁 Structure des Fichiers

```
Chimie-polycop/
├── output-html/                    # Fichiers HTML générés
│   ├── Semaine5_Lois_des_Gaz.html
│   ├── Semaine6_Thermodynamique.html
│   └── Semaine7_Materiaux.html
│
├── src/html-templates/             # Templates et styles
│   ├── styles.css                  # Styles A4 + EPFL
│   └── base-template.html          # Template de base
│
└── HTML_PDF_GUIDE.md               # Ce guide
```

---

## 🚀 Comment Générer les PDFs

### Méthode 1 : Impression depuis le Navigateur (Recommandée)

1. **Ouvrir le fichier HTML** dans votre navigateur web :
   ```
   File → Open File → Sélectionner le fichier HTML
   ```

2. **Attendre que MathJax charge** :
   - Les formules mathématiques doivent apparaître correctement
   - Attendre 2-3 secondes après le chargement de la page

3. **Imprimer en PDF** :
   - Windows/Linux : `Ctrl + P`
   - Mac : `Cmd + P`

4. **Configurer l'impression** :
   - **Destination** : Enregistrer au format PDF
   - **Format** : A4
   - **Marges** : Par défaut (ou Aucune)
   - **Échelle** : 100%
   - **Options** : ☑ Graphiques d'arrière-plan

5. **Enregistrer** :
   - Cliquer sur "Enregistrer"
   - Choisir l'emplacement et le nom du fichier

---

### Méthode 2 : Ligne de Commande (Chrome/Chromium)

Si vous avez Chrome ou Chromium installé :

```bash
# Pour Semaine 5
google-chrome --headless --disable-gpu --print-to-pdf=output/Semaine5.pdf output-html/Semaine5_Lois_des_Gaz.html

# Pour Semaine 6
google-chrome --headless --disable-gpu --print-to-pdf=output/Semaine6.pdf output-html/Semaine6_Thermodynamique.html

# Pour Semaine 7
google-chrome --headless --disable-gpu --print-to-pdf=output/Semaine7.pdf output-html/Semaine7_Materiaux.html
```

Sur Mac, remplacer `google-chrome` par :
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
```

---

## 🎨 Caractéristiques des PDFs

### Format et Dimensions
- **Taille** : A4 (210mm × 297mm)
- **Marges** : 20mm (haut/bas), 15mm (gauche/droite)
- **Orientation** : Portrait

### Style EPFL
- **Couleurs** :
  - Bleu principal : `#1e3a8a` (titres, formules)
  - Rouge : `#dc2626` (encadrés importants)
  - Orange : `#ea580c` (exemples)
  - Bleu clair : Encadrés d'information

### Typographie
- **Police principale** : Helvetica, Arial, sans-serif
- **Taille de base** : 11pt
- **Interligne** : 1.6
- **Formules** : Rendu MathJax SVG

### Éléments
- ✅ Page de couverture avec logo EPFL stylisé
- ✅ Table des matières cliquable
- ✅ Encadrés colorés (formules, exemples, avertissements)
- ✅ Tableaux bien formatés
- ✅ Diagrammes SVG intégrés
- ✅ Formules chimiques (notation mhchem)

---

## 📝 Exemples de Formules

Le système supporte toutes les notations LaTeX standards :

### Formules inline
```
La loi des gaz parfaits : $PV = nRT$
```

### Formules display
```
$$\Delta G = \Delta H - T\Delta S$$
```

### Formules chimiques
```
$$\ce{CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l)}$$
```

### Équations complexes
```
$$v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$$
```

---

## 🔧 Personnalisation

### Modifier les Styles

Éditez le fichier `src/html-templates/styles.css` pour changer :
- Couleurs
- Polices
- Espacements
- Marges

### Modifier le Contenu

Les fichiers HTML dans `output-html/` peuvent être édités directement avec n'importe quel éditeur de texte.

---

## ⚠️ Résolution de Problèmes

### Les formules ne s'affichent pas

**Problème** : Les formules apparaissent en notation LaTeX brute
**Solution** : Attendre que MathJax charge complètement (2-3 secondes)

### Les marges sont incorrectes

**Problème** : Les marges ne correspondent pas à A4
**Solution** : Dans les paramètres d'impression, sélectionner "Marges par défaut" et décocher "Ajuster à la page"

### Les couleurs ne s'impriment pas

**Problème** : Les encadrés colorés apparaissent en gris
**Solution** : Cocher "Graphiques d'arrière-plan" dans les options d'impression

### Le PDF est coupé

**Problème** : Le contenu déborde de la page
**Solution** : Vérifier que l'échelle est à 100% dans les paramètres d'impression

---

## 📊 Comparaison avec l'Ancien Système

| Aspect | @react-pdf/renderer | HTML + MathJax |
|--------|-------------------|----------------|
| **Formules** | Texte simple, chevauchement | MathJax parfait |
| **Qualité typo** | Problèmes Unicode | Excellente |
| **Format A4** | Approximatif | Exact (210×297mm) |
| **Personnalisation** | Limitée | CSS complet |
| **Génération** | npm run | Navigateur (Ctrl+P) |
| **Diagrammes** | SVG basiques | SVG + styles CSS |

---

## 💡 Conseils

1. **Toujours attendre** que MathJax finisse de charger avant d'imprimer
2. **Vérifier l'aperçu** avant d'enregistrer le PDF
3. **Utiliser Chrome** ou Firefox pour de meilleurs résultats
4. **Paramètres recommandés** : Format A4, 100%, marges par défaut, graphiques activés
5. **Pour des lots** : Utiliser la méthode en ligne de commande

---

## 📞 Support

Pour toute question ou problème :
- Consulter ce guide
- Vérifier que MathJax charge correctement
- Essayer un navigateur différent
- Vérifier les paramètres d'impression

---

**Créé pour le Polycopié de Chimie EPFL**
Dr. Arne Seitz - BioImaging & Optics Platform (BIOP)
École Polytechnique Fédérale de Lausanne
