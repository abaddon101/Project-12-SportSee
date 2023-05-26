import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { userActivityMocked } from "../../../../Api/datamocked";

const userActivity = userActivityMocked();

function formatDay(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  return day.toString();
}

function Activities() {
  return (
    <article className="activities-container">
      <h2>Activité quotidienne</h2>
      <BarChart width={500} height={300} data={userActivity[0].sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tickFormatter={formatDay} // Utilisation du formateur de tick
        />
        <YAxis yAxisId="left" orientation="left" stroke="#000000" />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#ff0000"
          label={{ value: "kg", angle: -90, position: "insideRight" }}
          domain={[70, 80]}
          // tickFormatter={(value) => (value >= 0 && value <= 80 ? value : "")}
        />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          fill="#000000"
          yAxisId="left"
          radius={5}
          barSize={6}
        />
        <Bar
          dataKey="calories"
          fill="#ff0000"
          yAxisId="right"
          radius={5}
          barSize={6}
        />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          iconSize={10}
          payload={[
            { value: "Poids (kg)", type: "circle", color: "#000000" },
            {
              value: "Calories brûlées (kcal)",
              type: "circle",
              color: "#ff0000",
            },
          ]}
        />
      </BarChart>
    </article>
  );
}

export default Activities;
