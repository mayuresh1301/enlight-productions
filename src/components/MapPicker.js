import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import { query } from "firebase/firestore";

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

    const Geocoder = () => {
        const map = useMap();

        useEffect(() => {
            let geocoder = L.Control.Geocoder.nominatim();

            const control = L.Control.geocoder({
                query: "",
                placeholder: "Search for a location",
                defaultMarkGeocode: false,
                geocoder, 
            })
            .on('markgeocode', function(e) {
                const latlng = e.geocode.center;
                map.flyTo(latlng, 13);
                setMarkerPosition(latlng);
                onLocationSelect(latlng);
                //map.setView(latlng, 13);
            })
            .addTo(map);

            return () => {
                map.removeControl(control);
            }
        }, [map]);

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
            <Geocoder />
            <MapEvents />
            <Marker position={markerPosition} />
        </MapContainer>
    );
};

export default MapPicker;