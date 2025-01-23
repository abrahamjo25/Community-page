import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { PostDetail } from "../components/PostDetail";

const PageRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetail} />
      </Switch>
    </Router>
  );
};

export default PageRoutes;
