import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const zoomOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(3px);
  z-index: 9999px;
  animation: ${fadeIn} .3s;

  ${(({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s forwards`)};
`;

export const Content = styled.div`
  width: 80%;
  max-width: 450px;
  padding: 24px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${zoomIn} .3s;

  ${(({ isLeaving }) => isLeaving && css`animation: ${zoomOut} 0.2s forwards`)};

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.grey[900])}
  };

`;

export const Footer = styled.footer`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;
