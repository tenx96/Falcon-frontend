import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lineup from "./routes/Lineup";

export default function App() {
  return (

    <Router>
      <PrimarySearchAppBar/>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/lineup">
            <Lineup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
