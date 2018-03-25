import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAccounts, selectAccount } from '../actions/accounts';
import currencyFormat from '../utils/currencyFormat';

const AccountsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;

  
  ${props => props.theme.media.mobileOnly`
    flex-direction: column;
  `}
`;

const AccountItem = styled.div`
  border: none;
  color: #fff;
  padding: 16px 32px;
  margin: 6px;
  color: #000;
  border:2px solid #e2e2e2;
  width: calc(100% / 3 - 16px);

  &.selected {
    border-color: ${props => props.theme.mainBlue};
  }

  ${props => props.theme.media.mobileOnly`
    width: auto;
  `}
`;

const Dashboard = ({accounts, actions}) => {
  return (
    <div>
      <PageTitle>Select an account</PageTitle>
      <AccountsWrapper>
        {accounts.data.map((account, i) =>
          <AccountItem
            key={i}
            className={account.number === accounts.selected ? 'selected' : ''}
            onClick={() => actions.selectAccount(account.number)}
          >
            <div><b>Account: </b>{account.number}</div>
            <div><b>Balance: </b>{currencyFormat('de-DE', 'EUR', account.balance)}</div>
          </AccountItem>
        )}
      </AccountsWrapper>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {

  dispatch(fetchAccounts());

  return {
    actions: bindActionCreators({
      selectAccount
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
