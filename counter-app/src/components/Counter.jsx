import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  getClassNames() {
    if (this.state.counter > 0) {
      return "badge bg-primary";
    }

    return "badge bg-warning text-dark";
  }

  formatText() {
    const { counter } = this.state;
    if (counter > 0) {
      return counter;
    }

    return "Zero";
  }

  render() {
    return (
      <>
        <span className={this.getClassNames()}>{this.formatText()}</span>
      </>
    );
  }
}
