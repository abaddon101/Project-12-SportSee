import React from "react";

import muscu from "../../assets/muscu.png";
import swim from "../../assets/swim.png";
import velo from "../../assets/velo.png";
import zen from "../../assets/zen.png";
import { Link } from "react-router-dom";
import "./style.scss";

function SideBar() {
  return (
    <aside className="sidebar">
      <nav className="vertical-menu">
        <Link to="/dashboard/12">Karl</Link>
        <Link to="/dashboard/18">Cécilia</Link>
        <a href="#">
          <img className="logo-navbar" src={zen} />
        </a>
        <a href="#">
          <img className="logo-navbar" src={swim} />
        </a>
        <a href="#">
          <img className="logo-navbar" src={velo} />
        </a>
        <a href="#">
          <img className="logo-navbar" src={muscu} />
        </a>
      </nav>
      <p className="copyright">Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default SideBar;
