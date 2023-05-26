import React, { useState, useEffect } from "react";
import Welcome from "../welcome-container/Welcome";
import Activities from "../activities-container/Activities";
// import Nutrition from "../nutrition-container/Nutrition";
import Progression from "../progression-container/Progression";
import "./style.scss";
import { dataMocked } from "../../../../Api/datamocked";
import User from "../../../../Classes/User";

// gérer le choix de l'id à ce niveau
function Dashboard() {
  // const userData = dataMocked(12);

  // UseState
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    dataMocked(12).then((user: User) => {
      setUser(user);
    });
  }, []);
  //
  console.log(user);

  return (
    <div className="dashboard">
      <section className="dashboard-principal">
        {user != null && <Welcome user={user} />}
        <Activities />
        <Progression />
      </section>
      <section className="dashboard-aside">{/* <Nutrition /> */}</section>
    </div>
  );
}

export default Dashboard;
