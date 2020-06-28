import styled from 'styled-components';

import desktopBG from '../../assets/home_bg.svg';
import mobileBG from '../../assets/home_bg_mobile.svg';

export const MainContainer = styled.div`
  padding: 48px;
  max-width: 1366px;
  height: 768px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 426px) and (max-width: 880px) {
    padding: 32px;
    height: 100vh;
    background: url(${mobileBG}) no-repeat center center;
    background-size: contain;
    background-origin: content-box;
  }

  @media (max-width: 425px) {
    padding: 16px;
    height: 100vh;
    background: url(${mobileBG}) no-repeat center center;
    background-size: contain;
    background-origin: content-box;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 40px 0;

  @media (max-width: 425px) {
    font-size: 28px;
    margin: 20px 0;
  }

  @media (max-width: 880px) {
    text-align: center;
  }

  span {
    color: #5e54ac;
  }
`;

export const ContentContainer = styled.article`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100%;
`;

export const BackgroundImage = styled.div`
  z-index: -16;
  background: url(${desktopBG}) no-repeat center center;
  width: 826px;
  background-size: contain;

  @media (min-width: 1367px) {
    margin-left: 64px;
  }

  @media (min-width: 881px) and (max-width: 1366px) {
    position: fixed;
    height: 496px;
    top: 224px;
    left: 492px;
  }

  @media (max-width: 880px) {
    display: none;
  }
`;
