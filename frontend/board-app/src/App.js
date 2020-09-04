import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import CustomLayOut from "./containers/Layout";
import CustomForm from "./components/Form";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayOut>
            <BaseRouter />
            <CustomForm />
          </CustomLayOut>
        </Router>
      </div>
    );
  }
}

export default App;
