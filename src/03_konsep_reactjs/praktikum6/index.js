import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

class Jam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Halo, 1841720041 - Ardan Anjung</h1>
        <h2>Sekarang jam: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Jam />, document.getElementById("root"));
