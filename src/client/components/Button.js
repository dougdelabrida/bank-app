import styled from 'styled-components';

const Button = styled.button`
  border: none;
  color: #fff;
  padding: 10px 16px;
  background: ${props => props.theme.blueGradient};
`;

export default Button;
