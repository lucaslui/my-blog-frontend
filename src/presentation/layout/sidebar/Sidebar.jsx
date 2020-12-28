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
        <a href="/perfil"> <img src={Profile} alt="Profile" /> </a>
        <span> Lucas Lui Motta </span>
        <a href="/perfil" rel="author"> Visitar Perfil </a>
      </div>
      <nav className="menu">
        <hr />
        <span> Internet das Coisas </span>
        <ul>
          <li> <a href={`/embarcados`}> Do que se trata? </a> </li>
          <li> <a href={`/embarcados`}> Quais são possibilidades? </a> </li>
          <li> <a href={`/embarcados`}> Como começar? </a> </li>
        </ul>
        <hr />
        <span> Desenvolvimento de Sofware </span>
        <ul>
          <li> <a href={`/embarcados`}> Arquitetura de Software </a> </li>
          <li> <a href={`/embarcados`}> Design de Software </a> </li>
        </ul>
        <hr />
        <span> Sistemas Embarcados </span>
        <ul>
          <li> <a href={`/embarcados`}> Hardware e Software </a> </li>
          <li> <a href={`/embarcados`}> Linguagem C e C++ </a> </li>
          <li> <a href={`/embarcados`}> Controlando Periféricos </a> </li>
          <li> <a href={`/embarcados`}> Processo de Depuração </a> </li>
        </ul>
      </nav>
    </aside>
  )
}