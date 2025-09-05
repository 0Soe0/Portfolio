import { useEffect, useState } from 'react';
import { Cloud } from './Cloud';

export const ScrollClouds = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Range: 0 (top) -> 300px (clouds off-screen)
  const leftTransform = `translateX(-${Math.min(scrollY, 300)}px)`;
  const rightTransform = `translateX(${Math.min(scrollY, 300)}px)`;

  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-1/2 pointer-events-none z-20"
        style={{
          transform: leftTransform,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <Cloud size="big" amountOfBlobs={5} className="left-cloud cloud" />
      </div>
      <div
        className="fixed top-0 right-0 h-screen w-1/2 pointer-events-none z-20"
        style={{
          transform: rightTransform,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <Cloud size="big" amountOfBlobs={5} className="right-cloud cloud" />
      </div>
    </>
  );
};