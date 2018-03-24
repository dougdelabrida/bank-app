import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { injectGlobal, ThemeProvider } from 'styled-components';
import Header from './components/Header';

injectGlobal`
  html, body {
    height: 100%;
    margin: 0;
  }
`

const mainTheme = {
  blueGradient: 'linear-gradient(to right, #000428, #004e92)'
}

class TestComponent extends Component {
  state = { message: "Test 2" }
  
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <Header>
          Teste
        </Header>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'));
