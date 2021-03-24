import React, { useState, useEffect } from 'react';

import axios from 'axios';

import SubMenu from "./SubMenu";

import './Sidebar.css'

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
        'https://espaco-de-conhecimento-backend.herokuapp.com/api/users/603a537aa65a6932d7f7cf0e',
      );
      setAuthorProfile(result.data);
    };
    fetchData();
  }, []);


  const [categories, setCategories] = useState([{
    id: "",
    name: "",
    description: "",
    imageUrl: ""
  }]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://espaco-de-conhecimento-backend.herokuapp.com/api/categories/tree',
      );
      setCategories(result.data);
    };
    fetchData();
  }, []);


  return (
    <div className={`sidebar ${props.sidebarOpened ? "open" : "closed"}`}>
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
        {
          categories.map((category, index) => {
            return (
                <SubMenu category={category} key={index} />
            );
          })
        }
      </nav>
    </div >
  )
}