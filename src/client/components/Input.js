import styled from 'styled-components';

export default styled.input`
  border: 2px solid rgba(0, 0, 0, .15);
  padding: 8px;
  color: ${props => props.theme.mainBlue};
  transition: border .3s;

  &:focus {
    outline: none;
    border-color: rgba(0, 0, 0, .35);
  }

  &:invalid {
    border-color: rgba(255, 0, 0, .35);
  }
`;
