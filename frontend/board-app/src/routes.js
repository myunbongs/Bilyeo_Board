import React from "react";
import { Route } from "react-router-dom";
import BoardList from "./containers/BoardListView";
import BoardDetail from "./containers/BoardDetailView";
import SignUp from "./containers/SignUp";
import LoginForm from "./containers/LoginForm";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={BoardList} />
    <Route exact path="/:boardID" component={BoardDetail} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signup" component={SignUp} />
  </div>
);

export default BaseRouter;
