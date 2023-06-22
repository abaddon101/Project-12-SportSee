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
// Importation des fonctions de simulation de données depuis le fichier 'datamocked' (simulation d'appels API)

// import {
//   dataMocked,
//   userActivityMocked,
//   userAverageSessionsMocked,
//   userPerformanceMocked,
// } from "../../../../Api/dataFetched";
// Importation des fonctions de récupération de données réelles depuis le fichier 'dataFetched' (appels API réels)

import User from "../../../../Classes/User";
import UserActivities from "../../../../Classes/UserActivities";
import UserProgression from "../../../../Classes/UserProgression";
import UserPerformance from "../../../../Classes/UserPerformance";
// Importation des classes utilisées pour représenter les données utilisateur

function Dashboard() {
  const { id } = useParams<{ id?: string }>();
  // Extraction du paramètre 'id' de l'URL en utilisant le hook 'useParams'
  const [user, setUser] = useState<User | null>(null);
  // Déclaration d'un état local 'user' qui stocke les informations de l'utilisateur
  const [userActivities, setUserActivities] = useState<UserActivities | null>(
    null
  );
  // Déclaration d'un état local 'userActivities' qui stocke les activités de l'utilisateur
  const [userProgression, setUserProgression] =
    useState<UserProgression | null>(null);
  // Déclaration d'un état local 'userProgression' qui stocke la progression de l'utilisateur
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);
  // Déclaration d'un état local 'userPerformance' qui stocke les performances de l'utilisateur
  const [error, setError] = useState<string | null>(null);
  // Déclaration d'un état local 'error' qui stocke un message d'erreur éventuel
  const [userSelected, setUserSelected] = useState(false);
  // Déclaration d'un état local 'userSelected' qui indique si un utilisateur a été sélectionné

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
          dataMocked(userId), // Appel API pour récupérer les données simulées de l'utilisateur
          userActivityMocked(userId), // Appel API pour récupérer les activités de l'utilisateur
          userAverageSessionsMocked(userId), // Appel API pour récupérer les sessions moyennes de l'utilisateur
          userPerformanceMocked(userId), // Appel API pour récupérer les performances de l'utilisateur
        ])
          .then(
            ([userData, activityData, progressionData, performanceData]) => {
              if (userData) {
                setUser(userData); // Mise à jour de l'état de l'utilisateur avec les données récupérées
                setUserActivities(activityData); // Mise à jour de l'état des activités de l'utilisateur
                setUserProgression(progressionData); // Mise à jour de l'état de la progression de l'utilisateur

                // Vérification du module importé pour déterminer le type de userPerformance
                if (
                  Array.isArray(performanceData) && // Vérifie si performanceData est un tableau
                  performanceData.length > 0
                ) {
                  setUserPerformance(performanceData[0]); // Mise à jour de l'état des performances de l'utilisateur avec le premier élément du tableau
                } else {
                  setUserPerformance(performanceData as UserPerformance); // Mise à jour de l'état des performances de l'utilisateur
                }
              } else {
                setError("Erreur ID: l'identifiant n'existe pas ou n'est pas valide"); // Affichage de l'erreur 404 si l'utilisateur n'est pas trouvé
                setUserSelected(false);
                setUser(null);
                setUserActivities(null);
                setUserProgression(null);
                setUserPerformance(null);
              }
            }
          )
          .catch(() => {
            setError("Erreur 404: Page non trouvée"); // Affichage de l'erreur 404 en cas d'erreur lors des appels API
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
  // Utilisation du hook 'useEffect' pour effectuer des actions lorsqu'il y a un changement dans 'id' (le paramètre d'URL)

  const renderErrorMessage = () => {
    return <div className="error-message">{error}</div>;
  };
  // Fonction utilitaire qui rend le message d'erreur

  return (
    <div className="dashboard">
      <section className="dashboard-principal">
        {!userSelected && error === null && (
          <div className="choose-user-message">
            Bonjour, Veuillez choisir un utilisateur.
          </div>
        )}
        {/* Si aucun utilisateur n'est sélectionné et il n'y a pas d'erreur, affiche un message demandant de choisir un utilisateur */}

        {error && renderErrorMessage()}
        {/* Si une erreur est présente, affiche le message d'erreur à l'écran */}

        {user != null && userSelected && <Welcome user={user} />}
        {/* Si l'utilisateur existe et est sélectionné, affiche le composant 'Welcome' avec l'utilisateur en tant que propriété */}

        {userActivities != null && userSelected && (
          <Activities userActivities={userActivities} />
        )}
        {/* Si les activités de l'utilisateur existent et l'utilisateur est sélectionné, affiche le composant 'Activities' avec les activités de l'utilisateur en tant que propriété */}

        <div className="progression-container">
          {userProgression != null && userSelected && (
            <Average userProgression={userProgression} />
          )}
          {/* Si la progression de l'utilisateur existe et l'utilisateur est sélectionné, affiche le composant 'Average' avec la progression de l'utilisateur en tant que propriété */}

          {userPerformance != null && userSelected && (
            <Spider data={userPerformance.data} />
          )}
          {/* Si les performances de l'utilisateur existent et l'utilisateur est sélectionné, affiche le composant 'Spider' avec les données de performance de l'utilisateur en tant que propriété */}

          {user != null && userSelected && <Score user={user} />}
          {/* Si l'utilisateur existe et est sélectionné, affiche le composant 'Score' avec l'utilisateur en tant que propriété */}
        </div>
      </section>

      <aside className="nutrition-aside-block">
        {user != null && userSelected && <Calories user={user} />}
        {/* Si l'utilisateur existe et est sélectionné, affiche le composant 'Calories' avec l'utilisateur en tant que propriété */}

        {user != null && userSelected && <Proteines user={user} />}
        {/* Si l'utilisateur existe et est sélectionné, affiche le composant 'Proteines' avec l'utilisateur en tant que propriété */}

        {user != null && userSelected && <Glucides user={user} />}
        {/* Si l'utilisateur existe et est sélectionné, affiche le composant 'Glucides' avec l'utilisateur en tant que propriété */}

        {user != null && userSelected && <Lipides user={user} />}
        {/* Si l'utilisateur existe et est sélectionné, affiche le composant 'Lipides' avec l'utilisateur en tant que propriété */}
      </aside>
    </div>
  );
}

export default Dashboard;
