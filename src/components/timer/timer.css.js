import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  .timer {
    margin-top: 3.5em;
    font-size: 4vw;
    color: #fff;
    font-weight: 200;
    font-family: 'Montserrat', sans-serif;

    ${MEDIA.MIN_TABLET`
      margin-top: 1.5em;
      font-size: 1.75rem;
    `};

    strong {
      font-weight: 300;
    }
  }
`;
