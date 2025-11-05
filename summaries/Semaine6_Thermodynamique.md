# RÉSUMÉ COMPLET - SEMAINE 6
## Thermodynamique

---

## Table des Matières

1. Introduction à la Thermodynamique
2. Enthalpie (H)
3. Capacités Calorifiques à Volume et Pression Constants
4. Enthalpie des Changements Physiques
5. Thermochimie
6. Enthalpie de Combustion
7. Formulaire Récapitulatif

---

## 1. INTRODUCTION À LA THERMODYNAMIQUE

### 1.1 Rappel de la Première Loi

**Première Loi de la Thermodynamique** :

```
ΔU = q + w
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **ΔU** | Variation d'énergie interne | J (Joule) |
| **q** | Chaleur échangée | J |
| **w** | Travail effectué | J |

**Rappels importants** :
- ✓ La chaleur et le travail sont des formes différentes de transfert d'énergie
- ✓ Ils sont interconvertibles selon la Première Loi
- ✓ L'énergie interne (U) est une fonction d'état
- ✓ Le travail d'expansion peut être réversible ou irréversible

**Conditions spéciales** :
- **À volume constant** : ΔU = q (car w = 0)
- **À pression constante** : Introduction de l'enthalpie nécessaire

---

## 2. ENTHALPIE (H)

### 2.1 Définition de l'Enthalpie

**Définition** : L'enthalpie est une fonction d'état définie par :

```
H = U + PV
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **H** | Enthalpie | J (Joule) |
| **U** | Énergie interne | J |
| **P** | Pression | Pa |
| **V** | Volume | m³ |

**Pourquoi l'enthalpie ?**
- En chimie, beaucoup de réactions se font dans des récipients ouverts
- La pression reste constante (pression atmosphérique)
- Les gaz peuvent se dilater contre l'atmosphère
- Besoin d'une fonction d'état appropriée pour suivre l'énergie à pression constante

### 2.2 Variation d'Enthalpie à Pression Constante

**Dérivation** :

À pression constante :
```
ΔH = ΔU + PΔV
```

En substituant ΔU = q + w :
```
ΔH = q + w + PΔV
```

Pour un travail d'expansion uniquement (w = -PₑₓΔV) :
```
ΔH = q - PₑₓΔV + PΔV
```

Si le système est ouvert à l'atmosphère (Pₑₓ = P) :
```
ΔH = q    (à pression constante)
```

**Comparaison** :
- **À volume constant** : ΔU = q
- **À pression constante** : ΔH = q

### 2.3 Signe de ΔH

**Convention de signes** :

| Type de réaction | Signe de ΔH | Signification |
|------------------|-------------|---------------|
| **Exothermique** | ΔH < 0 | Libère de la chaleur |
| **Endothermique** | ΔH > 0 | Absorbe de la chaleur |

**Analogie du réservoir** :
- L'enthalpie est comme le niveau d'eau dans un réservoir
- Réaction exothermique : le niveau baisse (chaleur libérée)
- Réaction endothermique : le niveau monte (chaleur absorbée)

---

## 3. CAPACITÉS CALORIFIQUES À VOLUME ET PRESSION CONSTANTS

### 3.1 Définitions

**Capacité calorifique à volume constant** :

```
Cᵥ = ΔU/ΔT
```

**Capacité calorifique à pression constante** :

```
Cₚ = ΔH/ΔT
```

### 3.2 Relation entre Cₚ et Cᵥ

**Pour un gaz idéal** :

Puisque H = U + PV et PV = nRT pour un gaz idéal :
```
H = U + nRT
```

En différenciant :
```
ΔH = ΔU + nRΔT
```

Donc :
```
Cₚ = Cᵥ + nR
```

**Pour la capacité calorifique molaire** :
```
Cₚ,ₘ = Cᵥ,ₘ + R
```

### 3.3 Capacités Calorifiques des Gaz

**Gaz monoatomiques** :

Énergie interne : Uₘ = (3/2)RT

```
Cᵥ,ₘ = (3/2)R
Cₚ,ₘ = (5/2)R
```

**Molécules linéaires** :

Énergie de translation + rotation :

```
Cᵥ,ₘ = (5/2)R
Cₚ,ₘ = (7/2)R
```

**Molécules non-linéaires** :

Énergie de translation + rotation (3 axes) :

```
Cᵥ,ₘ = 3R
Cₚ,ₘ = 4R
```

**Tableau récapitulatif** :

| Type | Cᵥ,ₘ | Cₚ,ₘ |
|------|------|------|
| **Atomes** | (3/2)R | (5/2)R |
| **Molécules linéaires** | (5/2)R | (7/2)R |
| **Molécules non-linéaires** | 3R | 4R |

### 3.4 Contribution Vibrationnelle

**Température et modes d'énergie** :

- **Basse température** : Seule la translation contribue
- **Température moyenne** : Translation + rotation contribuent
- **Haute température** : Translation + rotation + vibration contribuent
- **Très haute température** : Dissociation (Cₚ devient très grand)

**Exemple : I₂ (iode moléculaire)**
- En dessous de 0.1 K : seulement translation
- Vers 310 K : rotation activée
- Au-dessus de 310 K : vibration commence à contribuer
- À la dissociation : capacité calorifique très élevée

---

## 4. ENTHALPIE DES CHANGEMENTS PHYSIQUES

### 4.1 Enthalpie de Vaporisation (ΔHᵥₐₚ)

**Définition** : La vaporisation est la transition d'un liquide vers un gaz.

```
ΔHᵥₐₚ = Hₘ(vapeur) − Hₘ(liquide)
```

**Exemple : Eau**
- À 100 °C : ΔHᵥₐₚ = 40.7 kJ·mol⁻¹
- À 25 °C : ΔHᵥₐₚ = 44.0 kJ·mol⁻¹

**Interprétation** :
- Pour vaporiser 1 mole d'eau (18.02 g) à 25 °C, il faut fournir 44.0 kJ d'énergie

**ΔHᵥₐₚ est toujours positif** (processus endothermique)

### 4.2 Enthalpie de Fusion (ΔHfus)

**Définition** : La fusion est la transition d'un solide vers un liquide.

```
ΔHfus = Hₘ(liquide) − Hₘ(solide)
```

**Exemple : Eau**
- À 0 °C : ΔHfus = 6.0 kJ·mol⁻¹

**Pourquoi ΔHᵥₐₚ >> ΔHfus ?**
- Vaporisation : séparation complète des molécules, augmentation importante de l'énergie cinétique
- Fusion : molécules restent proches, forces intermoléculaires similaires au solide

**ΔHfus est toujours positif** (processus endothermique)

### 4.3 Enthalpie de Congélation

**Relation inverse** :

```
ΔHcongélation = −ΔHfusion
```

**Exemple : Eau**
- ΔHcongélation(0 °C) = −6.0 kJ·mol⁻¹

**Principe général** :
```
ΔHprocessus inverse = −ΔHprocessus direct
```

### 4.4 Enthalpie de Sublimation (ΔHsub)

**Définition** : La sublimation est la transition directe d'un solide vers un gaz.

```
ΔHsub = Hₘ(vapeur) − Hₘ(solide)
```

**Relation fondamentale** :

Puisque H est une fonction d'état :
```
ΔHsub = ΔHfus + ΔHᵥₐₚ
```

**Exemples de sublimation** :
- Givre qui disparaît par temps froid et sec
- Glace sèche (CO₂ solide)
- Iode solide

### 4.5 Forces Intermoléculaires et ΔHᵥₐₚ

**Tableau comparatif** :

| Substance | Formule | Points de fusion/ébullition (K) | ΔHfus°/ΔHᵥₐₚ° (kJ·mol⁻¹) |
|-----------|---------|--------------------------------|-------------------------|
| Argon | Ar | 83.8/87.3 | 1.2/6.5 |
| Méthane | CH₄ | 90.7/112 | 0.94/8.2 |
| Acétone | CH₃COCH₃ | 178/329 | 5.72/29.1 |
| Méthanol* | CH₃OH | 175/338 | 3.16/35.3 |
| Ammoniac* | NH₃ | 195/240 | 5.65/23.4 |
| Eau* | H₂O | 273/373 | 6.01/40.7 |

*Molécules avec liaisons hydrogène

**Observation** : Les substances avec liaisons hydrogène ont des ΔHᵥₐₚ plus élevés.

---

## 5. THERMOCHIMIE

### 5.1 Définitions

**Thermochimie** : Branche de la thermodynamique qui étudie la chaleur absorbée ou dégagée lors de réactions chimiques.

**Équation thermochimique** : Équation chimique accompagnée de la variation d'enthalpie de réaction.

**Exemple** :
```
CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)    ΔH = −890 kJ
```

### 5.2 Enthalpie de Réaction

**Propriétés importantes** :

1. **Stoichiométrie** : ΔH correspond aux coefficients de l'équation

Exemple :
```
CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)    ΔH = −890 kJ
2 CH₄(g) + 4 O₂(g) → 2 CO₂(g) + 4 H₂O(l)    ΔH = −1780 kJ
```

2. **Réaction inverse** : Le signe change

```
CO₂(g) + 2 H₂O(l) → CH₄(g) + 2 O₂(g)    ΔH = +890 kJ
```

3. **États physiques** : Toujours spécifier l'état de chaque substance

```
CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g)    ΔH = −802 kJ
CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)    ΔH = −890 kJ
```

Différence : 88 kJ = 2 × ΔHᵥₐₚ(H₂O) = 2 × 44 kJ

### 5.3 Relation entre ΔH et ΔU

**Formule générale** :

```
ΔH = ΔU + ΔngazRT
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **Δngaz** | Variation du nombre de moles de gaz | mol |
| | Δngaz = nfinal − ninitial | |
| **R** | Constante des gaz | 8.314 J·K⁻¹·mol⁻¹ |
| **T** | Température | K |

**Cas particuliers** :
- Si aucun gaz n'est produit ou consommé : ΔH ≈ ΔU
- Si Δngaz ≠ 0 : la différence peut être significative

**Dérivation** :

Puisque H = U + PV et PV = nRT pour un gaz idéal :
```
Hinitial = Uinitial + ninitialRT
Hfinal = Ufinal + nfinalRT
ΔH = ΔU + (nfinal − ninitial)RT
ΔH = ΔU + ΔngazRT
```

---

## 6. ENTHALPIE DE COMBUSTION

### 6.1 Définition

**Enthalpie standard de combustion (ΔHc°)** : Variation d'enthalpie par mole d'une substance brûlée dans une réaction de combustion complète dans les conditions standard.

**Conditions standard** :
- Pression : exactement 1 bar
- Température : 298 K (25 °C)
- Symbole : °

### 6.2 Tableau des Enthalpies de Combustion

| Substance | Formule | ΔHc°/kJ·mol⁻¹ | Enthalpie spécifique/kJ·g⁻¹ |
|-----------|---------|---------------|----------------------------|
| **Hydrogène** | H₂(g) | −286 | 142 |
| **Méthane** | CH₄(g) | −890 | 55 |
| **Éthanol** | CH₃CH₂OH(l) | −1368 | 29.7 |
| **Propane** | CH₃CH₂CH₃(g) | −2220 | 50.35 |
| **Glucose** | C₆H₁₂O₆(s) | −2808 | 15.59 |
| **Benzène** | C₆H₆(l) | −3268 | 41.8 |
| **Octane** | C₈H₁₈(l) | −5471 | 48 |

### 6.3 Enthalpie Spécifique et Densité Énergétique

**Enthalpie spécifique** :
```
Enthalpie spécifique = ΔH° / masse
```
Unités : kJ·g⁻¹

**Densité énergétique** (pour liquides/gaz) :
```
Densité énergétique = ΔH° / volume
```
Unités : kJ·L⁻¹

**Utilité** :
- Comparaison de l'efficacité des carburants
- Choix du carburant pour une application donnée
- Transport et stockage d'énergie

### 6.4 Carburants Renouvelables

**Types de carburants renouvelables** :

1. **Hydrogène (H₂)**
   - Source : électrolyse de l'eau
   - Enthalpie spécifique très élevée : 142 kJ·g⁻¹
   - Produit uniquement H₂O lors de la combustion

2. **Éthanol (CH₃CH₂OH)**
   - Source : fermentation de biomasse (maïs, canne à sucre)
   - Utilisé comme additif à l'essence (~10% en volume)
   - 1 boisseau de maïs (30 L) → 10 L d'éthanol

3. **Méthane (CH₄)**
   - Source : digestion anaérobie de déchets biologiques
   - Stations d'épuration : utilisent le méthane produit pour leur fonctionnement
   - Aussi trouvé dans le gaz naturel

4. **Biodiesel**
   - Source : algues, huile végétale
   - Densité énergétique élevée
   - Plus visqueux que le diesel traditionnel
   - Se solidifie à basse température

**Avantages et inconvénients** :
- ✓ Renouvelables
- ✓ Réduisent la dépendance aux combustibles fossiles
- ✗ Produisent du CO₂ (effet de serre)
- ✗ Défis techniques (stockage, transport)

---

## 7. COURBES DE CHAUFFAGE

### 7.1 Interprétation d'une Courbe de Chauffage

**Caractéristiques** :
- Axe horizontal : Énergie fournie sous forme de chaleur (q)
- Axe vertical : Température (T)

**Régions de la courbe** :

1. **Chauffage du solide** : Pente raide
   - Molécules oscillent autour de positions fixes
   - Température augmente

2. **Fusion (point de fusion)** : Plateau horizontal
   - Température constante
   - Toute l'énergie sert à briser les forces d'attraction
   - Durée du plateau ∝ ΔHfus

3. **Chauffage du liquide** : Pente moins raide
   - Molécules se déplacent librement
   - Température augmente
   - Pente plus faible → capacité calorifique plus élevée

4. **Vaporisation (point d'ébullition)** : Plateau horizontal
   - Température constante
   - Toute l'énergie sert à séparer complètement les molécules
   - Durée du plateau ∝ ΔHᵥₐₚ (beaucoup plus long que fusion)

5. **Chauffage de la vapeur** : Pente raide
   - Molécules libres
   - Température augmente

### 7.2 Pentes et Capacités Calorifiques

**Relation pente-capacité calorifique** :

```
Pente = ΔT/Δq = 1/C
```

- **Pente raide** → Faible capacité calorifique
- **Pente douce** → Grande capacité calorifique

**Ordre pour l'eau** :
```
Csolide < Cvapeur < Cliquide
```

**Pourquoi le liquide a une grande capacité calorifique ?**
- Présence de liaisons hydrogène qui se brisent et se reforment
- Nécessite plus d'énergie pour augmenter la température

---

## 8. FORMULAIRE RÉCAPITULATIF

### 8.1 Fonctions d'État

| Fonction | Formule | Conditions |
|----------|---------|------------|
| **Enthalpie** | H = U + PV | Toujours |
| **Variation d'enthalpie** | ΔH = ΔU + PΔV | Pression constante |
| **Chaleur à P constant** | ΔH = q | Pression constante |
| **Chaleur à V constant** | ΔU = q | Volume constant |

### 8.2 Capacités Calorifiques

| Type | Formule | Pour gaz idéal |
|------|---------|----------------|
| **À volume constant** | Cᵥ = ΔU/ΔT | |
| **À pression constante** | Cₚ = ΔH/ΔT | |
| **Relation** | Cₚ,ₘ = Cᵥ,ₘ + R | |

**Valeurs pour différents types de molécules** :

| Type | Cᵥ,ₘ | Cₚ,ₘ |
|------|------|------|
| Atomes | (3/2)R | (5/2)R |
| Molécules linéaires | (5/2)R | (7/2)R |
| Molécules non-linéaires | 3R | 4R |

### 8.3 Changements de Phase

| Transition | Formule | Signe |
|------------|---------|-------|
| **Vaporisation** | ΔHᵥₐₚ = Hₘ(vapeur) − Hₘ(liquide) | + |
| **Condensation** | ΔHcond = −ΔHᵥₐₚ | − |
| **Fusion** | ΔHfus = Hₘ(liquide) − Hₘ(solide) | + |
| **Congélation** | ΔHfrz = −ΔHfus | − |
| **Sublimation** | ΔHsub = ΔHfus + ΔHᵥₐₚ | + |

### 8.4 Relations ΔH - ΔU

**Formule générale** :
```
ΔH = ΔU + ΔngazRT
```

où Δngaz = (moles de gaz produit) − (moles de gaz réactif)

### 8.5 Constantes Importantes

| Constante | Symbole | Valeur | Unités |
|-----------|---------|--------|--------|
| **Constante des gaz** | R | 8.314 | J·K⁻¹·mol⁻¹ |
| **Conditions standard** | | 1 bar, 298 K | |

---

## CONSEILS POUR LA RÉSOLUTION DE PROBLÈMES

### ✓ Liste de Vérification

1. **Identifier le type de processus** (volume ou pression constant)
2. **Choisir la fonction appropriée** (ΔU ou ΔH)
3. **Vérifier les états physiques** de toutes les substances
4. **Utiliser les conditions standard** si ΔH° est demandé
5. **Attention aux signes** (exothermique vs endothermique)
6. **Vérifier la stoichiométrie** de la réaction

### ⚠️ Erreurs Courantes

- ❌ Confondre ΔH et ΔU
- ❌ Oublier de spécifier les états physiques
- ❌ Utiliser la mauvaise capacité calorifique (Cₚ vs Cᵥ)
- ❌ Se tromper de signe pour les processus inverses
- ❌ Négliger Δngaz dans la relation ΔH = ΔU + ΔngazRT

---

## APPLICATIONS PRATIQUES

### Exemples d'Utilisation

1. **Calorimétrie** : Mesure de ΔH par calorimètre à bombe
2. **Métabolisme** : Combustion du glucose dans le corps
3. **Carburants** : Comparaison de l'efficacité énergétique
4. **Changements de phase** : Réfrigération, climatisation
5. **Processus industriels** : Optimisation énergétique des réactions

---

**Résumé créé selon le modèle du polycopié EPFL**
**Dr. Arne Seitz - BioImaging & Optics Platform (BIOP)**
