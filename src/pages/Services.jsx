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
    description: "In today's digital era, your website is the face of your business and often the first impression customers have of your brand. At TK-INFOTECHSOFT, we specialize in creating modern, responsive, secure, and high-performance websites tailored to your unique requirements. We combine innovative design with advanced technologies to deliver websites that perform flawlessly across every device and platform. Every project is carefully crafted to ensure visitors enjoy a seamless browsing experience while encouraging meaningful interactions. Our scalable architecture and clean coding standards guarantee that your digital storefront remains effective and future-ready for years to come.",
    points: [
      "Responsive Design - We build websites that automatically adapt to desktops, tablets, and smartphones for a seamless user experience.",
      "Fast Performance - Our optimized code and media assets ensure lightning-fast loading speeds to keep your audience engaged.",
      "SEO Optimization - We follow search engine best practices to improve your visibility, rankings, and organic traffic.",
      "Secure Architecture - We implement strong security measures including HTTPS, data encryption, and protection against common vulnerabilities.",
      "Intuitive Navigation - We design clear menus and intuitive layouts to help visitors find information quickly and easily."
    ]
  },
  {
    title: "E-Commerce Website",
    icon: "bx bx-store-alt",
    image: "/ecommerce-cover.png",
    headline: "Powerful Online Stores That Drive Sales",
    description: "Consumers now expect businesses to provide fast, secure, and convenient online shopping experiences available anytime and anywhere. A professionally developed e-commerce website helps businesses meet these expectations while expanding their reach globally. At TK-INFOTECHSOFT, we specialize in designing powerful e-commerce solutions built with a strong focus on user experience, speed, and security. From product management and inventory tracking to secure payment processing, we provide everything needed to maximize sales conversions. Whether you are a retail store or a large enterprise, our customized platforms support your long-term business growth.",
    points: [
      "Secure Checkout Process - We provide a simple and highly secure checkout experience that minimizes abandoned carts and protects customer data.",
      "Payment Gateway Integration - Support for multiple payment methods including Credit Cards, UPI, Net Banking, and international payments.",
      "Advanced Product Search - Help customers quickly find what they are looking for through smart search, advanced filters, and intuitive sorting options.",
      "Inventory Management - Automatically monitor stock levels, receive low-stock alerts, and manage your product inventory efficiently.",
      "Mobile Commerce - We deliver responsive online stores optimized for smartphones and tablets to ensure a seamless shopping experience on the go."
    ]
  },
  {
    title: "Business ERP",
    icon: "bx bx-layer",
    image: "/business.png",
    headline: "Integrated Solutions for Efficient Business Management",
    description: "Managing finance, inventory, sales, human resources, and customer service through disconnected systems often leads to errors and poor decision-making. At TK-INFOTECHSOFT, we develop custom Enterprise Resource Planning (ERP) solutions that bring every aspect of your business into one centralized platform. Our ERP systems are designed to simplify operations, automate repetitive tasks, improve collaboration, and provide real-time visibility into your organization's performance. We build flexible, scalable, and secure systems that help businesses reduce costs and respond faster to market changes. By eliminating data silos, our tailored ERP software becomes the reliable backbone of your enterprise.",
    points: [
      "Centralized Operations - Integrate all your departments into one platform so employees can access accurate information in real time.",
      "Workflow Automation - Reduce manual work and operational costs by automating routine tasks and approval workflows.",
      "Real-Time Analytics - Gain immediate insights into your business performance with interactive dashboards and advanced reporting.",
      "Scalable Architecture - Our modular design allows new features and departments to be seamlessly added as your business grows.",
      "Role-Based Security - Ensure data privacy and compliance by providing secure access based on specific employee responsibilities."
    ]
  },
  {
    title: "CRM",
    icon: "bx bx-user-pin",
    image: "/crm.png",
    headline: "Strengthen Customer Relationships and Boost Sales",
    description: "In today's competitive business environment, building strong, personalized customer relationships is essential for long-term success. Managing client information through disconnected tools often results in missed opportunities, delayed follow-ups, and reduced customer satisfaction. At TK-INFOTECHSOFT, we develop intelligent Customer Relationship Management (CRM) solutions that centralize all customer interactions into one secure platform. Our customized systems allow your sales, marketing, and support teams to automate processes, manage leads, and collaborate seamlessly. By combining intelligent reporting and tailored workflows, we help you maximize revenue and deliver exceptional customer experiences.",
    points: [
      "Lead Management - Capture, qualify, and track leads from various sources to monitor their journey from initial inquiry to successful conversion.",
      "Sales Automation - Automate repetitive tasks such as follow-up reminders, email communications, and meeting schedules to increase productivity.",
      "360-Degree Customer View - Maintain a centralized database containing communication history, preferences, and essential contact details.",
      "Marketing Campaigns - Create targeted campaigns, segment your audience, and nurture leads automatically to drive business growth.",
      "Performance Dashboards - Track key performance indicators, sales targets, and team achievements in real time to make data-driven decisions."
    ]
  },
  {
    title: "Portfolio Website",
    icon: "bx bx-id-card",
    image: "/portfolio.png",
    headline: "Showcase Your Brand, Work, and Achievements",
    description: "Your online presence is often the first interaction potential clients, employers, or collaborators have with you. A well-designed portfolio website is one of the most effective ways to showcase your expertise, achievements, and unique value in a competitive digital landscape. At TK-INFOTECHSOFT, we create visually stunning, highly responsive portfolio websites that help individuals and businesses build trust and attract high-quality opportunities. We combine creative design with strategic content placement to ensure your digital showcase communicates your journey and vision effectively. Let us build a personalized platform that highlights your skills and converts visitors into lasting connections.",
    points: [
      "Personalized Branding - We create customized layouts that align perfectly with your personality or corporate business identity.",
      "Project Showcase - Display your completed projects, case studies, and achievements with engaging image galleries and detailed descriptions.",
      "Interactive Resume - Present your work experience, education, and professional skills in an organized and highly readable timeline format.",
      "Client Testimonials - Build credibility and trust by effectively showcasing genuine feedback and success stories from past clients.",
      "Contact Integration - Make it effortless for visitors to reach you through secure inquiry forms and integrated social media links."
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
  const [activeOfferedCourse, setActiveOfferedCourse] = useState(0);
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

  const openCourseEnquiryPopup = () => {
    const selectedCourse = offeredCourses[activeOfferedCourse].title;
    setFormData((prev) => ({ ...prev, course: selectedCourse }));
    setStatus({ text: '', type: '' });
    setIsServicePopupOpen(true);
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
          <h2 id="software-services-title" style={{ letterSpacing: '0.1em', color: 'darkviolet', animation: 'whyBrandGlow 3.8s ease-in-out infinite' }}>Our Software Services</h2>
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
                    <h3 style={{ fontSize: '2.5rem', color: 'darkviolet', marginBottom: '0.5rem' }}>{service.title}</h3>
                    <h4 style={{ fontSize: '1.25rem', color: '#1c1c1c', marginBottom: '1.5rem' }}>{service.headline}</h4>
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
                          {service.points.map((point, index) => {
                            const parts = point.split(' - ');
                            const title = parts[0];
                            const desc = parts.slice(1).join(' - ') || point;

                            return (
                              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <i className="bx bx-check" style={{ color: '#00c2ff', fontSize: '1.5rem', marginTop: '0.1rem' }}></i>
                                <div>
                                  <strong style={{ color: '#1c1c1c', fontSize: '1.15rem' }}>{title}</strong>
                                  <p style={{ color: 'var(--text-muted)', margin: '0.4rem 0 0', lineHeight: '1.6' }}>{desc}</p>
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
                      <img src={service.image} alt={service.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '1rem' }} />
                    ) : (
                      <span>Image Space</span>
                    )}
                    <button 
                      className="connect-us-btn" 
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


      <section className="software-services-section offered-courses-section" aria-labelledby="offered-courses-title">
        <div className="site-container software-services-inner">
          <h2 id="offered-courses-title" style={{ letterSpacing: '0.1em', color: 'darkviolet', animation: 'whyBrandGlow 3.8s ease-in-out infinite' }}>Course Offered</h2>
<br/>
          <div className="software-services-layout offered-courses-layout">
            <article
              className="software-service-card offered-course-card"
              id="offered-course-panel"
              role="tabpanel"
              aria-labelledby={`offered-course-tab-${activeOfferedCourse}`}
            >
              <h3>{offeredCourses[activeOfferedCourse].title}</h3>
              <p>{offeredCourses[activeOfferedCourse].description}</p>
              <div className="programme-meta">
                {offeredCourses[activeOfferedCourse].meta.map((item) => (
                  <span className="meta-chip" key={item}>{item}</span>
                ))}
              </div>
              <button className="btn btn-brand btn-lg core-services-button offered-course-link" type="button" onClick={openCourseEnquiryPopup}>
                Register course <i className="bx bx-right-arrow-alt"></i>
              </button>
            </article>

            <div className="software-service-tabs offered-course-tabs" role="tablist" aria-label="Course offered">
              {offeredCourses.map((course, index) => (
                <button
                  className={`software-service-tab ${activeOfferedCourse === index ? 'is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeOfferedCourse === index}
                  aria-controls="offered-course-panel"
                  id={`offered-course-tab-${index}`}
                  key={course.title}
                  onClick={() => setActiveOfferedCourse(index)}
                >
                  <span className="software-service-fold" aria-hidden="true"></span>
                  <span className="software-service-points" aria-hidden="true">
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                    <span className="software-service-point"></span>
                  </span>
                  <span className="software-service-inner">{course.tabTitle || course.title}</span>
                </button>
              ))}
            </div>
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
