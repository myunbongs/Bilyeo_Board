import React from "react";
import Board from "../components/Board";
import axios from "axios";
import CustomForm from "../components/form";
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

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
    return (
      <div>
        <Board data={this.state.board} />
        <br />
        <h2> Create an article</h2>
        <CustomForm requestTpye="post" articleID={null} btnText="creat" />
      </div>
    );
  }
}

export default BoardList;
