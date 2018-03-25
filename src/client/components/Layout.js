import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;
  width: 100%;
`;

const Layout = ({children}) => (
  <div>
    <Header />
    <Main>
      {children}
    </Main>
  </div>
)

export default Layout;
