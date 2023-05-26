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

function Nutrition() {
  return (
    <aside className="nutrition-container">
      <div>calories icones</div>
      <div>protéines icones</div>
      <div>glucides icones</div>
      <div>lipides icones</div>
    </aside>
  );
}

export default Nutrition;
