# RÉSUMÉ COMPLET - SEMAINE 5
## Lois des Gaz

---

## Table des Matières

1. Introduction aux Gaz
2. Pression des Gaz
3. Loi de Boyle
4. Loi de Charles
5. Principe d'Avogadro
6. Loi des Gaz Parfaits
7. Loi de Dalton des Pressions Partielles
8. Densité des Gaz
9. Théorie Cinétique des Gaz (KMT)
10. Distribution de Maxwell des Vitesses
11. Formulaire Récapitulatif

---

## 1. INTRODUCTION AUX GAZ

### 1.1 Nature des Gaz

**Définition** : Un gaz est une phase de la matière caractérisée par des molécules en mouvement aléatoire et continu, largement espacées les unes des autres.

**Caractéristiques principales** :
- ✓ Compressibles (beaucoup d'espace entre les molécules)
- ✓ Expansion pour remplir tout l'espace disponible
- ✓ Faible densité comparé aux liquides et solides
- ✓ Mouvement chaotique et rapide des molécules

**Propriétés mesurables** :
- **P** = Pression
- **V** = Volume
- **T** = Température
- **n** = Quantité de matière (moles)

---

## 2. PRESSION DES GAZ

### 2.1 Définition de la Pression

```
Pression = Force / Aire
```

**Formule fondamentale** :

```
P = F/A
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **P** | Pression | Pa (Pascal), atm, bar, Torr, mmHg |
| **F** | Force exercée | N (Newton) = kg·m·s⁻² |
| **A** | Aire de la surface | m² |

**Analyse dimensionnelle** :

```
[P] = [F]/[A] = (kg·m·s⁻²)/m² = kg·m⁻¹·s⁻²
```

**Vérification** :
- 1 Pa = 1 N/m² = 1 kg·m⁻¹·s⁻² ✓

**Contexte d'utilisation** : Cette formule permet de calculer la pression exercée par un gaz sur les parois d'un conteneur en fonction de la force totale des collisions moléculaires.

### 2.2 Unités de Pression - Conversions

**Unités courantes** :

| Unité | Équivalence | Utilisation |
|-------|-------------|-------------|
| 1 atm | 101 325 Pa | Pression atmosphérique standard |
| 1 bar | 10⁵ Pa | Unité SI pratique |
| 1 Torr | 1 mmHg ≈ 133.322 Pa | Baromètre à mercure |
| 1 psi | 6894.76 Pa | Industrie (livres par pouce carré) |

**Relation fondamentale** :
```
760 Torr = 760 mmHg = 1 atm = 101 325 Pa = 1.01325 bar
```

### 2.3 Le Baromètre

**Principe** : Mesure de la pression atmosphérique via une colonne de mercure.

**Formule** :

```
P = dgh
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **P** | Pression atmosphérique | Pa |
| **d** | Densité du mercure | kg·m⁻³ |
| **g** | Accélération gravitationnelle | m·s⁻² (≈ 9.81) |
| **h** | Hauteur de la colonne | m |

**Analyse dimensionnelle** :

```
[P] = [d][g][h]
[P] = (kg·m⁻³)(m·s⁻²)(m)
[P] = kg·m⁻¹·s⁻² = Pa ✓
```

**Contexte d'utilisation** : À pression atmosphérique normale (1 atm), la colonne de mercure s'élève à 760 mm.

---

## 3. LOI DE BOYLE

### 3.1 Énoncé de la Loi

**À température constante (isotherme), le volume d'un gaz est inversement proportionnel à sa pression.**

**Formule** :

```
P × V = constante
```

ou

```
P₁V₁ = P₂V₂
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **P₁** | Pression initiale | Pa, atm, bar |
| **V₁** | Volume initial | L, m³ |
| **P₂** | Pression finale | Pa, atm, bar |
| **V₂** | Volume final | L, m³ |

**Analyse dimensionnelle** :

```
[P₁][V₁] = [P₂][V₂]
(Pa)(m³) = (Pa)(m³)
(kg·m⁻¹·s⁻²)(m³) = kg·m²·s⁻² = J (Joule) ✓
```

**Contexte d'utilisation** :
- Prédire le volume d'un gaz lorsqu'on change la pression (T et n constants)
- Exemple : Compression d'air dans une seringue
- Si P↑ alors V↓ (relation inverse)

**Exemple pratique** :
```
Si P₁ = 1 atm, V₁ = 10 L
   P₂ = 2 atm, V₂ = ?

V₂ = P₁V₁/P₂ = (1 atm × 10 L)/2 atm = 5 L
```

---

## 4. LOI DE CHARLES

### 4.1 Énoncé de la Loi

**À pression constante (isobare), le volume d'un gaz est directement proportionnel à sa température absolue.**

**Formule** :

```
V/T = constante
```

ou

```
V₁/T₁ = V₂/T₂
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **V₁** | Volume initial | L, m³ |
| **T₁** | Température initiale | **K (Kelvin)** ⚠️ |
| **V₂** | Volume final | L, m³ |
| **T₂** | Température finale | **K (Kelvin)** ⚠️ |

⚠️ **IMPORTANT** : Toujours utiliser la température en Kelvin !
```
T(K) = T(°C) + 273.15
```

**Analyse dimensionnelle** :

```
[V₁]/[T₁] = [V₂]/[T₂]
m³/K = m³/K ✓
```

**Contexte d'utilisation** :
- Prédire le volume d'un gaz lorsqu'on change la température (P et n constants)
- Exemple : Expansion d'une montgolfière lors du chauffage
- Si T↑ alors V↑ (relation directe)

**Concept clé** : Le zéro absolu
- À T = 0 K = -273.15°C, le volume théorique d'un gaz parfait est zéro
- C'est la température la plus basse possible

---

## 5. PRINCIPE D'AVOGADRO

### 5.1 Énoncé du Principe

**À température et pression constantes, des volumes égaux de gaz différents contiennent le même nombre de molécules.**

**Formule** :

```
V/n = constante = Vm (volume molaire)
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **V** | Volume du gaz | L, m³ |
| **n** | Quantité de matière | mol |
| **Vm** | Volume molaire | L·mol⁻¹ |

**Analyse dimensionnelle** :

```
[Vm] = [V]/[n] = m³/mol = L·mol⁻¹ ✓
```

**Valeurs standards** :

| Conditions | Température | Pression | Volume molaire |
|------------|-------------|----------|----------------|
| **STP** | 0°C (273.15 K) | 1 atm | 22.41 L·mol⁻¹ |
| **SATP** | 25°C (298.15 K) | 1 bar | 24.79 L·mol⁻¹ |

**Contexte d'utilisation** :
- Calcul du nombre de moles à partir du volume (et vice-versa)
- Conversion volume ↔ moles dans les calculs stœchiométriques
- Base de la loi des gaz parfaits

---

## 6. LOI DES GAZ PARFAITS

### 6.1 Formule Fondamentale

**La loi qui combine toutes les lois précédentes :**

```
PV = nRT
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **P** | Pression | Pa, atm, bar |
| **V** | Volume | m³, L |
| **n** | Quantité de matière | mol |
| **R** | Constante des gaz parfaits | 8.314 J·K⁻¹·mol⁻¹ |
| **T** | Température absolue | K (Kelvin) |

**Valeurs de R selon les unités** :

| Unités de P et V | Valeur de R |
|------------------|-------------|
| Pa et m³ | R = 8.314 J·K⁻¹·mol⁻¹ |
| atm et L | R = 0.08206 L·atm·K⁻¹·mol⁻¹ |
| bar et L | R = 0.08314 L·bar·K⁻¹·mol⁻¹ |

**Analyse dimensionnelle** :

```
[P][V] = [n][R][T]
(Pa)(m³) = (mol)(J·K⁻¹·mol⁻¹)(K)
(kg·m⁻¹·s⁻²)(m³) = J
kg·m²·s⁻² = kg·m²·s⁻² = J ✓
```

**Contexte d'utilisation** :
- Calculer n'importe laquelle des 4 variables (P, V, n, T) si les 3 autres sont connues
- Décrit le comportement des gaz "idéaux" (basse pression, haute température)
- Base de nombreux calculs en chimie et physique

### 6.2 Loi des Gaz Combinée

**Forme générale** :

```
P₁V₁/n₁T₁ = P₂V₂/n₂T₂
```

**Contexte d'utilisation** : Comparer deux états d'un gaz lorsque plusieurs paramètres changent.

**Cas particuliers** :
- Si n constant : P₁V₁/T₁ = P₂V₂/T₂
- Si n et T constants : P₁V₁ = P₂V₂ (Loi de Boyle)
- Si n et P constants : V₁/T₁ = V₂/T₂ (Loi de Charles)

---

## 7. LOI DE DALTON DES PRESSIONS PARTIELLES

### 7.1 Énoncé de la Loi

**Dans un mélange de gaz, la pression totale est la somme des pressions partielles de chaque gaz.**

**Formule** :

```
Ptotale = PA + PB + PC + ...
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **Ptotale** | Pression totale du mélange | Pa, atm |
| **PA, PB, PC** | Pressions partielles des gaz A, B, C | Pa, atm |

### 7.2 Pression Partielle et Fraction Molaire

**Fraction molaire** :

```
xA = nA/(nA + nB + nC + ...)
```

**Relation pression partielle - fraction molaire** :

```
PA = xA × Ptotale
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **xA** | Fraction molaire du gaz A | sans unité (0 < xA < 1) |
| **nA** | Nombre de moles du gaz A | mol |
| **PA** | Pression partielle du gaz A | Pa, atm |

**Analyse dimensionnelle** :

```
[xA] = [nA]/[ntotal] = mol/mol = sans dimension ✓
[PA] = [xA][Ptotale] = (sans dimension)(Pa) = Pa ✓
```

**Contexte d'utilisation** :
- Analyse de mélanges gazeux (air, gaz de combustion, etc.)
- Respiration et physiologie (pression partielle de O₂, CO₂)
- Réactions chimiques en phase gazeuse

**Exemple** :
```
Air : 78% N₂, 21% O₂, 1% autres
À P = 1 atm :
  PN₂ = 0.78 × 1 atm = 0.78 atm
  PO₂ = 0.21 × 1 atm = 0.21 atm
```

---

## 8. DENSITÉ DES GAZ

### 8.1 Formule de la Densité

**Densité** :

```
d = m/V
```

**À partir de la loi des gaz parfaits** :

```
d = MP/(RT)
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **d** | Densité du gaz | kg·m⁻³, g·L⁻¹ |
| **m** | Masse du gaz | kg, g |
| **V** | Volume | m³, L |
| **M** | Masse molaire | kg·mol⁻¹, g·mol⁻¹ |
| **P** | Pression | Pa |
| **R** | Constante des gaz | 8.314 J·K⁻¹·mol⁻¹ |
| **T** | Température | K |

**Analyse dimensionnelle** :

```
[d] = [M][P]/([R][T])
[d] = (kg·mol⁻¹)(kg·m⁻¹·s⁻²) / ((J·K⁻¹·mol⁻¹)(K))
[d] = (kg·mol⁻¹)(kg·m⁻¹·s⁻²) / (kg·m²·s⁻²·K⁻¹·mol⁻¹·K)
[d] = kg·m⁻³ ✓
```

**Contexte d'utilisation** :
- Déterminer la masse molaire d'un gaz à partir de sa densité
- Comparer la densité de différents gaz
- Prédire si un gaz va monter ou descendre dans l'air

**Relations importantes** :
- Si T↑ alors d↓ (l'air chaud monte)
- Si P↑ alors d↑ (compression augmente la densité)
- Si M↑ alors d↑ (gaz lourds plus denses)

---

## 9. THÉORIE CINÉTIQUE DES GAZ (KMT)

### 9.1 Postulats de Base

**Les 5 postulats** :

1. **Mouvement** : Les molécules de gaz sont en mouvement aléatoire continu
2. **Taille** : Le volume des molécules est négligeable devant le volume du conteneur
3. **Collisions** : Les molécules se déplacent en ligne droite jusqu'à une collision
4. **Interactions** : Aucune force d'attraction ou de répulsion entre molécules (sauf lors des collisions)
5. **Élasticité** : Les collisions sont parfaitement élastiques (pas de perte d'énergie)

### 9.2 Vitesse Quadratique Moyenne (RMS)

**Formule fondamentale** :

```
vrms = √(3RT/M)
```

**Signification des symboles** :

| Symbole | Signification | Unités |
|---------|---------------|--------|
| **vrms** | Vitesse quadratique moyenne | m·s⁻¹ |
| **R** | Constante des gaz | 8.314 J·K⁻¹·mol⁻¹ |
| **T** | Température absolue | K |
| **M** | Masse molaire | kg·mol⁻¹ |

**Analyse dimensionnelle** :

```
[vrms²] = [R][T]/[M]
[vrms²] = (J·K⁻¹·mol⁻¹)(K)/(kg·mol⁻¹)
[vrms²] = (kg·m²·s⁻²·K⁻¹·mol⁻¹)(K)/(kg·mol⁻¹)
[vrms²] = m²·s⁻²
[vrms] = m·s⁻¹ ✓
```

**Contexte d'utilisation** :
- Calculer la vitesse moyenne des molécules de gaz
- Comprendre l'effet de la température sur l'agitation moléculaire
- Prédire les vitesses relatives de différents gaz

**Relations importantes** :
- Si T↑ alors vrms↑ (température = énergie cinétique)
- Si M↑ alors vrms↓ (molécules lourdes plus lentes)

### 9.3 Relation Pression-Vitesse

**Formule dérivée de la KMT** :

```
PV = (1/3)nMvrms²
```

**Contexte** : Cette équation montre que la pression d'un gaz résulte des collisions des molécules en mouvement contre les parois.

### 9.4 Température et Énergie Cinétique

**Relation fondamentale** :

```
T = Mvrms²/(3R)
```

**Signification** : La température absolue est proportionnelle à l'énergie cinétique moyenne des molécules.

```
Énergie cinétique moyenne = (1/2)mvrms² = (3/2)kBT
```

où kB est la constante de Boltzmann (kB = R/NA = 1.381 × 10⁻²³ J·K⁻¹)

---

## 10. DISTRIBUTION DE MAXWELL DES VITESSES

### 10.1 Fonction de Distribution

**La fonction de Maxwell** :

```
f(v) = 4π(M/(2πRT))^(3/2) × v² × e^(-Mv²/(2RT))
```

**Signification** : f(v) donne la fraction de molécules ayant une vitesse v à la température T.

**Nombre de molécules entre v et v+Δv** :

```
ΔN = N × f(v) × Δv
```

### 10.2 Interprétation Graphique

**Caractéristiques de la courbe** :

1. **Facteur v²** : La courbe part de zéro (peu de molécules à vitesse nulle)
2. **Facteur exponentiel** : La courbe diminue rapidement aux grandes vitesses
3. **Maximum** : Correspond à la vitesse la plus probable
4. **Largeur** : Augmente avec la température (plus de dispersion des vitesses)

**Effets de la température** :
- T↑ : le pic se déplace vers les vitesses plus élevées
- T↑ : la courbe s'élargit (plus grande dispersion)
- T↑ : le pic devient plus bas (normalization)

**Effets de la masse molaire** :
- M↑ : le pic se déplace vers les vitesses plus faibles
- M↑ : la courbe devient plus étroite
- Molécules légères (H₂) : vitesses élevées
- Molécules lourdes (CO₂) : vitesses faibles

---

## 11. FORMULAIRE RÉCAPITULATIF

### 11.1 Lois des Gaz

| Loi | Formule | Conditions |
|-----|---------|------------|
| **Boyle** | P₁V₁ = P₂V₂ | T, n constants |
| **Charles** | V₁/T₁ = V₂/T₂ | P, n constants |
| **Gay-Lussac** | P₁/T₁ = P₂/T₂ | V, n constants |
| **Avogadro** | V₁/n₁ = V₂/n₂ | P, T constants |
| **Gaz Parfaits** | PV = nRT | Toutes conditions |
| **Combinée** | P₁V₁/(n₁T₁) = P₂V₂/(n₂T₂) | Changement d'état |
| **Dalton** | Ptot = PA + PB + ... | Mélanges de gaz |

### 11.2 Formules Dérivées

| Grandeur | Formule | Unités |
|----------|---------|--------|
| **Densité** | d = MP/(RT) | kg·m⁻³, g·L⁻¹ |
| **Masse molaire** | M = dRT/P | g·mol⁻¹ |
| **Vitesse RMS** | vrms = √(3RT/M) | m·s⁻¹ |
| **Fraction molaire** | xA = nA/ntotal | sans dimension |
| **Pression partielle** | PA = xA × Ptotal | Pa, atm |

### 11.3 Constantes Importantes

| Constante | Symbole | Valeur | Unités |
|-----------|---------|--------|--------|
| **Constante des gaz** | R | 8.314 | J·K⁻¹·mol⁻¹ |
| **Constante des gaz** | R | 0.08206 | L·atm·K⁻¹·mol⁻¹ |
| **Nombre d'Avogadro** | NA | 6.022 × 10²³ | mol⁻¹ |
| **Constante de Boltzmann** | kB | 1.381 × 10⁻²³ | J·K⁻¹ |
| **Volume molaire (STP)** | Vm | 22.41 | L·mol⁻¹ |
| **Volume molaire (SATP)** | Vm | 24.79 | L·mol⁻¹ |

### 11.4 Conversions Essentielles

**Température** :
```
T(K) = T(°C) + 273.15
```

**Pression** :
```
1 atm = 101 325 Pa = 1.01325 bar = 760 Torr = 760 mmHg
```

**Volume** :
```
1 L = 10⁻³ m³ = 1 dm³
1 mL = 10⁻⁶ m³ = 1 cm³
```

---

## CONSEILS POUR LA RÉSOLUTION DE PROBLÈMES

### ✓ Liste de Vérification

1. **Toujours convertir T en Kelvin** (T(K) = T(°C) + 273.15)
2. **Vérifier la cohérence des unités** (P, V, n, R)
3. **Identifier les variables constantes et variables**
4. **Choisir la loi appropriée** selon les conditions
5. **Vérifier le sens physique du résultat**

### ⚠️ Erreurs Courantes

- ❌ Utiliser T en °C au lieu de K
- ❌ Mélanger les unités de P (atm vs Pa)
- ❌ Oublier que PV a des dimensions d'énergie
- ❌ Confondre masse molaire (g/mol) et masse (g)

---

## APPLICATIONS PRATIQUES

### Exemples d'Utilisation

1. **Respiration** : Pressions partielles de O₂ et CO₂ dans le sang
2. **Plongée** : Loi de Boyle et décompression
3. **Montgolfières** : Loi de Charles et expansion thermique
4. **Météorologie** : Baromètres et pressions atmosphériques
5. **Industrie** : Stockage et transport de gaz comprimés

---

**Résumé créé selon le modèle du polycopié EPFL**
**Dr. Arne Seitz - BioImaging & Optics Platform (BIOP)**
