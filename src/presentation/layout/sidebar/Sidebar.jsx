import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Sidebar.css'

// import Profile from '../../assets/imgs/profile.png'
import env from '../../config/env'

export default function Sidebar(props) {

  const [authorProfile, setAuthorProfile] = useState({
    nickname: '',
    occupation: '',
    region: '',
    about: '',
    interests: '',
    contact: '',
    website: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        env.api + '/api/users/603a537aa65a6932d7f7cf0e',
      );
      setAuthorProfile(result.data);
    };
    fetchData();
  }, []);

  return (
    <aside className={`sidebar ${props.sidebarOpened ? "open" : "closed"}`}>
      <button className="toggle" onClick={props.toggleSidebar}>
        <i className="fas fa-angle-double-left" />
      </button>
      <div className="profile">
        <a rel="author" href={process.env.PUBLIC_URL + '/perfil'}>
          <div className="profile-image" />
        </a>
        <address className="author"> {authorProfile.nickname} </address> 
        <a rel="author" href={process.env.PUBLIC_URL + '/perfil'}> Visitar Perfil </a>
      </div>
      <nav className="menu">
        <hr />
        <span> Nome </span>
        <ul>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> {authorProfile.occupation} </a> </li>
        </ul>
        <hr />
        <span> Sobre </span>
        <ul>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> {authorProfile.about} </a> </li>
        </ul>
        <hr />
        <span> Desenvolvimento de Sofware </span>
        <ul>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> {authorProfile.interests} </a> </li>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> {authorProfile.contact} </a> </li>
          <li> <a href={process.env.PUBLIC_URL + '/embarcados'}> {authorProfile.website} </a> </li>
        </ul>
        <hr />
      </nav>
    </aside>
  )
}