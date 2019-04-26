import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const AccomodationsTravel = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.accomodationsTravelJson.title}
      </Title>
      <h2 style={{ textAlign: 'center' }}>Coming soon!</h2>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data.accomodationsTravelJson.content.childMarkdownRemark.html,
        }}
      /> */}
    </Box>
  </Layout>
);

AccomodationsTravel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccomodationsTravel;

export const query = graphql`
  query AccomodationsTravelQuery {
    accomodationsTravelJson {
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
