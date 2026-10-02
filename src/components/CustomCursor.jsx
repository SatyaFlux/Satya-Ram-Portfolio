import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer / desktop
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.toFixed(2)}px`;
        ringRef.current.style.top = `${ringY.toFixed(2)}px`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, .cap-card, .project-art-stage, .skill-pill, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setLabel(customText);
        } else if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          setLabel('OPEN');
        } else {
          setLabel('');
        }
      } else {
        setIsHovered(false);
        setLabel('');
      }

      const darkSection = e.target.closest('.dark-contrast');
      setIsDark(!!darkSection);
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isDark ? 'dark-cursor' : ''}`}
        style={{ opacity: isVisible && !isHovered ? 1 : 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovered ? 'cursor-hover' : ''} ${isDark ? 'dark-cursor' : ''}`}
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      >
        <span className="cursor-label">{label}</span>
      </div>
    </>
  );
}

