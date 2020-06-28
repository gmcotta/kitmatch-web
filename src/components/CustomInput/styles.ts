import styled from 'styled-components';

interface LabelProps {
  error?: string;
  touched?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span<LabelProps>`
  font-size: 12px;
  color: ${({ error, touched }) => (error && touched ? '#ca0000' : '#5e54ac')};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  input[type='password'] {
    font-size: 32px;
    &::placeholder {
      position: relative;
      bottom: 6px;
      font-size: 16px;
    }
  }
`;

export const Input = styled.input<LabelProps>`
  margin: 4px 0;
  height: 44px;
  width: 100%;
  padding: 0 16px;
  border: ${({ error, touched }) =>
    error && touched ? '1px solid #ca0000' : '1px solid #5e54ac'};
  border-radius: 8px;
`;

export const SpyButton = styled.button`
  background: transparent;
  border: none;
  height: 16px;
  position: relative;
  margin-right: -16px;
  right: 32px;
`;

export const ErrorMessage = styled.span<LabelProps>`
  font-size: 12px;
  color: #ca0000;
`;
