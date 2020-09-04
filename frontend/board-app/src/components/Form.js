import React from "react";
import { post } from "axios";
import "./Form.scss";

class CustomForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      content: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.handleValueChange = this.handleValueChange.bind(this);

    this.addPost = this.addPost.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.addPost().then((response) => {
      console.log(response.data);
    });
  }

  handleValueChange(e) {
    let nextState = {};

    nextState[e.target.name] = e.target.value;

    this.setState(nextState);
  }

  addPost() {
    const url = "/api/create";

    const formData = new FormData();

    formData.append("id", this.state.id);

    formData.append("title", this.state.title);

    formData.append("content", this.state.content);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return post(url, formData, config);
  }

  render() {
    return (
      <div className="formLayout">
        <form onSubmit={this.handleFormSubmit}>
          <div className="formTitle">
            <h2>POST</h2>
          </div>
          TITLE:{" "}
          <input
            type="text"
            class="titlebox"
            value={this.state.title}
            onChange={this.handleValueChange}
          />
          <br />
          CONTENT:{" "}
          <input
            type="text"
            class="contentbox"
            value={this.state.content}
            onChange={this.handleValueChange}
          />
          <br />
          <button type="submit" class="button">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default CustomForm;
