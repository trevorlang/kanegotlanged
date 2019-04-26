import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  margin: 0 auto;
  padding: 1.5rem 0;

  ${MEDIA.MIN_TABLET`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    
    &:first-of-type {
      border-right: 2px solid #9579AB;
    }
  `};
`;
