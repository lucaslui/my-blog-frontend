import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1> Espaço de Conhecimento em IoT </h1>
      <h2>
        Tendo como objetivo o ensino de Internet das Coisas de forma
        simples, prática e objetiva.
      </h2>
      <nav className="navbar desktop">
        <ul>
          <li>
            <a href={process.env.PUBLIC_URL + '/home'}>
              <span> Página Inicial </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/embarcados'}>
              <span> Projetos Básicos </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/embarcados'}>
              <span> Projetos Intermediários </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/embarcados'}>
              <span> Projetos Complexos </span>
            </a>
          </li>
        </ul>
        <div className="spacer"/>
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="search" id="header-search" name="search"/>
        </div>
      </nav>
      <nav className="navbar mobile">
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
