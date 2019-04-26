import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './wedding-date.css';

const WeddingInfo = ({ children }) => <Container>{children}</Container>;

WeddingInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WeddingInfo;
