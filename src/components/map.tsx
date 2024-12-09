"use client";

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set the default icon options
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png',
});

const denverMetroCoords: [number, number][] = [
  [40.02027552849653, -104.62682686291515], // Northwest
  [38.70308819487435, -104.60915112457408], // Southeast
  [38.800022664961126, -105.23451593208087], // Southwest
  [40.20715486761172, -105.5309286261677], // Northeast
  [40.02027552849653, -104.62682686291515]  // Closing the loop
];



const ServiceAreaMap = () => {
  const mapRef = useRef<any>(null); // Ref to store the map instance
  const center: [number, number] = [39.7392, -104.9903]; // Coordinates for Denver, CO
  const zoom = 9;

  // Ensuring the map is initialized only once
  useEffect(() => {
    if (mapRef.current && !mapRef.current._map) {
      // Initialize map only once if it's not already initialized
      const map = mapRef.current;
      map._map = map._container._map; // Assign the map to the ref if it doesn't exist
    }
  }, []); // Empty array ensures this effect runs only once when the component mounts

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '400px', width: '100%' }}
      whenReady={() => {
        // Access map instance here if needed
        const map = mapRef.current?._map;
        console.log('Map Initialized:', map);
      }}
      ref={mapRef} // Ensure mapRef is attached to MapContainer
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Add locations */}
      {/* Draw the service area polygon */}
      <Polygon positions={denverMetroCoords} color="blue" />
    </MapContainer>
  );
};

export default ServiceAreaMap;
