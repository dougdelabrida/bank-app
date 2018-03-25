import React from 'react';

import logoImg from '../../www/images/logo.png';
import NavBar from './NavBar';

import styled from 'styled-components';

const Header = styled.header`
  color: rgba(255, 255, 255, .8);
`;

const Logo = styled.a`
  padding: 0;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.blueGradient};
  padding: 2px 16px;
  height: 64px;
  width: 100%;
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.blueGradient};
  opacity: .9;
  padding: 2px 16px;
  height: 48px;
  width: 100%;
`;

const WelcomeMessage = styled.div`
  font-size: 17px;
  line-height: .8rem;
`;

const ClientType = styled.small`
  font-size: 12px;
`;

export default () => (
  <Header>
    <HeaderTop>
      <Logo href='#'>
        <img src={logoImg} width='156px' />
      </Logo>
      <NavBar />
    </HeaderTop>
    <HeaderBottom>
      <div>
        <WelcomeMessage>Hello, Douglas</WelcomeMessage>
        <ClientType>Platinum Client</ClientType>
      </div>
      <div>
        
      </div>
    </HeaderBottom>
  </Header>
);
