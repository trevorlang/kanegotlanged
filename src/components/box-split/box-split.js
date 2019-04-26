import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box-split.css';

const BoxSplit = ({ children, border = true }) => (
  <Container border={border}>{children}</Container>
);

BoxSplit.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.bool,
};

export default BoxSplit;
