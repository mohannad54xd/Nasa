import { useEffect } from 'react';

const SolarSystem = () => {
  useEffect(() => {
    // Open the standalone solar system page in a new tab to avoid
    // React Router trying to match the path inside the SPA.
    const url = '/solar/main.html';
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
      // Fallback to full navigation if popup blocked
      window.location.href = url;
    }
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
