import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

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

  h4 {
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.06em;
    font-size: 0.75rem;
    color: #412b51;
  }

  ul {
    list-style-type: disc;
  }

  .pickup-time {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;

    ${MEDIA.MIN_TABLET`
      flex-direction: row;
    `};

    &__section {
      margin-bottom: 1rem;
      text-align: center;

      ${MEDIA.MIN_TABLET`
        width: 50%;
      `};
    }

    &__heading {
      margin-bottom: 0.25rem;
      color: #776284;
      font-style: italic;
      font-weight: bold;
      font-family: 'Crimson Text', 'Georgia', serif;
      font-size: 0.85rem;
    }

    &__meta {
      margin-bottom: 0;
      color: #a496ad;
      font-style: italic;
      font-size: 0.85rem;
    }
  }
`;
