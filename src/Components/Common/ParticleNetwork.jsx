import React, { useEffect, useRef } from 'react';

export default function ParticleNetwork({
  particleCount = 200,
  particleColor = 'rgba(107, 38, 217, 0.5)',
  lineColor = 'rgba(246, 51, 154, 0.2)',
  particleSize = 2,
  speed = 0.5,
  connectionDistance = 200
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            // Extract rgb from rgba string and apply dynamic opacity
            const rgbLine = lineColor.match(/\d+, \d+, \d+/);
            if (rgbLine) {
              ctx.strokeStyle = `rgba(${rgbLine[0]}, ${opacity * 0.4})`;
            } else {
              ctx.strokeStyle = lineColor;
            }
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    initCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      initCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleColor, lineColor, particleSize, speed, connectionDistance]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
