import React from "react";
import axios from "axios";
<<<<<<< HEAD
import { Button, Card } from "antd";
import CustomForm from "../components/form";
=======
import { Card } from "antd";
import CustomForm from "../components/Form";

>>>>>>> 9847a8bf904b2c9aacaf8aa88cebb98f2fbad3f7
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
<<<<<<< HEAD
      <div>
        <Card title={this.state.board.title}>
          <br />

          <p>{this.state.board.content}</p>
        </Card>
        <h2>Update an articel</h2>
        <CustomForm
          requestType="put"
          boardID={this.props.match.params.boardID}
          btnText="Update"
        />
        <form>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
=======
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
>>>>>>> 9847a8bf904b2c9aacaf8aa88cebb98f2fbad3f7
    );
  }
}

export default BoardDetail;
