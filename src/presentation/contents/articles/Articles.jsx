import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

import axios from 'axios'

import './Articles.css'

import PageTitle from '../../components/page-title/PageTitle'
import Pagination from '../../components/pagination/Pagination'
import ArticleCard from '../../components/article-card/ArticleCard'

export default function Articles() {

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

  let location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://espaco-de-conhecimento-backend.herokuapp.com/api/articles${location.search}`,
      );
      setArticles(result.data);
    };
    fetchData();
  }, [location]);

  return (
    <>
      <PageTitle title="Página Inicial" subtitle="Bem vindo!"/>
      <Pagination itemsCount={articles.length} pageSize={2} currentPage={1} />
      <div className="articles-grid">
        {
          articles.map(article => {
            return (
              <Link key={article.id} to={`/article?articleId=${article.id}`}>
                <ArticleCard
                  title={article.title}
                  description={article.description}
                  content={article.content}
                  imageUrl={article.imageUrl}
                  userId={article.userId}
                  categoryId={article.categoryId}
                  createdAt={article.createdAt} />
              </Link>
            )
          })
        }
      </div>
    </>
  )
}
