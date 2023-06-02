import React, { useState, useEffect } from "react";
import Welcome from "../welcome-container/Welcome";
import Activities from "../activities-container/Activities";
import Average from "../progression-container/average-duration-session/Average";
import Spider from "../progression-container/Spider/Spider";
import Score from "../progression-container/Score/Score";

import "./style.scss";
import {
  dataMocked,
  userActivityMocked,
  userAverageSessionsMocked,
  userPerformanceMocked,
} from "../../../../Api/datamocked";
import User from "../../../../Classes/User";
import UserActivities from "../../../../Classes/UserActivities";
import UserProgression from "../../../../Classes/UserProgression";
import UserPerformance from "../../../../Classes/UserPerformance";

function Dashboard() {
  //useState
  const [user, setUser] = useState<User | null>(null);

  const [userActivities, setUserActivities] = useState<UserActivities | null>(
    null
  );
  const [userProgression, setUserProgression] = useState<
    UserProgression[] | null
  >(null);

  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);

  // useEffect
  useEffect(() => {
    dataMocked(12).then((user: User) => {
      setUser(user);
    });

    userActivityMocked().then((userActivities: UserActivities) => {
      setUserActivities(userActivities);
    });

    userAverageSessionsMocked().then((userProgression: UserProgression[]) => {
      setUserProgression(userProgression);
    });

    userPerformanceMocked().then((performanceData: unknown) => {
      if (performanceData !== null && typeof performanceData === "object") {
        setUserPerformance(performanceData as UserPerformance);
      }
    });
  }, []);

  return (
    <div className="dashboard">
      <section className="dashboard-principal">
        {user != null && <Welcome user={user} />}
        {userActivities != null && (
          <Activities userActivities={userActivities} />
        )}
        <div className="progression-containers">
          {userProgression != null && (
            <Average userProgression={userProgression[0]} />
          )}
          {userPerformance && <Spider data={userPerformance.data} />}
          <Score />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
