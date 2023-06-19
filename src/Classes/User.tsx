export default class User {
  public id: number; // Identifiant de l'utilisateur
  public userInfos: {
    // Informations sur l'utilisateur
    firstName: string; // Prénom de l'utilisateur
    lastName: string; // Nom de famille de l'utilisateur
    age: number; // Âge de l'utilisateur
  };
  public todayScore: number; // Score d'aujourd'hui de l'utilisateur
  public keyData: {
    // Données clés de l'utilisateur
    calorieCount: number; // Compteur de calories de l'utilisateur
    proteinCount: number; // Compteur de protéines de l'utilisateur
    carbohydrateCount: number; // Compteur de glucides de l'utilisateur
    lipidCount: number; // Compteur de lipides de l'utilisateur
  };

  constructor(datas: any) {
    this.id = datas.id; // Initialise l'identifiant de l'utilisateur avec la valeur fournie dans le paramètre datas
    console.log(datas.id); // Affiche l'identifiant dans la console

    this.userInfos = datas.userInfos; // Initialise les informations sur l'utilisateur avec les valeurs fournies dans le paramètre datas
    this.todayScore = datas.todayScore || datas.score; // Initialise le score d'aujourd'hui avec la valeur fournie dans le paramètre datas
    this.keyData = datas.keyData; // Initialise les données clés de l'utilisateur avec les valeurs fournies dans le paramètre datas
    console.log("test"); // Affiche "test" dans la console
    console.log(datas);
  }
}
