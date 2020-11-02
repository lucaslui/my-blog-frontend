import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";

import Header from './components/template/Header'
import Sidebar from './components/template/Sidebar'
import Content from './components/template/Content'
import Footer from './components/template/Footer'

import routes from "./configs/routes.js";

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: true
    };
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/main") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  toggleSidebar = () => {
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };

  render() {
    return (
      <div className={this.state.sidebarOpened ? "app" : "app hide-sidebar"}>
        <Header toggleSidebar={this.toggleSidebar} sidebarOpened={this.state.sidebarOpened}/>
        <Sidebar sidebarOpened={this.state.sidebarOpened}/> 
        <Content>
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/main/home" />
          </Switch>
        </Content>
        <Footer/> 
      </div >
    );
  }
}

export default App;
