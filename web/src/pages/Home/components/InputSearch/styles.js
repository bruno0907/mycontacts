import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.inputBackgroundColor};
  border: solid 2px transparent;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: border 100ms;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  input {
    width: 100%;
    padding: 15px 16px;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey[200]};
    }
  }
`;
