import styled from 'styled-components';

interface LabelProps {
  error?: string;
  touched?: boolean;
}

export const Label = styled.span<LabelProps>`
  font-size: 12px;
  color: ${({ error, touched }) => (error && touched ? '#ca0000' : '#5e54ac')};
`;

export const ErrorMessage = styled.span<LabelProps>`
  margin-top: 8px;
  font-size: 12px;
  color: #ca0000;
`;
