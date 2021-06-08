import React, { useState, useEffect } from 'react'

import axios from 'axios'

import "./ArticleCard.css";

export default function ArticleCard(props) {

  const [profile, setProfile] = useState([{
    nickname: "",
    occupation: "",
    region: "",
    about: "",
    interests: "",
    contact: "",
    website: ""
  }]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://espaco-de-conhecimento-backend.herokuapp.com/api/users/603a537aa65a6932d7f7cf0e`,
      );
      setProfile(result.data);
    };
    fetchData();
  }, []);

  const getDateFormat = (date) => {
    const ISODate = new Date(date);
    let month = ISODate.getMonth() + 1
    return ISODate.getDate() + '-' + (month < 10 ? '0' + month : '' + month) + '-' + ISODate.getFullYear();
  }

  return (
    <div className="article-card">
      <img src={props.imageUrl} alt='Imagem do Artigo' />
      <div className="article-content">
        <h4>{props.title}</h4>
        <span>{props.description}</span>
      </div>
      <div className="article-foot">
        <div>
          <i className="far fa-calendar-alt" />
          <span>{getDateFormat(props.createdAt)}</span>
        </div>
        <div>
          <i className="fas fa-user-edit" />
          <span>{profile.nickname}</span>
        </div>
      </div>
    </div>
  );
};
