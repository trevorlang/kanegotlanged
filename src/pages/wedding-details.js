import React from 'react';
import PropTypes from 'prop-types';
import BoxSplit from 'components/box-split';
import BoxSplitWrap from 'components/box-split-wrap';
import Layout from 'components/layout';
import Title from 'components/title';
import WeddingDate from 'components/wedding-date';
import WeddingInfo from 'components/wedding-info';
import Map from 'components/map';
import { graphql } from 'gatsby';
import { locations } from 'constants/locations';
import { events } from 'constants/events';

const { venue, airport } = locations;
const { reception } = events;

const WeddingDetails = ({ data }) => (
  <Layout>
    <Title as="h2" size="large">
      {data.weddingDetailsJson.title}
    </Title>
    <BoxSplitWrap>
      <BoxSplit>
        <WeddingDate>
          <p>
            <span className="date">{reception.date}</span>
            <span className="time">
              {reception.time.hour}{' '}
              <span className="m">{reception.time.m}</span>
            </span>
            <span className="reception">{reception.meta.note}</span>
          </p>
        </WeddingDate>
      </BoxSplit>
      <BoxSplit>
        <WeddingInfo>
          <p>
            <span className="location">{venue.name}</span>
            <span>{venue.addressLineOne}</span>
            <span>{venue.addressLineTwo}</span>
            <span>Ceremony: Outdoor (weather permitting)</span>
            <span>Attire: Cocktail Attire</span>
          </p>
        </WeddingInfo>
      </BoxSplit>
    </BoxSplitWrap>
    <Map
      center={{
        lat: 38.967026,
        lng: -77.8172021,
      }}
      zoom={9}
      markers={[
        {
          lat: venue.location.lat,
          lng: venue.location.lng,
          location: venue.name,
          label: 'Wedding Venue',
        },
        {
          lat: airport.location.lat,
          lng: airport.location.lng,
          location: airport.name,
          label: 'Nearest Airport',
        },
      ]}
    />
  </Layout>
);

WeddingDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WeddingDetails;

export const query = graphql`
  query WeddingDetailsQuery {
    weddingDetailsJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
