import React from "react";

import {
  dataMocked,
  userActivityMocked,
  userAverageSessionsMocked,
  userPerformanceMocked,
} from "../../../../Api/datamocked";

// import de fausse données pour tester l'intégration des différentes recharts
const data = dataMocked();
const userActivity = userActivityMocked();
const userAverageSessions = userAverageSessionsMocked();
const userPerformance = userPerformanceMocked();

function Progression() {
  return (
    <article className="progression-container">
      <div>Component 8 Recharts courbes durée moyenne session</div>
      <div>Component 9 Recharts spider</div>
      <div>Component 10 Recharts score</div>
    </article>
  );
}

export default Progression;
