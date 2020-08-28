import React from "react";
import { Route } from "react-router-dom";
import BoardList from "./containers/BoardListView";
import BoardDetail from "./containers/BoardDetailView";
import Login from "./containers/Login";
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={BoardList} />
    <Route exact path="/:boardID" component={BoardDetail} />
    <Route exact path="/login/" component={Login} />
  </div>
);

export default BaseRouter;
