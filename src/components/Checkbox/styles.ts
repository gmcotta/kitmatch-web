import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  cursor: pointer;

  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div {
  }

  .content {
    font-size: 12px;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border-radius: 4px;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container input:checked ~ .checkmark {
    background-color: #5e54ac;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  span.content {
    margin-left: 24px;
  }
`;
