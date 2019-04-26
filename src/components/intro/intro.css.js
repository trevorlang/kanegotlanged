import styled from 'styled-components';
import img from '../../images/background.jpg';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3b254c;
  background-image: url(${img});
  background-position: center center;
  z-index: -1;
`;

export const InnerContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 1.75rem;
  border: 4px solid #cfa562
  z-index: 1;
`;

export const PrimaryTop = styled.span`
  display: block;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 6.5vw;

  @media (min-width: 500px) {
    font-size: 2.5rem;
  }

  @media (min-width: 800px) {
    font-size: 4rem;
  }
`;

export const PrimaryBottom = styled.span`
  margin-bottom: 4rem;
  display: block;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 4.5vw;

  @media (min-width: 500px) {
    font-size: 1.75rem;
  }

  @media (min-width: 800px) {
    font-size: 2.75rem;
  }
`;

export const Secondary = styled.span`
  font-family: 'Crimson Text', serif;
  color: #fff;
  font-size: 4vw;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }

  @media (min-width: 800px) {
    font-size: 1.75rem;
  }

  .bullet {
    margin: 0 0.75rem;
  }
`;
