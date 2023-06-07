import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

interface SpiderProps {
  data: { value: number; kind: number }[];
}

const Spider: React.FC<SpiderProps> = ({ data }) => {
  return (
    <article className="spider-container">
      <ResponsiveContainer width={400} height={400}>
        <RadarChart outerRadius={150} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis angle={30} domain={[0, 200]} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
};

export default Spider;
