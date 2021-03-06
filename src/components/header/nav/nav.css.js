import styled from 'styled-components';

export const Container = styled.nav`
  display: none;

  @media (min-width: 600px) {
    display: block;

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding: 0;

      li {
        margin: 0 1em;
        font-size: 1.3rem;

        a {
          white-space: nowrap;
        }
      }
    }
  }
`;
