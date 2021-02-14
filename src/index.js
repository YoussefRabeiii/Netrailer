import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components";
import { Home, About, Genres, SingleGenre, NotFound } from "./pages";

import "./index.css";

// Google Analytics Code
import ReactGA from "react-ga";
ReactGA.initialize("G-5HHE9XXJNE"); // This the New id (Measurement ID not the Universal ID "UA")
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDom.render(
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/genres" component={Genres} />
        <Route path="/genres/:genre" component={SingleGenre} />

        {/* Keep it the Last Route */}
        <Route path="/404" component={NotFound} />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById("root")
);
