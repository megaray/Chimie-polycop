/**
 * Bibliothèque de Composants Électriques SVG
 * Pour créer des schémas de circuits électriques simples
 * Style adapté pour les cours de chimie EPFL
 */

const ElectricalComponents = {

    /**
     * Créer un conteneur SVG pour le circuit
     * @param {string} id - ID du conteneur
     * @param {number} width - Largeur du SVG
     * @param {number} height - Hauteur du SVG
     * @returns {string} Code HTML du SVG
     */
    createCircuit: function(id, width = 600, height = 400) {
        return `<svg id="${id}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid #ddd; background: white;">
    <defs>
        <!-- Marqueur de flèche pour le courant -->
        <marker id="arrow-${id}" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
        </marker>
    </defs>
    <!-- Les composants seront ajoutés ici -->
</svg>`;
    },

    /**
     * Pile/Batterie (symbole standard)
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} label - Étiquette (ex: "6V")
     * @param {boolean} vertical - Orientation verticale
     * @returns {string} Code SVG
     */
    battery: function(x, y, label = "", vertical = false) {
        if (vertical) {
            return `<g class="component battery">
    <!-- Borne positive (longue) -->
    <line x1="${x}" y1="${y}" x2="${x}" y2="${y + 15}" stroke="#1e3a8a" stroke-width="3"/>
    <!-- Borne négative (courte) -->
    <line x1="${x - 10}" y1="${y + 25}" x2="${x + 10}" y2="${y + 25}" stroke="#1e3a8a" stroke-width="3"/>
    <!-- Connexions -->
    <line x1="${x}" y1="${y - 20}" x2="${x}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x}" y1="${y + 25}" x2="${x}" y2="${y + 45}" stroke="#333" stroke-width="2"/>
    <!-- Symboles + et - -->
    <text x="${x + 15}" y="${y + 5}" font-size="14" fill="#dc2626" font-weight="bold">+</text>
    <text x="${x + 15}" y="${y + 30}" font-size="14" fill="#1e3a8a" font-weight="bold">−</text>
    ${label ? `<text x="${x + 25}" y="${y + 15}" font-size="12" fill="#333">${label}</text>` : ''}
</g>`;
        } else {
            return `<g class="component battery">
    <!-- Borne positive (longue) -->
    <line x1="${x}" y1="${y - 10}" x2="${x}" y2="${y + 10}" stroke="#1e3a8a" stroke-width="3"/>
    <!-- Borne négative (courte) -->
    <line x1="${x + 20}" y1="${y - 5}" x2="${x + 20}" y2="${y + 5}" stroke="#1e3a8a" stroke-width="3"/>
    <!-- Connexions -->
    <line x1="${x - 30}" y1="${y}" x2="${x}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 20}" y1="${y}" x2="${x + 50}" y2="${y}" stroke="#333" stroke-width="2"/>
    <!-- Symboles + et - -->
    <text x="${x - 5}" y="${y - 15}" font-size="14" fill="#dc2626" font-weight="bold">+</text>
    <text x="${x + 15}" y="${y - 15}" font-size="14" fill="#1e3a8a" font-weight="bold">−</text>
    ${label ? `<text x="${x}" y="${y + 30}" font-size="12" fill="#333" text-anchor="middle">${label}</text>` : ''}
</g>`;
        }
    },

    /**
     * Résistance (symbole européen - rectangle)
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} label - Valeur (ex: "100Ω")
     * @param {boolean} vertical - Orientation verticale
     * @returns {string} Code SVG
     */
    resistor: function(x, y, label = "", vertical = false) {
        if (vertical) {
            return `<g class="component resistor">
    <!-- Connexions -->
    <line x1="${x}" y1="${y - 20}" x2="${x}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x}" y1="${y + 40}" x2="${x}" y2="${y + 60}" stroke="#333" stroke-width="2"/>
    <!-- Rectangle -->
    <rect x="${x - 8}" y="${y}" width="16" height="40" fill="none" stroke="#ea580c" stroke-width="2"/>
    ${label ? `<text x="${x + 20}" y="${y + 23}" font-size="12" fill="#333">${label}</text>` : ''}
</g>`;
        } else {
            return `<g class="component resistor">
    <!-- Connexions -->
    <line x1="${x - 20}" y1="${y}" x2="${x}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 40}" y1="${y}" x2="${x + 60}" y2="${y}" stroke="#333" stroke-width="2"/>
    <!-- Rectangle -->
    <rect x="${x}" y="${y - 8}" width="40" height="16" fill="none" stroke="#ea580c" stroke-width="2"/>
    ${label ? `<text x="${x + 20}" y="${y - 15}" font-size="12" fill="#333" text-anchor="middle">${label}</text>` : ''}
</g>`;
        }
    },

    /**
     * Ampèremètre
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} label - Valeur mesurée
     * @returns {string} Code SVG
     */
    ammeter: function(x, y, label = "") {
        return `<g class="component ammeter">
    <!-- Cercle -->
    <circle cx="${x}" cy="${y}" r="20" fill="white" stroke="#1e3a8a" stroke-width="2"/>
    <!-- Lettre A -->
    <text x="${x}" y="${y + 5}" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">A</text>
    <!-- Connexions -->
    <line x1="${x - 40}" y1="${y}" x2="${x - 20}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 20}" y1="${y}" x2="${x + 40}" y2="${y}" stroke="#333" stroke-width="2"/>
    ${label ? `<text x="${x}" y="${y + 40}" font-size="12" fill="#333" text-anchor="middle">${label}</text>` : ''}
</g>`;
    },

    /**
     * Voltmètre
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} label - Valeur mesurée
     * @returns {string} Code SVG
     */
    voltmeter: function(x, y, label = "") {
        return `<g class="component voltmeter">
    <!-- Cercle -->
    <circle cx="${x}" cy="${y}" r="20" fill="white" stroke="#16a34a" stroke-width="2"/>
    <!-- Lettre V -->
    <text x="${x}" y="${y + 5}" font-size="16" font-weight="bold" fill="#16a34a" text-anchor="middle">V</text>
    <!-- Connexions -->
    <line x1="${x - 40}" y1="${y}" x2="${x - 20}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 20}" y1="${y}" x2="${x + 40}" y2="${y}" stroke="#333" stroke-width="2"/>
    ${label ? `<text x="${x}" y="${y + 40}" font-size="12" fill="#333" text-anchor="middle">${label}</text>` : ''}
</g>`;
    },

    /**
     * Interrupteur (ouvert ou fermé)
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {boolean} closed - Fermé (true) ou ouvert (false)
     * @returns {string} Code SVG
     */
    switch: function(x, y, closed = true) {
        if (closed) {
            return `<g class="component switch">
    <!-- Connexions -->
    <line x1="${x - 20}" y1="${y}" x2="${x}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 20}" y1="${y}" x2="${x + 40}" y2="${y}" stroke="#333" stroke-width="2"/>
    <!-- Interrupteur fermé -->
    <line x1="${x}" y1="${y}" x2="${x + 20}" y2="${y}" stroke="#333" stroke-width="3"/>
    <circle cx="${x}" cy="${y}" r="2" fill="#333"/>
    <circle cx="${x + 20}" cy="${y}" r="2" fill="#333"/>
</g>`;
        } else {
            return `<g class="component switch">
    <!-- Connexions -->
    <line x1="${x - 20}" y1="${y}" x2="${x}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 20}" y1="${y}" x2="${x + 40}" y2="${y}" stroke="#333" stroke-width="2"/>
    <!-- Interrupteur ouvert -->
    <line x1="${x}" y1="${y}" x2="${x + 15}" y2="${y - 10}" stroke="#333" stroke-width="3"/>
    <circle cx="${x}" cy="${y}" r="2" fill="#333"/>
    <circle cx="${x + 20}" cy="${y}" r="2" fill="#333"/>
</g>`;
        }
    },

    /**
     * Lampe/Ampoule
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} label - Étiquette
     * @returns {string} Code SVG
     */
    bulb: function(x, y, label = "") {
        return `<g class="component bulb">
    <!-- Cercle -->
    <circle cx="${x}" cy="${y}" r="18" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
    <!-- Croix à l'intérieur -->
    <line x1="${x - 10}" y1="${y - 10}" x2="${x + 10}" y2="${y + 10}" stroke="#ea580c" stroke-width="2"/>
    <line x1="${x - 10}" y1="${y + 10}" x2="${x + 10}" y2="${y - 10}" stroke="#ea580c" stroke-width="2"/>
    <!-- Connexions -->
    <line x1="${x - 35}" y1="${y}" x2="${x - 18}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 18}" y1="${y}" x2="${x + 35}" y2="${y}" stroke="#333" stroke-width="2"/>
    ${label ? `<text x="${x}" y="${y + 35}" font-size="12" fill="#333" text-anchor="middle">${label}</text>` : ''}
</g>`;
    },

    /**
     * Fil de connexion (ligne droite)
     * @param {number} x1 - X début
     * @param {number} y1 - Y début
     * @param {number} x2 - X fin
     * @param {number} y2 - Y fin
     * @returns {string} Code SVG
     */
    wire: function(x1, y1, x2, y2) {
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#333" stroke-width="2"/>`;
    },

    /**
     * Flèche de courant
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {number} angle - Angle en degrés (0 = droite, 90 = bas)
     * @param {string} label - Étiquette (ex: "I = 2A")
     * @returns {string} Code SVG
     */
    current: function(x, y, angle = 0, label = "I") {
        const id = `arrow-${Math.random().toString(36).substr(2, 9)}`;
        return `<g class="current-indicator">
    <defs>
        <marker id="${id}" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#dc2626" />
        </marker>
    </defs>
    <line x1="${x - 20}" y1="${y}" x2="${x + 20}" y2="${y}"
          stroke="#dc2626" stroke-width="2" marker-end="url(#${id})"
          transform="rotate(${angle} ${x} ${y})"/>
    <text x="${x}" y="${y - 10}" font-size="12" fill="#dc2626" text-anchor="middle">${label}</text>
</g>`;
    },

    /**
     * Électrode (pour électrochimie)
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} label - Étiquette (ex: "Zn", "Cu")
     * @param {string} sign - Signe ('+' ou '-')
     * @returns {string} Code SVG
     */
    electrode: function(x, y, label = "", sign = "") {
        return `<g class="component electrode">
    <!-- Plaque d'électrode -->
    <rect x="${x - 5}" y="${y}" width="10" height="60" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <!-- Connexion -->
    <line x1="${x}" y1="${y - 20}" x2="${x}" y2="${y}" stroke="#333" stroke-width="2"/>
    <!-- Étiquettes -->
    ${label ? `<text x="${x + 20}" y="${y + 35}" font-size="14" fill="#333" font-weight="bold">${label}</text>` : ''}
    ${sign ? `<text x="${x + 20}" y="${y + 15}" font-size="16" fill="${sign === '+' ? '#dc2626' : '#1e3a8a'}" font-weight="bold">${sign}</text>` : ''}
</g>`;
    },

    /**
     * Condensateur
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} label - Valeur (ex: "10µF")
     * @param {boolean} vertical - Orientation verticale
     * @returns {string} Code SVG
     */
    capacitor: function(x, y, label = "", vertical = false) {
        if (vertical) {
            return `<g class="component capacitor">
    <!-- Connexions -->
    <line x1="${x}" y1="${y - 20}" x2="${x}" y2="${y - 5}" stroke="#333" stroke-width="2"/>
    <line x1="${x}" y1="${y + 5}" x2="${x}" y2="${y + 20}" stroke="#333" stroke-width="2"/>
    <!-- Plaques -->
    <line x1="${x - 12}" y1="${y - 5}" x2="${x + 12}" y2="${y - 5}" stroke="#2563eb" stroke-width="3"/>
    <line x1="${x - 12}" y1="${y + 5}" x2="${x + 12}" y2="${y + 5}" stroke="#2563eb" stroke-width="3"/>
    ${label ? `<text x="${x + 20}" y="${y + 5}" font-size="12" fill="#333">${label}</text>` : ''}
</g>`;
        } else {
            return `<g class="component capacitor">
    <!-- Connexions -->
    <line x1="${x - 20}" y1="${y}" x2="${x - 5}" y2="${y}" stroke="#333" stroke-width="2"/>
    <line x1="${x + 5}" y1="${y}" x2="${x + 20}" y2="${y}" stroke="#333" stroke-width="2"/>
    <!-- Plaques -->
    <line x1="${x - 5}" y1="${y - 12}" x2="${x - 5}" y2="${y + 12}" stroke="#2563eb" stroke-width="3"/>
    <line x1="${x + 5}" y1="${y - 12}" x2="${x + 5}" y2="${y + 12}" stroke="#2563eb" stroke-width="3"/>
    ${label ? `<text x="${x}" y="${y - 20}" font-size="12" fill="#333" text-anchor="middle">${label}</text>` : ''}
</g>`;
        }
    },

    /**
     * Noeud de connexion (point de jonction)
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @returns {string} Code SVG
     */
    node: function(x, y) {
        return `<circle cx="${x}" cy="${y}" r="4" fill="#333"/>`;
    },

    /**
     * Texte/Label
     * @param {number} x - Position X
     * @param {number} y - Position Y
     * @param {string} text - Texte à afficher
     * @param {string} color - Couleur du texte
     * @returns {string} Code SVG
     */
    label: function(x, y, text, color = "#333") {
        return `<text x="${x}" y="${y}" font-size="14" fill="${color}" text-anchor="middle">${text}</text>`;
    }
};

// Export pour utilisation en module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ElectricalComponents;
}
