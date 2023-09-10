import styled from 'styled-components';

export const Container = styled.div`
  max-width: 482px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.grey[200]};
    word-break: break-all;
  }
`;
