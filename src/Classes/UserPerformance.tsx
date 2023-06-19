export default class UserPerformance {
  userId: number; // Identifiant de l'utilisateur
  kind: { [key: number]: string }; // Types de performance avec leurs identifiants
  data: { value: number; kind: number }[]; // Données de performance

  constructor(
    userId: number,
    kind: { [key: number]: string },
    data: { value: number; kind: number }[]
  ) {
    this.userId = userId; // Initialise l'identifiant de l'utilisateur avec la valeur fournie dans le paramètre userId
    this.kind = kind; // Initialise les types de performance avec les valeurs fournies dans le paramètre kind
    this.data = data; // Initialise les données de performance avec les valeurs fournies dans le paramètre data
  }
}
