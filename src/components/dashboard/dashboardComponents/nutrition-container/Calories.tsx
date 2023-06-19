import React from "react";
import User from "../../../../Classes/User";
import calories from "../../../../assets/calories.png";
import "./style.scss";

function formatCalorieCount(calorieCount: number) {
  const formattedCount = calorieCount.toLocaleString("en-US"); // Formatage du nombre en utilisant la méthode toLocaleString pour afficher les virgules
  return formattedCount;
}

function Calories({ user }: { user: User }) {
  const { calorieCount } = user.keyData; // Accès à la propriété calorieCount de l'objet user.keyData

  const formattedCalorieCount = formatCalorieCount(calorieCount); // Formatage du nombre de calories

  return (
    <div className="nutrition-container">
      <div className="calories-box">
        <img className="calories-icons" src={calories} alt="Calories" />{" "}
        {/* Affichage de l'icône des calories */}
      </div>
      <div className="calories">
        <h2>{formattedCalorieCount} kCal</h2>{" "}
        {/* Affichage du nombre de calories formaté */}
        <p className="calories-label">Calories</p> {/* Libellé "Calories" */}
      </div>
    </div>
  );
}

export default Calories;
