import { MapContainer, TileLayer } from 'react-leaflet';

interface MapProps {
  center: [number, number];
  zoom: number;
}

const Map = ({ center, zoom }: MapProps) => {
  return (
    <div className="h-full w-full relative">
      <MapContainer 
        center={center}
        zoom={zoom}
        className="h-full w-full rounded-lg [&_.leaflet-control-zoom]:!border-none [&_.leaflet-control-zoom]:!bg-white/10 [&_.leaflet-control-zoom]:backdrop-blur-md [&_.leaflet-control-zoom-in]:!text-white [&_.leaflet-control-zoom-out]:!text-white [&_.leaflet-control-zoom-in]:!bg-white/10 [&_.leaflet-control-zoom-out]:!bg-white/10 [&_.leaflet-control-zoom-in]:!border-white/20 [&_.leaflet-control-zoom-out]:!border-white/20"
      >
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
