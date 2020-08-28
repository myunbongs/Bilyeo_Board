import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import CustomForm from "../components/form";
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
    );
  }
}

export default BoardDetail;
