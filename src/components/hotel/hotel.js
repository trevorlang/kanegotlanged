import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './hotel.css';

const Hotel = ({
  name,
  addressOne,
  addressTwo,
  phone,
  website,
  bookingInfo,
  notes,
}) => (
  <Container>
    <p
      className="name"
      dangerouslySetInnerHTML={{
        __html: name,
      }}
    />
    <p className="address">
      {addressOne}
      <br />
      {addressTwo}
    </p>
    <div className="line">
      <p className="phone">
        <a href={`tel:${phone}`}>{phone}</a>
      </p>
      <p className="web">
        <a href={website}>Website</a>
      </p>
    </div>
    <p
      className="booking"
      dangerouslySetInnerHTML={{
        __html: bookingInfo,
      }}
    />
    {notes && <p className="notes">{notes}</p>}
  </Container>
);

Hotel.defaultProps = {
  notes: null,
};

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  addressOne: PropTypes.string.isRequired,
  addressTwo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  bookingInfo: PropTypes.string.isRequired,
  notes: PropTypes.oneOf([PropTypes.string, PropTypes.null]),
};

export default Hotel;
