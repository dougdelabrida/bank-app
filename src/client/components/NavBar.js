import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavWrapper = styled.div`
  display: block;
`;

const NavButton = styled.button`
  border: none;
  background: transparent;

  &::before, &::after, & > div {
    content: '';
    display: block;
    background: #fff;
    margin: 6px 0;
    height: 2px;
    width: 32px;
  }

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, .15);
  }

  ${props => props.theme.media.desktopOnly`
    display: none;
  `}
`;

const Nav = styled.div`
  position: fixed;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, .7);
  top: 0;
  right: -265px;
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

  ${props => props.theme.media.desktopOnly`
    position: initial;
    background: transparent;
    box-shadow: none;
    width: auto;

    & > a {
      display: inline;
      color: #fff;
  `}
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
        <NavButton onClick={() => this.toggleNav()}>
          <div></div>
        </NavButton>

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
