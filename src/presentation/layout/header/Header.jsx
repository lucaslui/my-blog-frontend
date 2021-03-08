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
      <nav className="navbar">
        <ul>
          <li className="home">
            <a href={process.env.PUBLIC_URL + '/articles'}>
              <i className="fas fa-home" />
              <span> Início </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/categories'}>
              <i className="fas fa-book" />
              <span> Tutoriais </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/projects'}>
              <i className="fas fa-chart-bar" />
              <span> Projetos </span>
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/projects'}>
              <i className="fas fa-chart-bar" />
              <span> Sobre </span>
            </a>
          </li>
          <div className="spacer" />
          <li className="search-mobile">
            <button onClick={props.toggleSidebar}>
              <i className="fas fa-search" />
            </button>
          </li>
          <div className="search">
            <i className="fas fa-search"></i>
            <input type="search" id="header-search" name="search" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
