import React from 'react';
import Transition from 'components/transition';
import PropTypes from 'prop-types';
import MobileNav from 'components/mobile-nav';

const wrapPageElement = ({ element, props }) => (
  <div id="outer-container">
    <MobileNav />
    <main id="page-wrap">
      <Transition {...props}>{element}</Transition>
    </main>
  </div>
);

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any,
};

export default wrapPageElement;
