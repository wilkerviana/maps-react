import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "200%",
  position: "absolute",
  left: "-25px",
  top: "25px"
};

const MapContainer = ({
  google,
  onMarkerClick,
  onInfoWindowClose,
  address,
  location
}) => (
  <Map
    google={google}
    zoom={15}
    center={{
      lat: location.lat,
      lng: location.lng
    }}
    style={style}
  >
    <Marker
      onClick={onMarkerClick}
      name={"Current location"}
      position={{
        lat: location.lat,
        lng: location.lng
      }}
    />

    <InfoWindow onClose={onInfoWindowClose}>
      <div>
        <h1>{address.street}</h1>
      </div>
    </InfoWindow>
  </Map>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyDURrbF6Z5c334ckP_0j0Zl10jM-g2-0H4"
})(MapContainer);
