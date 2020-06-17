import React, { InputHTMLAttributes } from 'react';
import Select from 'react-select';

import { Label, Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  values: {
    label: string;
    value: string;
  }[];
  placeholder: string;
  onChange: any;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: 'none',
    height: '44px',
    width: '288px',
    marginTop: '8px',
    fontSize: '12px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: '#000',
  }),

  menu: (provided: any) => ({
    ...provided,
    width: '288px',
  }),

  menuList: (provided: any) => ({
    ...provided,
    fontSize: '12px',
    width: '288px',
  }),
};

const HomeSelect: React.FC<SelectProps> = ({
  name,
  values,
  placeholder,
  onChange,
}) => {
  return (
    <Container>
      <Label>{name}</Label>
      <Select
        options={values}
        placeholder={placeholder}
        onChange={onChange}
        noOptionsMessage={() => 'Sem opções'}
        styles={customStyles}
      />
    </Container>
  );
};

export default HomeSelect;
