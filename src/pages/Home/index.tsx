import React from 'react';
import Header from '../../components/Header';

import { Title, Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Home</Title>
    </Container>
  );
};

export default Home;
