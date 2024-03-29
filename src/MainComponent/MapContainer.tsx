import React from 'react';
import styled from 'styled-components';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const apiKey = 'AIzaSyDNsG2YzMNq1qbic-0Law4LYqk8ggLFfCk';

const StypedMap = styled(Map)`
  z-index: 100 !important;
`;

export const MapContainer = (props: any) => (
  <StypedMap
    google={props.google}
    zoom={14}
    initialCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    <Marker
      position={{ lat: props.latitude, lng: props.longitude }}
      title={props.street}
    />
  </StypedMap>
);

export const LoadingPanel = () => <div>Loading...</div>;

export default GoogleApiWrapper({
  apiKey: apiKey,
  LoadingContainer: LoadingPanel,
})(MapContainer);
