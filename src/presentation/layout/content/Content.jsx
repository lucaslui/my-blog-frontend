import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from '../../contents/home/Home'
import Embarcados from '../../contents/embarcados/Embarcados';

import './Content.css'

export default function Content(props) {
  return (
    <section className="content">
      <Switch>
        <Route path="/" exact > <Redirect to="/home" /> </Route>
        <Route path="/home" exact component={Home} /> 
        <Route path="/embarcados" exact component={Embarcados} />         
      </Switch> 
    </section>
  );
}






