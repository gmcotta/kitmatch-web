import React from 'react';

import { Button } from './styles';

const HomeButton: React.FC = ({ children }) => {
  return <Button type="button">{children}</Button>;
};

export default HomeButton;
