import React from 'react';
import PropTypes from 'prop-types';
// import posed from 'react-pose';
import { Container, LogoLink } from './header.css';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
// const AnimatedContainer = posed.div({
//   enter: {
//     y: 0,
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     y: '-100%',
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
// });

const Header = ({ title, location }) => (
  <Container location={location}>
    {location.pathname !== '/' && (
      <LogoLink to="/">
        <h1>{title}</h1>
      </LogoLink>
    )}
    <Nav />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Header;
