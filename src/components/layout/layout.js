import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import { Container } from './layout.css';

const Layout = ({ data, children, location }) => console.log(data) || (
  <div>
    <GlobalStyle />
    <Head />
    <Container>
      <Header title={data.site.siteMetadata.siteTitle} location={location} />
      {children}
    </Container>
  </div>
);

Layout.defaultProps = {
  location: {},
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.shape({}),
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
