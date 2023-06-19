export default class UserProgression {
  userId: number; // Identifiant de l'utilisateur
  sessions: { day: number; sessionLength: number }[]; // Sessions de progression

  constructor(datas: any) {
    this.userId = datas.userId; // Initialise l'identifiant de l'utilisateur avec la valeur fournie dans le paramètre userId
    this.sessions = datas.sessions; // Initialise les sessions de progression avec les valeurs fournies dans le paramètre sessions
  }
}
