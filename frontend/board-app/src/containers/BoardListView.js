import React from "react";
import axios from "axios";
import CustomForm from "../components/Form";
import { Link } from "react-router-dom";

class BoardList extends React.Component {
  state = {
    board: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        board: res.data,
      });
    });
  }

  render() {
    const boardID = this.props.match.params.boardID;
    return (
      <div>
        <CustomForm />
        {this.state.board.map((item) => (
          <div key={item.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={{ pathname: "/" + boardID }}
            >
              <h1>title: {item.title}</h1>
            </Link>
            <h3>id: {item.id}</h3>
            <span>content: {item.content}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default BoardList;
