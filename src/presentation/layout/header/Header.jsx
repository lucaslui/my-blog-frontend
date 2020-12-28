import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="title">
        <h1> Espaço de Conhecimento em IoT </h1>
        <h2>
          Tendo como objetivo o ensino de projetos em Internet das Coisas de forma
          simples, prática e objetiva.
        </h2>
        <nav className="nav-links">
          <button className="toggle" onClick={props.toggleSidebar}>
            <i className="fas fa-angle-double-right" />
          </button>
          <ul>
            <li> <a href="/home"> Página Inicial </a> </li>
            <li> <a href="/embarcados"> Projetos Básicos </a> </li>
            <li> <a href="/main/admin"> Projetos Intermidários </a> </li>
            <li> <a href="/main/admin"> Projetos Complexos </a> </li>
          </ul>
          <button className="search-inside" onClick={props.toggleSidebar}>
            <i className="fas fa-search"></i>
          </button>
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
