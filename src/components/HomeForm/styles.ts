import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
`;

export const FieldsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 880px) {
    width: 100%;
  }
`;
