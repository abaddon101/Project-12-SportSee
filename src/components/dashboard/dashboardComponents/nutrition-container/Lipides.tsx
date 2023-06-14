import React from "react";
import User from "../../../../Classes/User";
import lipides from "../../../../assets/lipides.png";
import "./style.scss";

function formatLipidCount(lipidCount: number) {
  const formattedCount = lipidCount.toLocaleString("en-US");
  return formattedCount;
}

function Lipides({ user }: { user: User }) {
  const { lipidCount } = user.keyData;

  const formattedLipidCount = formatLipidCount(lipidCount);

  return (
    <div className="nutrition-container">
      <div className="lipides-box">
        <img className="lipides-icons" src={lipides} alt="Lipides" />
      </div>
      <div className="lipides">
        <h2>{formattedLipidCount} g</h2>
        <p className="lipides-label">Lipides</p>
      </div>
    </div>
  );
}

export default Lipides;
