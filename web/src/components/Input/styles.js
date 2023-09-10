import styled, { css } from 'styled-components';

export const Container = styled.div`
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main} !important;
  `};

  &:has(input[disabled]) {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    border-color: ${({ theme }) => theme.colors.grey[200]};

    input {
      &::placeholder {
        color: ${({ theme }) => theme.colors.grey[400]};
      }
    }
  }

  input {
    width: 100%;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey[200]};
    }

    ${({ theme, error }) => error && css`
      color: ${theme.colors.danger.main} !important;
    `};
  }
`;
