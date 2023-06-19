import React from "react";
import User from "../../../../Classes/User";
import proteines from "../../../../assets/proteines.png";
import "./style.scss";

function formatProteinCount(proteinCount: number) {
  const formattedCount = proteinCount.toLocaleString("en-US"); // Formatage du nombre en utilisant la méthode toLocaleString pour afficher les virgules
  return formattedCount;
}

function Proteines({ user }: { user: User }) {
  const { proteinCount } = user.keyData; // Accès à la propriété proteinCount de l'objet user.keyData

  const formattedProteinCount = formatProteinCount(proteinCount); // Formatage du nombre de protéines

  return (
    <div className="nutrition-container">
      <div className="proteines-box">
        <img className="proteines-icons" src={proteines} alt="Protéines" />{" "}
        {/* Affichage de l'icône des protéines */}
      </div>
      <div className="proteines">
        <h2>{formattedProteinCount} g</h2>{" "}
        {/* Affichage du nombre de protéines formaté */}
        <p className="proteines-label">Proteines</p> {/* Libellé "Protéines" */}
      </div>
    </div>
  );
}

export default Proteines;
