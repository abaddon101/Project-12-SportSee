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
// Fonction utilitaire pour formater le jour à partir d'une chaîne de caractères de date
function formatDay(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  return day.toString();
}
// Fonction utilitaire pour formater les calories en tant que chaîne de caractères
function formatCalories(value: number) {
  return value.toString();
}

function Activities({ userActivities }: { userActivities: UserActivities }) {
  return (
    <article className="activities-container">
      <ResponsiveContainer width="100%" height="100%">
        {/* Crée un graphique à barres réactif */}
        <BarChart width={800} height={250} data={userActivities.sessions}>
          {/* Affiche une grille en pointillés */}
          <CartesianGrid
            stroke="#dddddd"
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          {/* Définit l'axe des abscisses */}
          <XAxis dataKey="day" tickFormatter={formatDay} />
          {/* Définit l'axe des ordonnées gauche */}
          <YAxis yAxisId="left" orientation="left" hide />
          {/* Définit l'axe des ordonnées droit */}
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            stroke="#ff0000"
            tickFormatter={formatCalories}
          />
          {/* Affiche une info-bulle au survol des barres */}
          <Tooltip
            itemStyle={{ backgroundColor: "red", color: "white" }}
            contentStyle={{ backgroundColor: "red", color: "white" }}
            labelStyle={{ color: "white", display: "none" }} // Ajoutez "display: none" pour masquer la première ligne
            formatter={(value, name) => {
              if (name === "kilogram") {
                return [`${value} kg`];
              } else if (name === "calories") {
                return [`${value} Kcal`];
              }
              return [value, name];
            }}
          />
          {/* Première barre représentant les données de kilogrammes */}
          <Bar
            dataKey="kilogram"
            fill="#000000"
            yAxisId="left"
            radius={5}
            barSize={6}
          />
          {/* Deuxième barre représentant les données de calories */}
          <Bar
            dataKey="calories"
            fill="#ff0000"
            yAxisId="right"
            radius={5}
            barSize={6}
          />

          {/* Affiche la légende du graphique */}
          <Legend
            verticalAlign="top"
            className="chart-legend"
            width={800}
            content={() => (
              <div className="header-barChart">
                {/* En-tête de la légende */}
                <h3>Activité quotidienne</h3>
                {/* Icônes et libellés de la légende */}
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
