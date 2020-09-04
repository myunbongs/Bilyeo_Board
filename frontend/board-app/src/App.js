import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
<<<<<<< HEAD
import CustomLayOut from "./containers/Layout";
import CustomForm from "./components/Form";
import Board from "./components/Board";
=======
import "antd/dist/antd.css";
import CustomLayOut from "./containers/Layout";
>>>>>>> 15363c02054cce74c75468a98089bbb43e67b475

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayOut>
            <BaseRouter />
<<<<<<< HEAD
            {/* <CustomForm /> */}
=======
>>>>>>> 15363c02054cce74c75468a98089bbb43e67b475
          </CustomLayOut>
        </Router>
      </div>
    );
  }
}

export default App;
