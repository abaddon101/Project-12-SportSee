import React from "react";
import User from "../../../../Classes/User";
import calories from "../../../../assets/calories.png";
import "./style.scss";

function formatCalorieCount(calorieCount: number) {
  const formattedCount = calorieCount.toLocaleString("en-US");
  return formattedCount;
}

function Calories({ user }: { user: User }) {
  const { calorieCount } = user.keyData;

  const formattedCalorieCount = formatCalorieCount(calorieCount);

  return (
    <div className="nutrition-container">
      <div className="calories-box">
        <img className="calories-icons" src={calories} alt="Calories" />
      </div>
      <div className="calories">
        <h2>{formattedCalorieCount} kCal</h2>
        <p className="calories-label">Calories</p>
      </div>
    </div>
  );
}

export default Calories;
