import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

function SambutanUser(props) {
  return <h1>Selamat Datang 184720041 - Ardan Anjung!</h1>;
}

function SambutanTamu(props) {
  return <h1>Mohon melakukan sign up terlebih dahulu.</h1>;
}

function Sambutan(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <SambutanUser />;
  }
  return <SambutanTamu />;
}

ReactDOM.render(
  // Silakan coba ganti nilai isLoggedIn={false}
  <Sambutan isLoggedIn={true} />,
  document.getElementById("root")
);
