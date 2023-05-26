import React from "react";
import "./style.scss";
import {
  dataMocked,
  userActivityMocked,
  userAverageSessionsMocked,
  userPerformanceMocked,
} from "../../../../Api/datamocked";

const data = dataMocked();
const userActivity = userActivityMocked();
const userAverageSessions = userAverageSessionsMocked();
const userPerformance = userPerformanceMocked();

function Welcome() {
  const userData = data.find((item) => item.id === 12);
  const firstName = userData?.userInfos?.firstName; // Vérification de nullité avec l'opérateur "?"

  return (
    <article className="welcome-container">
      <h2>
        Bonjour <span className="red-text">{firstName}</span>
      </h2>
      <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </article>
  );
}

export default Welcome;
