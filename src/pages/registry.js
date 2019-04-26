import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Registry = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.registryJson.title}
      </Title>
      <h2 style={{ textAlign: 'center' }}>Coming soon!</h2>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data.registryJson.content.childMarkdownRemark.html,
        }}
      /> */}
    </Box>
  </Layout>
);

Registry.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Registry;

export const query = graphql`
  query RegistryQuery {
    registryJson {
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
