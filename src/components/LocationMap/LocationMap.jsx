import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationMap.css";

const LocationMap = () => {
  return (
    <div className="map">
      <MapContainer
        center={[25.1231, 89.5828]}
        zoom={10}
        scrollWheelZoom={false}
        className="max-h-[100%]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.1231, 89.5828]}>
          <Popup>Dream Houses</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
