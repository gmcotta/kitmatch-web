import styled from 'styled-components';

export const Container = styled.div`
  padding: 48px;
  max-width: 1366px;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 425px) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
