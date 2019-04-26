import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  font-weight: 100;
  font-size: 3rem;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em
  margin: 0 -3em;
  margin-bottom: 3rem;
  color: #cfa562;

  ${MEDIA.TABLET`
    font-size: 1.2rem;
  `};
`;
