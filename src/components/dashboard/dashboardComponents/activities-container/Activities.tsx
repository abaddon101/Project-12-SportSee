import React from "react";
import "./style.scss";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  CartesianGrid,
} from "recharts";
import UserActivities from "../../../../Classes/UserActivities";

function formatDay(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  return day.toString();
}

function formatCalories(value: number) {
  return value.toString();
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const filteredPayload = payload.filter(
      (entry: any) =>
        entry.dataKey === "kilogram" || entry.dataKey === "calories"
    );
    return (
      <div className="custom-tooltip">
        {filteredPayload.map((entry: any) => (
          <p key={entry.dataKey}>
            {entry.value} {entry.dataKey === "kilogram" ? "kg" : "Kcal"}
          </p>
        ))}
      </div>
    );
  }

  return null;
}

function Activities({ userActivities }: { userActivities: UserActivities }) {
  return (
    <article className="activities-container">
      <BarChart width={1000} height={300} data={userActivities.sessions}>
        <CartesianGrid
          stroke="#dddddd"
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="day" tickFormatter={formatDay} />
        <YAxis yAxisId="left" orientation="left" hide />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          stroke="#ff0000"
          tickFormatter={formatCalories}
        />
        <Tooltip content={<CustomTooltip />} />
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
        <text x={100} y={20} textAnchor="start">
          Activité quotidienne
        </text>
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          className="chart-legend"
          formatter={(label: string) => {
            if (label === "kilogram") {
              return "Poids (kg)";
            } else if (label === "calories") {
              return "Calories brûlées (Kcal)";
            } else {
              return label;
            }
          }}
        />
      </BarChart>
    </article>
  );
}

export default Activities;
