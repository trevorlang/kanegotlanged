import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/our-story">Our Story</Link>
      </li>
      <li>
        <Link to="/wedding-details">Wedding Details</Link>
      </li>
      <li>
        <Link to="/wedding-party">Wedding Party</Link>
      </li>
      <li>
        <Link to="/accomodations-travel">Accomodations &amp; Travel</Link>
      </li>
      <li>
        <Link to="/registry">Registry</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
