import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({ text, typeSpeed, start, onComplete }) => {
  const el = useRef(null);

  useEffect(() => {
    let typed;
    if (start) {
      const startAnimation = () => {
        typed = new Typed(el.current, {
          strings: [text],
          typeSpeed: typeSpeed,
          loop: false,
          showCursor: false,
          fadeOut: false,
          onComplete: (self) => {
            if (onComplete) {
              onComplete();
            }
            self.destroy();
          }
        });
      };

      startAnimation();
    }
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [text, typeSpeed, start, onComplete]);

  return <span ref={el} />;
};

export default TypedText;
