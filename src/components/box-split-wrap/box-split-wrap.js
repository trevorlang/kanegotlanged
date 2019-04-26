import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box-split-wrap.css';

const BoxSplitWrap = ({ children }) => <Container>{children}</Container>;

BoxSplitWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxSplitWrap;
