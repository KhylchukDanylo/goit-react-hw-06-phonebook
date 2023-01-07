import styled from '@emotion/styled';

export const DeleteBtn = styled.button`
  font-size: 16px;
  border: none;
  min-width: 120px;
  padding: 8px 15px;
  border-radius: 4px;
  width: 120px;
  cursor: pointer;
  transition: all 500ms ease;
  :hover {
    background-color: teal;
    color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
