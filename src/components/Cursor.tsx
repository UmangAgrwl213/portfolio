import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const dotX = useSpring(0, { stiffness: 500, damping: 28 });
  const dotY = useSpring(0, { stiffness: 500, damping: 28 });
  const followX = useSpring(0, { stiffness: 150, damping: 20 });
  const followY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      followX.set(e.clientX);
      followY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [dotX, dotY, followX, followY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(45,212,191,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent/40 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'rgba(45, 212, 191, 0.1)' : 'rgba(45, 212, 191, 0)',
        }}
        style={{
          x: followX,
          y: followY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
