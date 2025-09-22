import { useEffect, useState, useRef } from 'react';
import { Cloud } from './Cloud';

type scrollCloudsProps = {
  className?: string;
}

export const ScrollClouds = ({className = ''} : scrollCloudsProps) => {
  const [cloudProgress, setCloudProgress] = useState(0);
  const [, setIsAnimating] = useState(false);
  const maxScroll = window.innerWidth;
  const accumulatedScroll = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events when we're at the top of the page
      if (window.scrollY === 0) {
        e.preventDefault();
        
        const scrollDelta = e.deltaY;
        const sensitivity = 2; // Adjust this to control how fast clouds move
        
        accumulatedScroll.current += scrollDelta;
        
         // Calculate progress (0 to 1)
         const progress = Math.max(0, Math.min(1, accumulatedScroll.current / (maxScroll * sensitivity)));

         setCloudProgress(progress);
         // used to re-render the component, it re-runs the useEffect because the dependency array (maxScroll) is affected by the re-render, causes
         // the event listeners in the useEffect to be refreshed with the latest values
         setIsAnimating(progress < 0.6);
         
         // If clouds are fully out, allow page to scroll
         if (progress >= 0.6) {
           document.body.style.overflow = "";
           // Programmatically scroll the page down a bit to trigger normal scrolling
           //window.scrollTo(0, 1);
           // apply the leftover scroll to the page right away
           window.scrollTo(0, window.scrollY + e.deltaY);

           // make sure clouds stay at 100%
           setCloudProgress(0.6);
         }
      }
    };

    const handleScroll = () => {
      // If user scrolls back to the very top, reset everything
      if (window.scrollY === 0) {
        accumulatedScroll.current = 0;
        setCloudProgress(0);
        setIsAnimating(true);
        document.body.style.overflow = "hidden";
      }
    };

    // Initially lock scroll
    document.body.style.overflow = "hidden";
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = "";
    };
  }, [maxScroll]);

  // Range: 0 (top) -> 100vw (clouds off-screen)
  const cloudOffset = cloudProgress * maxScroll;
  const leftTransform = `translateX(-${cloudOffset}px)`;
  const rightTransform = `translateX(${cloudOffset}px)`;

  return (
    <>
      <div className={className}>
        <div
          className="absolute top-0 left-0 h-full w-1/2 pointer-events-none z-20"
          style={{
            transform: leftTransform,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <Cloud size="big" amountOfBlobs={5} className="cloud" />
          <Cloud size="small" amountOfBlobs={4} className="cloud top-0 left-88" />
        </div>
        <div
          className="absolute top-0 right-0 h-full w-1/2 pointer-events-none z-20"
          style={{
            transform: rightTransform,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <Cloud size="big" amountOfBlobs={5} className="cloud" />
          <Cloud size="small" amountOfBlobs={4} className="cloud bottom-20 right-88" />
        </div>
      </div>
    </>
  );
};