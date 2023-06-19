import User from "../Classes/User";
import UserActivities from "../Classes/UserActivities";
import UserProgression from "../Classes/UserProgression";
import UserPerformance from "../Classes/UserPerformance";

export async function dataMocked(userId: number): Promise<User> {
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  const userData = await response.json();
  console.log("userData:", userData);
  return new User(userData.data);
}

export async function userActivityMocked(
  userId: number
): Promise<UserActivities> {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
  const userActivityData = await response.json();
  console.log("userActivityData:", userActivityData);
  return new UserActivities(userActivityData.data);
}

export async function userAverageSessionsMocked(
  userId: number
): Promise<UserProgression> {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  const userAverageSessionsData = await response.json();
  console.log("userAverageSessionsData:", userAverageSessionsData);
  return new UserProgression(userAverageSessionsData.data);
}

export async function userPerformanceMocked(
  userId: number
): Promise<UserPerformance> {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  );
  const userPerformanceData = await response.json();
  const { kind, data } = userPerformanceData.data;
  console.log("UserPerformance:", userId, kind, data);
  return new UserPerformance(userId, kind, data);
}
