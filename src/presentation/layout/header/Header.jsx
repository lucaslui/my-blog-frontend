import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="title">
        <h1> Espaço de conhecimento em internet das coisas </h1>
        <h2>
          Tendo como lema o ensino de projetos em internet das coisas de forma
          simples, prática e objetiva.
        </h2>
        <nav className="nav-links">
          <button onClick={props.toggleSidebar}>
            <i class="fas fa-bars"></i>
          </button>
          <ul>
            <li> <Link to="/embarcados"> Projetos Básicos </Link> </li>
            <li> <Link to="/main/admin"> Projetos Intermidários </Link> </li>
            <li> <Link to="/main/admin"> Projetos Complexos </Link> </li>
            <li>
              <button className="search-inside" onClick={props.toggleSidebar}>
                <i className="fas fa-search"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="spacer"></div>
      <div className="search-outside">
        <button className="search" onClick={props.toggleSidebar}>
          <i className="fas fa-search"></i>
        </button>
        <input type="text" />
      </div>
    </header>
  );
}
