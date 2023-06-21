import React from "react";
import logo from "../../assets/logo.png";
import "./style.scss";

function Nav() {
  return (
    <div className="nav-container">
      <img className="logo-navbar" src={logo} />
      <nav className="navbar">
        <ul className="horizontale-menu">
          <a href="#">
            <li>Accueil</li>
          </a>

          <a href="#">
            <li>Profil</li>
          </a>
          <a href="#">
            <li>Réglage</li>
          </a>
          <a href="#">
            <li>Communauté</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
