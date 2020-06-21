import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  height: 44px;
  width: 396px;
  background-color: #5e54ac;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 425px) {
    width: 100%;
  }

  &:hover {
    background-color: ${darken(0.1, '#5e54ac')};
    font-weight: 900;
  }
`;
