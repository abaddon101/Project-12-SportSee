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
// } from "../../../../Api/datamocked";
import {
  dataMocked,
  userActivityMocked,
  userAverageSessionsMocked,
  userPerformanceMocked,
} from "../../../../Api/dataFetched";
import User from "../../../../Classes/User";
import UserActivities from "../../../../Classes/UserActivities";
import UserProgression from "../../../../Classes/UserProgression";
import UserPerformance from "../../../../Classes/UserPerformance";

function Dashboard() {
  const { id } = useParams<{ id?: string }>();
  // Utilisation du hook useParams pour extraire la valeur du paramètre d'URL 'id'
  // et l'assigner à la variable 'id'
  // Type justifié : 'id' est de type string ou undefined

  // useState pour gérer les états
  const [user, setUser] = useState<User | null>(null);
  // Déclaration de l'état 'user' avec useState, initialisé à null.
  // 'user' sera utilisé pour stocker les données de l'utilisateur.
  // Type justifié : 'user' est de type User ou null

  const [userActivities, setUserActivities] = useState<UserActivities | null>(
    null
  );
  // Déclaration de l'état 'userActivities' avec useState, initialisé à null.
  // 'userActivities' sera utilisé pour stocker les données des activités de l'utilisateur.
  // Type justifié : 'userActivities' est de type UserActivities ou null

  const [userProgression, setUserProgression] =
    useState<UserProgression | null>(null);
  // Déclaration de l'état 'userProgression' avec useState, initialisé à null.
  // 'userProgression' sera utilisé pour stocker les données de progression de l'utilisateur.
  // Type justifié : 'userProgression' est de type UserProgression ou null

  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);
  // Déclaration de l'état 'userPerformance' avec useState, initialisé à null.
  // 'userPerformance' sera utilisé pour stocker les données de performance de l'utilisateur.
  // Type justifié : 'userPerformance' est de type UserPerformance ou null

  // useEffect est utilisé pour exécuter des effets de côté (comme l'appel à des fonctions asynchrones)
  // lorsqu'un ou plusieurs éléments dans son tableau de dépendances (le second argument) changent.
  useEffect(() => {
    // Vérifie si l'ID existe
    if (id) {
      // Convertit l'ID en nombre entier en utilisant parseInt
      const userId = parseInt(id);

      // Appel à la fonction asynchrone pour récupérer les données de l'utilisateur en utilisant l'ID
      dataMocked(userId).then((user: User) => {
        // Met à jour l'état 'user' avec les données de l'utilisateur récupérées
        console.log("user :", user);

        setUser(user);
      });

      // Appel à la fonction asynchrone pour récupérer les activités de l'utilisateur en utilisant l'ID
      userActivityMocked(userId).then((userActivities: UserActivities) => {
        // Met à jour l'état 'userActivities' avec les activités de l'utilisateur récupérées
        setUserActivities(userActivities);
      });

      // Appel à la fonction asynchrone pour récupérer la progression moyenne de l'utilisateur
      userAverageSessionsMocked(userId).then((userProgression: UserProgression) => {
        // Met à jour l'état 'userProgression' avec la progression moyenne de l'utilisateur récupérée
        setUserProgression(userProgression);
      });

      // Appel à la fonction asynchrone pour récupérer les performances de l'utilisateur
      userPerformanceMocked(userId).then((performanceData: unknown) => {
        // Vérification et conversion des données de performance

        // Vérifie si la donnée de performance n'est pas nulle et si elle est de type objet
        if (performanceData !== null && typeof performanceData === "object") {
          // Convertit la donnée de performance en UserPerformance en utilisant l'opérateur 'as'
          setUserPerformance(performanceData as UserPerformance);
        }
      });
    }
  }, [id]);

  return (
    <div className="dashboard">
      {/* Section principale du tableau de bord */}
      <section className="dashboard-principal">
        {/* Composant Welcome pour afficher les informations de l'utilisateur */}
        {user != null && <Welcome user={user} />}
        {/* Justification du type : Le composant Welcome attend un prop 'user' de type User */}

        {/* Composant Activities pour afficher les activités de l'utilisateur */}
        {userActivities != null && (
          <Activities userActivities={userActivities} />
        )}
        {/* Justification du type : Le composant Activities attend un prop 'userActivities' de type UserActivities */}

        <div className="progression-container">
          {/* Composant Average pour afficher la progression moyenne de l'utilisateur */}
          {userProgression != null && (
            <Average userProgression={userProgression} />
          )}
          {/* Justification du type : Le composant Average attend un prop 'userProgression' de type UserProgression */}

          {/* Composant Spider pour afficher les performances de l'utilisateur */}
          {userPerformance != null && <Spider data={userPerformance.data} />}
          {/* Justification du type : Le composant Spider attend un prop 'data' de type any[] */}

          {/* Composant Score pour afficher le score de l'utilisateur */}
          {user != null && <Score user={user} />}
          {/* Justification du type : Le composant Score attend un prop 'user' de type User */}
        </div>
      </section>

      {/* Bloc de côté pour afficher les informations nutritionnelles */}
      <aside className="nutrition-aside-block">
        {/* Composant Calories pour afficher les informations sur les calories de l'utilisateur */}
        {user != null && <Calories user={user} />}
        {/* Justification du type : Le composant Calories attend un prop 'user' de type User */}

        {/* Composant Proteines pour afficher les informations sur les protéines de l'utilisateur */}
        {user != null && <Proteines user={user} />}
        {/* Justification du type : Le composant Proteines attend un prop 'user' de type User */}

        {/* Composant Glucides pour afficher les informations sur les glucides de l'utilisateur */}
        {user != null && <Glucides user={user} />}
        {/* Justification du type : Le composant Glucides attend un prop 'user' de type User */}

        {/* Composant Lipides pour afficher les informations sur les lipides de l'utilisateur */}
        {user != null && <Lipides user={user} />}
        {/* Justification du type : Le composant Lipides attend un prop 'user' de type User */}
      </aside>
    </div>
  );
}

export default Dashboard;
