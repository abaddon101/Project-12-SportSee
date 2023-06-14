import React from "react";
import User from "../../../../Classes/User";
import proteines from "../../../../assets/proteines.png";
import "./style.scss";

function formatProteinCount(proteinCount: number) {
  const formattedCount = proteinCount.toLocaleString("en-US");
  return formattedCount;
}

function Proteines({ user }: { user: User }) {
  const { proteinCount } = user.keyData;

  const formattedProteinCount = formatProteinCount(proteinCount);

  return (
    <div className="nutrition-container">
      <div className="proteines-box">
        <img className="proteines-icons" src={proteines} alt="Protéines" />
      </div>
      <div className="proteines">
        <h2>{formattedProteinCount} g</h2>
        <p className="proteines-label">Proteines</p>
      </div>
    </div>
  );
}

export default Proteines;
