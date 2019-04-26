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

const { venue, airport } = locations;

const WeddingDetails = ({ data }) => (
  <Layout>
    <Title as="h2" size="large">
      {data.weddingDetailsJson.title}
    </Title>
    <BoxSplitWrap>
      <BoxSplit>
        <WeddingDate>
          <p>
            <span className="date">Friday, November 1, 2019</span>
            <span className="time">4:00 PM</span>
            <span className="reception">Reception to follow</span>
          </p>
        </WeddingDate>
      </BoxSplit>
      <BoxSplit>
        <WeddingInfo>
          <p>
            <span className="location">Shenandoah Valley Golf Club</span>
            <span>134 Golf Club Circle</span>
            <span>Front Royal, VA 22630</span>
            <span>Ceremony: Outdoor, weather permitting</span>
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
