import React, { useState } from 'react';

const data = [
  {
    defaut: "Pièces cassantes",
    causes: [
      { texte: "Température matière trop basse", pourcentage: 45 },
      { texte: "Temps de refroidissement trop court", pourcentage: 30 },
      { texte: "Teneur en humidité trop élevée", pourcentage: 25 }
    ]
  },
  {
    defaut: "Brûlures",
    causes: [
      { texte: "Vitesse d'injection trop rapide", pourcentage: 40 },
      { texte: "Air emprisonné", pourcentage: 35 },
      { texte: "Température de la buse trop élevée", pourcentage: 25 }
    ]
  }
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
