import React from 'react'

import PageTitle from '../../components/PageTitle'

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <PageTitle title="Dashboard" subtitle="Área Geral" icon="fa fa-home"/>
      <img className="home-image" src={require("../../assets/imgs/home.jpg")} alt="Welcome" />
      <img className="home-image" src={require("../../assets/imgs/home.jpg")} alt="Welcome" />
      <img className="home-image" src={require("../../assets/imgs/home.jpg")} alt="Welcome" />
      <img className="home-image" src={require("../../assets/imgs/home.jpg")} alt="Welcome" />
      <img className="home-image" src={require("../../assets/imgs/home.jpg")} alt="Welcome" />
      <main>
        <h3 className="title"> Ultimas Postagens </h3>
      </main>
    </div>
  )
}