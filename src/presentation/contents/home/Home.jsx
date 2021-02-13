import React from 'react'

import './Home.css'

import PageTitle from '../../components/page-title/PageTitle'
import Card from '../../components/card/Card'

export default function Home() {
  return (
    <div className="home">
      <PageTitle title="Página Inicial" subtitle="Bem vindo!"></PageTitle>
      <h3> Ultimas Postagens </h3>
      <section className="posts">
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
        <Card titulo="Titulo">teste</Card>
      </section>
    </div>
  )
}
