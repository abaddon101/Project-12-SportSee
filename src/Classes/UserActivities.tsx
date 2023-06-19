export default class UserActivities {
  public userId: number; // Identifiant de l'utilisateur
  public sessions: {
    // Sessions de l'utilisateur
    day: string; // Jour de la session
    kilogram: number; // Poids en kilogrammes
    calories: number; // Calories brûlées
  }[];

  constructor(datas: any) {
    this.userId = datas.userId; // Initialise l'identifiant de l'utilisateur avec la valeur fournie dans le paramètre datas
    this.sessions = datas.sessions; // Initialise les sessions de l'utilisateur avec les valeurs fournies dans le paramètre datas
    console.log("testActivity"); // Affiche "testActivity" dans la console
  }
}
