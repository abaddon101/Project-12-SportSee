import User from "../Classes/User";
import UserActivities from "../Classes/UserActivities";
import UserProgression from "../Classes/UserProgression";
import UserPerformance from "../Classes/UserPerformance";

// Fausse données pour tester l'intégration des différentes recharts
// Fonction asynchrone qui simule la récupération des données d'un utilisateur en utilisant une promesse
// La fonction prend un identifiant d'utilisateur en paramètre
export async function dataMocked(userId: number) {
  // console.log("début");
  // crée une new promise qui est résolue avec un objet de type 'user'
  // elle prend en compte deux fonctions de rappel, resolve et reject
  return new Promise<User>((resolve, reject) => {
    // setTimeOut simule une attente de 500ms avant de résoudre la promesse
    setTimeout(() => {
      // Un objet contenant des données fictives d'utilisateurs
      const usersDatas = {
        12: {
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
        },
        18: {
          id: 18,
          userInfos: {
            firstName: "Cecilia",
            lastName: "Ratorez",
            age: 34,
          },
          todayScore: 0.3,
          keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120,
          },
        },
      } as any;
      if (usersDatas[userId]) {
        // Si l'identifiant d'utilisateur existe dans les données fictives, résoudre la promesse avec ces données
        resolve(usersDatas[userId]);
      } else {
        // Sinon, rejeter la promesse avec un message d'erreur
        reject("erreur");
      }
      // console.log("test2");
    }, 500);

    // ajoute un gestionnaire de promise qui est exécuté quand la promesse est résolue avec succès
    // ce gestionnaire prend les données de l'utilisateur résolues 'userDatas' en tant que paramètre
  }).then((userDatas: any) => {
    // le return crée une nouvelle instance de classe 'user' en utilisant les données de l'utilisateur résolue 'userDatas'
    // et la retourne
    return new User(userDatas);
  });
}
// Fonction asynchrone qui simule la récupération des activités d'un utilisateur en utilisant une promesse
export async function userActivityMocked(userId: number) {
  return new Promise<UserActivities>((resolve, reject) => {
    setTimeout(() => {
      // Un objet contenant des données fictives d'activités d'utilisateurs
      const usersDatas = {
        12: {
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
        },
        18: {
          userId: 18,
          sessions: [
            {
              day: "2020-07-01",
              kilogram: 70,
              calories: 240,
            },
            {
              day: "2020-07-02",
              kilogram: 69,
              calories: 220,
            },
            {
              day: "2020-07-03",
              kilogram: 70,
              calories: 280,
            },
            {
              day: "2020-07-04",
              kilogram: 70,
              calories: 500,
            },
            {
              day: "2020-07-05",
              kilogram: 69,
              calories: 160,
            },
            {
              day: "2020-07-06",
              kilogram: 69,
              calories: 162,
            },
            {
              day: "2020-07-07",
              kilogram: 69,
              calories: 390,
            },
          ],
        },
      } as any;
      if (usersDatas[userId]) {
        // Si l'identifiant d'utilisateur existe dans les données fictives, résoudre la promesse avec ces données
        resolve(usersDatas[userId]);
      } else {
        // Sinon, rejeter la promesse avec un message d'erreur
        reject("erreur");
      }
    }, 500);
  });
}
// Fonction qui simule la récupération de la progression moyenne d'un utilisateur en utilisant une promesse
export async function userAverageSessionsMocked(userId: number) {
  return new Promise<UserProgression>((resolve, reject) => {
    setTimeout(() => {
      // Un objet contenant des données fictives de progression moyenne d'un utilisateur
      const usersDatas = {
        12: {
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
        18: {
          userId: 18,
          sessions: [
            {
              day: 1,
              sessionLength: 30,
            },
            {
              day: 2,
              sessionLength: 40,
            },
            {
              day: 3,
              sessionLength: 50,
            },
            {
              day: 4,
              sessionLength: 30,
            },
            {
              day: 5,
              sessionLength: 30,
            },
            {
              day: 6,
              sessionLength: 50,
            },
            {
              day: 7,
              sessionLength: 50,
            },
          ],
        },
      } as any;
      if (usersDatas[userId]) {
        // Si l'identifiant d'utilisateur existe dans les données fictives, résoudre la promesse avec ces données
        resolve(usersDatas[userId]);
      } else {
        // Sinon, rejeter la promesse avec un message d'erreur
        reject("erreur");
      }
    }, 500);
  });
}
// Fonction qui simule la récupération des performances d'un utilisateur en utilisant une promesse
export async function userPerformanceMocked(userId: number) {
  return new Promise<UserPerformance[]>((resolve, reject) => {
    setTimeout(() => {
      const performanceData = {
        12: {
          userId: 12,
          kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity",
          },
          data: [
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
          ],
        },
        18: {
          userId: 18,
          kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity",
          },
          data: [
            {
              value: 200,
              kind: 1,
            },
            {
              value: 240,
              kind: 2,
            },
            {
              value: 80,
              kind: 3,
            },
            {
              value: 80,
              kind: 4,
            },
            {
              value: 220,
              kind: 5,
            },
            {
              value: 110,
              kind: 6,
            },
          ],
        },
      } as any;
      if (performanceData[userId]) {
        resolve(performanceData[userId]);
      } else {
        // Sinon, rejeter la promesse avec un message d'erreur
        reject("erreur");
      }
    }, 500);
  });
}
