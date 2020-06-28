import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  height: 560px;

  @media (max-width: 880px) {
    align-items: center;
    width: 100%;
    height: 100%;
  }

  div.button-area {
    width: 100%;

    @media (max-width: 425px) {
      margin-top: 16px;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 32px;
  width: 560px;

  @media (min-width: 426px) and (max-width: 880px) {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    text-align: center;
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const ForgotText = styled(Link)`
  text-align: right;
  color: #5e54ac;

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }
`;

export const FieldsWrapper = styled.div`
  display: grid;
  gap: 16px;

  @media (max-width: 880px) {
    width: 100%;
  }

  span.divider {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;

    &::before,
    &::after {
      content: '';
      background-color: #5e54ac;
      height: 1px;
      width: 40%;
    }
  }
`;

export const SwitchLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  @media (max-width: 425px) {
    font-size: 12px;
    margin-
  }

  button {
    border: none;
    background: transparent;
    text-decoration: underline;
    color: #5e54ac;

    @media (max-width: 425px) {
      font-size: 12px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
