import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import BoxSplit from 'components/box-split';
import BoxSplitWrap from 'components/box-split-wrap';
import RegistryLink from 'components/registry-link';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Registry = ({ data }) => {
  const [bedBathBeyondImg, REIImg] = ['BedBathBeyond', 'REI'].map(
    name =>
      data.allFile.edges.filter(edge => edge.node.name === name)[0].node
        .publicURL
  );

  return (
    <Layout>
      <Title as="h2" size="large">
        {data.registryJson.title}
      </Title>
      <Box>
        <div
          dangerouslySetInnerHTML={{
            __html: data.registryJson.content.childMarkdownRemark.html,
          }}
        />
      </Box>
      <BoxSplitWrap>
        <BoxSplit border={false}>
          <RegistryLink
            title="Bed Bath and Beyond Gift Registry"
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547087159"
          >
            <img
              alt="Bed Bath and Beyond Gift Registry"
              src={bedBathBeyondImg}
            />
          </RegistryLink>
        </BoxSplit>
        <BoxSplit>
          <RegistryLink
            title="REI Gift Registry"
            href="https://www.myregistry.com/rei/wedding-registry/Jackie-Kane-and-Trevor-Lang-ARVADA-CO/1872021"
          >
            <img alt="REI Gift Registry" src={REIImg} />
          </RegistryLink>
        </BoxSplit>
      </BoxSplitWrap>
    </Layout>
  );
};

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
    allFile(filter:{absolutePath: {regex: "/(registry)/.*\\.png$/"}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;
