import styled, { css } from 'styled-components';

interface NavProps {
  open: boolean;
}

export const Container = styled.header`
  margin: 0 auto;
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
    z-index: 16;

    &::nth-child(2) {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 425px) {
    display: none;
  }

  ${({ open }) =>
    open &&
    css`
      @media (max-width: 425px) {
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

        a {
          font-size: 32px;
          margin: 16px 0;
        }
      }
    `}
`;

export const MenuButton = styled.button`
  display: none;
  z-index: 8;
  background-color: transparent;
  border: none;

  @media (max-width: 425px) {
    display: inline;
  }
`;
