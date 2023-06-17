import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import User from "../../../../../Classes/User";
import "./style.scss";

function Score({ user }: { user: User }) {
  const todayScore = Math.round(user.todayScore * 100);
  const data = [{ name: "Score", value: todayScore }];

  const remainingPercentage = 100 - todayScore;
  const remainingData = [{ name: "Empty", value: remainingPercentage }];

  const innerRadius = `${100 - todayScore}%`;
  const outerRadius = "100%";

  const scoreBarStyles = {
    fill: "#e60000", // Couleur rouge pour la barre "Score"
    barSize: 20, // Augmente la largeur de la barre de score
    cornerRadius: 10, // Ajoutez cette propriété pour définir le rayon des coins
  };

  const emptyBarStyles = {
    fill: "transparent", // Couleur transparente pour la barre "Empty"
  };

  return (
    <article className="score-container">
      <h2 className="score-container-title">Score</h2>
      <ResponsiveContainer width={250} height={250}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={180}
          endAngle={-180}
          data={data}
        >
          <RadialBar dataKey="value" background {...scoreBarStyles} />

          {remainingPercentage > 0 && (
            <RadialBar
              dataKey="value"
              fill={emptyBarStyles.fill}
              data={remainingData}
              background
            />
          )}

          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ top: "40%", right: "20px" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-label-container">
        <h2 className="score-label">{todayScore}%</h2>
        <p className="score-label-text">de votre objectif</p>
      </div>
    </article>
  );
}

export default Score;
