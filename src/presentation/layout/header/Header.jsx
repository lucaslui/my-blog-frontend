import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header(props) {

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src={require("../../assets/imgs/logo.svg")} alt="Logo" />
        <div className="logo-text">
          <h1> Espaço de Conhecimento em IoT </h1>
          <h2>
            Tendo como objetivo o ensino de Internet das Coisas de forma
            simples, prática e objetiva.
          </h2>
        </div>
      </div>
      <nav className="navbar">
        <NavLink to="/articles" activeClassName="selected">
          <i className="fas fa-home" />
          <span> Início </span>
        </NavLink>
        <NavLink to="/categories" activeClassName="selected">
          <i className="fas fa-book" />
          <span> Categorias </span>
        </NavLink>
        <NavLink to="/projects" activeClassName="selected">
          <i className="fas fa-chart-bar" />
          <span> Projetos </span>
        </NavLink>
        <div className={`about-mobile ${props.sidebarOpened ? 'selected':''}`}>
          <button onClick={props.toggleSidebar}>
            <i className="fas fa-question-circle" />
            <span> Sobre </span>
          </button>
        </div>
        <div className="spacer" />
        <div className="search-mobile">
          <button>
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="search" id="header-search" name="search" />
        </div>
      </nav>
    </header>
  );
}
