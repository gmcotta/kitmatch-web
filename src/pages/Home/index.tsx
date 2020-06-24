import React from 'react';

import Header from '../../components/Header';
import HomeForm from '../../components/HomeForm';

import {
  Title,
  Paragraph,
  MainContainer,
  ContentContainer,
  BackgroundImage,
  FormContainer,
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
        <FormContainer>
          <Paragraph>
            Ajudamos pessoas a encontrarem kitnets, e proprietários a anunciarem
            de forma fácil!
          </Paragraph>

          <HomeForm />
        </FormContainer>
        <BackgroundImage />
      </ContentContainer>
    </MainContainer>
  );
};

export default Home;
