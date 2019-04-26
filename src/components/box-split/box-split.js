import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box-split.css';

const BoxSplit = ({ children }) => <Container>{children}</Container>;

BoxSplit.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxSplit;
