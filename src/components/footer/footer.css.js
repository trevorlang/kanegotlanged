import styled from 'styled-components';
import img from '../../images/background.jpg';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #3b254c;
  background-image: url(${img});
  border-bottom: 7px solid #cfa562;

  ${({ location }) =>
    location.pathname === '/' &&
    `
    display: none;
  `}

  .copyright {
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: #fff;
    font-size: 0.625rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }
`;
