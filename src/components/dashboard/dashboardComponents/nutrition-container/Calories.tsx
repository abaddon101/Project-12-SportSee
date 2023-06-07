import React from "react";
import User from "../../../../Classes/User";

function Calories({ user }: { user: User }) {
  const { calorieCount } = user.keyData;

  return (
    <div className="calories-container">
      <div className="calories-icons"></div>
      <h2>Calories: {calorieCount}</h2>
    </div>
  );
}

export default Calories;
