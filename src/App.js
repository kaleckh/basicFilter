import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      fruits: ["apple", "orange", "bannana", "pineapple"],
    };
  }

  render() {
    const filteredFoods = this.state.fruits
      .filter((fruit) => {
        return fruit.includes(this.state.input);
      })
      .map((fruit) => {
        return <div>{fruit}</div>;
      });
    return (
      <div className="App_parent">
        <input onChange={(event) => {
          this.setState({
            input: event.target.value
          })
        }} />
        <div>{filteredFoods}</div>
      </div>
    );
  }
}

export default App;
