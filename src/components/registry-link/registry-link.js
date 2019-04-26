import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './registry-link.css';

const RegistryLink = props => (
  <Container {...props}>{props.children}</Container>
);

RegistryLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RegistryLink;
