import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Article from '../../contents/article/Article';
import Articles from '../../contents/articles/Articles';
import Profile from '../../contents/profile/Profile';
import Categories from '../../contents/categories/Categories';

import './Content.css'

export default function Content(props) {
  return (
    <main className="content">
      <Switch>
        <Route path="/" exact > <Redirect to="/articles" /> </Route>
        <Route path="/articles" exact render={props => <Articles {...props} />} />
        <Route path="/article" exact render={props => <Article {...props} />} />
        <Route path="/categories" exact render={props => <Categories {...props} />} />
        <Route path="/profile" exact render={props => <Profile {...props} />} />
      </Switch>
    </main>
  );
}






