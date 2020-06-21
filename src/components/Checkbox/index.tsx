import React, { ChangeEvent } from 'react';

import { Container } from './styles';

interface CheckboxProps extends HTMLInputElement {
  text: string;
  onChange: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, name, onChange }) => {
  return (
    <Container className="container" htmlFor={name}>
      <input name={name} type="checkbox" onChange={onChange} />
      <div>
        <span className="content">{text}</span>
        <span className="checkmark" />
      </div>
    </Container>
  );
};

export default Checkbox;
