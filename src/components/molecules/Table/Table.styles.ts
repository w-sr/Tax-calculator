import styled, { css } from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  border: none;
`;

export const TableHeaderCell = styled.th`
  ${({ theme }) => css`
    background-color: ${theme.colors.greyDark};
    padding: 12px;
    text-align: left;
    font-size: ${theme.font.small.size};
    line-height: ${theme.font.small.lineHeight};
    font-weight: ${theme.font.small.weight};
    color: ${theme.colors.black};
    &:first-child {
      border-top-left-radius: 12px;
    }
    &:last-child {
      border-top-right-radius: 12px;
    }
  `}
`;

export const TableRowItem = styled.tr`
  ${({ theme }) => css`
    cursor: auto;
    &:nth-child(odd) {
      background-color: ${theme.colors.greyWhite};
    }
    &:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  `}
`;

export const TableCell = styled.td`
  ${({ theme }) => css`
    padding: 12px;
    font-size: ${theme.font.small.size};
    line-height: ${theme.font.small.lineHeight};
    font-weight: ${theme.font.small.weight};
    color: ${theme.colors.greyWeb};
  `}
`;
