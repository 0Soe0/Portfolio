import { useEffect, useState, useRef } from "react";
import { Cloud } from "./Cloud";

type scrollCloudsProps = {
  className?: string;
};

export const ScrollClouds = ({ className = "" }: scrollCloudsProps) => {
  const [cloudProgress, setCloudProgress] = useState(0);
  const maxScroll = window.innerWidth;
  const accumulatedScroll = useRef(0);
  const progressRef = useRef(0);

  useEffect(() => {
    // On mount, if already scrolled, skip locking/animation.
    const atTopOnMount = window.scrollY === 0;
    if (atTopOnMount) {
      accumulatedScroll.current = 0;
      progressRef.current = 0;
      setCloudProgress(0);
      document.body.style.overflow = "hidden";
    } else {
      progressRef.current = 0.6;
      setCloudProgress(0.6);
      document.body.style.overflow = "";
    }

    const handleWheel = (e: WheelEvent) => {
      const atTop = window.scrollY === 0;
      const cloudsDone = progressRef.current >= 0.6;
      if (!atTop || cloudsDone) {
        setCloudProgress(0.6);
        return;
      }

      e.preventDefault();

      const scrollDelta = e.deltaY;
      const sensitivity = 2; // Adjust this to control how fast clouds move

      accumulatedScroll.current += scrollDelta;
      if (accumulatedScroll.current <= 0) {
        accumulatedScroll.current = 0;
      }
      // Calculate progress (0 to 1)
      const progress = Math.max(
        0,
        Math.min(1, accumulatedScroll.current / (maxScroll * sensitivity))
      );
      console.log("progress", progress);
      progressRef.current = progress;
      setCloudProgress(progress);

      // If clouds are fully out, allow page to scroll
      if (progress >= 0.6) {
        document.body.style.overflow = "";
        // apply the leftover scroll to the page right away
        window.scrollTo(0, window.scrollY + e.deltaY);

        // make sure clouds stay at 100%
        progressRef.current = 0.6;
        setCloudProgress(0.6);
      }
    };

    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      if (atTop) {
        accumulatedScroll.current = 0;
        progressRef.current = 0;
        setCloudProgress(0);
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        // Update cloud progress based on scroll position during slow auto-scroll
        const scrollBasedProgress = Math.min(
          0.6,
          window.scrollY / (maxScroll * 2)
        );
        if (scrollBasedProgress > progressRef.current) {
          progressRef.current = scrollBasedProgress;
          setCloudProgress(scrollBasedProgress);
        } else if (progressRef.current < 0.6) {
          // Ensure clouds complete if we're scrolled past threshold
          progressRef.current = 0.6;
          setCloudProgress(0.6);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
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
            transition: "transform 0.6s ease-out",
          }}
        >
          <Cloud size="big" amountOfBlobs={5} className="cloud" />
          <Cloud
            size="small"
            amountOfBlobs={4}
            className="cloud top-0 left-88"
          />
        </div>
        <div
          className="absolute top-0 right-0 h-full w-1/2 pointer-events-none z-20"
          style={{
            transform: rightTransform,
            transition: "transform 0.6s ease-out",
          }}
        >
          <Cloud size="big" amountOfBlobs={5} className="cloud" />
          <Cloud
            size="small"
            amountOfBlobs={4}
            className="cloud bottom-20 right-88"
          />
        </div>
      </div>
    </>
  );
};
