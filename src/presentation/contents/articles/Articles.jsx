import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

import axios from 'axios'

import './Articles.css'

import Pagination from '../../components/pagination/Pagination'
import PageTitle from '../../components/page-title/PageTitle'
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
    console.log(location)
    const fetchData = async () => {
      const result = await axios(
        `${process.env.PUBLIC_URL}/api/articles${location.search}`,
      );
      setArticles(result.data);
    };
    fetchData();
  }, [location]);

  return (
    <div className="articles-grid">
      <PageTitle title="Página Inicial" subtitle="Bem vindo!"></PageTitle>
      <Pagination
        itemsCount={articles.length}
        pageSize={2}
        currentPage={1}
      />
      <div className="posts">
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
    </div >
  )
}
