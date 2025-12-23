'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ArrowIcon from 'utils/ArrowIcon';
import { AnimatePresence, motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState('black');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      });
    };

    const handleMouseEnter = (e: Event) => {
      if (!cursor) return;

      const target = e.currentTarget as HTMLElement;
      const color = target.dataset.cursorColor || 'black';

      setCursorColor(color);
      setIsHovering(true);

      gsap.to(cursor, {
        duration: 0.3,
        mixBlendMode: 'normal',
        backgroundColor: 'black',
      });
    };

    const handleMouseLeave = () => {
      if (!cursor) return;

      setIsHovering(false);

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        backgroundColor: 'transparent',
        mixBlendMode: 'difference',
      });
    };

    const handleScroll = () => {
      if (!cursor) return;

      const rect = cursor.getBoundingClientRect();
      const x = rect.left + cursor.offsetWidth / 2;
      const y = rect.top + cursor.offsetHeight / 2;

      const elementAtPoint = document.elementFromPoint(x, y) as HTMLElement | null;

      if (elementAtPoint?.closest('.target')) {
        const target = elementAtPoint.closest('.target') as HTMLElement;
        const color = target.dataset.cursorColor || 'black';

        setCursorColor(color);
        setIsHovering(true);

        gsap.to(cursor, {
          duration: 0.3,
          backgroundColor: 'black',
          mixBlendMode: 'normal',
        });
      } else {
        setIsHovering(false);

        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          backgroundColor: 'transparent',
          mixBlendMode: 'difference',
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    const targets = document.querySelectorAll('.target');
    targets.forEach((target) => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);

      targets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isHovering) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, width: 0 },
        {
          opacity: 1,
          width: 200,
          duration: 0.4,
          ease: 'back.out(1.7)',
        }
      );
    } else {
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0,
        width: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isHovering]);

  const text = 'view';

  return (
    <div
      ref={cursorRef}
      className={`fixed z-[200] ${
        isHovering ? 'rounded-full px-2 pl-3 p-1' : 'rounded-full w-8 h-8'
      } border-2 hidden lg:flex border-white pointer-events-none items-center justify-center`}
      style={{
        transform: 'translate(-50%, -50%)',
        backgroundColor: isHovering ? 'black' : 'transparent',
        border: isHovering ? 'none' : '2px solid white',
        mixBlendMode: 'difference',
      }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            ref={contentRef}
            className="flex items-center gap-4 pr-3 py-2 text-white overflow-hidden relative"
          >
            {/* SAME JSX — unchanged */}
            {text}
            <ArrowIcon className="w-6 h-6 -rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
