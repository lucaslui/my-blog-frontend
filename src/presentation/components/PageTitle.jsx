import React from 'react'

import './css/PageTitle.css'

export default function PageTitle(props) {
  return (
    <div className="page-title">
      <h1><i className={props.icon ? props.icon : ""}></i> {props.title}</h1>
      <h2> {props.subtitle}</h2>
      <hr />
    </div>
  )
}
