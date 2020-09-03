import React from "react";
import Board from "../components/Board";
import axios from "axios";
<<<<<<< HEAD
import CustomForm from "../components/form";
=======

>>>>>>> 9847a8bf904b2c9aacaf8aa88cebb98f2fbad3f7
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
<<<<<<< HEAD
    return (
      <div>
        <Board data={this.state.board} />
        <br />
        <h2> Create an article</h2>
        <CustomForm requestTpye="post" articleID={null} btnText="creat" />
      </div>
    );
=======
    return <Board data={this.state.board} />;
>>>>>>> 9847a8bf904b2c9aacaf8aa88cebb98f2fbad3f7
  }
}

export default BoardList;
