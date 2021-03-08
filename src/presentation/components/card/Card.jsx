import React from "react";

import "./Card.css";

export default function Card(props) {

  return (
    <div className="card">
      <div className="content">
        {props.children}
      </div>
      <div className="title">{props.titulo}</div>
    </div>
  );
};
