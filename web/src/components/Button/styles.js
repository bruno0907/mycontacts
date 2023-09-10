import styled, { css } from 'styled-components';

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary.main};
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.light};
      border-color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.dark};
      border-color: ${({ theme }) => theme.colors.primary.dark};
    }
  `,

  secondary: css`
    background: ${({ theme }) => theme.backgroundColor};
    border-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.colors.primary.main};

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active:not(:disabled) {
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled {
      background: ${({ theme }) => theme.backgroundColor};
      border-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.colors.grey[100]}
    }
  `,

  ghost: css`
    background: ${({ theme }) => theme.colors.backgroundColor};
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.dark};
      border-color: ${({ theme }) => theme.colors.primary.dark};
    }
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
    border-color: ${({ theme }) => theme.colors.danger.main};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.danger.light};
      border-color: ${({ theme }) => theme.colors.danger.light};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.colors.danger.dark};
      border-color: ${({ theme }) => theme.colors.danger.dark};
    }
  `,

  link: css`
    background-color: inherit;
    color: ${({ theme }) => theme.colors.primary.main};
    padding: unset;
    border: none;
    border-radius: unset;

    &:hover:not(:disabled) {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active:not(:disabled) {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled {
      background: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.colors.grey[100]};

      img {
        filter: grayscale(100%);
        opacity: .5;
      }
    }
  `,
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 52px;
  padding: 0 16px;
  border: solid 2px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: 700;
  transition: all 100ms;

  width: ${({ full }) => (full ? '100%' : 'fit-content')};

  &:disabled {
    border-color: ${({ theme }) => theme.colors.grey[100]};
    background: ${({ theme }) => theme.colors.grey[100]};
    color: ${({ theme }) => theme.colors.white};
    cursor: not-allowed;
  }

  ${({ variant }) => buttonVariants[variant ?? 'primary']}

`;
