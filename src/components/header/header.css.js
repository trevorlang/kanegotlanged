import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #412b52;
    transition: color 0.2s ease;
    text-decoration: none;
    font-size: 1.125rem;

    &:hover {
      color: #7d6590;
    }

    ${({ location }) =>
      location.pathname === '/' &&
      `
      color: #fff;

      &:hover {
        color: rgba(255,255,255, 0.8);
      }
    `}
  }
`;

export const LogoLink = styled(Link)`
  margin-bottom: 0.5rem;

  h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.1em;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;
