import React from 'react';

import Profile from '../../assets/imgs/profile.png'
import './Sidebar.css'

export default function Sidebar(props) {
  return (
    <aside className={`sidebar ${props.sidebarOpened ? "open" : "closed"}`}>
      <button className="toggle" onClick={props.toggleSidebar}>
        <i className="fas fa-angle-double-left" />
      </button>
      <div className="profile">
        <a href={process.env.PUBLIC_URL + '/perfil'}> <img src={Profile} alt="Profile" /> </a>
        <span> Lucas Lui Motta </span>
        <a href={process.env.PUBLIC_URL + '/perfil'} rel="author"> Visitar Perfil </a>
      </div>
      <nav className="menu">
        <hr />
        <span> Introdução </span>
        <ul>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Do que se trata? </a> </li>
        </ul>
        <hr />
        <span> Internet das Coisas </span>
        <ul>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Arquiteturas </a> </li>
        </ul>
        <hr />
        <span> Desenvolvimento de Sofware </span>
        <ul>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Arquitetura de Software </a> </li>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Linguagem Javascript e Python </a> </li>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Design de Software </a> </li>
        </ul>
        <hr />
        <span> Sistemas Embarcados </span>
        <ul>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Hardware e Software </a> </li>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Linguagem C e C++ </a> </li>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Controlando Periféricos </a> </li>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> Processo de Depuração </a> </li>
        </ul>
      </nav>
    </aside>
  )
}