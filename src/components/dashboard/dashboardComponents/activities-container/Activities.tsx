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
  ResponsiveContainer,
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

function Activities({ userActivities }: { userActivities: UserActivities }) {
  return (
    <article className="activities-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={800} height={250} data={userActivities.sessions}>
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
          <Tooltip
            itemStyle={{ width: "10px" }} // Modifier la valeur de width selon vos besoins
          />
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
            verticalAlign="top"
            className="chart-legend"
            width={800}
            content={() => (
              <div className="header-barChart">
                <h3>Activité quotidienne</h3>
                <div className="legend-header">
                  <span className="legend-icon-black">
                    <i className="circle"></i> Poids (kg)
                  </span>
                  <span className="legend-icon-red">
                    <i className="circle"></i> Calories brûlées (Kcal)
                  </span>
                </div>
              </div>
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
}

export default Activities;
