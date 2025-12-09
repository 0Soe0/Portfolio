import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: (string | undefined | null | false)[]) => {
  return twMerge(clsx(inputs));
};

// cn is a utility function that merges multiple class names using clsx and tailwind-merge

/**
 * Smoothly scrolls to a target element
 * @param targetId - The ID selector of the target element (e.g., "#hero" or "hero")
 * @param duration - Duration of the scroll animation in milliseconds (default: 1200)
 */
export const smoothScrollTo = (targetId: string, duration: number = 1200) => {
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Smoothly scrolls to the top of the page
 * @param duration - Duration of the scroll animation in milliseconds (default: 800)
 */
export const scrollToTop = (duration: number = 800) => {
  smoothScrollTo("#hero", duration);
};
