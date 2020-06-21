import React from 'react';
import Select, { OptionsType, ValueType } from 'react-select';
import { FieldProps } from 'formik';

import { Label } from './styles';

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends FieldProps {
  options: OptionsType<Option>;
  placeholder?: string;
  className?: string;
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
  options,
  field,
  placeholder,
  className,
  form,
}) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(field.name, (option as Option).value);
  };

  const getValue = () => {
    if (options) {
      return options.find(option => option.value === field.value);
    }
    return '' as any;
  };

  const selectLabel = (name: string) => {
    switch (name) {
      case 'uf':
        return 'Estado';
      case 'city':
        return 'Cidade';
      default:
        return name;
    }
  };

  return (
    <div>
      <Label>{selectLabel(field.name)}</Label>
      <Select
        className={className}
        name={field.name}
        value={getValue()}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        noOptionsMessage={() => 'Sem opções'}
        styles={customStyles}
      />
    </div>
  );
};

export default HomeSelect;
