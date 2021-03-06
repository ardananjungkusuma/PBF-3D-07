import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

function NumberList(props) {
  const nim = props.nim;
  const listItems = nim.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const nim = [8, 7, 2, 0, 4, 1]; // <-- Ubah sesuai NIM Anda
ReactDOM.render(<NumberList nim={nim} />, document.getElementById("root"));
