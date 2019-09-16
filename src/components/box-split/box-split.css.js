import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1.5rem;

  &:nth-child(odd) {
    padding-right: 0;
  }

  &:nth-child(even) {
    padding-left: 0;
  }

  ${MEDIA.MIN_TABLET`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;

    ${props => {
      if (props.border)
        return `&:first-of-type {
        border-right: 2px solid #9579AB;
      }`;
    }}
  `};
`;
