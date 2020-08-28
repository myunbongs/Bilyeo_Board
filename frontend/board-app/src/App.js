import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import "antd/dist/antd.css";
import CustomLayOut from "./containers/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayOut>
            <BaseRouter />
          </CustomLayOut>
        </Router>
      </div>
    );
  }
}

export default App;
