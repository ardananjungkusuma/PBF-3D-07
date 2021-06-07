import { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginUser } from "../redux/actions/auth";

import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const { dispatch } = props;
    dispatch(loginUser(email, password));
  };

  const { isLoggingIn, loginError, isAuthenticated } = props;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => handleForm(e)}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <hr />
          <button type="submit">Login</button>
          <hr />
          <span>{loginError && "Email atau Password Salah!"}</span>
          <span>{isLoggingIn && "Sedang login ..."}</span>
        </form>
        <Link to="/register">Click to Register</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Login);
