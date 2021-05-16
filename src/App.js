import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Consoles from "./components/Consoles";
import Lookup from "./components/Lookup";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/consoles" component={Consoles} />
        <Route path="/lookup" component={Lookup} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
