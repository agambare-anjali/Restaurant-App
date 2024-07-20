import "./App.css";
import React, { Fragment } from "react";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routesArray = [
  {
    component: Home,
    path: "/home",
  },
  {
    component: Home,
    path: "/",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: routesArray,
    };
  }

  renderRoutes = (routes) => {
    return (routes || []).map((route, index) => {
      return (
        <Route key={index} path={route.path} element={<route.component />} />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>{this.renderRoutes(this.state.routes)}</Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
