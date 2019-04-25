import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;
    font-size: 1.25rem;

    &:hover {
      color: inherit;
    }

    ${({ location }) => location.pathname === '/' && `
      color: #fff;

      &:hover {
        color: rgba(255,255,255, 0.8);
      }
    `}
  }
`;
