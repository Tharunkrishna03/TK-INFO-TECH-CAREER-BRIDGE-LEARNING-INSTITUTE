/**
 * Footer.jsx
 * Global footer component displaying contact info, useful links, and copyright.
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Renders the site's footer with smooth-scrolling link handlers for in-page anchors.
 */
export default function Footer() {
  /**
   * Helper to handle anchor clicks smoothly.
   * If the user is already on the target page, it prevents default and smoothly scrolls to the element ID.
   *
   * @param {Event} e - The click event
   * @param {string} path - The target page path
   * @param {string} elementId - The target element ID on the page
   */
  const handleAnchorClick = (e, path, elementId) => {
    // If we're already on that page, scroll directly
    if (window.location.pathname === path) {
      const el = document.getElementById(elementId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="site-footer" id="contacts">
      <div className="site-container">
        <div className="footer-grid">
          {/* Contact Information Section */}
          <section className="footer-card reveal">
            <h2>TK-INFOTECHSOFT</h2>
           <br/>
            <div className="contact-pair">
              <i className="bx bxs-phone-call"></i>
              <div>
                <a href="tel:+919597151915">+91 95971 51915</a><br />
                <a href="tel:+918870784318">+91 88707 84318</a>
              </div>
            </div>
            <div className="contact-pair">
              <i className="bx bxs-envelope"></i>
              <div>
                <a href="mailto:tkinfotechsoft@gmail.com">tkinfotechsoft@gmail.com</a><br />
                <a href="mailto:dtharunkrishna65@gmail.com">dtharunkrishna65@gmail.com</a>
              </div>
            </div>
            <div className="contact-pair">
              <i className="bx bxs-map"></i>
              <div>
                TK-INFOTECHSOFT<br /> (TK Infotechsoft, an initiative of MC Tech Industrial School.)<br />
                MKP Nagar, MC-TECH Campus,<br />
                Kottur, Malayandi Pattinam,<br />
                Anaimalai Tk, Coimbatore District - 642007
              </div>
            </div>
          </section>

          {/* Course Links Section */}
          <section className="footer-card reveal">
            <h3>Courses</h3>
            <ul className="footer-list">
              <li><Link to="/projects#course-catalogue" onClick={(e) => handleAnchorClick(e, '/projects', 'course-catalogue')}>Python Full Stack</Link></li>
              <li><Link to="/projects#course-catalogue" onClick={(e) => handleAnchorClick(e, '/projects', 'course-catalogue')}>Java Full Stack</Link></li>
              <li><Link to="/projects#course-catalogue" onClick={(e) => handleAnchorClick(e, '/projects', 'course-catalogue')}>MERN Stack</Link></li>
              <li><Link to="/projects#course-catalogue" onClick={(e) => handleAnchorClick(e, '/projects', 'course-catalogue')}>UI/UX Design</Link></li>
              <li><Link to="/projects#course-catalogue" onClick={(e) => handleAnchorClick(e, '/projects', 'course-catalogue')}>AWS Foundations</Link></li>
            </ul>
          </section>

          {/* Services Links Section */}
          <section className="footer-card reveal">
            <h3>Services</h3>
            <ul className="footer-list">
              <li><Link to="/services#web-development" onClick={(e) => handleAnchorClick(e, '/services', 'web-development')}>Web Development</Link></li>
              <li><Link to="/services#app-development" onClick={(e) => handleAnchorClick(e, '/services', 'app-development')}>Ecommerce website</Link></li>
              <li><Link to="/services#business-erp" onClick={(e) => handleAnchorClick(e, '/services', 'business-erp')}>Business ERP</Link></li>
              
              <li><Link to="/services#course-registration" onClick={(e) => handleAnchorClick(e, '/services', 'course-registration')}>CRM</Link></li>
              
              
            </ul>
          </section>
        </div>

        {/* Copyright Note */}
        <p className="footer-note">
          TK-INFOTECHSOFT - TK Infotechsoft, an initiative of MC TECH Industrial School.. Copyright &copy; 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
