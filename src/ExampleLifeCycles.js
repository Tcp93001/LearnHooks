import React, { Component } from "react";

class ExampleLifeCycles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div style={{ width: "29%", border: "1px solid green", padding: 10 }}>
        <p>Timer is running... {this.state.seconds}</p>
      </div>
    );
  }
}

export default ExampleLifeCycles;
