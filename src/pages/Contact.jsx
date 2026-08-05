/**
 * Contact.jsx
 * Displays the contact page with an enquiry form and direct contact details.
 */
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

// Configuration for EmailJS service
const EMAILJS_CONFIG = {
  publicKey: "Ou_qu_feu12sSNEkc",
  serviceId: "service_tpuqps7",
  templateId: "template_ln9myvv",
};

const PRIMARY_EMAIL = "tkinfotechsoft@gmail.com";

/**
 * Contact Component
 * Manages the state and submission logic for the general enquiry form.
 */
export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // Validation errors state
  const [errors, setErrors] = useState({});
  // Form submission status (success/error)
  const [status, setStatus] = useState({ text: '', type: '' });
  // Toast notification state
  const [toast, setToast] = useState('');
  // Loading state during form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Clears the toast notification automatically after a few seconds.
   */
  useEffect(() => {
    if (!toast) return undefined;

    const toastTimeout = window.setTimeout(() => {
      setToast('');
    }, 3600);

    return () => window.clearTimeout(toastTimeout);
  }, [toast]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  /**
   * Validates form fields and updates the errors state.
   * @returns {boolean} True if form is valid, false otherwise.
   */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'This field is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'This field is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Fallback: Opens the user's default mail client with pre-filled details if EmailJS fails.
   */
  const openMailClient = (name, email, message) => {
    const subject = `Website enquiry from ${name}`;
    const body = `Quick enquiry from TK-INFOTECHSOFT website\n\nName: ${name}\nEmail: ${email}\nEnquiry: ${message}`;
    window.location.href = `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  /**
   * Form submission handler. Validates, sends via EmailJS, and updates UI status.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus({ text: 'Please check the form for errors.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ text: 'Sending your enquiry...', type: '' });

    const emailBody = `Quick enquiry from TK-INFOTECHSOFT website\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nEnquiry: ${formData.message.trim()}`;

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name.trim(),
          email_id: formData.email.trim(),
          reply_to: formData.email.trim(),
          to_email: PRIMARY_EMAIL,
          message: emailBody,
        },
        {
          publicKey: EMAILJS_CONFIG.publicKey,
        }
      );

      setFormData({ name: '', email: '', message: '' });
      setStatus({ text: 'Thanks. Your enquiry was sent successfully.', type: 'success' });
      setToast('Thanks. Your enquiry was sent successfully.');
    } catch (error) {
      console.error('EmailJS error:', error);
      openMailClient(formData.name.trim(), formData.email.trim(), formData.message.trim());
      setStatus({
        text: 'Email sending failed in-browser, so your mail app was opened as a fallback.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell">
      {toast && (
        <div className="toast-notification" role="status" aria-live="polite">
          {toast}
        </div>
      )}
      <section className="contact-first-view">
        <div className="site-container contact-first-view-grid">
          <section className="contact-form-panel reveal">
            <h4>Quick enquiry</h4>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div>
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div>
                <label className="form-label" htmlFor="contact-message">Enquiry</label>
                <textarea
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us what you need help with"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button className="btn-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send enquiry'}
              </button>
              {status.text && (
                <p
                  id="contact-form-status"
                  className={`form-status ${status.type === 'success' ? 'status-success' : status.type === 'error' ? 'status-error' : ''}`}
                  aria-live="polite"
                >
                  {status.text}
                </p>
              )}
            </form>
          </section>

          <aside className="contact-details-panel reveal" aria-label="TK-INFOTECHSOFT contact details">
            <h3>TK-INFOTECHSOFT</h3>
            <div className="contact-details-list">
              <a href="tel:+919597151915">+91 95971 51915</a>
              <a href="tel:+918870784318">+91 88707 84318</a>
              <a href="mailto:tkinfotechsoft@gmail.com">tkinfotechsoft@gmail.com</a>
              <a href="mailto:dtharunkrishna65@gmail.com">dtharunkrishna65@gmail.com</a>
            </div>
            <address>
              <strong>TK-INFOTECHSOFT</strong><br />
              (TK Infotechsoft, an initiative of MC Tech Industrial School.)<br />
              MKP Nagar, MC-TECH Campus,<br />
              Kottur, Malayandi Pattinam,<br />
              Anaimalai Tk, Coimbatore District - 642007
            </address>
          </aside>
        </div>
      </section>
      <section style={{ width: '100%', lineHeight: 0, marginTop: '2rem' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.5791432813585!2d76.98746167505847!3d10.533775963622544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba83b32287c1113%3A0x6058c4960843acdf!2sTk%20Infotechsoft!5e0!3m2!1sen!2sin!4v1785908250115!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </main>
  );
}
