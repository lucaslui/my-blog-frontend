import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import axios from 'axios'

import './Home.css'

import PageTitle from '../../components/page-title/PageTitle'
import ArticleCard from '../../components/article-card/ArticleCard'

export default function Home() {

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
    const fetchData = async () => {
      const result = await axios(
        'https://espaco-de-conhecimento-backend.herokuapp.com/api/articles?page=1',
      );
      setArticles(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <PageTitle title="Página Inicial" subtitle="Bem vindo!"></PageTitle>
      <h3> Ultimas Postagens </h3>
      <Link to="/article" className="posts">
        {
          articles.map(article => {
            return (
              <ArticleCard
                key={article.id}
                title={article.title}
                description={article.description}
                content={article.content}
                imageUrl={article.imageUrl}
                userId={article.userId}
                categoryId={article.categoryId}
                createdAt={article.createdAt} />
            )
          })
        }
      </Link>
    </div >
  )
}
