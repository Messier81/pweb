import React from "react";
import "./App.css";
import Front from "./comps/Front";
import Nav from "./comps/Nav";
import Contact from "./comps/Contact";
import Projects from "./comps/Projects";
import GraphTester from "./comps/gtest/GraphTester";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Front} />
          <Route path="/pweb/" exact component={Front} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/gtest" component={GraphTester} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
