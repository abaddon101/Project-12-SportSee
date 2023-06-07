import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import UserProgression from "../../../../../Classes/UserProgression";

function Average({ userProgression }: { userProgression: UserProgression }) {
  const dayOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  const formatDayOfWeek = (value: number) => {
    return dayOfWeek[value % 7];
  };

  const renderTooltipContent = (data: any) => {
    if (data.payload && data.payload.length > 0) {
      const { value } = data.payload[0];
      return (
        <div>
          <p>Séance : {value} minutes</p>
        </div>
      );
    }
    return null;
  };

  return (
    <article
      className="average-container"
      style={{
        background: "rgba(255, 0, 0, 1)",
        color: "white",
      }}
    >
      <h2>Progression moyenne</h2>
      <LineChart width={300} height={300} data={userProgression.sessions}>
        <CartesianGrid strokeDasharray="3 3" display="none" />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={formatDayOfWeek}
        />
        <YAxis hide={true} />
        <Tooltip content={renderTooltipContent} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </article>
  );
}

export default Average;
