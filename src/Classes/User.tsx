export default class User {
  public id: number;
  public userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  public todayScore: number;
  public keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
  constructor(datas: any) {
    this.id = datas.id;
    this.userInfos = datas.userInfos;
    this.todayScore = datas.todayScore;
    this.keyData = datas.keyData;
    console.log("test");
  }
}
