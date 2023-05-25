import React from "react";
import SideBar from "../sidebar/sidebar";
import Dashboard from "../dashboard/Dashboard";
import "./style.scss";

function Main() {
  return (
    <div id="main">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default Main;
