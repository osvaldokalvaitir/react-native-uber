import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAGs6J8iZJ7mZeP6de9SyenOcA6MwFrwJc"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
