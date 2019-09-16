import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import BoxSplit from 'components/box-split';
import BoxSplitWrap from 'components/box-split-wrap';
import Map from 'components/map';
import Airport from 'components/airport';
import Hotel from 'components/hotel';
import { graphql } from 'gatsby';
import { locations } from 'constants/locations';

const { venue, airport, holidayInn, hamptonInn } = locations;

const insertLineBreak = (string, indexOfBreak) => {
  const split = string.split(' ');
  split.splice(indexOfBreak, 0, '<br>');
  return split.join(' ');
};

const accommodationsTravel = ({ data }) => (
  <Layout>
    <Title as="h2" size="large">
      {data.accommodationsTravelJson.title}
    </Title>
    <Box>
      <h3>Hotel Information</h3>
      <div
        dangerouslySetInnerHTML={{
          __html:
            data.accommodationsTravelJson.hotelInfo.childMarkdownRemark.html,
        }}
      />
    </Box>
    <BoxSplitWrap>
      <BoxSplit>
        <Hotel
          name={insertLineBreak(holidayInn.name, 5)}
          addressOne={holidayInn.addressLineOne}
          addressTwo={holidayInn.addressLineTwo}
          phone={holidayInn.phone}
          website={holidayInn.web}
          bookingInfo={holidayInn.info}
          notes={null}
        />
      </BoxSplit>
      <BoxSplit>
        <Hotel
          name={hamptonInn.name}
          addressOne={hamptonInn.addressLineOne}
          addressTwo={hamptonInn.addressLineTwo}
          phone={hamptonInn.phone}
          website={hamptonInn.web}
          bookingInfo={hamptonInn.info}
          notes={null}
        />
      </BoxSplit>
    </BoxSplitWrap>
    <Box pushTop={true}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            data.accommodationsTravelJson.travelInfo.childMarkdownRemark.html,
        }}
      />
      <Airport
        name={airport.name}
        addressOne={airport.addressLineOne}
        addressTwo={airport.addressLineTwo}
      />
    </Box>
    <Map
      center={{
        lat: 38.9786022,
        lng: -78.1606327,
      }}
      zoom={12}
      markers={[
        {
          lat: airport.location.lat,
          lng: airport.location.lng,
          location: airport.name,
        },
        {
          lat: holidayInn.location.lat,
          lng: holidayInn.location.lng,
          location: holidayInn.name,
        },
        {
          lat: hamptonInn.location.lat,
          lng: hamptonInn.location.lng,
          location: hamptonInn.name,
        },
        {
          lat: venue.location.lat,
          lng: venue.location.lng,
          location: venue.name,
        },
      ]}
    />
  </Layout>
);

accommodationsTravel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default accommodationsTravel;

export const query = graphql`
  query accommodationsTravelQuery {
    accommodationsTravelJson {
      title
      hotelInfo {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      travelInfo {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
