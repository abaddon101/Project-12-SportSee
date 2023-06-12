import React from "react";
import Dashboard from "../components/dashboard/dashboardComponents/dashboard-Parent/Dashboard";
import Nav from "../components/nav/nav";
import SideBar from "../components/sidebar/sidebar";

import "./home.scss";

function Home() {
  return (
    <div>
      <Nav />
      <div id="main">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
