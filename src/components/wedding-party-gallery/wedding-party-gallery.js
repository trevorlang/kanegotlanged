import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PersonContainer,
  NameContainer,
  RoleContainer,
  ImageContainer,
} from './wedding-party-gallery.css';

const WeddingPartyItem = ({ url, name, role }) => (
  <PersonContainer>
    <ImageContainer src={url} alt={name} />
    <NameContainer>{name}</NameContainer>
    <RoleContainer>{role}</RoleContainer>
  </PersonContainer>
);

WeddingPartyItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

const WeddingPartyGallery = ({ partyPeople, images }) => {
  const partyPeopleData = partyPeople.map(person => ({
    ...images.filter(image => image.name === person.imageName)[0],
    ...person,
  }));

  const partyPeopleList = partyPeopleData.map(person => (
    <WeddingPartyItem
      key={person.name}
      url={person.url}
      name={person.name}
      role={person.role}
    />
  ));

  return <Container>{partyPeopleList}</Container>;
};

WeddingPartyGallery.propTypes = {
  partyPeople: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};

export default WeddingPartyGallery;
