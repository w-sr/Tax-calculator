import styled, { css } from "styled-components";

import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  ${({ theme, width }) => css`
    font-size: ${theme.font.small.size};
    line-height: ${theme.font.small.lineHeight};
    font-weight: ${theme.font.small.weight};
    letter-spacing: 0.2px;
    background-color: ${theme.colors.transparentWhite};
    color: ${theme.colors.black};
    width: ${width || "auto"};
    border-radius: 3px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${"1px solid " + theme.colors.black};
    outline: none;

    &:hover:enabled {
      background-color: ${theme.colors.greyWeb};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`;
