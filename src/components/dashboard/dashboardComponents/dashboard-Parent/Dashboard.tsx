import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Welcome from "../welcome-container/Welcome";
import Activities from "../activities-container/Activities";
import Average from "../progression-container/average-duration-session/Average";
import Spider from "../progression-container/Spider/Spider";
import Score from "../progression-container/Score/Score";
import Calories from "../nutrition-container/Calories";
import Proteines from "../nutrition-container/Proteines";
import Glucides from "../nutrition-container/Glucides";
import Lipides from "../nutrition-container/Lipides";

import "./style.scss";
// import {
//   dataMocked,
//   userActivityMocked,
//   userAverageSessionsMocked,
//   userPerformanceMocked,
// } from "../../../../Api/dataFetched";

import {
  dataMocked,
  userActivityMocked,
  userAverageSessionsMocked,
  userPerformanceMocked,
} from "../../../../Api/datamocked";

import User from "../../../../Classes/User";
import UserActivities from "../../../../Classes/UserActivities";
import UserProgression from "../../../../Classes/UserProgression";
import UserPerformance from "../../../../Classes/UserPerformance";

function Dashboard() {
  // Récupération de l'ID de l'utilisateur à partir des paramètres d'URL
  const { id } = useParams<{ id?: string }>();

  // Déclaration des variables d'état
  const [user, setUser] = useState<User | null>(null);
  const [userActivities, setUserActivities] = useState<UserActivities | null>(
    null
  );
  const [userProgression, setUserProgression] =
    useState<UserProgression | null>(null);
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fonction exécutée lorsque l'ID de l'utilisateur change
    if (id) {
      const userId = parseInt(id);

      // Chargement des données de l'utilisateur à partir de la fonction dataMocked
      dataMocked(userId)
        .then((user: User) => {
          if (user) {
            setUser(user);
            setError(null);
          } else {
            setError("Erreur, L'ID n'existe pas dans la base de données");
          }
        })
        .catch(() => {
          setError("Erreur, L'ID n'existe pas dans la base de données");
        });

      // Chargement des activités de l'utilisateur à partir de la fonction userActivityMocked
      userActivityMocked(userId)
        .then((userActivities: UserActivities) => {
          setUserActivities(userActivities);
        })
        .catch(() => {
          setError("Erreur, L'ID n'existe pas dans la base de données");
        });

      // Chargement de la progression moyenne de l'utilisateur à partir de la fonction userAverageSessionsMocked
      userAverageSessionsMocked(userId)
        .then((userProgression: UserProgression) => {
          setUserProgression(userProgression);
        })
        .catch(() => {
          setError("Erreur, L'ID n'existe pas dans la base de données");
        });

      // Chargement des performances de l'utilisateur à partir de la fonction userPerformanceMocked
      userPerformanceMocked(userId)
        .then((performanceData: unknown) => {
          if (performanceData !== null && typeof performanceData === "object") {
            setUserPerformance(performanceData as UserPerformance);
          }
        })
        .catch(() => {
          setError("Erreur, L'ID n'existe pas dans la base de données");
        });
    } else {
      setError("Erreur, L'ID n'existe pas dans la base de données");
    }
  }, [id]);

  return (
    <div className="dashboard">
      <section className="dashboard-principal">
        {/* Affichage du message d'erreur s'il y en a */}
        {error && <div className="error-message">{error}</div>}

        {/* Affichage du composant Welcome avec les données de l'utilisateur s'il existe */}
        {user != null && <Welcome user={user} />}

        {/* Affichage du composant Activities avec les activités de l'utilisateur s'il existent */}
        {userActivities != null && (
          <Activities userActivities={userActivities} />
        )}

        <div className="progression-container">
          {/* Affichage du composant Average avec la progression moyenne de l'utilisateur s'il existe */}
          {userProgression != null && (
            <Average userProgression={userProgression} />
          )}

          {/* Affichage du composant Spider avec les performances de l'utilisateur s'il existent */}
          {userPerformance != null && <Spider data={userPerformance.data} />}

          {/* Affichage du composant Score avec les données de l'utilisateur s'il existe */}
          {user != null && <Score user={user} />}
        </div>
      </section>

      <aside className="nutrition-aside-block">
        {/* Affichage du composant Calories avec les données de l'utilisateur s'il existe */}
        {user != null && <Calories user={user} />}

        {/* Affichage du composant Proteines avec les données de l'utilisateur s'il existe */}
        {user != null && <Proteines user={user} />}

        {/* Affichage du composant Glucides avec les données de l'utilisateur s'il existe */}
        {user != null && <Glucides user={user} />}

        {/* Affichage du composant Lipides avec les données de l'utilisateur s'il existe */}
        {user != null && <Lipides user={user} />}
      </aside>
    </div>
  );
}

export default Dashboard;
