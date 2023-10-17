import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Paragraphs = ({ text, typeSpeed }) => {
  const el = useRef(null);

  useEffect(() => {
    let typed;
    const startAnimation = () => {
      typed = new Typed(el.current, {
        strings: text,
        typeSpeed: typeSpeed,
        loop: false,
        showCursor: false,
        fadeOut: false,
      });
    };

    startAnimation();
    
  }, [text, typeSpeed]);

  return <span ref={el} />;
};

export default Paragraphs;
