import React from 'react';
import Select, { OptionsType, ValueType } from 'react-select';
import { FieldProps } from 'formik';

import { Label, ErrorMessage } from './styles';

import elementLabel from '../../utils/elementLabel';

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends FieldProps {
  options: OptionsType<Option>;
  placeholder?: string;
  className?: string;
  error?: string;
  touched?: boolean;
}

const HomeSelect: React.FC<SelectProps> = ({
  options,
  field,
  placeholder,
  className,
  form,
  error,
  touched,
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: error && touched ? '1px solid #ca0000' : '1px solid #5e54ac',
      borderRadius: '8px',
      height: '44px',
      margin: '4px 0',
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

  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(field.name, (option as Option).value);
  };

  const getValue = () => {
    if (field.value === '') {
      return null;
    }
    if (options) {
      return options.find(option => option.value === field.value);
    }
    return null;
  };

  return (
    <div>
      <Label error={error} touched={touched}>
        {elementLabel(field.name)}
      </Label>
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
      {error !== undefined && touched && (
        <ErrorMessage error={error} touched={touched}>
          {error}
        </ErrorMessage>
      )}
    </div>
  );
};

export default HomeSelect;
