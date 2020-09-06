import React from "react";
import axios from "axios";

class BoardDetail extends React.Component {
  state = {
    board: {},
  };

  componentDidMount() {
    const boardID = this.props.match.params.boardID;
    axios.get("http://127.0.0.1:8000/api/" + String(boardID)).then((res) => {
      this.setState({
        board: res.data,
      });
    });
  }

  render() {
    return (
      <div className="Board">
        <h1>{this.state.board.title}</h1>
        <br />
        <h2>{this.state.board.content}</h2>
      </div>
    );
  }
}

export default BoardDetail;
