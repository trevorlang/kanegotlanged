import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em
  margin-bottom: 3rem;
  color: #cfa562;
  font-size: 1.35rem;
  font-weight: 300;

  ${MEDIA.MIN_TABLET`
    font-size: 2.25rem;
    font-weight: 100;
  `};
`;
