import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;

  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const FormInput = styled.input`
  display: block;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    border-color: #bdbdbd;
  }
`;
