import React from "react";
import { Route, Redirect, Switch } from "react-router";
import Home from "../src/components/Home";
import Projects from "../src/components/Projects";
import About from "../src/components/About";
import Connect from "../src/components/Connect";

export default (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect from="/" exact to="/home" />
      <Route path="/dev-portfolio/about">
        <About />
      </Route>
      <Route path="/dev-portfolio/projects">
        <Projects />
      </Route>
      <Route path="/dev-portfolio/connect">
        <Connect />
      </Route>
    </Switch>
    ;
  </div>
);
