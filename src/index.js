import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components";
import {
  Home,
  About,
  Genres,
  SingleGenre,
  SingleMovie,
  SingleSeries,
  NotFound,
} from "./pages";

import "./index.css";
ReactDom.render(
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/genres" component={Genres} />

        <Route path="/genres/:genreID" component={SingleGenre} />
        <Route path="/movies/:movieURL" component={SingleMovie} />
        <Route path="/series/:seriesURL" component={SingleSeries} />

        {/* Keep it the Last Route */}
        <Route path="/404" component={NotFound} />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById("root")
);
