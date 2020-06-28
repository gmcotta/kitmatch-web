import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonContainer = styled.button`
  height: 44px;
  background-color: #3b5998;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: ${darken(0.1, '#3b5998')};
    span {
      font-weight: 900;
    }
  }

  span {
    color: #fff;
    margin-left: 8px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
