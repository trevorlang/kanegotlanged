import React from 'react';
import PropTypes from 'prop-types';
import { Container, PrimaryTop, PrimaryBottom, Secondary } from './intro.css';

const Intro = ({ primary, secondary }) => (
  <Container>
    <h2>
      <PrimaryTop>
        <span>{primary}</span>
      </PrimaryTop>
      <PrimaryBottom>
        <span>{secondary}</span>
      </PrimaryBottom>
    </h2>
    <Secondary>November 1, 2019 &bull; Front Royal, Virginia</Secondary>
  </Container>
);

Intro.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

export default Intro;
