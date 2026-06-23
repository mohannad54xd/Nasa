import { useEffect } from 'react';

const SolarSystem = () => {
  useEffect(() => {
    // Load the solar system page in an iframe or redirect
    window.location.href = '/solar/main.html';
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="flex items-center justify-center h-screen">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-blue-400 animate-pulse">Loading Solar System Explorer...</p>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
