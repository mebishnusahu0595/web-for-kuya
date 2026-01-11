'use client';
import { useEffect, useRef } from 'react';

function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Simpler animated gradient cursor effect
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let particles: Array<{x: number, y: number, vx: number, vy: number, life: number, color: string}> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create particles on mouse move
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 20,
          y: mouseY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`
        });
      }

      // Limit particles
      if (particles.length > 150) {
        particles = particles.slice(-150);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas completely (no white blur)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles = particles.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01;

        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 * p.life, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace(')', `, ${p.life})`).replace('hsl', 'hsla');
          ctx.fill();
          return true;
        }
        return false;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 50,
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}
    >
      <canvas
        ref={canvasRef}
        id="fluid"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block'
        }}
      />
    </div>
  );
}

export default SplashCursor;
