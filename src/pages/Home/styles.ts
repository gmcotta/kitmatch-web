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
    width: 560px;
    height: 160px;
  }

  @media (max-width: 425px) {
    padding: 16px;

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
  position: fixed;
  top: 200px;
  right: 32px;
  z-index: -8;

  @media (max-width: 425px) {
    background: url(${mobileBG}) no-repeat;
    width: 480px;
    height: 408px;
    top: 100px;
    left: 48px;
  }
`;
