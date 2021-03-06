import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import Nav from 'components/footer/nav';

const Footer = ({ location = {} }) => (
  <Container location={location}>
    <Nav />
    <p className="copyright">&copy; {new Date().getFullYear()} Trevor Lang</p>
  </Container>
);

Footer.defaultProps = {
  location: {},
};

Footer.propTypes = {
  location: PropTypes.shape({}),
};

export default Footer;
