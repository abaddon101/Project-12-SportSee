export default class UserActivities {
  public userId: number;
  public sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];

  constructor(datas: any) {
    this.userId = datas.userId;
    this.sessions = datas.sessions;
    console.log("testActivity");
  }
}