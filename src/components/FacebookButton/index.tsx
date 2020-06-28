import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

import { ButtonContainer } from './styles';

const FacebookButton: React.FC = () => {
  return (
    <ButtonContainer type="button">
      <FaFacebookSquare color="#fff" size={20} />
      <span>Entrar com Facebook</span>
    </ButtonContainer>
  );
};

export default FacebookButton;
