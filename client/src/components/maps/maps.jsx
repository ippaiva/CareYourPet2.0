import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./CurrentLocation";

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
  }

  // Used to show the InfoWindow, which gives us the ability for a pop-up window showing details of the clicked place/marker

  onMarkerClick = (props, marker, e) => {
    console.log(props, marker);
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props
    });
  };

  // Used for closing the InfoWindow once a user clicks on the close button

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;

    // const service = new google.maps.places.PlacesService(map);
    // //...
  }

  mapClicked(mapProps, map, clickEvent) {
    // ...
  }
  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}>
        
        <Marker
          onClick={this.onMarkerClick}
          name={"I'm Here!!"}
          icon={{ url: "/img/dog-head.png" }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"Petz Augusta"}
          position={{ lat: -23.561954, lng: -46.664894 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Pet Gardens Club"}
          position={{ lat: -23.564725, lng: -46.655379 }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"Cobasi Augusta"}
          position={{ lat: -23.54061, lng: -46.688789 }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"Encrenquinhas Pet Shop"}
          position={{ lat: -23.567656, lng: -46.658641 }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"Pet Shop Haddog & Co."}
          position={{ lat: -23.55423, lng: -46.657682 }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"General Au Au Pet Shop"}
          position={{ lat: -23.544543, lng: -46.647418 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCFfa_Mf5TxxsPI96SJ7SCJlFB3obvgs_8"
})(MapContainer);
