import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

import "./style.scss";

interface SpiderProps {
  data: { value: number; kind: number }[]; // Interface pour les props du composant Spider
}

const Spider: React.FC<SpiderProps> = ({ data }) => {
  // Libellés correspondant à chaque type de données
  const kindLabels: { [key: number]: string } = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  return (
    <article className="spider-container">
      {/* Conteneur réactif pour le graphique radar */}
      <ResponsiveContainer width="100%" height="100%">
        {/* Crée un graphique radar */}
        <RadarChart outerRadius={90} data={data}>
          {/* Grille polaire */}
          <PolarGrid />
          {/* Axe des angles polaires */}
          <PolarAngleAxis
            dataKey="kind"
            stroke="rgba(255, 255, 255, 1)"
            tick={{ fill: "rgba(255, 255, 255, 1)" }}
            tickFormatter={(value) => kindLabels[value]} // Formatteur de l'étiquette de l'axe des angles polaires en utilisant les libellés correspondants
          />
          {/* Axe des rayons polaires */}
          <PolarRadiusAxis angle={30} domain={[0, 200]} />
          {/* Radar */}
          <Radar
            name="Performance"
            dataKey="value"
            stroke="rgba(255, 1, 1, 0.7)"
            fill="rgba(255, 1, 1, 0.7)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
};

export default Spider;
