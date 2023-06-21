import User from "../Classes/User";
import UserActivities from "../Classes/UserActivities";
import UserProgression from "../Classes/UserProgression";
import UserPerformance from "../Classes/UserPerformance";

// Importation des classes nécessaires pour les données utilisateur

export async function dataMocked(userId: number): Promise<User> {
  // Fonction pour charger les données de l'utilisateur
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  // Envoi d'une requête HTTP pour récupérer les données de l'utilisateur à partir de l'URL spécifiée
  const userData = await response.json();
  // Conversion de la réponse en JSON
  // console.log("userData:", userData);
  // Affichage des données de l'utilisateur dans la console
  return new User(userData.data);
  // Création d'une instance de la classe User à partir des données et renvoi de la promesse résolue
}

export async function userActivityMocked(
  userId: number
): Promise<UserActivities> {
  // Fonction pour charger les activités de l'utilisateur
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
  // Envoi d'une requête HTTP pour récupérer les activités de l'utilisateur à partir de l'URL spécifiée
  const userActivityData = await response.json();
  // Conversion de la réponse en JSON
  // console.log("userActivityData:", userActivityData);
  // Affichage des données d'activité de l'utilisateur dans la console
  return new UserActivities(userActivityData.data);
  // Création d'une instance de la classe UserActivities à partir des données et renvoi de la promesse résolue
}

export async function userAverageSessionsMocked(
  userId: number
): Promise<UserProgression> {
  // Fonction pour charger la progression moyenne de l'utilisateur
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  // Envoi d'une requête HTTP pour récupérer la progression moyenne de l'utilisateur à partir de l'URL spécifiée
  const userAverageSessionsData = await response.json();
  // Conversion de la réponse en JSON
  // console.log("userAverageSessionsData:", userAverageSessionsData);
  // Affichage des données de progression moyenne de l'utilisateur dans la console
  return new UserProgression(userAverageSessionsData.data);
  // Création d'une instance de la classe UserProgression à partir des données et renvoi de la promesse résolue
}

export async function userPerformanceMocked(
  userId: number
): Promise<UserPerformance> {
  // Fonction pour charger les performances de l'utilisateur
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  );
  // Envoi d'une requête HTTP pour récupérer les performances de l'utilisateur à partir de l'URL spécifiée
  const userPerformanceData = await response.json();
  // Conversion de la réponse en JSON
  const { kind, data } = userPerformanceData.data;
  // Extraction des propriétés 'kind' et 'data' des performances de l'utilisateur
  // console.log("UserPerformance:", userId, kind, data);
  // Affichage des performances de l'utilisateur dans la console
  return new UserPerformance(userId, kind, data);
  // Création d'une instance de la classe UserPerformance à partir des données et renvoi de la promesse résolue
}
