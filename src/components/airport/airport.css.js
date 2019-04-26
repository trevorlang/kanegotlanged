import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  text-align: center;
  color: #5a4a5a;
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 3rem;

  a {
    color: #bf9755;
  }

  a:hover {
    color: #9c783b;
  }

  .name {
    margin-bottom: 0;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
  }

  .address {
    margin-bottom: 0.5rem;
    line-height: 1.2rem;
  }

  .info {
    max-width: 20rem;
    margin-top: 0.75rem;
    margin-bottom: 0;
    font-size: 0.825rem;
    text-align: left;
  }
`;
