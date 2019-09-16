import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  margin: 0 auto;
  max-width: 360px;

  div:nth-child(even) > & {
    margin-left: 4%;
  }

  div:nth-child(odd) > & {
    margin-right: 4%;
  }

  img {
    width: 100%;
  }
`;
