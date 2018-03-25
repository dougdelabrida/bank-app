import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavWrapper = styled.div`
  display: block;
`;

const Nav = styled.div`
  position: fixed;
  background: #fff;
  top: 0;
  right: -255px;
  bottom: 0;
  width: 255px;
  transition: right .3s;
  z-index: 1000;

  &.active {
    right: 0;
  }

  & > a {
    display: block;
    padding: 16px;
    color: #000;
    text-decoration: none;
    transition: background .2s;

    &:hover {
      background: rgba(0, 0, 0, .1);
    }
  }
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, .4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s;
  z-index: 800;

  &.active {
    opacity: 1;
    pointer-events: initial;
  }
`;

export default class NavBar extends PureComponent {
  state = { opened: false }

  toggleNav() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (
      <NavWrapper>
        <button onClick={() => this.toggleNav()}>Menu</button>
        <Nav className={this.state.opened ? 'active' : ''}>
          <Link to='/'>Dashboard</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/transactions'>Transactions</Link>
        </Nav>
        <Overlay
          onClick={() => this.toggleNav()}
          className={this.state.opened ? 'active' : ''}
        />
      </NavWrapper>
    )
  }
}
