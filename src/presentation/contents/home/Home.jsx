import React from 'react'

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <img src={require("../../assets/imgs/home.jpg")} alt="Welcome" />
      <section className="posts">
        <h3> Ultimas Postagens </h3>
      </section>
    </div>
  )
}