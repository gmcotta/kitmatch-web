import React from 'react';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

import {
  MainContainer,
  Title,
  ContentContainer,
  BackgroundImage,
} from './styles';

const Login: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Title>
        <span>Aluguel</span>
        {'  de forma simples'}
      </Title>
      <ContentContainer>
        <LoginForm />
        <BackgroundImage />
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;
