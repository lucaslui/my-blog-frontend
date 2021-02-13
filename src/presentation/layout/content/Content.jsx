import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from '../../contents/home/Home'
import Embarcados from '../../contents/embarcados/Embarcados';
import Perfil from '../../contents/perfil/Perfil';

import './Content.css'

export default function Content(props) {
  return (
    <main className="content">
      <Switch>
        <Route path="/" exact > <Redirect to="/home" /> </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/embarcados" exact component={Embarcados} />
        <Route path="/perfil" exact component={Perfil} />
      </Switch>
    </main>
  );
}






