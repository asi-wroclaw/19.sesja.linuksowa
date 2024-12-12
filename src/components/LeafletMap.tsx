import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const LeafletMap = () => {
  const position = [51.110424, 17.059968];

  return (
    <MapContainer
      //@ts-ignore
      center={position}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height: 450, width: '100%', maxWidth: 600 }}
    >
      <TileLayer
        //@ts-ignore
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <a
            href="https://osm.org/go/0OBNAseH9--?way=101202865"
            target="_blank"
            rel="noreferrer"
          >
            Centrum Kongresowe Politechniki Wrocławskiej, budynek D-20
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
