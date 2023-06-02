import User from "../Classes/User";
import UserActivities from "../Classes/UserActivities";
import UserProgression from "../Classes/UserProgression";
import UserPerformance from "../Classes/UserPerformance";

// Fausse données pour tester l'intégration des différentes recharts
export async function dataMocked(userId: number) {
  // console.log("début");
  // crée une new promise qui est résolue avec un objet de type 'user'
  // elle prend en compte deux fonctions de rappel, resolve et reject
  return new Promise<User>((resolve, reject) => {
    // setTimeOut simule une attente de 500ms avant de résoudre la promesse
    setTimeout(() => {
      // console.log("test2");
      // apelle la fonction resolve pour résoudre la promesse avec un objet qui représente les données
      // d'un utilisateur. Cet objet contient des propriétés tel que 'id', 'userInfos', 'todayScore' et 'keyData'
      // avec des valeurs spécifiques pour chaque propriété
      resolve({
        id: 12,
        userInfos: {
          firstName: "Karl",
          lastName: "Dovineau",
          age: 31,
        },
        todayScore: 0.12,
        keyData: {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50,
        },
      });
    }, 500);

    // ajoute un gestionnaire de promise qui est exécuté quand la promesse est résolue avec succès
    // ce gestionnaire prend les données de l'utilisateur résolues 'userDatas' en tant que paramètre
  }).then((userDatas: any) => {
    // le return crée une nouvelle instance de classe 'user' en utilisant les données de l'utilisateur résolue 'userDatas'
    // et la retourne
    return new User(userDatas);
  });
}
export async function userActivityMocked() {
  return new Promise<UserActivities>((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new UserActivities({
          userId: 12,
          sessions: [
            {
              day: "2020-07-01",
              kilogram: 80,
              calories: 240,
            },
            {
              day: "2020-07-02",
              kilogram: 80,
              calories: 220,
            },
            {
              day: "2020-07-03",
              kilogram: 81,
              calories: 280,
            },
            {
              day: "2020-07-04",
              kilogram: 81,
              calories: 290,
            },
            {
              day: "2020-07-05",
              kilogram: 80,
              calories: 160,
            },
            {
              day: "2020-07-06",
              kilogram: 78,
              calories: 162,
            },
            {
              day: "2020-07-07",
              kilogram: 76,
              calories: 390,
            },
          ],
        })
      );
    }, 500);
  });
}

export function userAverageSessionsMocked() {
  return new Promise<UserProgression[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          userId: 12,
          sessions: [
            {
              day: 1,
              sessionLength: 30,
            },
            {
              day: 2,
              sessionLength: 23,
            },
            {
              day: 3,
              sessionLength: 45,
            },
            {
              day: 4,
              sessionLength: 50,
            },
            {
              day: 5,
              sessionLength: 0,
            },
            {
              day: 6,
              sessionLength: 0,
            },
            {
              day: 7,
              sessionLength: 60,
            },
          ],
        },
      ]);
    }, 500);
  });
}

export function userPerformanceMocked() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const performanceData: UserPerformance | null = new UserPerformance(
        12,
        {
          1: "cardio",
          2: "energy",
          3: "endurance",
          4: "strength",
          5: "speed",
          6: "intensity",
        },
        [
          {
            value: 80,
            kind: 1,
          },
          {
            value: 120,
            kind: 2,
          },
          {
            value: 140,
            kind: 3,
          },
          {
            value: 50,
            kind: 4,
          },
          {
            value: 200,
            kind: 5,
          },
          {
            value: 90,
            kind: 6,
          },
        ]
      );

      resolve(performanceData);
    }, 500);
  });
}
