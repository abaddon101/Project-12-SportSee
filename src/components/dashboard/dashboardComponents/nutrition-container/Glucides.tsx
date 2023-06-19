import React from "react";
import User from "../../../../Classes/User";
import glucides from "../../../../assets/glucides.png";
import "./style.scss";

function formatCarbohydrateCount(carbohydrateCount: number) {
  const formattedCount = carbohydrateCount.toLocaleString("en-US"); // Formatage du nombre en utilisant la méthode toLocaleString pour afficher les virgules
  return formattedCount;
}

function Glucides({ user }: { user: User }) {
  const { carbohydrateCount } = user.keyData; // Accès à la propriété carbohydrateCount de l'objet user.keyData

  const formattedCarbohydrateCount = formatCarbohydrateCount(carbohydrateCount); // Formatage du nombre de glucides

  return (
    <div className="nutrition-container">
      <div className="glucides-box">
        <img className="glucides-icons" src={glucides} alt="Glucides" />{" "}
        {/* Affichage de l'icône des glucides */}
      </div>
      <div className="glucides">
        <h2>{formattedCarbohydrateCount} g</h2>{" "}
        {/* Affichage du nombre de glucides formaté */}
        <p className="glucides-label">Glucides</p> {/* Libellé "Glucides" */}
      </div>
    </div>
  );
}

export default Glucides;
