import styled from 'styled-components';

export const Container = styled.select`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.inputBackgroundColor};
  border: solid 2px transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: border 100ms;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  appearance: none;
  color: ${({ theme }) => theme.colors.grey[200]};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    border-color: ${({ theme }) => theme.colors.grey[200]};
    opacity: 1;
    color: ${({ theme }) => theme.colors.grey[400]};
  }

`;
