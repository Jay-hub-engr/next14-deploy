import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png',
});

const position: [number, number] = [39.7392, -104.9903]; // Coordinates for Denver, CO

const ServiceAreaMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      const map = L.map(mapRef.current).setView(position, 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker(position).addTo(map)
        .bindPopup('Majestic Drywall & Paint <br /> Denver, CO')
        .openPopup();
      leafletMapRef.current = map;
    }

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
  );
};

export default ServiceAreaMap;
