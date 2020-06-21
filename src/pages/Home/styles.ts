import styled from 'styled-components';

import desktopBG from '../../assets/home_bg.svg';
import mobileBG from '../../assets/home_gray_house.svg';

export const Container = styled.div`
  padding: 48px;
  max-width: 1366px;

  margin: 0 auto;
  position: relative;

  p {
    font-size: 32px;
    height: 160px;
  }

  @media (max-width: 425px) {
    height: 100vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
    p {
      font-size: 16px;
      width: 200px;
      height: 100px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 40px 0;

  @media (max-width: 425px) {
    font-size: 20px;
    margin: 20px 0;
  }

  span {
    color: #5e54ac;
  }
`;

export const BackgroundImage = styled.div`
  background: url(${desktopBG}) no-repeat;
  background-size: 100%;
  width: 888px;
  height: 464px;
  position: absolute;
  top: 200px;
  right: 32px;
  z-index: -16;

  @media (max-width: 425px) {
    background: url(${mobileBG}) no-repeat;
    position: fixed;
    width: 480px;
    height: 408px;
    top: 100px;
    right: -208px;
  }
`;

export const FlexContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectWrapper = styled.div`
  width: 396px;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 396px;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;
