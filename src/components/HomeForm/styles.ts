import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  height: 100%;

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

export const FieldsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 880px) {
    width: 100%;
  }
`;
