import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

function SambutanUser(props) {
  return <h1>Selamat Datang 184720041 - Ardan Anjung!</h1>;
}

function SambutanTamu(props) {
  return <h1>Mohon melakukan sign up terlebih dahulu.</h1>;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function Sambutan(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <SambutanUser />;
  }
  return <SambutanTamu />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Sambutan isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));
