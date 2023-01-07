import styled from '@emotion/styled';

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ListText = styled.p`
  font-size: 18px;
  margin-right: 40px;
`;
