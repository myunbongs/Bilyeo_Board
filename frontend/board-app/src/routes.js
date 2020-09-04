import React from "react";
import { Route } from "react-router-dom";
import BoardList from "./containers/BoardListView";
import BoardDetail from "./containers/BoardDetailView";
<<<<<<< HEAD

import LoginForm from "./containers/LoginForm";
import SignIn from "./containers/Signup";

=======
import Login from "./containers/Login";
>>>>>>> 15363c02054cce74c75468a98089bbb43e67b475
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={BoardList} />
    <Route exact path="/:boardID" component={BoardDetail} />
<<<<<<< HEAD
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signin" component={SignIn} />
=======
    <Route exact path="/login/" component={Login} />
>>>>>>> 15363c02054cce74c75468a98089bbb43e67b475
  </div>
);

export default BaseRouter;
