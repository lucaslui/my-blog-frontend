import React, { useState, useEffect } from 'react'

import axios from 'axios'

import './Category.css'

import PageTitle from '../../components/page-title/PageTitle'
import CategoryCard from '../../components/category-card/CategoryCard'

export default function Category() {

  const [category, setCategories] = useState([{
    id: "",
    name: "",
    description: "",
    imageUrl: ""
  }]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5050/api/categories?page=1&categoryParentId=603bb03cf134dd2ce7d4f64b',
      );
      setCategories(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="tutorial">
      <PageTitle title="Tutoriais"></PageTitle>
      <section className="categories">
        {
          category.map(category => {
            return (
              <CategoryCard
                key={category.id}
                name={category.name}
                description={category.description}
                imageUrl={category.imageUrl} />
            )
          })
        }
      </section>
    </div >
  )
}
