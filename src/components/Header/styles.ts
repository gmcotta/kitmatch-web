import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface NavProps {
  open: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Nav = styled.nav<NavProps>`
  a {
    color: #5e54ac;
    text-decoration: none;
    font-weight: bold;
    margin: 0 16px;
    text-transform: uppercase;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      font-weight: 900;
      color: ${darken(0.1, '#5e54ac')};
    }
  }

  @media (max-width: 880px) {
    display: none;
  }

  ${({ open }) =>
    open &&
    css`
      @media (max-width: 880px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 16;

        a {
          font-size: 32px;
          margin: 16px 0;
        }
      }
    `}
`;

export const MenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;

  @media (max-width: 880px) {
    display: inline;
    z-index: 16;
  }
`;
