import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: block;
  color: #5a4a5a;
  text-align: center;

  p {
    margin: 0;
    padding: 0;
  }

  span {
    display: block;
  }

  .location {
    font-weight: 700;
  }

  ${MEDIA.MIN_TABLET`
    text-align: left;
  `};
`;
