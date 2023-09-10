import styled, { css, keyframes } from 'styled-components';

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 9999px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  opacity: .8;

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} .2s forwards`};
`;
