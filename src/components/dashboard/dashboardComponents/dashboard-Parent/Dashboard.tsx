import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Welcome from "../welcome-container/Welcome";
import Activities from "../activities-container/Activities";
import Average from "../progression-container/average-duration-session/Average";
import Spider from "../progression-container/Spider/Spider";
import Score from "../progression-container/Score/Score";
import Calories from "../nutrition-container/Calories";
import Proteines from "../nutrition-container/Proteines";
import Glucides from "../nutrition-container/Glucides";
import Lipides from "../nutrition-container/Lipides";

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
  const { id } = useParams<{ id?: string }>();

  // useState
  const [user, setUser] = useState<User | null>(null);
  const [userActivities, setUserActivities] = useState<UserActivities | null>(
    null
  );
  const [userProgression, setUserProgression] =
    useState<UserProgression | null>(null);
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);

  // useEffect
  useEffect(() => {
    if (id) {
      const userId = parseInt(id);
      dataMocked(userId).then((user: User) => {
        setUser(user);
      });
      userActivityMocked(userId).then((userActivities: UserActivities) => {
        setUserActivities(userActivities);
      });
      userAverageSessionsMocked().then((userProgression: UserProgression) => {
        setUserProgression(userProgression);
      });
      userPerformanceMocked().then((performanceData: unknown) => {
        if (performanceData !== null && typeof performanceData === "object") {
          setUserPerformance(performanceData as UserPerformance);
        }
      });
    }
  }, [id]);

  return (
    <div className="dashboard">
      <section className="dashboard-principal">
        {user != null && <Welcome user={user} />}
        {userActivities != null && (
          <Activities userActivities={userActivities} />
        )}
        <div className="progression-container">
          {userProgression != null && (
            <Average userProgression={userProgression} />
          )}
          {userPerformance != null && <Spider data={userPerformance.data} />}

          {user != null && <Score user={user} />}
        </div>
      </section>
      <aside>
        {user != null && <Calories user={user} />}
        {user != null && <Proteines user={user} />}
        {user != null && <Glucides user={user} />}
        {user != null && <Lipides user={user} />}
      </aside>
    </div>
  );
}

export default Dashboard;
