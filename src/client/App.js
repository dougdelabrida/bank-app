import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';

import routes from './routes';
import Layout from './components/Layout';

const mainTheme = {
  blueGradient: 'linear-gradient(to right, #000428, #004e92)'
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
  
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: Robto, sans-serif;
  }
`;

export default () => (
  <ThemeProvider theme={mainTheme}>
    <Switch>

      {routes.private.map((route, i) =>
        <Route exact path={route.path} key={i} render={props =>
          <Layout>
            <route.component />
          </Layout>
        } />
      )}

      {routes.public.map((route, i) =>
        <Route path={route.path} key={i} render={props => <route.component />} />
      )}

    </Switch>
  </ThemeProvider>
)
