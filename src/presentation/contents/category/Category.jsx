import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import axios from 'axios'

import './Category.css'

import PageTitle from '../../components/page-title/PageTitle'

export default function Category() {

  const [articles, setArticles] = useState([{}]);

  let location = useLocation();

  useEffect(() => {
    console.log(location)
    const fetchData = async () => {
      const result = await axios(
        `https://espaco-de-conhecimento-backend.herokuapp.com/api/categories${location.search}`,
      );
      setArticles(result.data);
    };
    fetchData();
  }, [location]);

  return (
    <div className="article">
      <PageTitle
        title={(Array.isArray(articles) && articles.length) ? articles[0].title : 'Não encontrado'}
        subtitle={articles[0].description} />
      {articles[0].content}
    </div >
  )
}
