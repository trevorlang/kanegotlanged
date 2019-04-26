import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './copy.css';

const Copy = ({ children }) => {
  return <Text>{children}</Text>;
};

Copy.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Copy;
