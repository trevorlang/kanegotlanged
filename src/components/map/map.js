import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { locations } from 'constants/locations';
import { MapMarkerContainer } from './map.css';

const { venue } = locations;

const MapMarker = props => (
  <MapMarkerContainer hover={props.$hover}>
    <p className="location">{props.location}</p>
    <p className="title">{props.label}</p>
  </MapMarkerContainer>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: venue.location.lat,
      lng: venue.location.lng,
    },
    zoom: 11,
  };

  constructor(props) {
    super(props);
  }

  createMapOptions(maps) {
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
            key: `${process.env.MAPS_API_KEY}`,
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

export default Map;
