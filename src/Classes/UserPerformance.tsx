export default class UserPerformance {
  userId: number;
  kind: { [key: number]: string };
  data: { value: number; kind: number }[];

  constructor(userId: number, kind: { [key: number]: string }, data: { value: number; kind: number }[]) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}