import React from "react";
import "./style.scss";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import UserActivities from "../../../../Classes/UserActivities";

function formatDay(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  return day.toString();
}

function Activities({ userActivities }: { userActivities: UserActivities }) {
  return (
    <article className="activities-container">
      <h2>Activité quotidienne</h2>
      <BarChart width={1000} height={300} data={userActivities.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tickFormatter={formatDay} />
        <YAxis yAxisId="left" orientation="left" stroke="#000000" />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#ff0000"
          label={{ value: "kg", angle: -90, position: "insideRight" }}
          domain={[70, 80]}
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
