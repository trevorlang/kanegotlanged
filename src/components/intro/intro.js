import React from 'react';
import PropTypes from 'prop-types';
import Timer from 'components/timer';
import {
  Container,
  InnerContainer,
  PrimaryTop,
  PrimaryBottom,
  Secondary,
} from './intro.css';

const Intro = ({ primary, secondary }) => (
  <Container>
    <InnerContainer />
    <h2>
      <PrimaryTop>
        <span>{primary}</span>
      </PrimaryTop>
      <PrimaryBottom>
        <span>{secondary}</span>
      </PrimaryBottom>
    </h2>
    <Secondary>
      November 1, 2019 <span className="bullet">&bull;</span> Front Royal,
      Virginia
    </Secondary>
    <Timer date={new Date('November 1, 2019')} />
  </Container>
);

Intro.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

export default Intro;
