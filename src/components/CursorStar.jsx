/**
 * CursorStar.jsx
 * Implements a custom animated cursor (star trailing effect) using mouse events.
 * Bypassed for users preferring reduced motion or touch devices.
 */
import React, { useEffect, useRef } from 'react';

/**
 * CursorStar Component
 * Replaces the default pointer with a custom stylized element that tracks the mouse.
 */
export default function CursorStar() {
  // Ref to the actual DOM element for the custom cursor
  const starRef = useRef(null);

  useEffect(() => {
    // Check user preferences and device capabilities
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;

    // Hide custom cursor logic entirely if not a mouse or motion is reduced
    if (prefersReducedMotion || !supportsFinePointer) {
      return;
    }

    const star = starRef.current;
    if (!star) return;

    // Adds a global class to hide the default pointer
    document.body.classList.add('pointer-enabled');

    // Tracking variables for position and physics
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let starX = mouseX;
    let starY = mouseY;
    let lastSparkAt = 0;
    let isMounted = true;
    let animationFrameId = null;

    /**
     * Animation loop for the custom cursor.
     * Uses linear interpolation (lerp) for smooth trailing.
     */
    const render = () => {
      if (!isMounted) return;
      starX += (mouseX - starX) * 0.12;
      starY += (mouseY - starY) * 0.12;

      star.style.left = `${starX}px`;
      star.style.top = `${starY}px`;

      animationFrameId = window.requestAnimationFrame(render);
    };

    /**
     * Toggles interaction styles when hovering over clickable elements.
     */
    const syncHoverState = (target) => {
      const isInteractive = Boolean(
        target &&
          target.closest(
            'a, button, .btn, .mobile-icon-link, .sidebar-toggle, .sidebar-close, input, textarea, select, label'
          )
      );

      star.classList.toggle('is-hover', isInteractive);
      return isInteractive;
    };

    const randomBetween = (min, max) => min + Math.random() * (max - min);

    /**
     * Spawns a visual 'spark' particle at the given coordinates.
     */

    const spawnSpark = (x, y, isInteractive = false) => {
      const spark = document.createElement('span');
      spark.className = `cursor-spark${isInteractive ? ' is-hover' : ''}`;
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty('--spark-x', `${randomBetween(-28, 28)}px`);
      spark.style.setProperty('--spark-y', `${randomBetween(-28, 28)}px`);
      spark.style.setProperty('--spark-scale', `${randomBetween(0.9, 1.65)}`);
      document.body.append(spark);
      spark.addEventListener(
        'animationend',
        () => {
          spark.remove();
        },
        { once: true }
      );
    };

    /**
     * Mouse move handler: update target position and conditionally spawn sparks.
     */
    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      star.classList.add('is-visible');
      const isInteractive = syncHoverState(event.target);
      const now = performance.now();

      // Throttle spark creation
      if (now - lastSparkAt > 24) {
        spawnSpark(mouseX, mouseY, isInteractive);
        lastSparkAt = now;
      }
    };

    /**
     * Hide cursor when mouse leaves the window.
     */
    const onMouseLeave = () => {
      star.classList.remove('is-visible', 'is-hover', 'is-active');
    };

    const onMouseDown = () => {
      star.classList.add('is-active');
      for (let index = 0; index < 6; index += 1) {
        spawnSpark(mouseX, mouseY, true);
      }
    };

    const onMouseUp = (event) => {
      star.classList.remove('is-active');
      syncHoverState(event.target);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      isMounted = false;
      document.body.classList.remove('pointer-enabled');
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return <div ref={starRef} className="cursor-star" />;
}
