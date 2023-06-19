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
  // Formate le jour de la semaine en utilisant un tableau de jours de la semaine
  const formatDayOfWeek = (value: number) => {
    const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];
    const adjustedValue = value % daysOfWeek.length;

    return daysOfWeek[adjustedValue];
  };

  // Rend le contenu de l'info-bulle personnalisée
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
    <article className="average-container">
      {/* Titre de l'article */}
      <h3 className="average-container-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        {/* Crée un graphique en ligne réactif */}
        <LineChart data={userProgression.sessions} className="chart-container">
          {/* Affiche une grille cartésienne */}
          <CartesianGrid strokeDasharray="1 3" />
          {/* Définit l'axe des abscisses */}
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 1)"
            axisLine={false}
            tickLine={false}
            tickFormatter={formatDayOfWeek}
            interval="preserveStartEnd"
            dy={15}
          />
          {/* Cache l'axe des ordonnées */}
          <YAxis hide={true} />
          {/* Affiche une info-bulle au survol de la ligne */}
          <Tooltip content={renderTooltipContent} />
          {/* Dessine la ligne représentant la durée moyenne des sessions */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}

export default Average;
