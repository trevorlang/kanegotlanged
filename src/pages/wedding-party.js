import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const WeddingParty = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.weddingPartyJson.title}
      </Title>
      <div
        dangerouslySetInnerHTML={{
          __html: data.weddingPartyJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

WeddingParty.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WeddingParty;

export const query = graphql`
  query WeddingPartyQuery {
    weddingPartyJson {
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
