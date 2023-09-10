import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  max-width: 482px;

  .errorDetails {
    display: flex;
    flex-direction: column;
    gap: 8px;

    strong {
      color: ${({ theme }) => theme.colors.danger.main};
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }
`;
