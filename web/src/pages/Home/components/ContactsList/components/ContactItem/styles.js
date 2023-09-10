import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.inputBackgroundColor};
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
`;

export const ContactDetails = styled.a`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    strong {
      line-height: 125%;
    }

    small {
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary.main};
      padding: 3px 6px;
      border-radius: ${({ theme }) => theme.radius.sm};
      background-color: ${({ theme }) => theme.colors.primary.lighter};
      text-transform: uppercase;
    }

  }

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.grey[100]};
  }
`;

export const ContactActions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3px;
  background: inherit;

  button, a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: inherit;

    &:hover {
      img {
        filter: opacity(.85);
      }
    }
    &:active {
      img {
        filter: brightness(.85);
      }
    }
  }
`;

export const ModalContent = styled.div`
  width: 80%;
  max-width: 450px;
  padding: 24px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: ${({ theme }) => theme.radius.sm};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.danger.main}
  }

  p {
    margin-bottom: 32px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }
`;
