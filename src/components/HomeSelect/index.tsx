import React, { InputHTMLAttributes } from 'react';
import Select from 'react-select';

import { Label } from './styles';

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
    borderRadius: '8px',
    height: '44px',
    marginTop: '8px',
    fontSize: '12px',
    zIndex: '0',
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
    borderRadius: '8px',
  }),

  menuList: (provided: any) => ({
    ...provided,
    fontSize: '12px',
  }),
};

const HomeSelect: React.FC<SelectProps> = ({
  name,
  values,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <Label>{name}</Label>
      <Select
        options={values}
        placeholder={placeholder}
        onChange={onChange}
        noOptionsMessage={() => 'Sem opções'}
        styles={customStyles}
      />
    </div>
  );
};

export default HomeSelect;
