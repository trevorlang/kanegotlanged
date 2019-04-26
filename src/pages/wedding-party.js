import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import WeddingPartyGallery from 'components/wedding-party-gallery';
import { graphql } from 'gatsby';

const returnImageData = node => ({
  name: node.name,
  url: node.publicURL,
});

const WeddingParty = ({ data }) => (
  <Layout>
    <Title as="h2" size="large">
      {data.weddingPartyJson.title}
    </Title>
    <WeddingPartyGallery
      partyPeople={data.weddingPartyJson.partyPeople}
      images={data.allFile.edges.map(edge => returnImageData(edge.node))}
    />
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
      partyPeople {
        name
        role
        imageName
      }
    }
    allFile(filter:{absolutePath: {regex: "/(wedding-party)/.*\\.jpg$/"}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;
