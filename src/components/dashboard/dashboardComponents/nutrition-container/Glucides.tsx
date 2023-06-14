import React from "react";
import User from "../../../../Classes/User";
import glucides from "../../../../assets/glucides.png";
import "./style.scss";

function formatCarbohydrateCount(carbohydrateCount: number) {
  const formattedCount = carbohydrateCount.toLocaleString("en-US");
  return formattedCount;
}

function Glucides({ user }: { user: User }) {
  const { carbohydrateCount } = user.keyData;

  const formattedCarbohydrateCount = formatCarbohydrateCount(carbohydrateCount);

  return (
    <div className="nutrition-container">
      <div className="glucides-box">
        <img className="glucides-icons" src={glucides} alt="Glucides" />
      </div>
      <div className="glucides">
        <h2>{formattedCarbohydrateCount} g</h2>
        <p className="glucides-label">Glucides</p>
        
      </div>
    </div>
  );
}

export default Glucides;
