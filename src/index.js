import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topics";
import  "./index.css"
const BasicExample = () =>
  <Router>
    <div id="d1">
      <ul id="l1">
     
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <div id="circle"></div>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>;

render(<BasicExample />, document.getElementById("root"));
