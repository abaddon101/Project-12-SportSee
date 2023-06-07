import React from "react";
import User from "../../../../Classes/User";

function Glucides({ user }: { user: User }) {
  const { carbohydrateCount } = user.keyData;

  return (
    <div className="glucides-container">
      <div className="glucides-icons"></div>
      <h2>Glucides: {carbohydrateCount}</h2>
    </div>
  );
}

export default Glucides;
