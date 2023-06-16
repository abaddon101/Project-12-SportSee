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
import "./style.scss";

function Average({ userProgression }: { userProgression: UserProgression }) {
  const formatDayOfWeek = (value: number) => {
    const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const adjustedValue = (value - 1 + daysOfWeek.length) % daysOfWeek.length;
    // console.log("Value:", value, "Adjusted Index:", adjustedValue);
    // console.log(userProgression.sessions);
    return daysOfWeek[adjustedValue];
  };

  const renderTooltipContent = (data: any) => {
    if (data.payload && data.payload.length > 0) {
      const { value } = data.payload[0];
      return (
        <div>
          <p> {value} minutes</p>
        </div>
      );
    }
    return null;
  };

  return (
    <article
      id="average-container"
      style={{
        background: "rgba(255, 0, 0, 1)",
        color: "white",
      }}
    >
      <h2>Progression moyenne</h2>
      <LineChart width={400} height={150} data={userProgression.sessions}>
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
          strokeWidth={1}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </article>
  );
}

export default Average;
