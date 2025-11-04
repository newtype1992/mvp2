import { useEffect, useRef } from 'react';

const useLockBodyScroll = (locked) => {
  const previousOverflow = useRef('');
  const previousPaddingRight = useRef('');

  useEffect(() => {
    const { body, documentElement } = document;
    if (!body) return undefined;

    if (locked) {
      previousOverflow.current = body.style.overflow;
      previousPaddingRight.current = body.style.paddingRight;

      const scrollBarGap = window.innerWidth - documentElement.clientWidth;
      if (scrollBarGap > 0) {
        body.style.paddingRight = `${scrollBarGap}px`;
      }
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = previousOverflow.current || '';
      body.style.paddingRight = previousPaddingRight.current || '';
    }

    return () => {
      body.style.overflow = previousOverflow.current || '';
      body.style.paddingRight = previousPaddingRight.current || '';
    };
  }, [locked]);
};

export default useLockBodyScroll;
