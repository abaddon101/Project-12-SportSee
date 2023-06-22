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

import {
  dataMocked,
  userActivityMocked,
  userAverageSessionsMocked,
  userPerformanceMocked,
} from "../../../../Api/datamocked";

// import {
//   dataMocked,
//   userActivityMocked,
//   userAverageSessionsMocked,
//   userPerformanceMocked,
// } from "../../../../Api/dataFetched";

import User from "../../../../Classes/User";
import UserActivities from "../../../../Classes/UserActivities";
import UserProgression from "../../../../Classes/UserProgression";
import UserPerformance from "../../../../Classes/UserPerformance";

function Dashboard() {
  const { id } = useParams<{ id?: string }>();

  const [user, setUser] = useState<User | null>(null);
  const [userActivities, setUserActivities] = useState<UserActivities | null>(
    null
  );
  const [userProgression, setUserProgression] =
    useState<UserProgression | null>(null);
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userSelected, setUserSelected] = useState(false);

  useEffect(() => {
    if (id) {
      const userId = parseInt(id);

      if (isNaN(userId) || id !== userId.toString()) {
        // ID non valide, afficher une erreur 404
        setError("Erreur 404: Page non trouvée");
        setUserSelected(false);
        setUser(null);
        setUserActivities(null);
        setUserProgression(null);
        setUserPerformance(null);
      } else {
        // ID valide, effectuer les appels API
        setError(null);
        setUserSelected(true);

        Promise.all([
          dataMocked(userId),
          userActivityMocked(userId),
          userAverageSessionsMocked(userId),
          userPerformanceMocked(userId),
        ])
          .then(
            ([userData, activityData, progressionData, performanceData]) => {
              if (userData) {
                setUser(userData);
                setUserActivities(activityData);
                setUserProgression(progressionData);

                // Vérification du module importé pour déterminer le type de userPerformance
                if (
                  Array.isArray(performanceData) &&
                  performanceData.length > 0
                ) {
                  setUserPerformance(performanceData[0]);
                } else {
                  setUserPerformance(performanceData as UserPerformance);
                }
              } else {
                setError("Erreur 404: Page non trouvée");
                setUserSelected(false);
                setUser(null);
                setUserActivities(null);
                setUserProgression(null);
                setUserPerformance(null);
              }
            }
          )
          .catch(() => {
            setError("Erreur 404: Page non trouvée");
            setUserSelected(false);
            setUser(null);
            setUserActivities(null);
            setUserProgression(null);
            setUserPerformance(null);
          });
      }
    } else {
      setError(null);
      setUserSelected(false);
      setUser(null);
      setUserActivities(null);
      setUserProgression(null);
      setUserPerformance(null);
    }
  }, [id]);

  const renderErrorMessage = () => {
    return <div className="error-message">{error}</div>;
  };

  return (
    <div className="dashboard">
      <section className="dashboard-principal">
        {!userSelected && error === null && (
          <div className="choose-user-message">
            Veuillez choisir un utilisateur.
          </div>
        )}

        {error && renderErrorMessage()}

        {user != null && userSelected && <Welcome user={user} />}
        {userActivities != null && userSelected && (
          <Activities userActivities={userActivities} />
        )}

        <div className="progression-container">
          {userProgression != null && userSelected && (
            <Average userProgression={userProgression} />
          )}
          {userPerformance != null && userSelected && (
            <Spider data={userPerformance.data} />
          )}
          {user != null && userSelected && <Score user={user} />}
        </div>
      </section>

      <aside className="nutrition-aside-block">
        {user != null && userSelected && <Calories user={user} />}
        {user != null && userSelected && <Proteines user={user} />}
        {user != null && userSelected && <Glucides user={user} />}
        {user != null && userSelected && <Lipides user={user} />}
      </aside>
    </div>
  );
}

export default Dashboard;
