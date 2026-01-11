'use client';

import { useEffect, useRef, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view';
  revealDirection?: 'start' | 'end' | 'center';
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  characters = '!@#$%^&*()_+-=[]{}|;:,.<>?',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  revealDirection = 'start'
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const scramble = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            let revealIndex = index;
            if (revealDirection === 'end') {
              revealIndex = text.length - 1 - index;
            } else if (revealDirection === 'center') {
              const mid = Math.floor(text.length / 2);
              revealIndex = Math.abs(index - mid);
            }
            
            if (iteration > revealIndex) {
              return char;
            }
            
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );
      
      iteration += 1;
      
      if (iteration > text.length + maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view' && !hasAnimated.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              scramble();
              hasAnimated.current = true;
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [animateOn]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      ref={elementRef}
      className={parentClassName}
      onMouseEnter={animateOn === 'hover' ? scramble : undefined}
    >
      <span className={`${className} ${isAnimating ? encryptedClassName : ''}`}>
        {displayText}
      </span>
    </span>
  );
}
