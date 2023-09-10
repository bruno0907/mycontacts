import styled from 'styled-components';

export const Container = styled.div`
  max-width: 482px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey[200]};
  align-self: center;

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
