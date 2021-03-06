import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Tulis biodata lengkap Anda di sini" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Halo, " + this.state.value + " !");
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Biodata:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("root"));
