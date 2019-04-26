import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  text-align: center;
  color: #5a4a5a;
  max-width: 30rem;

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

  .phone {
    margin-right: 0.5rem;
    margin-bottom: 0;
  }

  .web {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }

  .booking {
    max-width: 21rem;
    margin-top: 0.75rem;
    margin-bottom: 0;
    font-size: 0.825rem;
    text-align: left;
  }

  .notes {
    margin-bottom: 0;
    font-size: 0.825rem;
  }

  .line {
    display: flex;
    justify-content: center;
    margin: 0 0.5rem;
  }
`;
