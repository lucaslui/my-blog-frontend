import React from "react";

import "./PageTitle.css";

export default function PageTitle(props) {
  return (
    <div className="page-title">
      <h1> {props.title} </h1>
      <p> {props.subtitle} </p>
    </div>
  );
};
