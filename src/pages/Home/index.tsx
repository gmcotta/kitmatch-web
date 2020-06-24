import React from 'react';

import Header from '../../components/Header';
import HomeForm from '../../components/HomeForm';

import {
  Title,
  MainContainer,
  ContentContainer,
  BackgroundImage,
} from './styles';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Title>
        <span>Aluguel</span>
        {'  de forma simples'}
      </Title>
      <ContentContainer>
        <HomeForm />
        <BackgroundImage />
      </ContentContainer>
    </MainContainer>
  );
};

export default Home;
