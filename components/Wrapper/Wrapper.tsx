import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(-70px + 100vh);
  background-color: white;
  [data-main='logout'] {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
