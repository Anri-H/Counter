import React from "react";
import { Button } from "./Buttons/Button";
import Input from "./Inputs/Inputs";
import style from "./Counter.module.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      max: Number(localStorage.getItem("max")),
      min: Number(localStorage.getItem("min")),
      step: Number(localStorage.getItem("step")),
    };
  }

  increase = () => {
    this.setState(({ counter, step }) => ({
      counter: counter + step,
    }));
  };

  decrease = () => {
    this.setState(({ counter, step }) => ({
      counter: counter - step,
    }));
  };

  reset = () => {
    console.log("reset");
    this.setState({ counter: 0 });
  };

  maxVal = (event) => {
    this.setState({ max: event.target.value });
  };

  minVal = (event) => {
    this.setState({ min: event.target.value });
  };

  step = (event) => {
    this.setState({ step: event.target.value });
  };

  render() {
    const { counter, min, max, step } = this.state;
    localStorage.setItem("max", max);
    localStorage.setItem("min", min);
    localStorage.setItem("step", step);

    return (
      <>
        <Input
          placeholder="Enter maximal value"
          value={max}
          onChange={this.maxVal}
        />
        <Input
          placeholder="Enter minimal value"
          value={min}
          onChange={this.minVal}
        />
        <Input placeholder="Step" value={step} onChange={this.step} />

        <p className={style.Count}>{counter}</p>
        <Button
          disable={max <= counter + step}
          name="Increase"
          onClick={this.increase}
        />
        <Button
          disable={min >= counter - step}
          name="Decrease"
          onClick={this.decrease}
        />
        <Button disable={!counter} name="Reset" onClick={this.reset} />

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
