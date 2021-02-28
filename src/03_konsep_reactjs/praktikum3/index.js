import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Kartu(props) {
  return (
    <h1>
      Halo, {props.nim} - {props.nama}
    </h1>
  );
}

const element = <Kartu nama="Ardan Anjung" nim="1841720041" />;

ReactDOM.render(element, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
