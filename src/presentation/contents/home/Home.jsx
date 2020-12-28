import React from 'react'

import './Home.css'

import Card from '../../components/card/Card'

export default function Home() {
  return (
    <div className="home">
      <img src={require("../../assets/imgs/home.jpg")} alt="Welcome" />
      <h3> Ultimas Postagens </h3>
      <section className="posts">
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
        <Card titulo="Titulo">
          teste
        </Card>
      </section>
    </div>
  )
}