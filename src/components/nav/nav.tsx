import React from "react";
import logo from "../../assets/logo.png";
import "./style.scss";

function Nav() {
  return (
    <div className="nav-container">
      <img className="logo-navbar" src={logo} />
      <nav className="navbar">
        <ul className="horizontale-menu">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
