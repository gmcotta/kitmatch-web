import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;

  @media (min-width: 426px) and (max-width: 880px) {
    align-items: center;
    width: 100%;
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
  }
`;

export const ForgotText = styled(Link)`
  text-align: right;
  color: #5e54ac;
`;

export const FieldsWrapper = styled.div`
  display: grid;
  gap: 16px;

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const SwitchLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  @media (max-width: 425px) {
    font-size: 12px;
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
