import React from "react";
import "./style.scss";
import { userAverageSessionsMocked } from "../../../../Api/datamocked";
import User from "../../../../Classes/User";

// const userActivity = userActivityMocked();
const userAverageSessions = userAverageSessionsMocked();
// const userPerformance = userPerformanceMocked();

function Welcome({ user }: { user: User }) {
  const firstName = user.userInfos.firstName; // Vérification de nullité avec l'opérateur "?"

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
