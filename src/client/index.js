import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends Component {
  state = { message: "Test 2" }
  
  render() {
    return (
      <span>{this.state.message}</span>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'));
