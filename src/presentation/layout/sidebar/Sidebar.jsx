import React from 'react';
import { Link } from 'react-router-dom'

import './Sidebar.css'

export default function Sidebar(props) {
    return (
      <>
        <aside className={`sidebar ${props.sidebarOpened ? "open": "closed"}`}>
          <div className="profile">
          <button className="toggle" onClick={props.toggleSidebar}>
        <i className={`fas ${props.sidebarOpened ? "fa-angle-double-left" : "fa-angle-double-right"}`} />
      </button>
            <a href="/perfil">
              <img src={require("../../assets/imgs/profile.png")} alt="Profile" />
            </a>
            <dl>
              <dt> Lucas Lui Motta </dt>
              {/* <dd> Electronics/Telecommunications Engineer </dd> */}
            </dl>
            <a className="link" href="/perfil" rel="author">
              Visitar perfil
            </a>
          </div>
          <nav className="menu">
            <hr/>
            <span> Internet das Coisas </span>
            <ul>
              <li> <Link to={`/embarcados`}> Página Inicial </Link> </li>
              <li> <Link to={`/embarcados`}> Desenvolvimento de Sofware </Link> </li>
              <li> <Link to={`/embarcados`}> Sistemas Embarcados </Link> </li>
            </ul>
            <hr/>
            <span> Desenvolvimento de Sofware </span>
            <ul>
              <li> <Link to={`/embarcados`}> Página Inicial </Link> </li>
              <li> <Link to={`/embarcados`}> Desenvolvimento de Sofware </Link> </li>
              <li> <Link to={`/embarcados`}> Sistemas Embarcados </Link> </li>
            </ul>
            <hr/>
            <span> Sistemas Embarcados </span>
            <ul>
              <li> <Link to={`/embarcados`}> Página Inicial </Link> </li>
              <li> <Link to={`/embarcados`}> Desenvolvimento de Sofware </Link> </li>
              <li> <Link to={`/embarcados`}> Sistemas Embarcados </Link> </li>
            </ul>
          </nav>
        </aside>
      </>
    )
}