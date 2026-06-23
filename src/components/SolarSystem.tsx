import { useEffect, useRef, useState } from 'react';

const SolarSystem = () => {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const timeoutRef = useRef<number>();
  const src = '/solar/main.html';

  useEffect(() => {
    setLoaded(false);
    setTimedOut(false);
    timeoutRef.current = window.setTimeout(() => {
      setTimedOut(true);
    }, 8000);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setLoaded(true);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      <iframe
        title="Solar System Explorer"
        src={src}
        className="w-full h-screen border-0"
        onLoad={handleLoad}
        allow="fullscreen"
      />

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-4">
          <div className="text-white text-center max-w-md">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-blue-400 animate-pulse">Loading Solar System Explorer...</p>
            {timedOut && (
              <p className="text-sm text-gray-300 mt-2">
                The explorer may be blocked or taking too long to load.{' '}
                <a href={src} target="_blank" rel="noreferrer" className="underline text-blue-300">
                  Open it in a new tab
                </a>
                .
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SolarSystem;
