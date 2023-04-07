import styled, { css } from "styled-components";

export const Title = styled.h4``;

export const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.medium.size};
    line-height: ${theme.font.medium.lineHeight};
    font-weight: ${theme.font.medium.weight};
  `}
`;

export const Span = styled.span``;
