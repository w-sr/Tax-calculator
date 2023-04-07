import styled, { css, keyframes } from "styled-components";
import { Spinner } from "@styled-icons/evil";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${theme.colors.black};
    opacity: 0.2;
  `}
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinningIcon = styled(Spinner)`
  animation: 2s linear ${spin} infinite;
`;
