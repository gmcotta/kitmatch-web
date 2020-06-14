import React from 'react';
import Header from '../../components/Header';

import { Title, Container, BackgroundImage } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>
        <span>Aluguel</span>
        &nbsp;de forma simples
      </Title>
      <p>
        Ajudamos pessoas a encontrarem kitnets, e proprietários a anunciarem de
        forma fácil!
      </p>
      <BackgroundImage />
    </Container>
  );
};

export default Home;
