import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  publicKey: "Nw-A_RtWpccfLfDE1",
  serviceId: "service_tuvi97l",
  templateId: "template_vxbtcnh",
};

const PRIMARY_EMAIL = "tkinfotechsoft@gmail.com";

const softwareServices = [
  {
    title: "Web Development",
    icon: "bx bx-code-curly",
    image: "/web-development-cover.png",
    headline: "Custom Websites That Build Your Digital Presence",
    description: "At TK-INFOTECHSOFT, we specialize in creating modern, responsive, secure, and high-performance websites tailored to your unique requirements. We combine innovative design with advanced technologies to deliver websites that perform flawlessly.",
    points: [
      "Responsive Design ",
      "Fast Performance ",
      "SEO Optimization ",
      "Secure Architecture",
      "Intuitive Navigation   "
    ]
  },
  {
    title: "E-Commerce Website",
    icon: "bx bx-store-alt",
    image: "/ecommerce-cover.png",
    headline: "Powerful Online Stores That Drive Sales",
    description: "At TK-INFOTECHSOFT, we specialize in designing powerful e-commerce solutions built with a strong focus on user experience, speed, and security. We provide everything needed to maximize sales conversions and support your long-term business growth.",
    points: [
      "Secure Checkout Process ",
      "Payment Gateway Integration ",
      "Advanced Product Search ",
      "Inventory Management ",
      "Mobile Commerce  "
    ]
  },
  {
    title: "Business ERP",
    icon: "bx bx-layer",
    image: "/business.png",
    headline: "Integrated Solutions for Efficient Business Management",
    description: "At TK-INFOTECHSOFT, we develop custom Enterprise Resource Planning (ERP) solutions that bring every aspect of your business into one centralized platform. Our systems simplify operations, automate tasks, and provide real-time visibility.",
    points: [
      "Centralized Operations ",
      "Workflow Automation ",
      "Real-Time Analytics ",
      "Scalable Architecture ",
      "Role-Based Security "
    ]
  },
  {
    title: "CRM",
    icon: "bx bx-user-pin",
    image: "/crm.png",
    headline: "Strengthen Customer Relationships and Boost Sales",
    description: "At TK-INFOTECHSOFT, we develop intelligent Customer Relationship Management (CRM) solutions that centralize all customer interactions. Our customized systems allow your teams to automate processes, manage leads, and collaborate seamlessly.",
    points: [
      "Lead Management",
      "Sales Automation",
      "360-Degree Customer View",
      "Marketing Campaigns",
      "Performance Dashboards "
    ]
  },
  {
    title: "Portfolio Website",
    icon: "bx bx-id-card",
    image: "/portfolio.png",
    headline: "Showcase Your Brand, Work, and Achievements",
    description: "At TK-INFOTECHSOFT, we create visually stunning, highly responsive portfolio websites that help individuals and businesses build trust. We combine creative design with strategic content placement to highlight your skills effectively.",
    points: [
      "Personalized Branding ",
      "Project Showcase ",
      "Interactive Resume ",
      "Client Testimonials ",
      "Contact Integration  "
    ]
  }
];

const softwareServiceQueryMap = {
  'web-development': 0,
  'e-commerce-website': 1,
  'business-erp': 2,
  crm: 3,
  'portfolio-website': 4,
};

const offeredCourses = [
  {
    title: 'Python Full Stack',
    icon: 'bx bxl-python',
    description:
      'Build web applications using Python, frontend fundamentals, and backend workflows with project-based guidance.',
    meta: ['Projects', 'Mentoring', 'Career prep']
  },
  {
    title: 'Java Full Stack',
    icon: 'bx bxl-java',
    description:
      'Learn Java-based application development with frontend integration, databases, and workflow-driven practice.',
    meta: ['Enterprise focus', 'Hands-on tasks', 'Interview readiness']
  },
  {
    title: 'MERN Stack',
    icon: 'bx bxl-react',
    description:
      'Create full stack applications with MongoDB, Express, React, and Node.js while strengthening modern web development habits.',
    meta: ['Portfolio projects', 'API practice', 'Frontend + backend']
  },
  {
    title: 'UI/UX Design',
    icon: 'bx bxs-palette',
    description:
      'Learn interface design, user journeys, layout systems, and practical thinking for digital products that feel easier to use.',
    meta: ['Design thinking', 'Portfolio support', 'Visual systems']
  },
  {
    title: 'AWS & Cloud Foundations',
    tabTitle: 'AWS Foundations',
    icon: 'bx bxs-cloud',
    description:
      'Understand cloud basics, deployment concepts, and practical platform workflows that support real-world development teams.',
    meta: ['Cloud basics', 'Dev workflows', 'Career guidance']
  },
  {
    title: 'Digital Marketing',
    icon: 'bx bxs-megaphone',
    description:
      'Build a foundation in content strategy, campaigns, and digital growth skills for modern business environments.',
    meta: ['Campaign basics', 'Content skills', 'Practical roadmap']
  }
];

export default function Services() {
  const [activeSoftwareService, setActiveSoftwareService] = useState(0);
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '', // Represents Selected Service in schema
    startDate: '',
    address: '',
    enquiry: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ text: '', type: '' });
  const [toast, setToast] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const selectedService = new URLSearchParams(window.location.search).get('service');
    const selectedServiceIndex = softwareServiceQueryMap[selectedService];

    if (selectedServiceIndex !== undefined) {
      setActiveSoftwareService(selectedServiceIndex);
    }
  }, []);

  useEffect(() => {
    if (!toast) return undefined;

    const toastTimeout = window.setTimeout(() => {
      setToast('');
    }, 3600);

    return () => window.clearTimeout(toastTimeout);
  }, [toast]);

  // Load cached form data from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tkApplication');
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.error('Storage read error:', e);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'This field is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'This field is required.';
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length !== 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.course) {
      newErrors.course = 'This field is required.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'This field is required.';
    }

    if (!formData.enquiry.trim()) {
      newErrors.enquiry = 'This field is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const openMailClient = (payload) => {
    const subject = `Service enquiry from ${payload.name}`;
    const body = `TK-INFOTECHSOFT service enquiry\n\nName: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nAddress: ${payload.address}\nEnquiry topic: ${payload.course}\nPreferred start date: ${payload.startDate || 'Not provided'}\nEnquiry: ${payload.enquiry}`;
    window.location.href = `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus({ text: 'Please check the form for errors.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ text: 'Sending your service enquiry...', type: '' });

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.replace(/\D/g, ''),
      email: formData.email.trim(),
      course: formData.course,
      startDate: formData.startDate,
      address: formData.address.trim(),
      enquiry: formData.enquiry.trim()
    };

    // Cache locally
    try {
      localStorage.setItem('tkApplication', JSON.stringify(payload));
    } catch (err) {
      console.error('Storage save error:', err);
    }

    const emailSubject = `Service enquiry from ${payload.name}`;
    const emailBody = `TK-INFOTECHSOFT service enquiry\n\nName: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nAddress: ${payload.address}\nEnquiry topic: ${payload.course}\nPreferred start date: ${payload.startDate || 'Not provided'}\nEnquiry: ${payload.enquiry}`;

    try {
      // Send via EmailJS using sendForm style parameters
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: payload.name,
          email_id: payload.email,
          reply_to: payload.email,
          to_email: PRIMARY_EMAIL,
          phone_number: payload.phone,
          enquiry_course: payload.course,
          start_date: payload.startDate || 'Not provided',
          preferred_start_date: payload.startDate || 'Not provided',
          subject: emailSubject,
          message: emailBody,
        },
        {
          publicKey: EMAILJS_CONFIG.publicKey,
        }
      );

      // Reset Form and Storage
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        startDate: '',
        address: '',
        enquiry: ''
      });
      
      try {
        localStorage.removeItem('tkApplication');
      } catch (err) {}

      setStatus({
        text: 'Service enquiry sent successfully. We will contact you soon.',
        type: 'success'
      });
      setToast('Service enquiry sent successfully. We will contact you soon.');
    } catch (error) {
      console.error('Application email error:', error);
      openMailClient(payload);
      setStatus({
        text: 'Your email app was opened so you can continue the service enquiry, and your details are still saved on this device.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeServicePopup = () => {
    setIsServicePopupOpen(false);
  };
  return (
    <main className="page-shell">
      {toast && (
        <div className="toast-notification" role="status" aria-live="polite">
          {toast}
        </div>
      )}
      <section className="services-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Software Solutions & Training for Growth and Success</h1>
            <p>
              We deliver innovative software solutions for businesses and practical,
              industry-focused training for learners. Empowering organizations and individuals
              with the skills and technology needed to succeed.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-brand btn-lg" 
                onClick={() => {
                  setFormData((prev) => ({ ...prev, course: 'General Service Enquiry' }));
                  setStatus({ text: '', type: '' });
                  setIsServicePopupOpen(true);
                }}
              >
                Enquiry Now
              </button>
            </div>
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata" controlsList="nodownload">
              <source src="/service.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="software-services-section" aria-labelledby="software-services-title">
        <div className="site-container software-services-inner">
          <h2 id="software-services-title" style={{ letterSpacing: '0.1em', color: 'midnightblue' }}>Our Software Services</h2>
<br/>
          <div className="software-services-layout" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {softwareServices.map((service, serviceIndex) => (
              <article
                className="software-service-card"
                id={`software-service-panel-${serviceIndex}`}
                key={service.title}
                style={{ background: 'transparent', boxShadow: 'none', border: 'none', paddingBottom: '2rem', borderBottom: serviceIndex !== softwareServices.length - 1 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none' }}
              >
                <div className={`zigzag-row ${serviceIndex % 2 !== 0 ? 'reverse' : ''}`}>
                  <div className="zigzag-content">
                    <h3 style={{ fontSize: '2.5rem', color: 'rgb(25,25,112)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{service.title}</h3>
                    <h4 style={{ fontSize: '1.25rem', color: '#1c1c1c', marginBottom: '2.5rem' }}>{service.headline}</h4>
                    {service.description && (
                      <p className="service-topic-description" style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2rem' }}>
                        {service.description}
                      </p>
                    )}
                    <div className="software-service-content-details">
                      {service.fullContent ? (
                        <div className="rich-text-content">
                          {service.fullContent}
                        </div>
                      ) : (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                          {service.points && service.points.map((point, index) => {
                            const parts = point.split(' - ');
                            const title = parts[0];
                            const desc = parts.length > 1 ? parts.slice(1).join(' - ') : null;

                            return (
                              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <i className="bx bx-check" style={{ color: '#00c2ff', fontSize: '1.5rem', marginTop: '0.1rem' }}></i>
                                <div>
                                  <strong style={{ color: '#1c1c1c', fontSize: '1.15rem' }}>{title}</strong>
                                  {desc && <p style={{ color: 'var(--text-muted)', margin: '0.4rem 0 0', lineHeight: '1.6' }}>{desc}</p>}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                  
                  <div className="zigzag-image-space" style={{ 
                    alignSelf: 'stretch', 
                    height: 'auto',
                    minHeight: '350px',
                    border: service.image ? 'none' : undefined,
                    background: service.image ? 'transparent' : undefined,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem 0'
                  }}>
                    {service.image ? (
                      <img src={service.image} alt={service.title} style={{ width: '85%', maxHeight: '340px', objectFit: 'contain', borderRadius: '1rem' }} />
                    ) : (
                      <span>Image Space</span>
                    )}
                    <button 
                      className="connect-us-btn" 
                      style={{ padding: '0.5em 1.5em', fontSize: '15px' }}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, course: service.title }));
                        setStatus({ text: '', type: '' });
                        setIsServicePopupOpen(true);
                      }}
                    >
                      <span></span> Connect us
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      {isServicePopupOpen && (
        <div className="service-popup" role="dialog" aria-modal="true" aria-labelledby="service-popup-title">
          <button className="service-popup-backdrop" type="button" aria-label="Close service enquiry form" onClick={closeServicePopup}></button>
          <div className="service-popup-panel">
            <section className="application-card service-popup-card" id="service-contact">
              <div className="service-popup-head">
                <span className="kicker">Service-related contact</span>
                <button className="service-popup-close" type="button" aria-label="Close service enquiry form" onClick={closeServicePopup}>
                  <i className="bx bx-x"></i>
                </button>
              </div>
              <h2 id="service-popup-title"> Enquiry Course</h2>
              <br/>

              <form
                id="application-form"
                className="application-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="field-grid">
                  <div>
                    <label className="form-label" htmlFor="application-name">Full name</label>
                    <input
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="application-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="application-phone">Phone number</label>
                    <input
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="application-phone"
                      name="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>

                <div className="field-grid">
                  <div>
                    <label className="form-label" htmlFor="application-email">Email address</label>
                    <input
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="application-email"
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
                    <label className="form-label" htmlFor="application-course">Enquiry service</label>
                    <select
                      className={`form-select ${errors.course ? 'is-invalid' : ''}`}
                      id="application-course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Business ERP">Business ERP</option>
                      <option value="Resume Guidance">Resume Guidance</option>
                      <option value="ATS Support">ATS Support</option>
                      <option value="Freelancing Services">Freelancing Services</option>
                      <option value="General Service Enquiry">General Service Enquiry</option>
                      {offeredCourses.map((course) => (
                        <option value={course.title} key={course.title}>{course.title}</option>
                      ))}
                    </select>
                    {errors.course && <div className="invalid-feedback">{errors.course}</div>}
                  </div>
                </div>

                <div className="field-grid">
                  <div>
                    <label className="form-label" htmlFor="application-start-date">Preferred support date</label>
                    <input
                      className="form-control"
                      id="application-start-date"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="application-address">Location / address</label>
                    <input
                      className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                      id="application-address"
                      name="address"
                      type="text"
                      placeholder="City, area, office, or full address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="application-enquiry">Service enquiry</label>
                  <textarea
                    className={`form-control ${errors.enquiry ? 'is-invalid' : ''}`}
                    id="application-enquiry"
                    name="enquiry"
                    rows="3"
                    placeholder="Tell us which service you need and how we can help"
                    value={formData.enquiry}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {errors.enquiry && <div className="invalid-feedback">{errors.enquiry}</div>}
                </div>

                <div className="inline-note">
                  Your service enquiry details are emailed to our team and also cached in this
                  browser until the submission succeeds.
                </div>

                <div className="form-actions">
                  <button className="btn btn-brand core-services-button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'SUBMIT'}
                  </button>
                  <Link className="btn btn-outline-secondary" to="/projects">Explore projects</Link>
                </div>

                {status.text && (
                  <p
                    id="application-status"
                    className={`form-status ${status.type === 'success' ? 'status-success' : status.type === 'error' ? 'status-error' : ''}`}
                    aria-live="polite"
                  >
                    {status.text}
                  </p>
                )}
              </form>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
