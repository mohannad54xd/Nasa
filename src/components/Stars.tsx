import  { useEffect, useRef } from 'react';

const Stars = () => {
  const starsRef1 = useRef<HTMLDivElement>(null);
  const starsRef2 = useRef<HTMLDivElement>(null);
  const starsRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = (container: HTMLElement, count: number, maxSize: number) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * maxSize + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Set initial opacity
        star.style.opacity = '0';
        
        container.appendChild(star);
      }
    };

    if (starsRef1.current) createStars(starsRef1.current, 50, 1);
    if (starsRef2.current) createStars(starsRef2.current, 15, 3);
    if (starsRef3.current) createStars(starsRef3.current, 25, 2);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div ref={starsRef1} className="stars-layer" />
      <div ref={starsRef2} className="stars-layer" />
      <div ref={starsRef3} className="stars-layer" />
    </div>
  );
};

export default Stars;