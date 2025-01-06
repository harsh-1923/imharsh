import { useState, useEffect, RefObject } from "react";

interface ScrollState {
  isScrolling: boolean;
  scrollAmount: number;
  isUserScrolling: boolean;
  isAtStart: boolean;
}

export function useScrollObserver(ref: RefObject<HTMLElement>): ScrollState {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let scrollTimeout: NodeJS.Timeout;
    let isUserInitiated = false;

    const handleTouchStart = () => {
      isUserInitiated = true;
    };

    const handleTouchEnd = () => {
      isUserInitiated = false;
    };

    const handleWheel = () => {
      isUserInitiated = true;
    };

    const handleScroll = () => {
      const currentScrollAmount = element.scrollLeft;
      setIsScrolling(true);
      setScrollAmount(currentScrollAmount);
      setIsUserScrolling(isUserInitiated);
      setIsAtStart(currentScrollAmount === 0);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsUserScrolling(false);
        isUserInitiated = false;
      }, 150); // Debounce scroll end detection
    };

    element.addEventListener("scroll", handleScroll);
    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchend", handleTouchEnd);
    element.addEventListener("wheel", handleWheel);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
      element.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [ref]);

  return { isScrolling, scrollAmount, isUserScrolling, isAtStart };
}
