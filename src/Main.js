import React from "react";
import { Switch, Route } from "react-router-dom";
import Todo from "./Todo";
import Home from "./Home";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </main>
  );
};

export default Main;
