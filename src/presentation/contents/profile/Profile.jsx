import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PageTitle from '../../components/page-title/PageTitle'

import env from '../../config/env'
import './Profile.css'

export default function Profile() {

  const [profile, setProfile] = useState({
    nickname: '',
    occupation: '',
    region: '',
    about: '',
    interests: '',
    contact: '',
    website: '',
  });

  const [articles, setArticles] = useState([{
    id: "",
    title: "",
    description: "",
    content: "",
    imageUrl: "",
    userId: "",
    categoryId: "",
    createdAt: ""
  }]);

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await axios(
        `${env.api}/api/users/603a537aa65a6932d7f7cf0e`,
      );
      setProfile(result.data);
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios(
        `${env.api}/api/articles?userId=603a537aa65a6932d7f7cf0e`,
      );
      setArticles(result.data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="perfil">
      <PageTitle title="Perfil do Autor"></PageTitle>
      <h2> Sobre: </h2>
      <p> {profile.about}</p>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <a href={article.title}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}