import React, { useEffect, useRef } from "react";

const InteractiveCanvasAnimation = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 3;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls
        if (this.x <= 0 || this.x >= canvas.width) {
          this.speedX *= -1;
        }
        if (this.y <= 0 || this.y >= canvas.height) {
          this.speedY *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = `hsl(${Math.random() * 360}, 70%, 10%)`;
      particles.current.push(new Particle(x, y, color));
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    }

    animate();

    // Mousemove event handler
    const handleMousemove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Move particles away from the cursor
      particles.current.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 50) {
          particle.speedX = -dx / 10;
          particle.speedY = -dy / 10;
        }
      });
    };

    // Resize event handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Add event listeners
    canvas.addEventListener("mousemove", handleMousemove);
    window.addEventListener("resize", handleResize);

    // Clean up event listeners on unmount
    return () => {
      canvas.removeEventListener("mousemove", handleMousemove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block" }}
      className="canvas-animation"
    />
  );
};

export default InteractiveCanvasAnimation;
