import React from "react";
import User from "../../../../Classes/User";
import lipides from "../../../../assets/lipides.png";
import "./style.scss";

function formatLipidCount(lipidCount: number) {
  const formattedCount = lipidCount.toLocaleString("en-US"); // Formatage du nombre en utilisant la méthode toLocaleString pour afficher les virgules
  return formattedCount;
}

function Lipides({ user }: { user: User }) {
  const { lipidCount } = user.keyData; // Accès à la propriété lipidCount de l'objet user.keyData

  const formattedLipidCount = formatLipidCount(lipidCount); // Formatage du nombre de lipides

  return (
    <div className="nutrition-container">
      <div className="lipides-box">
        <img className="lipides-icons" src={lipides} alt="Lipides" />{" "}
        {/* Affichage de l'icône des lipides */}
      </div>
      <div className="lipides">
        <h2>{formattedLipidCount} g</h2>{" "}
        {/* Affichage du nombre de lipides formaté */}
        <p className="lipides-label">Lipides</p> {/* Libellé "Lipides" */}
      </div>
    </div>
  );
}

export default Lipides;
