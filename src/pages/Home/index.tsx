import React from 'react';

import Header from '../../components/Header';
import HomeForm from '../../components/HomeForm';

import { Title, Container, BackgroundImage, FlexContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>
        <span>Aluguel</span>
        &nbsp;de forma simples
      </Title>
      <BackgroundImage />
      <FlexContainer>
        <p>
          Ajudamos pessoas a encontrarem kitnets, e proprietários a anunciarem
          de forma fácil!
        </p>

        <HomeForm />
      </FlexContainer>
    </Container>
  );
};

export default Home;
