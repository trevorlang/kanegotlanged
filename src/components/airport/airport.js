import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './airport.css';

const Airport = ({ name, addressOne, addressTwo }) => (
  <Container>
    <p
      className="name"
      dangerouslySetInnerHTML={{
        __html: name,
      }}
    />
    <p className="address">
      {addressOne}
      <br />
      {addressTwo}
    </p>
  </Container>
);

Airport.defaultProps = {
  notes: null,
};

Airport.propTypes = {
  name: PropTypes.string.isRequired,
  addressOne: PropTypes.string.isRequired,
  addressTwo: PropTypes.string.isRequired,
};

export default Airport;
