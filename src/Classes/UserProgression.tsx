export default class UserProgression {
  public userId: number;
  public sessions: {
    day: number;
    sessionLength: number;
  }[];

  constructor(datas: any) {
    this.userId = datas.userId;
    this.sessions = datas.sessions;
  }
}
