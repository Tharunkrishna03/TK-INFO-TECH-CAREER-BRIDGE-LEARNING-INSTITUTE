/**
 * NotFound.jsx
 * Fallback page rendered for undefined routes (404 Error).
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * NotFound Component
 * Displays a 'not found' image and provides a button to navigate back to the previous page.
 */
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="page-shell not-found-page">
      <div className="not-found-content">
        <img src="/not found.jpg" alt="Page not found" className="not-found-image" />
        <button type="button" className="btn btn-brand not-found-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </main>
  );
}
