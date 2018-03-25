import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions/transactions';
import Button from '../components/Button';
import styled, { css } from 'styled-components';
import dateFormat from '../utils/dateFormat';
import currencyFormat from '../utils/currencyFormat';
import PageTitle from '../components/PageTitle';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

const tStyle = `
  border: 1px solid #f5f5f5;
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
`;

const Th = styled.th`
  ${tStyle}
}`;

const Td = styled.td`
  ${tStyle}
`;

const Bottom = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

class Transactions extends PureComponent {
  componentDidMount() {
    if (!this.props.transactions.isFetching) {
      this.props.actions.fetchTransactions('0044533', 0, 15);
    }
  }

  render() {
    const { data, isFetching, offset, limit, total } = this.props.transactions;

    return (
      <div>
        <PageTitle>Transactions</PageTitle>
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Transaction type</Th>
              <Th>Value</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) =>
              <tr key={i}>
                <Td>{dateFormat(item.date, 'en-GB')}</Td>
                <Td>{item.type}</Td>
                <Td style={{color: item.type !== 'Deposit' ? 'red' : '#000'}}>
                  <span>{item.type !== 'Deposit' ? '-' : ''}</span>
                  {currencyFormat('de-DE', 'EUR', item.value)}
                </Td>
              </tr>
            )}
          </tbody>
        </Table>

        <Bottom>
          {total > offset && 
            <Button onClick={() => this.props.actions.fetchTransactions('0044533', parseInt(offset) + 15, 15)}>Load more</Button>
          }
          {isFetching && <div>Loading</div>}
        </Bottom>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
          fetchTransactions
        }, dispatch)
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
