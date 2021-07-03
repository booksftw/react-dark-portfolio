import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import WelcomeText from "./components/WelcomeText";
import WelcomeImage from "./components/WelcomeImage";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ClickAnywhere from "./components/ClickAnywhere";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <WelcomeText />
          <WelcomeImage />
          <ClickAnywhere />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
