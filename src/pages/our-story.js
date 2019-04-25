import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const OurStory = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.ourStoryJson.title}
      </Title>
      <div
        dangerouslySetInnerHTML={{
          __html: data.ourStoryJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

OurStory.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OurStory;

export const query = graphql`
  query OurStoryQuery {
    ourStoryJson {
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
