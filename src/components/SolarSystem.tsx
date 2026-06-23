import { useEffect, useState } from 'react';

const SolarSystem = () => {
  const [loaded, setLoaded] = useState(false);
  const src = '/solar/main.html';

  useEffect(() => {
    setLoaded(false);
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      <iframe
        title="Solar System Explorer"
        src={src}
        className="w-full h-screen border-0"
        onLoad={() => setLoaded(true)}
      />

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-blue-400 animate-pulse">Loading Solar System Explorer...</p>
            <p className="text-sm text-gray-300 mt-2">If the iframe is blocked, <a href={src} target="_blank" rel="noreferrer" className="underline">open in new tab</a>.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolarSystem;
