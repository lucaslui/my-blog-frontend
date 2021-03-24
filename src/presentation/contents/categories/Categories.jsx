import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from "react-router-dom";

import axios from 'axios'

import './Categories.css'

import PageTitle from '../../components/page-title/PageTitle'
import CategoryCard from '../../components/category-card/CategoryCard'

export default function Categories() {

  const [categories, setCategories] = useState([{
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    categoryParentId: "",
    children: []
  }]);

  let location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://espaco-de-conhecimento-backend.herokuapp.com/api/categories/tree${location.search}`,
      );
      setCategories(result.data);
    };
    fetchData();
  }, [location]);

  return (
    <>
      <PageTitle title="Categorias" subtitle="Taxonomia do Conhecimento em Internet das Coisas"/>
      <div className="categories-grid">
        {
          categories.map((category, index) => {
            return (
              <Link key={index} to={(Array.isArray(category.children) && category.children.length) ? `/categories?categoryId=${category.id}` : `/articles?categoryId=${category.id}`}>
                <CategoryCard
                  name={category.name}
                  description={category.description}
                  imageUrl={category.imageUrl} />
              </Link>
            )
          })
        }
      </div>
    </>
  )
}