import React from "react";
import User from "../../../../Classes/User";

function Proteines({ user }: { user: User }) {
  const { proteinCount } = user.keyData;

  return (
    <div className="proteines-container">
      <div className="proteines-icons"></div>
      <h2>Protéines: {proteinCount}</h2>
    </div>
  );
}

export default Proteines;
