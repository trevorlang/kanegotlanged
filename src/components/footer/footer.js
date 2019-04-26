import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import Nav from 'components/footer/nav';

const Footer = ({ location = {} }) => (
  <Container location={location}>
    <Nav />
  </Container>
);

Footer.defaultProps = {
  location: {},
};

Footer.propTypes = {
  location: PropTypes.shape({}),
};

export default Footer;
