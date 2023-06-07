import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import UserProgression from "../../../../../Classes/UserProgression";

function Average({ userProgression }: { userProgression: UserProgression }) {
  return (
    <article className="average-container">
      <h2>Progression moyenne</h2>
      <LineChart width={300} height={300} data={userProgression.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </article>
  );
}

export default Average;
