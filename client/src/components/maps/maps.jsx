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

  onMarkerClick = (props, marker, e) => {
    console.log(props, marker);

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

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
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker
        onClick={this.onMarkerClick} 
        name={"I'm Here!!"} 
        icon = {{url:'/img/dog-head.png'}}/>
   
        <Marker
          onClick={this.onMarkerClick}
          name={"PETZ AUGUSTA"}
          position={{ lat: -23.561954, lng: -46.664894 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"MASP SP"}
          position={{ lat: -23.560627, lng: -46.655796 }}
        />

        <Marker
          onClick={this.onMarkerClick}
          name={"COBASI"}
          position={{ lat: -23.54061, lng: -46.688789 }}
        />
  
        <Marker
          onClick={this.onMarkerClick}
          name={"MAMAPET"}
          position={{ lat: -23.559218, lng: -46.664949 }}
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
