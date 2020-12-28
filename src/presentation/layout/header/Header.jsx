import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1> Espaço de Conhecimento em IoT </h1>
      <h2>
        Tendo como objetivo o ensino de projetos em Internet das Coisas de forma
        simples, prática e objetiva.
      </h2>
      <nav className="nav-links desktop">
        <ul>
          <li>
            <a href={process.env.PUBLIC_URL + '/home'}>
              <i className="fas fa-home" />
              <span> Página Inicial </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/embarcados'}>
              <i className="fas fa-chess-pawn" />
              <span> Projetos Básicos </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/embarcados'}>
              <i className="fas fa-chess-knight" />
              <span> Projetos Intermediários </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/embarcados'}>
              <i className="fas fa-chess-king" />
              <span> Projetos Complexos </span>
            </a>
          </li>
        </ul>
        <div className="spacer"></div>
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="text" />
        </div>
      </nav>
      <nav className="nav-links mobile">
        <ul>
          <li>
            <a href={process.env.PUBLIC_URL + '/home'}>
              <i className="fas fa-home" />
              <span> Home </span>
            </a>
          </li>
          <li>
            <button onClick={props.toggleSidebar}>
              <i className="fas fa-book" />
              <span> Tutoriais </span>
            </button>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/embarcados'}>
              <i className="fas fa-chart-bar" />
              <span> Projetos </span>
            </a>
          </li>
          <li>
            <button onClick={props.toggleSidebar}>
              <i className="fas fa-search" />
              <span> Buscar </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
