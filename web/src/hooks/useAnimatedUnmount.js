import {
  useEffect, useRef, useState,
} from 'react';

export function useAnimatedUnmount(isVisible) {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const animatedElementRef = useRef(null);

  function handleAnimationEnd() {
    setShouldRender(false);
  }

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }

    const animatedElementRefCurrent = animatedElementRef.current;
    animatedElementRefCurrent?.addEventListener('animationend', handleAnimationEnd);

    return () => {
      if (animatedElementRefCurrent) {
        animatedElementRefCurrent?.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isVisible]);

  return {
    animatedElementRef,
    shouldRender,
  };
}
