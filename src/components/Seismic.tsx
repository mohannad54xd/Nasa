import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Background from './Background';
import Stars from './Stars';
import Navbar from './Navbar';
import 'leaflet/dist/leaflet.css';

const Map = lazy(() =>
  import('react-leaflet').then(mod => {
    const { MapContainer, TileLayer } = mod;
    const MapComponent = (props: React.ComponentProps<typeof MapContainer>) => (
      <div className="h-full w-full relative">
        <MapContainer
          {...props}
          className="h-full w-full rounded-lg [&_.leaflet-control-zoom]:!border-none [&_.leaflet-control-zoom]:!bg-white/10 [&_.leaflet-control-zoom]:backdrop-blur-md [&_.leaflet-control-zoom-in]:!text-white [&_.leaflet-control-zoom-out]:!text-white [&_.leaflet-control-zoom-in]:!bg-white/10 [&_.leaflet-control-zoom-out]:!bg-white/10 [&_.leaflet-control-zoom-in]:!border-white/20 [&_.leaflet-control-zoom-out]:!border-white/20"
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
          />
        </MapContainer>
      </div>
    );
    return { default: MapComponent };
  })
);

const Seismic = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <Background />
      <Stars />
      <div className="relative z-10 container mx-auto px-4 py-12 mt-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
          animate={{ 
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 100%"
          }}
        >
          Seismic Event Explorer
        </motion.h2>

        <motion.div 
          className="backdrop-blur-md bg-white/5 rounded-2xl p-6 mb-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-400">
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-400">
                End Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-400">
                Minimum Magnitude
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-400">
                Maximum Results
              </label>
              <input
                type="number"
                min="1"
                max="500"
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
          </form>
        </motion.div>

        <motion.div 
          className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-[500px] w-full">
            <Suspense
              fallback={
                <div className="h-full w-full flex items-center justify-center bg-gray-900/50 rounded-lg">
                  <div className="text-purple-400 animate-pulse">Loading map...</div>
                </div>
              }
            >
              <Map
                center={[0, 0]}
                zoom={2}
                style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
              />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Seismic;