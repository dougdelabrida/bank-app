import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { injectGlobal, ThemeProvider, css } from 'styled-components';
import { Provider } from 'react-redux';
import Layout from './components/Layout';

import routes from './routes';
import store from './store';

const storeInstace = store();

const mainTheme = {
  blueGradient: 'linear-gradient(to right, #000428, #004e92)',
  mainBlue: '#002d62',
  media: {
    desktopOnly: (...args) =>
      css`
        @media (min-width: 780px) {
          ${ css(...args) }
        }
      `,
    mobileOnly: (...args) =>
      css`
        @media (max-width: 779px) {
          ${ css(...args) }
        }
      `
  }
};

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
  
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: Robto, sans-serif;
    font-size: 16px;
  }
`;

export default () => (
  <Provider store={storeInstace}>
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
  </Provider>
)
