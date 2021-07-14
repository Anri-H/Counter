import React from "react";
// import { Decrease, Increase, Reset } from "./buttons";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

    increase = () => {
        console.log("inc");
      this.setState((state) => ({
        counter: state.counter + 1,
      }));
    };

    decrease = () => {
        console.log("dec");
      this.setState((state) => ({
        counter: state.counter - 1,
      }));
    };

    reset = () => {
        console.log("reset");
      this.setState({ counter: 0 });
    };

  render() {
    const { counter } = this.state;
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.increase}>Increase</button>
        <button disabled={this.state.counter <= 0} onClick={this.decrease}>
          Decrease
        </button>
        <button onClick={this.reset}>Reset</button>

        {/* <Increase
          click={() => {
            this.setState((state) => ({
              counter: state.counter + 1,
            }));
          }}
        />

        <Decrease
          state={this.state.counter}
          click={() => {
            this.setState((state) => ({
              counter: state.counter - 1,
            }));
          }}
        />

        <Reset
          click={() => {
            this.setState({ counter: 0 });
          }}
        /> */}
      </>
    );
  }
}
