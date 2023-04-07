import styled, { css } from "styled-components";

export const FromContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-height: 400px;
    border: 1px solid ${theme.colors.black};
    border-radius: 8px;
    padding: 24px;
    box-sizing: border-box;

    @media ${theme.breakpoints.tablet} {
      width: 680px;
    }
  `}
`;

export const FormTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.medium.size};
    margin: 0 0 32px;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const InputWrap = styled.div`
  padding: 12px 0;
`;

export const ButtonWrap = styled.div`
  margin-top: 24px;
  align-self: end;
`;
