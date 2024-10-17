import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapPicker = ({ onLocationSelect, defaultPosition = { lat: 40.73061, lng: -73.935242 } }) => {
    const [markerPosition, setMarkerPosition] = useState(defaultPosition);

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                setMarkerPosition(e.latlng);
                onLocationSelect(e.latlng);
            },
        });

        return null;
    }

    return (
        <MapContainer
            center={markerPosition}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer 
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapEvents />
            <Marker position={markerPosition} />
        </MapContainer>
    );
};

export default MapPicker;