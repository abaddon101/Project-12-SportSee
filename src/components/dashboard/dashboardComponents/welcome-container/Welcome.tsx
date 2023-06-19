import React from "react";
import "./style.scss";
// import { userAverageSessionsMocked } from "../../../../Api/datamocked";
import User from "../../../../Classes/User";

function Welcome({ user }: { user: User }) {
  const firstName = user.userInfos.firstName; // Accès à la propriété firstName de l'objet user.userInfos

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
