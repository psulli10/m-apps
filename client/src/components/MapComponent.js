import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useRef } from 'react';

const MapComponent = ({ country, currentZoomLevel }) => {

  const markerIcon = L.icon({
    // some generic icon from google
    iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [35, 35]
  });

  // const mapRef = useRef();

  // const handleFlyTo = (zoom) => {
  //   const { current = {} } = mapRef;
  //   const { leafletElement: map } = current;
  //   map.flyTo(country.lat_long, zoom, {
  //     animate: true,
  //     duration: 2 // in seconds
  //   })
  // }


  return (
    <>
    <MapContainer center={country.lat_long} zoom={country.zooms[currentZoomLevel]} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={country.lat_long} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </>
  )

}

export default MapComponent