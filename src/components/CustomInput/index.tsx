import React, { useState } from 'react';
import { FieldProps } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import {
  Container,
  InputWrapper,
  Label,
  Input,
  SpyButton,
  ErrorMessage,
} from './styles';

import elementLabel from '../../utils/elementLabel';

interface InputProps extends FieldProps {
  placeholder?: string;
  error?: string;
  touched?: boolean;
  isPassword?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  placeholder,
  isPassword,
  field,
  form,
  error,
  touched,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container>
      <Label>{elementLabel(field.name)}</Label>
      <InputWrapper>
        <Input
          type={isVisible || !isPassword ? 'text' : 'password'}
          name={field.name}
          onChange={event => form.setFieldValue(field.name, event.target.value)}
          placeholder={placeholder}
          error={error}
          touched={touched}
        />
        {isPassword && (
          <SpyButton
            type="button"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            {isVisible ? <FaEyeSlash color="#777" /> : <FaEye color="#777" />}
          </SpyButton>
        )}
      </InputWrapper>
      {error !== undefined && touched && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default CustomInput;
