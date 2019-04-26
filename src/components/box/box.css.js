import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem 4rem;
  padding-top: 0;
  max-width: 700px;

  ${props => {
    return props.pushTop ? 'margin-top: 2rem;' : null;
  }}

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #412b51;
  }
`;
