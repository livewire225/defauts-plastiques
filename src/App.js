import React, { useState } from 'react';

const data = [
  {
    defaut: "Pièces cassantes",
    causes: [
      { texte: "Matière trop chaude", pourcentage: 4 },
      { texte: "Séchage insuffisant de la matière", pourcentage: 1 },
      { texte: "Point de stagnation de la matière", pourcentage: 3 },
      { texte: "Mélange de la matière", pourcentage: 2 },
    ]
  },
  {
    defaut: "Givrage,stries argentées",
    causes: [
      { texte: "Matière trop chaude", pourcentage: 8 },
      { texte: "Séchage insuffisant de la matière", pourcentage: 1},
      { texte: "Contre pression trop faible", pourcentage: 2 },
      { texte: "Vitesse injection trop rapide", pourcentage: 9 },
      { texte: "Decompression trop importante", pourcentage: 6 },
      { texte: "Vitesse decompression trop rapide", pourcentage: 7 },
      { texte: "Point de stagnation de la matière", pourcentage: 5 },
      { texte: "Clapet de vis en défaut", pourcentage: 10 },
    ]
  },
  {
    defaut: "lignes de soudure",
    causes: [
      { texte: "Matière trop froide", pourcentage: 8 },
      { texte: "Limite pression injection trop faible", pourcentage: 7 },
      { texte: "Vitesse injection trop lente", pourcentage: 2 },
      { texte: "Clapet de vis en défaut", pourcentage: 4 },
      { texte: "Communication en maintient à revoir", pourcentage: 6 },
    ]
  },
  {
    defaut: "Moulée incomplète",
    causes: [
      { texte: "Matière trop froide", pourcentage: 8 },
      { texte: "Limite pression injection faible", pourcentage: 5 },
      { texte: "Contre pression trop faible", pourcentage: 9 },
      { texte: "Huile machine trop chaude", pourcentage: 4 },
      { texte: "Communication en maintient à revoir", pourcentage: 3 },
      { texte: "Clapet de vis en défaut", pourcentage: 2 },
    ]
  },
  {
    defaut: "Bavures",
    causes: [
      { texte: "Matière trop chaude", pourcentage: 10 },
      { texte: "Séchage insuffisant de la matière", pourcentage: 4 },
      { texte: "Limite pression injection trop forte", pourcentage: 9 },
      { texte: "Vitesse injection trop rapide", pourcentage: 8 },
      { texte: "Communication en maintient à revoir", pourcentage: 3 },
    ]
  },
  {
    defaut: "Retassures, dépressions",
    causes: [
      { texte: "Pression maintient trop faible", pourcentage: 3 },
      { texte: "Temps maintient trop court", pourcentage: 4 },
      { texte: "Vitesse decompression trop rapide", pourcentage: 8 },
      { texte: "Vitesse de rotation trop lente", pourcentage: 9 },
      { texte: "Clapet de vis en défaut", pourcentage: 5 },
      { texte: "Communication en maintient à revoir", pourcentage: 6 },
    ]
  },
  {
    defaut: "Points noirs",
    causes: [
      { texte: "Matière trop chaude", pourcentage: 5 },
      { texte: "point de stagnation de la matière", pourcentage: 2 },
      { texte: "Clapet de vis en défaut", pourcentage: 4 },
      { texte: "Matière contaminée", pourcentage: 1 },
    ]
  },
  {
    defaut: "Trace marron",
    causes: [
      { texte: "Décompression trop importante", pourcentage: 3 },
      { texte: "Vitesse decompression trop rapide", pourcentage: 4 },
      { texte: "Clapet de vis en défaut", pourcentage: 5 },
      { texte: "Point de stagnation de la matière", pourcentage: 1 },
    ]
  },
  {
    defaut: "Brulures,coups de feu",
    causes: [
      { texte: "Vitesse injection trop rapide", pourcentage: 3 },
    ]
  },
  {
    defaut: "Pièce trop petite",
    causes: [
      { texte: "Pression maintient trop faible", pourcentage: 1 },
      { texte: "Temps maintient trop court", pourcentage: 2 },
      { texte: "Clapet de vis en défaut", pourcentage: 3 },
      { texte: "Huile machine trop chaude", pourcentage: 10 },
      { texte: "Communication en maintient à revoir", pourcentage: 8 },
    ]
  },
  {
    defaut: "Pièce trop grande",
    causes: [
      { texte: "Pression maintient trop forte", pourcentage: 1 },
      { texte: "Temps maintient trop long", pourcentage: 3 },
      { texte: "Communication en maintient à revoir", pourcentage: 4 },
    ]
  },
  {
    defaut: "Bulless de vide",
    causes: [
      { texte: "Matière trop chaude", pourcentage: 7 },
      { texte: "Pression maintient trop faible", pourcentage: 1 },
      { texte: "Temps maintient trop court", pourcentage: 2 },
      { texte: "Clapet de vis en défaut", pourcentage: 5 },
      { texte: "Communication en maintient à revoir", pourcentage: 6 },
    ]
  },
  {
    defaut: "Bulles d'air ou gaz",
    causes: [
      { texte: "Séchage insuffisant de la matière", pourcentage: 2},
      { texte: "Vitesse injection trop lente", pourcentage: 3 },
      { texte: "Décompression trop importante", pourcentage: 5 },
      { texte: "Point de stagnation de la matière", pourcentage: 1 },
    ]
  },
  {
    defaut: "Flaques de retrait",
    causes: [
      { texte: "Pression maintient trop faible", pourcentage: 1 },
      { texte: "Temps maintient trop court", pourcentage: 2 },
      { texte: "Communication en maintient à revoir", pourcentage: 6 },
      { texte: "Clapet de vis en défaut", pourcentage: 3 },
      { texte: "Huile machine trop chaude", pourcentage: 7},
    ]
  },
  {
    defaut: "Marque des ejecteurs",
    causes: [
      { texte: "Pression maintient trop faorte", pourcentage: 4 },
      { texte: "Temps maintient trop long", pourcentage: 5 },
      { texte: "Communication en maintient à revoir", pourcentage: 7 },
    ]
  },
  {
    defaut: "Gauchissement",
    causes: [
      { texte: "Pression maintient trop forte", pourcentage: 1 },
      { texte: "Temps maintient trop long", pourcentage: 3 },
      { texte: "Vitesse injection trop lente", pourcentage: 7 },
      { texte: "Clapet de vis en défaut", pourcentage: 5 },
      { texte: "Communication en maintient à revoir", pourcentage: 2 },
      { texte: "Huile machine trop chaude", pourcentage: 6 },
    ]
  },
  {
    defaut: "Mauvaise coloration",
    causes: [
      { texte: "Matière trop froide", pourcentage: 2 },
      { texte: "Contre pression trop faible", pourcentage: 1 },
    ]
  },
  {
    defaut: "Vague, microsillon",
    causes: [
      { texte: "Matière trop froide", pourcentage: 2 },
      { texte: "Contre pression trop faible", pourcentage: 1 },
      { texte: "Communication en maintient à revoir", pourcentage: 5 },
      { texte: "Huile machine trop chaude", pourcentage: 6 },
    ]
  },
  {
    defaut: "Jet libre",
    causes: [
      { texte: "Vitesse injection trop rapide", pourcentage: 2 },
    ]
  },
  {
    defaut: "Effet tigre,fibre de verre",
    causes: [
      { texte: "Limite pression injection faible", pourcentage: 3 },
      { texte: "Vitesse injection trop lente", pourcentage: 2 },
    ]
  },
  {
    defaut: "Matière collée",
    causes: [
      { texte: "Matière trop chaude", pourcentage: 4 },
      { texte: "Séchage insuffisant de la matière", pourcentage: 1 },
      { texte: "Point de stagnation de la matière", pourcentage: 3 },
      { texte: "Clapet de vis en défaut", pourcentage: 2 },
    ]
  },
  {
    defaut: "Délaminage",
    causes: [
      { texte: "Vitesse injection trop rapide", pourcentage: 3 },
      { texte: "Mélange de matière", pourcentage: 1 },
      { texte: "Matière contaminée", pourcentage: 2 },
    ]
  },
  {
    defaut: "Manque de brillance",
    causes: [
      { texte: "Matière trop froide", pourcentage: 5 },
      { texte: "Limite pression injection faible", pourcentage: 3 },
      { texte: "Vitesse injection trop lente", pourcentage: 2 },
      { texte: "Clapet de vis en défaut", pourcentage: 4 },
    ]
  },
  {
    defaut: "Manque de matité",
    causes: [
      { texte: "Temps maintient trop court", pourcentage: 6 },
      { texte: "Pression maintient trop faible", pourcentage: 5},
    ]
  },

  ];

function App() {
  const [defautSelectionne, setDefautSelectionne] = useState("");

  const defautTrouve = data.find(item => item.defaut === defautSelectionne);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
      <h1>Diagnostic de défauts plastiques</h1>

      <select
        onChange={(e) => setDefautSelectionne(e.target.value)}
        value={defautSelectionne}
        style={{ padding: "0.5rem", width: "100%", marginTop: "1rem" }}
      >
        <option value="">-- Choisir un défaut --</option>
        {data.map((item, index) => (
          <option key={index} value={item.defaut}>{item.defaut}</option>
        ))}
      </select>

      {defautTrouve && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Causes probables :</h2>
          <ul>
            {defautTrouve.causes.map((cause, index) => (
              <li key={index}>
                {cause.texte} — <strong>{cause.pourcentage}%</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
