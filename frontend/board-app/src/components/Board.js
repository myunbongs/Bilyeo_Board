import React from "react";

const Board = (board) => {
  const { id, title, content } = board;
  return (
    <div className="boardLayout">
      <div className="id">{id}</div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Board;
