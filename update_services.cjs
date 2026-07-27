const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src/pages/Services.jsx");
let content = fs.readFileSync(filePath, "utf8");

// We need to replace the entire softwareServices array.
// Finding start and end.
const startIndex = content.indexOf("const softwareServices = [");
const endIndex = content.indexOf("const softwareServiceQueryMap = {");

const newServices = `const softwareServices = [
  {
    title: "Web Development",
    icon: "bx bx-code-curly",
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

`

content = content.substring(0, startIndex) + newServices + content.substring(endIndex);

// Now update the render block
const searchRender = `            <article
              className="software-service-card"
              id="software-service-panel"
              role="tabpanel"
              aria-labelledby={\`software-service-tab-\${activeSoftwareService}\`}
            >
              <h3>{softwareServices[activeSoftwareService].title}</h3>
              <h4>{softwareServices[activeSoftwareService].headline}</h4>
              <div className="software-service-content-details">
                {softwareServices[activeSoftwareService].fullContent ? (`

const replaceRender = `            <article
              className="software-service-card"
              id="software-service-panel"
              role="tabpanel"
              aria-labelledby={\`software-service-tab-\${activeSoftwareService}\`}
            >
              <h3>{softwareServices[activeSoftwareService].title}</h3>
              <h4>{softwareServices[activeSoftwareService].headline}</h4>
              {softwareServices[activeSoftwareService].description && (
                <p className="service-topic-description" style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "1.05rem", margin: "1rem 0 2rem" }}>
                  {softwareServices[activeSoftwareService].description}
                </p>
              )}
              <div className="software-service-content-details">
                {softwareServices[activeSoftwareService].fullContent ? (`

content = content.replace(searchRender, replaceRender);

fs.writeFileSync(filePath, content, "utf8");
console.log("Services.jsx updated successfully.");

