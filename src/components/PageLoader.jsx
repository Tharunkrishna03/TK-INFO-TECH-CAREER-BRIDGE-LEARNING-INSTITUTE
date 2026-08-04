/**
 * PageLoader.jsx
 * Displays a full-screen loading overlay during page transitions and initial load.
 */
import React from 'react';

/**
 * PageLoader Component
 * @param {boolean} isVisible - Controls whether the loader overlay is displayed.
 */
export default function PageLoader({ isVisible }) {
  return (
    <div 
      className={`page-loader ${isVisible ? 'is-visible' : 'd-none'}`} 
      aria-hidden="true"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none'
      }}
    >
      <div className="page-loader-shell">
        {/* Pulsing Brand Logo */}
        <img 
          src="/tk-logo.png" 
          alt="Loading..." 
          className="page-loader-logo" 
        />
      </div>
    </div>
  );
}
