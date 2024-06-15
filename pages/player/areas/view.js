import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { MenuPlayer } from '../../../components';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export const Page = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <MenuPlayer />
  </div>
);

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker

  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div className="font-body text-sm min-h-screen bg-gray-100 flex">
        <MenuPlayer />
        <div className="font-body text-sm min-h-screen bg-gray-100 flex">
          <Map
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={
              {
                lat: 44.440987,
                lng: 26.148010
              }
            }
          >
            <Marker position={{ lat: 44.4470, lng: 26.097301 }}
              onClick={this.onMarkerClick}
              name={'Sala Ion Anghelescu'} />

            <Marker position={{ lat: 44.46278, lng: 26.1234 }}
              onClick={this.onMarkerClick}
              name={'Sala Tei'} />
            <Marker position={{ lat: 44.446443, lng: 26.088721 }}
              onClick={this.onMarkerClick}
              name={'Sala WorldClass'} />
            <Marker position={{ lat: 44.448813, lng: 26.097799 }}
              onClick={this.onMarkerClick}
              name={'Stanislav Cihovschi'} />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAz_EYwUxYwy1RWJHgFwcxjAk8Gtr-pxTs'
})(MapContainer);


