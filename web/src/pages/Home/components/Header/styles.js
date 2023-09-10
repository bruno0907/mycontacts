import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  justify-content: ${({ justifyContent }) => justifyContent};
  strong {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.heading};

    span {
      color: ${({ theme }) => theme.colors.primary.main};

    }

    span:nth-last-child(n-1) {
      margin-left: 8px;
    }
  }

`;
