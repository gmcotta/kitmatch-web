import styled from 'styled-components';

export const FieldsWrapper = styled.div`
  width: 396px;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;
