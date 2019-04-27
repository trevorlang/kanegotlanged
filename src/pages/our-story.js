import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Copy from 'components/copy';
import { graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

let ie = null;

if (typeof window !== 'undefined') {
  ie = require('ie-version');
}

let ie = null;

if (typeof window !== 'undefined') {
  ie = require('ie-version');
}

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageContainer = styled.img`
  margin-bottom: 2.5rem;
  transform: scale(1.2);
  border: 10px solid #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.075);

  @media (min-width: 500px) {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 400px;

  .carousel-slider {
    height: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  }

  .carousel-status {
    display: none;
  }

  .carousel .slide div {
    height: 400px;
  }

  .carousel .slide img {
    height: 400px;
    object-fit: cover;
    opacity: 0.75;
    transition: all 0.2s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0);
    z-index: 0;
  }

  .carousel .slide.selected img {
    opacity: 1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: this.getHeightForWidth(),
    };
    this.onResize = this.onResize.bind(this);
  }

  getHeightForWidth() {
    const width = this.getWindowWidth();
    let widthToSet = null;

    switch (true) {
      case width > 1100:
        widthToSet = 30;
        break;

      case width > 800:
        widthToSet = 35;
        break;

      case width > 700:
        widthToSet = 50;
        break;

      case width > 500:
        widthToSet = 70;
        break;

      default:
        widthToSet = 90;
        break;
    }

    return widthToSet;
  }

  getWindowWidth() {
    if (typeof window !== 'undefined') {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
    }
  }

  onResize() {
    window.requestAnimationFrame(() => {
      this.setState({
        percentage: this.getHeightForWidth(),
      });
    });
  }

  componentWillMount() {
    this.setState({
      width: this.getWindowWidth(),
    });
  }

  componentDidMount() {
    if (typeof window !== 'undefined')
      window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined')
      window.removeEventListener('resize', this.onResize);
  }

  render() {
    const carouselImages = this.props.images.map(image => (
      <div key={image.alt}>
        <img src={image.path} alt={image.alt} />
      </div>
    ));
    
    if (ie && ie.version) return null;

    return (
      <Container>
        <Carousel
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={this.state.percentage}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          swipeable={false}
        >
          {carouselImages}
        </Carousel>
      </Container>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.array.isRequired,
};

const OurStory = ({ data }) => {
  const carouselImages = data.allFile.edges
    .filter(edge => edge.node.name !== 'our-story-header')
    .map((edge, i) => ({
      path: edge.node.publicURL,
      alt: `Image carousel slide ${i}`,
    }));

  const headerImagePath = data.allFile.edges.filter(
    edge => edge.node.name === 'our-story-header'
  )[0].node.publicURL;

  return (
    <Layout>
      <Box>
        <Title as="h2" size="large">
          {data.ourStoryJson.title}
        </Title>
        <Copy>
          <ImageContainer src={headerImagePath} alt="Engagement" />
          <div
            dangerouslySetInnerHTML={{
              __html: data.ourStoryJson.content.childMarkdownRemark.html,
            }}
          />
        </Copy>
      </Box>
      <Slider images={carouselImages} />
    </Layout>
  );
};

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
    allFile(filter:{absolutePath: {regex: "/(carousel|our-story-photo)/.*\\.jpg$/"}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;
