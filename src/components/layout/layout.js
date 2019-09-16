import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';
import GlobalStyle from 'global.css.js';
import { Container } from './layout.css';

const Layout = ({ data, children, location }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Container>
      <Header
        title={data.site.siteMetadata.siteTitleShort}
        location={location}
      />
      {children}
      {location.pathname !== '/' && <Footer />}
    </Container>
  </div>
);

Layout.defaultProps = {
  location: {},
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
            siteTitleShort
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
