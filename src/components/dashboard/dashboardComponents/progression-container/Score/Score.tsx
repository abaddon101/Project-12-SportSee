import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import User from "../../../../../Classes/User";

function Score({ user }: { user: User }) {
  const data = [
    {
      name: "Score",
      value: user.todayScore,
    },
  ];

  return (
    <article className="score-container">
      <h2>Score: {user.todayScore}</h2>
      <RadialBarChart
        width={300}
        height={300}
        cx={150}
        cy={150}
        innerRadius={30}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar background dataKey="value" />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </article>
  );
}

export default Score;
