import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const HomeButton: React.FC<ButtonProps> = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};

export default HomeButton;
