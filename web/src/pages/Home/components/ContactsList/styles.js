import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    margin-bottom: 16px;
  }
`;
