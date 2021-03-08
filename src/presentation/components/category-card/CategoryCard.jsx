import React from 'react'

import "./CategoryCard.css";

export default function CategoryCard(props) {
  return (
    <div className="category-card">
      <img src={props.imageUrl} alt='Imagem do Artigo' />
      <div className="category-foot">
        <span> {props.name}</span>
      </div>
    </div>
  );
};
