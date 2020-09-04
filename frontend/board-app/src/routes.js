import React from "react";
import { Route } from "react-router-dom";
import BoardList from "./containers/BoardListView";
import BoardDetail from "./containers/BoardDetailView";
import LoginForm from "./containers/LoginForm";
import SignIn from "./containers/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={BoardList} />
    <Route exact path="/:boardID" component={BoardDetail} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signin" component={SignIn} />
  </div>
);

export default BaseRouter;
