import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "semangka" };
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
          Pilih buah favorit Anda:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="anggur">Anggur</option>
            <option value="jeruk">Jeruk</option>
            <option value="semangka">Semangka</option>
            <option value="mangga">Mangga</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("root"));
