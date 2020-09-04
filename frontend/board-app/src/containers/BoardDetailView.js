import React from "react";
import axios from "axios";
import { Card } from "antd";
import CustomForm from "../components/Form";

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
      <Card title={this.state.board.title}>
        <p>{this.state.board.content}</p>
      </Card>
      //   if (BoardID == UserID) {
      //       <Card>
      //       {
      //       <CustomForm
      //         requestType="put"
      //         boardID={this.props.match.params.boardID}
      //         btnText="수정하기"
      //       />
      //       }
      //       </Card>
      //   }
    );
  }
}

export default BoardDetail;
