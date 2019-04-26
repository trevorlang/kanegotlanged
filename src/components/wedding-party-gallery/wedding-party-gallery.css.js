import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.ul`
  margin: 0 3%;
  margin-bottom: 3rem;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  ${MEDIA.MIN_TABLET`
    margin: 0 6%;
    margin-bottom: 3rem;
  `};

  ${MEDIA.MIN_DESKTOP`
    margin: 0 10%;
    margin-bottom: 3rem;
  `};
`;

export const PersonContainer = styled.li`
  width: 50%;
  padding: 1rem;
  color: #5a4a5a;
  text-align: center;

  &:hover img {
    transform: scale(1.05)
    transition: transform 0.2s ease-in-out;
  }

  ${MEDIA.MIN_TABLET`
    width: 25%;
    padding: 1rem;
  `};
`;

export const ImageContainer = styled.img`
  border: 1px solid #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.21);
  border-radius: 3px;
  overflow: hidden;
`;

export const NameContainer = styled.p`
  margin: 0;
  margin-bottom: 0.125rem;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;

  ${MEDIA.MIN_TABLET`
    font-size: 0.9375rem;
    line-height: rem;
  `};
`;

export const RoleContainer = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 0.75rem;

  ${MEDIA.MIN_TABLET`
    font-size: 0.875rem;
    line-height: 1em;
  `};
`;
