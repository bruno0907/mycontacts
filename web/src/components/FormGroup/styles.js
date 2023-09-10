import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  small {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.danger.main};
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
`;
