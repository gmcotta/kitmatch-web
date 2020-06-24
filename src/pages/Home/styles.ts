import styled from 'styled-components';

import desktopBG from '../../assets/home_bg.svg';
import mobileBG from '../../assets/home_gray_house.svg';

export const MainContainer = styled.div`
  padding: 48px;
  max-width: 1366px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 425px) {
    height: 100vh;
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 40px 0;

  @media (max-width: 425px) {
    font-size: 20px;
    margin: 20px 0;
  }

  @media (min-width: 426px) and (max-width: 880px) {
    text-align: center;
  }

  span {
    color: #5e54ac;
  }
`;

export const Paragraph = styled.p`
  font-size: 32px;
  width: 560px;
  /*height: 160px;*/

  @media (min-width: 426px) and (max-width: 880px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 16px;
    width: 200px;
    height: 100px;
  }
`;

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100%;

  @media (max-width: 880px) {
  }
`;

export const BackgroundImage = styled.div`
  z-index: -16;
  @media (min-width: 881px) {
    background: url(${desktopBG}) no-repeat center;
    transform: scaleX(-1);
    background-size: 100%;
    width: 888px;
    height: 464px;
    position: fixed;
    top: 240px;
    left: 460px;
  }

  @media (max-width: 425px) {
    background: url(${mobileBG}) no-repeat;
    position: fixed;
    width: 480px;
    height: 408px;
    top: 100px;
    right: -208px;
  }
`;

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;

  @media (min-width: 426px) and (max-width: 880px) {
    align-items: center;
    width: 100%;
  }
`;
