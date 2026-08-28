/**
 * Home.jsx
 * The main landing page of the application.
 * Contains the Hero section, Why Choose Us highlights, Core Services, and Work Process.
 */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Home Component
 * Renders the homepage layout and manages state for interactive sections like 'Why Choose Us'.
 */
export default function Home() {
  const navigate = useNavigate();

  // Data array for the 'Why Choose TK-INFOTECHSOFT' highlights
  const whyHighlights = [
    {
      icon: 'bx bxs-devices',
      title: 'Modern Web Solutions',
      text: 'Build fast, responsive websites'
    },
    {
      icon: 'bx bx-code-block',
      title: 'Custom Software Development',
      text: 'Solutions tailored to businesses'
    },
    {
      icon: 'bx bx-chip',
      title: 'Latest Technologies',
      text: 'Modern tools and frameworks'
    },
    {
      icon: 'bx bx-line-chart',
      title: 'Scalable Applications',
      text: 'Software built for growth'
    },
    {
      icon: 'bx bx-paint',
      title: 'User-Friendly Designs',
      text: 'Simple and engaging interfaces'
    }
  ];

  // Data array for the core services preview
  const coreServices = [
    { title: 'Web Development', icon: 'bx bx-code-alt', service: 'web-development' },
    { title: 'Ecommerce Website', icon: 'bx bx-store-alt', service: 'e-commerce-website' },
    { title: 'Business ERP Softwares', icon: 'bx bx-layer', service: 'business-erp' },
    { title: 'CRM', icon: 'bx bx-user-pin', service: 'crm' },
    { title: 'Portfolio Website', icon: 'bx bx-id-card', service: 'portfolio-website' }
  ];

  // Data structure for the 'Work Process' section, split by software and training
  const workProcesses = {
    software: [
      {
        title: 'Understand the Problem',
        text: 'Collaborate with clients to analyze challenges and define clear, actionable objectives.'
      },
      {
        title: 'Gather Requirements',
        text: 'Collect and refine business requirements to align with the best IT solutions and practices.'
      },
      {
        title: 'Optimize and Support',
        text: 'Continuously monitor, refine, and provide support to ensure seamless operations and sustained growth.'
      }
    ],
    training: [
      {
        title: 'Assess Learning Needs',
        text: "Understand students' goals, current skill levels, and career aspirations to create the right learning path."
      },
      {
        title: 'Deliver Practical Training',
        text: 'Provide industry-focused training through expert instructors, hands-on projects, real-world case studies, and interactive sessions.'
      },
      {
        title: 'Evaluate & Mentor',
        text: 'Track progress with assessments, offer personalized guidance, and prepare students for certifications, interviews, and career opportunities.'
      }
    ]
  };

  // State hooks for active tab/slide indices in various interactive sections
  const [activeWhy, setActiveWhy] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [activeProcess, setActiveProcess] = useState('software');

  /**
   * Navigates the user to the services page and scrolls to the specific service section.
   * @param {string} service - The slug of the service to navigate to.
   */
  const openServiceDetails = (service) => {
    navigate(`/services?service=${service}`);
  };

  const handleServiceCardKeyDown = (event, service) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openServiceDetails(service);
    }
  };

  /**
   * Auto-rotates through the 'Why Choose Us' and 'Core Services' slides on an interval.
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWhy((current) => (current + 1) % whyHighlights.length);
      setActiveService((current) => (current + 1) % coreServices.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [whyHighlights.length, coreServices.length]);



  return (
    <main className="page-shell">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-backdrop"></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><i className="bx bxs-rocket"></i> Software solutions & Courses </span>
           <br/> <h1>
              Developing talent and
              
              delivering <br/><span className="typing-word">Technology
                </span>.
            </h1><br/>
            <p>Building skills, developing solutions, achieving success.</p>
            <br/>
            <div className="hero-actions">
              <Link className="btn btn-brand btn-lg" to="/projects">Explore projects</Link>
              <Link className="btn btn-outline-light-soft btn-lg" to="/contact">
                Enquiry now
              </Link>
            </div>
            
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata" controlsList="nodownload">
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="hero-highlights" aria-label="Why choose TK-INFOTECHSOFT">
        <div className="site-container">
          <div className="why-template-head reveal">
            <span></span>
            <h2>Why Choose ?
             <br/> <span className="why-brand-word">TK-INFOTECHSOFT</span></h2>
            <p>
              We bridge the gap between education, careers, and digital growth through training,
              career support, and technology services.
            </p>
          </div>

          <div className="why-template-grid">
            <div className="why-orbit reveal">
              <div className="why-orbit-ring"></div>
              <div className="why-orbit-center">
                <h3>{whyHighlights[activeWhy].title}</h3>
              </div>
              {whyHighlights.map((item, index) => (
                <button
                  className={`why-orbit-icon why-orbit-icon-${index + 1} ${activeWhy === index ? 'is-active' : ''}`}
                  type="button"
                  key={item.title}
                  aria-label={item.text}
                  aria-pressed={activeWhy === index}
                  onClick={() => setActiveWhy(index)}
                  onFocus={() => setActiveWhy(index)}
                  onMouseEnter={() => setActiveWhy(index)}
                >
                  <i className={item.icon}></i>
                </button>
              ))}
            </div>

            <article className="why-content-card reveal">
              <div className="why-content-icon" key={whyHighlights[activeWhy].title}>
                <i className={whyHighlights[activeWhy].icon}></i>
              </div>
              <h3>{whyHighlights[activeWhy].title}</h3>
              <p>{whyHighlights[activeWhy].text}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services-section theme-split" aria-label="Core services">
        <div className="core-services-inner theme-split-inner">
          <div className="theme-split-left" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="uiverse-card">
              <div className="uiverse-content">
                {coreServices.map((service, index) => (
                  <div 
                    className="uiverse-word" 
                    key={service.title}
                    role="link"
                    tabIndex="0"
                    onClick={() => openServiceDetails(service.service)}
                    onKeyDown={(event) => handleServiceCardKeyDown(event, service.service)}
                  >
                    <i className={service.icon} style={{ fontSize: '3.5rem', color: '#8b5cf6', marginBottom: '15px' }}></i>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Professional solutions tailored for growth.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="theme-split-right">
            <div className="theme-split-copy">
              <div className="theme-split-line"></div>
              <h2>OUR CORE SERVICES</h2>
              <p>Smart solutions real results. We bridge the gap between education, careers, and digital growth through training, career support, and technology services.</p>
              <Link className="btn btn-brand core-services-button" to="/services" style={{ marginTop: '1.5rem' }}>Our services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space work-process-section">
        <div className="site-container work-process-layout">
          <div className="work-process-content">
            <div className="why-template-head work-process-head">
              <span></span>
              <h2>
                {activeProcess === 'training'
                  ? 'How Our Training Process'
                  : 'How Our Software Process'}
                <br />
                <span className="why-brand-word">Works</span>
              </h2>
            </div>

            <div className="work-process-tabs" role="tablist" aria-label="Work process type">
              <button
                className={`work-process-tab ${activeProcess === 'software' ? 'is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeProcess === 'software'}
                onClick={() => setActiveProcess('software')}
              >
                Software
              </button>
              <button
                className={`work-process-tab ${activeProcess === 'training' ? 'is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeProcess === 'training'}
                onClick={() => setActiveProcess('training')}
              >
                Training
              </button>
            </div>

            <div className="work-process-cards">
              {workProcesses[activeProcess].map((step, index) => (
                <article className="work-process-card" key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="work-process-media reveal" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata" controlsList="nodownload">
              <source src="/workprocess.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container" ref={(el) => {
          if (el && !el.querySelector('script')) {
            const script = document.createElement('script');
            script.src = 'https://www.jotform.com/website-widgets/embed/019fd095ebd0700087eeeb0eb4234b8f0339';
            script.async = true;
            el.appendChild(script);
          }
        }}>
          <div id="JFWebsiteWidget-019fd095ebd0700087eeeb0eb4234b8f0339"></div>
        </div>
      </section>

      <section className="section-space product-contact-section">
        <div className="site-container product-contact-layout">
          <div className="product-contact-media reveal" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata" controlsList="nodownload">
              <source src="/contact.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="product-contact-copy reveal">
            <h2>Turn Your Vision into a Powerful Software Product</h2>
            <p>
              Bring your business ideas to life with cutting-edge software solutions designed
              for growth and innovation.
            </p>
            <Link className="btn btn-brand core-services-button" to="/contact">Reach us</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
