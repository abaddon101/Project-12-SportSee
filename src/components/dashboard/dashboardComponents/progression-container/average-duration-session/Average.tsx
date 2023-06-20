import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UserProgression from "../../../../../Classes/UserProgression";
import "./style.scss";

function Average({ userProgression }: { userProgression: UserProgression }) {
  const formatDayOfWeek = (value: number) => {
    const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];
    const adjustedValue = value % daysOfWeek.length;
    return daysOfWeek[adjustedValue];
  };

  const renderTooltipContent = (data: any) => {
    if (data.payload && data.payload.length > 0) {
      const { value } = data.payload[0];
      return (
        <div className="custom-tooltip">
          <p>{value} minutes</p>
        </div>
      );
    }
    return null;
  };

  return (
    <article className="average-container">
      <h3 className="average-container-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={userProgression.sessions} className="chart-container">
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 1)"
            axisLine={false}
            tickLine={false}
            tickFormatter={formatDayOfWeek}
            interval="preserveStartEnd"
            dy={15}
          />
          <YAxis hide={true} />
          <Tooltip
            contentStyle={{
              background: "white",
              color: "black",
              fontSize: "12px",
            }}
            wrapperStyle={{ zIndex: 100 }}
            content={renderTooltipContent}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth={2}
            activeDot={{ r: 4 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}

export default Average;
