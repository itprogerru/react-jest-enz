import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">the counter {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={()=>this.setState({counter: this.state.counter + 1})}
        >
          click
        </button>
        <button
          data-test="decrement-button"
          onClick={()=>this.setState({counter: this.state.counter - 1})}
        >
          click -1
        </button>
      </div>
    );
  }
}

export default App;
