import React from "react";
import Welcome from "../welcome-container/Welcome";
import Activities from "../activities-container/Activities";
import Nutrition from "../nutrition-container/Nutrition";
import Progression from "../progression-container/Progression";
import "./style.scss";
function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard-principal">
        <Welcome />
        <Activities />
        <Progression />
      </section>
      <section className="dashboard-aside">
        <Nutrition />
      </section>
    </div>
  );
}

export default Dashboard;
