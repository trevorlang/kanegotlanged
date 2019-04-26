import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, pushTop }) => (
  <Container pushTop={pushTop}>{children}</Container>
);

Box.defaultProps = {
  pushTop: false,
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  pushTop: PropTypes.bool,
};

export default Box;
