import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { MapMarkerContainer, MapLoadingContainer } from './map.css';

export const MapLoading = () => (
  <MapLoadingContainer>Loading...</MapLoadingContainer>
);

const MapMarker = props => (
  <MapMarkerContainer hover={props.$hover}>
    <p className="location">{props.location}</p>
    <p className="title">{props.label}</p>
  </MapMarkerContainer>
);

MapMarker.defaultProps = {
  $hover: false,
};

MapMarker.propTypes = {
  $hover: PropTypes.bool,
  location: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 0,
    markers: [],
  };

  constructor(props) {
    super(props);
  }

  createMapOptions() {
    return {
      fullscreenControl: false,
      gestureHandling: 'cooperative',
      styles: [
        {
          stylers: [
            { saturation: -100 },
            { gamma: 0.8 },
            { lightness: 4 },
            { visibility: 'on' },
          ],
        },
      ],
    };
  }

  render() {
    const { markers } = this.props;

    const mapMarkers = markers.map(marker => (
      <MapMarker
        key={marker.location}
        lat={marker.lat}
        lng={marker.lng}
        location={marker.location}
        label={marker.label}
      />
    ));

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '25rem', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${process.env.GATSBY_MAPS_API_KEY}`,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.createMapOptions}
        >
          {mapMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  markers: PropTypes.array.isRequired,
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;
