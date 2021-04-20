import React from "react";
import { Route, Switch } from "react-router";
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
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/connect">
        <Connect />
      </Route>
    </Switch>
  </div>
);
