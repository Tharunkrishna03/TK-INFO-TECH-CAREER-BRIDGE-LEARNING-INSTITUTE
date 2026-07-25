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
    title: 'Web Development',
    icon: 'bx bx-code-curly',
    headline: 'Custom Websites That Build Your Digital Presence',
    fullContent: (
      <>
        <p><strong>Transform Your Vision into a Powerful Digital Experience</strong></p>
        <p>In today's digital era, your website is more than just an online platform—it is the face of your business, your digital identity, and often the first impression customers have of your brand. Whether you're a startup, a growing company, or a well-established enterprise, a professionally designed website plays a crucial role in building credibility, attracting customers, and driving business growth.</p>
        <p>At TK-INFOTECHSOFT, we specialize in creating modern, responsive, secure, and high-performance websites that help businesses establish a strong online presence. Our experienced team combines creativity, innovative design, and advanced technologies to deliver websites that not only look exceptional but also perform flawlessly across every device.</p>
        <p>We believe every business has unique goals, challenges, and customers. That's why we don't believe in one-size-fits-all solutions. Every website we create is carefully planned, designed, and developed according to your specific business requirements, ensuring that it reflects your brand identity while providing an outstanding user experience.</p>
        
        <h3>Why Your Business Needs a Professional Website</h3>
        <p>Your website is your digital storefront. Customers often decide whether to trust your business within the first few seconds of visiting your website. A professionally developed website helps establish trust, demonstrate expertise, and encourage visitors to become loyal customers.</p>
        <p>Without a professional website, businesses risk losing valuable opportunities to competitors who provide better online experiences. Modern consumers expect fast-loading pages, attractive designs, easy navigation, and mobile-friendly functionality.</p>
        <p>A well-developed website enables businesses to:</p>
        <ul>
          <li>Reach customers worldwide</li>
          <li>Build brand credibility</li>
          <li>Increase customer engagement</li>
          <li>Generate qualified leads</li>
          <li>Improve customer satisfaction</li>
          <li>Boost online visibility</li>
          <li>Support digital marketing campaigns</li>
          <li>Increase revenue opportunities</li>
        </ul>

        <h3>Our Web Development Philosophy</h3>
        <p>At TK-INFOTECHSOFT, we don't simply create websites—we build digital experiences.</p>
        <p>Every project begins by understanding your business objectives, target audience, competitors, and future goals. We analyze your industry to identify opportunities that help your business stand out in the competitive digital marketplace.</p>
        <p>Our development approach combines creativity with functionality. Every design element is carefully crafted to ensure visitors enjoy a seamless browsing experience while encouraging them to take meaningful actions, whether that's making a purchase, requesting a quote, scheduling a consultation, or contacting your team.</p>
        <p>We focus on building websites that remain effective for years by using scalable architecture, clean coding standards, and future-ready technologies.</p>

        <h3>Our Web Development Services</h3>
        <p>We provide complete website development solutions tailored for businesses of every size.</p>
        <h4>Business Websites</h4>
        <p>Professional corporate websites designed to showcase your company, services, mission, and achievements while building trust with potential clients.</p>
        <h4>Startup Websites</h4>
        <p>Modern websites designed specifically for startups looking to establish their online presence quickly while maintaining affordability and scalability.</p>
        <h4>Corporate Websites</h4>
        <p>Enterprise-grade websites built with advanced functionality, enhanced security, and powerful content management systems.</p>
        <h4>Landing Pages</h4>
        <p>High-converting landing pages specifically created for marketing campaigns, product launches, and lead generation.</p>
        <h4>Custom Web Applications</h4>
        <p>Powerful web applications designed to automate business processes, improve productivity, and enhance customer experiences.</p>
        <h4>Educational Websites</h4>
        <p>Learning management systems, online courses, student portals, and educational platforms for schools, colleges, and training institutes.</p>
        <h4>Healthcare Websites</h4>
        <p>Secure and professional websites for hospitals, clinics, laboratories, and healthcare providers.</p>
        <h4>Real Estate Websites</h4>
        <p>Property listing platforms with advanced search functionality and customer inquiry management.</p>
        <h4>Portfolio Websites</h4>
        <p>Beautiful personal and company portfolios that showcase skills, achievements, and completed projects.</p>

        <h3>Our Development Process</h3>
        <h4>1. Requirement Analysis</h4>
        <p>We begin by understanding your business, target audience, competitors, and objectives. This allows us to recommend the best technologies and features for your website.</p>
        <h4>2. Planning</h4>
        <p>Our experts prepare project architecture, sitemap, user flow, and design strategy before development begins.</p>
        <h4>3. UI/UX Design</h4>
        <p>Our designers create attractive, user-friendly interfaces focused on improving customer engagement. Every design is optimized for:</p>
        <ul>
          <li>User experience</li>
          <li>Accessibility</li>
          <li>Mobile devices</li>
          <li>Branding consistency</li>
        </ul>
        <h4>4. Frontend Development</h4>
        <p>We convert designs into responsive web pages using modern technologies including: HTML5, CSS3, JavaScript, Bootstrap, React.js, Next.js.</p>
        <h4>5. Backend Development</h4>
        <p>Our backend developers create secure and scalable server-side applications using technologies such as: Python, Django, Node.js, Express.js, REST APIs, MySQL, MongoDB.</p>
        <h4>6. Testing</h4>
        <p>Before launch we perform: Functional Testing, Performance Testing, Mobile Testing, Browser Compatibility Testing, Security Testing, User Experience Testing.</p>
        <h4>7. Deployment</h4>
        <p>We deploy your website securely using reliable cloud hosting services.</p>
        <h4>8. Maintenance</h4>
        <p>We continue supporting your website through: Updates, Bug Fixes, Security Monitoring, Performance Optimization, Feature Enhancements.</p>

        <h3>Key Features</h3>
        <h4>Responsive Design</h4>
        <p>Your website automatically adapts to desktops, tablets, and smartphones for a seamless user experience.</p>
        <h4>Fast Performance</h4>
        <p>Optimized code and images ensure fast loading speeds that reduce bounce rates and improve customer satisfaction.</p>
        <h4>SEO Optimization</h4>
        <p>Built following search engine best practices to improve rankings and increase organic traffic.</p>
        <h4>Secure Development</h4>
        <p>We implement strong security measures including: HTTPS, Secure Authentication, Data Encryption, Input Validation, SQL Injection Protection, XSS Prevention.</p>
        <h4>Easy Navigation</h4>
        <p>Clear menus and intuitive layouts help visitors find information quickly.</p>
        <h4>Content Management</h4>
        <p>Easily update website content without requiring technical expertise.</p>
        <h4>Analytics Integration</h4>
        <p>Track visitor behavior using tools like Google Analytics and Search Console.</p>
        <h4>Contact Forms</h4>
        <p>Capture inquiries with secure, user-friendly contact forms.</p>
        <h4>Social Media Integration</h4>
        <p>Connect your website with Facebook, Instagram, LinkedIn, YouTube, and other platforms.</p>
        <h4>Live Chat Integration</h4>
        <p>Provide instant customer support directly through your website.</p>

        <h3>Benefits of Choosing TK-INFOTECHSOFT</h3>
        <ul>
          <li><strong>Professional Design:</strong> Our websites create lasting impressions that strengthen your brand image.</li>
          <li><strong>Business Growth:</strong> We focus on building websites that generate leads and increase revenue.</li>
          <li><strong>Scalable Solutions:</strong> As your business grows, your website grows with you.</li>
          <li><strong>Affordable Pricing:</strong> High-quality development at competitive prices.</li>
          <li><strong>Transparent Communication:</strong> Regular project updates ensure you're involved throughout the development process.</li>
          <li><strong>Dedicated Support:</strong> Our team remains available after project completion for maintenance and assistance.</li>
        </ul>

        <h3>Technologies We Use</h3>
        <ul>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, React.js, Next.js</li>
          <li><strong>Backend:</strong> Python, Django, Node.js, Express.js</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Cloud & Deployment:</strong> Vercel, Netlify, AWS, DigitalOcean, Render</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
        </ul>

        <h3>Industries We Serve</h3>
        <p>We develop websites for a wide range of industries, including: Information Technology, Education, Healthcare, Manufacturing, Retail, E-Commerce, Construction, Real Estate, Logistics, Hospitality, Finance, Agriculture, Government Organizations, NGOs, Startups, Small Businesses, Enterprises, Personal Brands, Consultants, Freelancers.</p>

        <h3>Why Choose TK-INFOTECHSOFT?</h3>
        <ul>
          <li>Experienced Developers</li>
          <li>Customer-Centric Approach</li>
          <li>Customized Solutions</li>
          <li>Transparent Pricing</li>
          <li>Modern Technologies</li>
          <li>Timely Project Delivery</li>
          <li>SEO-Optimized Development</li>
          <li>Responsive Designs</li>
          <li>Secure Coding Practices</li>
          <li>Long-Term Technical Support</li>
          <li>Scalable Architecture</li>
          <li>Performance Optimization</li>
          <li>Mobile-First Development</li>
          <li>Quality Assurance</li>
          <li>Ongoing Maintenance Services</li>
        </ul>
        <p>Our goal is not just to deliver a website but to create a digital platform that supports your business growth, enhances customer engagement, and delivers measurable results.</p>

        <h3>Frequently Asked Questions</h3>
        <p><strong>Q1: How long does it take to develop a website?</strong><br/>The timeline depends on the project's complexity. A standard business website usually takes 2–6 weeks, while larger custom solutions may require more time.</p>
        <p><strong>Q2: Will my website be mobile-friendly?</strong><br/>Yes. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones.</p>
        <p><strong>Q3: Can you redesign my existing website?</strong><br/>Absolutely. We can modernize your current website with improved design, performance, security, and functionality.</p>
        <p><strong>Q4: Will my website be SEO-friendly?</strong><br/>Yes. We follow SEO best practices to improve your site's visibility in search engines.</p>
        <p><strong>Q5: Do you provide website maintenance?</strong><br/>Yes. We offer ongoing maintenance, updates, security monitoring, and technical support after launch.</p>

        <h3>Ready to Build Your Online Presence?</h3>
        <p>Whether you're launching a new business, upgrading an existing website, or looking to create a custom web application, TK-INFOTECHSOFT is your trusted technology partner. We are committed to delivering websites that combine exceptional design, cutting-edge technology, and measurable business results.</p>
        <p>Let's create a website that inspires confidence, engages your audience, and drives your business forward. Contact TK-INFOTECHSOFT today to discuss your project and take the first step toward digital success.</p>
      </>
    )
  },
  {
    title: 'E-Commerce Website',
    icon: 'bx bx-store-alt',
    headline: 'Powerful Online Stores That Drive Sales',
    fullContent: (
      <>
        <p><strong>Build an Online Store That Sells 24/7</strong></p>
        <p>The way customers shop has transformed dramatically over the past decade. Consumers now expect businesses to provide fast, secure, and convenient online shopping experiences that are available anytime and anywhere. Whether they are browsing products on a desktop during work hours or making purchases from their mobile phones late at night, customers expect a seamless digital experience. A professionally developed e-commerce website helps businesses meet these expectations while expanding their reach beyond geographical boundaries.</p>
        <p>At TK-INFOTECHSOFT, we specialize in designing and developing powerful e-commerce solutions that enable businesses to sell products and services online with confidence. Our online stores are built with a strong focus on user experience, security, speed, and scalability. Every feature is carefully designed to simplify the buying process, increase customer satisfaction, and maximize sales conversions.</p>
        <p>Our goal is not just to create an online store—it is to build a complete digital commerce platform that supports your business growth. From product management and inventory tracking to secure payment processing and customer relationship tools, we provide everything your business needs to succeed in today's competitive online marketplace.</p>
        <p>Whether you are a startup launching your first online business, a retail store expanding into digital sales, or a large enterprise looking for a customized commerce solution, our experienced developers create platforms tailored specifically to your business goals.</p>

        <h3>Why Every Business Needs an E-Commerce Website</h3>
        <p>Modern consumers prefer the convenience of shopping online. An e-commerce website allows your business to remain open 24 hours a day, seven days a week, giving customers the freedom to browse, compare, and purchase products whenever they choose.</p>
        <p>Unlike a traditional physical store, an online store has no geographical limitations. You can reach customers across cities, states, countries, or even globally. This significantly increases your potential customer base while reducing many operational limitations associated with brick-and-mortar businesses.</p>
        <p>An e-commerce platform also provides valuable business insights. You can analyze customer behavior, monitor sales performance, understand purchasing trends, and make informed decisions using real-time data. These insights help improve marketing strategies, optimize inventory, and increase profitability.</p>
        <p>Benefits of an e-commerce website include:</p>
        <ul>
          <li>Sell products 24/7</li>
          <li>Reach customers worldwide</li>
          <li>Increase revenue opportunities</li>
          <li>Reduce operational costs</li>
          <li>Build customer loyalty</li>
          <li>Simplify order management</li>
          <li>Improve inventory tracking</li>
          <li>Enhance customer convenience</li>
          <li>Strengthen your brand presence</li>
          <li>Gain valuable business analytics</li>
        </ul>

        <h3>Our E-Commerce Development Philosophy</h3>
        <p>At TK-INFOTECHSOFT, we believe that a successful online store combines attractive design, exceptional user experience, and powerful business functionality. Every online store we build is carefully planned to ensure customers enjoy a smooth shopping journey from the moment they land on your homepage until they complete their purchase.</p>
        <p>We focus on creating stores that are visually appealing, easy to navigate, and optimized for high conversion rates. Every product page, shopping cart, checkout process, and customer interaction is designed to reduce friction and encourage purchases.</p>
        <p>Security is another major priority. Customers trust your business with sensitive information such as payment details and personal data. We implement industry-standard security practices to protect customer information and build confidence in your online store.</p>
        <p>As your business grows, your e-commerce platform should grow with it. Our scalable architecture allows you to expand product catalogs, manage increasing customer traffic, integrate new payment gateways, and add advanced features without compromising performance.</p>

        <h3>Complete E-Commerce Development Services</h3>
        <p>We offer end-to-end e-commerce solutions that support businesses of all sizes.</p>
        <h4>Custom Online Store Development</h4>
        <p>Every business is unique, and your online store should reflect that. We build fully customized e-commerce websites tailored to your branding, products, and customer needs.</p>
        <h4>Multi-Vendor Marketplace Development</h4>
        <p>Launch platforms where multiple sellers can list and sell products while administrators manage commissions, vendors, and customer transactions from a centralized dashboard.</p>
        <h4>B2B E-Commerce Solutions</h4>
        <p>Develop secure business-to-business commerce platforms with customer-specific pricing, bulk ordering, approval workflows, and account management.</p>
        <h4>B2C Online Stores</h4>
        <p>Create customer-focused shopping experiences with intuitive navigation, personalized recommendations, and secure checkout processes.</p>
        <h4>Mobile Commerce</h4>
        <p>Develop responsive online stores optimized for smartphones and tablets, ensuring a seamless shopping experience across every device.</p>
        <h4>Subscription-Based Commerce</h4>
        <p>Sell subscription products and recurring services with automated billing and membership management.</p>
        <h4>Digital Product Stores</h4>
        <p>Offer software, e-books, online courses, music, templates, and downloadable products securely.</p>

        <h3>Our Development Process</h3>
        <h4>1. Business Analysis</h4>
        <p>We begin by understanding your products, customers, competitors, and business objectives. This helps us create an e-commerce strategy that aligns with your goals.</p>
        <h4>2. Planning and Store Architecture</h4>
        <p>We design the store structure, including product categories, navigation, user flow, checkout process, and overall customer experience.</p>
        <h4>3. UI/UX Design</h4>
        <p>Our designers create modern, visually engaging interfaces that encourage customers to explore products and complete purchases.</p>
        <h4>4. Frontend Development</h4>
        <p>We build responsive user interfaces using modern technologies such as: HTML5, CSS3, JavaScript, React.js, Bootstrap, Next.js.</p>
        <h4>5. Backend Development</h4>
        <p>Our backend solutions ensure secure data management, payment processing, order tracking, and inventory management using: Python, Django, Node.js, Express.js, REST APIs, MySQL, PostgreSQL, MongoDB.</p>
        <h4>6. Testing and Quality Assurance</h4>
        <p>Before launch, we thoroughly test every aspect of the store, including: Shopping cart, Checkout process, Payment gateways, Mobile responsiveness, Browser compatibility, Security, Performance, User experience.</p>
        <h4>7. Deployment</h4>
        <p>We deploy your online store on reliable cloud infrastructure with proper configuration, SSL certificates, and performance optimization.</p>
        <h4>8. Ongoing Maintenance</h4>
        <p>After launch, we provide continuous support, updates, security patches, feature enhancements, and technical assistance.</p>

        <h3>Key Features</h3>
        <h4>Product Catalog Management</h4>
        <p>Easily organize products into categories with detailed descriptions, images, pricing, and stock availability.</p>
        <h4>Advanced Product Search</h4>
        <p>Help customers quickly find products through smart search, filters, and sorting options.</p>
        <h4>Shopping Cart</h4>
        <p>Allow customers to review, update, and manage their selected products before checkout.</p>
        <h4>Secure Checkout</h4>
        <p>Provide a simple and secure checkout experience that minimizes abandoned carts and increases conversions.</p>
        <h4>Payment Gateway Integration</h4>
        <p>Support multiple payment methods, including: Credit Cards, Debit Cards, UPI, Net Banking, Wallets, International Payments.</p>
        <h4>Order Management</h4>
        <p>Track every order from placement to delivery with real-time updates.</p>
        <h4>Inventory Management</h4>
        <p>Automatically monitor stock levels, receive low-stock alerts, and manage inventory efficiently.</p>
        <h4>Customer Accounts</h4>
        <p>Allow customers to create accounts, track orders, save addresses, and manage wishlists.</p>
        <h4>Wishlist Functionality</h4>
        <p>Enable users to save products for future purchases.</p>
        <h4>Coupon and Discount System</h4>
        <p>Create promotional offers, coupon codes, seasonal discounts, and loyalty rewards to increase sales.</p>
        <h4>Shipping Integration</h4>
        <p>Connect with shipping providers to calculate delivery charges and track shipments.</p>
        <h4>Product Reviews and Ratings</h4>
        <p>Encourage customer feedback to build trust and improve product credibility.</p>
        <h4>Email Notifications</h4>
        <p>Automatically send order confirmations, shipping updates, invoices, and promotional emails.</p>
        <h4>Sales Analytics Dashboard</h4>
        <p>Monitor revenue, customer behavior, top-selling products, abandoned carts, and overall business performance.</p>
        <h4>Mobile Responsive Design</h4>
        <p>Deliver a consistent shopping experience across desktops, tablets, and smartphones.</p>

        <h3>Benefits of Choosing TK-INFOTECHSOFT</h3>
        <ul>
          <li>Customized Store Design</li>
          <li>SEO-Optimized Development</li>
          <li>High-Speed Performance</li>
          <li>Secure Payment Systems</li>
          <li>Mobile-First Design</li>
          <li>Easy Product Management</li>
          <li>Scalable Architecture</li>
          <li>Affordable Pricing</li>
          <li>Transparent Development Process</li>
          <li>Ongoing Technical Support</li>
          <li>Dedicated Project Management</li>
          <li>Business Growth-Focused Solutions</li>
        </ul>

        <h3>Technologies We Use</h3>
        <ul>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, React.js, Next.js</li>
          <li><strong>Backend:</strong> Python, Django, Node.js, Express.js</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Cloud & Hosting:</strong> AWS, DigitalOcean, Vercel, Netlify, Render</li>
          <li><strong>Payment Integrations:</strong> Razorpay, Stripe, PayPal, PhonePe, Google Pay, Cashfree</li>
        </ul>

        <h3>Industries We Serve</h3>
        <p>Our e-commerce solutions are suitable for: Fashion & Apparel, Electronics, Grocery, Furniture, Healthcare, Beauty & Cosmetics, Jewelry, Books, Sports Equipment, Agriculture, Home Decor, Food & Beverage, Automotive Parts, Educational Products, Handicrafts, Manufacturing, Wholesale Businesses, Retail Stores.</p>

        <h3>Why Choose TK-INFOTECHSOFT?</h3>
        <p>Choosing the right technology partner is one of the most important decisions for your online business. At TK-INFOTECHSOFT, we combine technical expertise, creative design, and business understanding to deliver e-commerce platforms that are reliable, scalable, and built for long-term success.</p>
        <p>Our team focuses on understanding your business model, target audience, and growth objectives before writing a single line of code. This ensures every feature we develop adds real value to your business and enhances the shopping experience for your customers.</p>
        <p>We are committed to delivering projects on time, maintaining transparent communication, and providing continuous support after launch. From startups to established enterprises, our clients trust us to create online stores that drive measurable business results.</p>

        <h3>Frequently Asked Questions</h3>
        <p><strong>Q1: Can you build a custom online store for my business?</strong><br/>Yes. Every e-commerce website we develop is customized to match your products, branding, and business requirements.</p>
        <p><strong>Q2: Can customers pay online securely?</strong><br/>Absolutely. We integrate trusted payment gateways with SSL encryption and secure transaction processing.</p>
        <p><strong>Q3: Will my store work on mobile devices?</strong><br/>Yes. Every store is fully responsive and optimized for smartphones, tablets, and desktops.</p>
        <p><strong>Q4: Can I manage products myself?</strong><br/>Yes. You can easily add, edit, remove, and organize products through an admin dashboard without technical knowledge.</p>
        <p><strong>Q5: Do you provide support after launch?</strong><br/>Yes. We offer maintenance, updates, performance monitoring, security enhancements, and technical support to keep your store running smoothly.</p>

        <h3>Ready to Launch Your Online Store?</h3>
        <p>Whether you're starting a new online business or expanding an existing one, TK-INFOTECHSOFT is here to help you succeed. We build secure, scalable, and user-friendly e-commerce platforms that deliver exceptional shopping experiences and measurable business growth.</p>
      </>
    )
  },
  {
    title: 'Business ERP',
    icon: 'bx bx-layer',
    headline: 'Integrated Solutions for Efficient Business Management',
    fullContent: (
      <>
        <p><strong>Empower Your Business with a Unified Enterprise Resource Planning System</strong></p>
        <p>Running a successful business requires more than hard work—it requires efficient processes, accurate information, and seamless collaboration across departments. As businesses grow, managing finance, inventory, sales, human resources, procurement, customer service, production, and reporting through disconnected systems becomes increasingly difficult. Manual processes often lead to errors, delays, and poor decision-making.</p>
        <p>At TK-INFOTECHSOFT, we develop custom Enterprise Resource Planning (ERP) solutions that bring every aspect of your business into one centralized platform. Our ERP systems are designed to simplify operations, automate repetitive tasks, improve collaboration, and provide real-time visibility into your organization's performance.</p>
        <p>Whether you are a startup looking to organize your operations or a large enterprise seeking digital transformation, our ERP solutions are tailored to meet your unique business requirements. We focus on creating flexible, scalable, and secure systems that help businesses improve productivity, reduce costs, and make informed decisions.</p>
        <p>Our ERP software is more than just a management tool—it is the backbone of your organization, connecting every department through a single source of truth. By eliminating data silos and streamlining workflows, businesses can respond faster to market changes, improve customer satisfaction, and achieve sustainable growth.</p>

        <h3>Why Your Business Needs an ERP System</h3>
        <p>Many businesses start with separate tools for accounting, inventory, sales, payroll, and customer management. While these systems may work initially, they often create duplicate data, inconsistent reporting, and communication gaps as the business expands.</p>
        <p>An ERP system integrates all departments into one platform, allowing employees to access accurate information in real time. This improves efficiency, reduces manual work, and ensures everyone works with the same data.</p>
        <p>With a custom ERP solution, businesses can:</p>
        <ul>
          <li>Automate routine tasks and workflows.</li>
          <li>Reduce operational costs.</li>
          <li>Improve productivity and collaboration.</li>
          <li>Access real-time business insights.</li>
          <li>Make faster, data-driven decisions.</li>
          <li>Increase customer satisfaction.</li>
          <li>Ensure compliance and data security.</li>
          <li>Scale operations as the business grows.</li>
        </ul>

        <h3>Our ERP Development Philosophy</h3>
        <p>At TK-INFOTECHSOFT, we believe every business is unique. That's why we don't offer generic ERP software. Instead, we build customized ERP systems that align with your business processes, goals, and industry requirements.</p>
        <p>Our development approach begins with understanding how your organization operates. We work closely with stakeholders to identify challenges, streamline workflows, and design an ERP solution that improves efficiency without disrupting daily operations.</p>
        <p>We emphasize usability, ensuring employees can quickly learn and use the system. Our ERP platforms feature intuitive dashboards, role-based access, and responsive interfaces that make managing business operations simple and efficient.</p>
        <p>As your business evolves, your ERP should evolve too. Our modular architecture allows new features and departments to be added without rebuilding the entire system, ensuring long-term scalability and investment protection.</p>

        <h3>Core ERP Modules</h3>
        <p>Our ERP solutions include a wide range of modules that can be customized based on your business needs.</p>
        
        <h4>Finance & Accounting</h4>
        <p>Manage financial transactions, budgets, expenses, tax calculations, invoicing, and financial reporting from a centralized dashboard.</p>
        <p><strong>Features:</strong> General Ledger, Accounts Payable, Accounts Receivable, Bank Reconciliation, Expense Tracking, Financial Statements, Budget Management, GST/VAT Support.</p>

        <h4>Sales Management</h4>
        <p>Track leads, quotations, orders, invoices, and customer interactions efficiently.</p>
        <p><strong>Features:</strong> Lead Tracking, Quotation Generation, Sales Orders, Invoice Management, Sales Reports, Customer History, Revenue Analysis.</p>

        <h4>Purchase Management</h4>
        <p>Simplify procurement processes by managing suppliers, purchase requests, approvals, and purchase orders.</p>
        <p><strong>Features:</strong> Vendor Database, Purchase Requests, Purchase Orders, Supplier Evaluation, Delivery Tracking, Invoice Matching.</p>

        <h4>Inventory Management</h4>
        <p>Monitor stock levels, warehouses, product movements, and inventory valuation in real time.</p>
        <p><strong>Features:</strong> Multi-Warehouse Support, Stock Transfers, Barcode Integration, Batch Tracking, Stock Alerts, Inventory Reports.</p>

        <h4>Human Resource Management (HRM)</h4>
        <p>Streamline employee management from recruitment to payroll.</p>
        <p><strong>Features:</strong> Employee Profiles, Attendance Tracking, Leave Management, Payroll Processing, Performance Reviews, Recruitment Management.</p>

        <h4>Customer Relationship Management (CRM)</h4>
        <p>Manage leads, customer interactions, follow-ups, and support tickets within the ERP system.</p>

        <h4>Production Management</h4>
        <p>Plan, schedule, and monitor manufacturing operations.</p>
        <p><strong>Features:</strong> Production Planning, Bill of Materials (BOM), Work Orders, Machine Scheduling, Quality Checks, Production Reports.</p>

        <h4>Project Management</h4>
        <p>Track project timelines, budgets, resources, and progress.</p>
        <p><strong>Features:</strong> Task Assignment, Milestone Tracking, Resource Allocation, Time Tracking, Budget Monitoring.</p>

        <h4>Asset Management</h4>
        <p>Maintain records of company assets, depreciation, maintenance schedules, and asset utilization.</p>

        <h4>Document Management</h4>
        <p>Store contracts, invoices, employee records, and business documents securely with version control.</p>

        <h3>Our ERP Development Process</h3>
        <h4>1. Business Requirement Analysis</h4>
        <p>We analyze your current business processes, identify pain points, and understand your goals.</p>
        <h4>2. System Design</h4>
        <p>We create workflows, database architecture, user roles, and interface designs.</p>
        <h4>3. Development</h4>
        <p>Our developers build secure and scalable ERP modules using modern technologies.</p>
        <h4>4. Testing</h4>
        <p>We conduct functional, security, performance, and user acceptance testing.</p>
        <h4>5. Deployment</h4>
        <p>The ERP system is deployed with minimal downtime and seamless data migration.</p>
        <h4>6. Training</h4>
        <p>We provide user training and documentation to ensure smooth adoption.</p>
        <h4>7. Maintenance & Support</h4>
        <p>We offer ongoing updates, monitoring, and feature enhancements.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Centralized Business Management</li>
          <li>Role-Based User Access</li>
          <li>Real-Time Dashboards</li>
          <li>Workflow Automation</li>
          <li>Multi-Branch Support</li>
          <li>Multi-Currency & Multi-Language</li>
          <li>Cloud-Based Access</li>
          <li>Mobile-Friendly Interface</li>
          <li>Automated Notifications</li>
          <li>Advanced Reporting</li>
          <li>Custom Approval Workflows</li>
          <li>Data Backup & Recovery</li>
          <li>Audit Logs</li>
          <li>API Integrations</li>
          <li>Third-Party Software Integration</li>
        </ul>

        <h3>Benefits of Our ERP Solutions</h3>
        <ul>
          <li>Improve Operational Efficiency</li>
          <li>Reduce Manual Errors</li>
          <li>Save Time and Costs</li>
          <li>Increase Employee Productivity</li>
          <li>Enhance Collaboration</li>
          <li>Better Decision Making</li>
          <li>Real-Time Business Insights</li>
          <li>Strong Data Security</li>
          <li>Scalable for Future Growth</li>
          <li>Improved Customer Satisfaction</li>
          <li>Faster Business Processes</li>
          <li>Compliance with Industry Standards</li>
        </ul>

        <h3>Technologies We Use</h3>
        <ul>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Next.js, Bootstrap</li>
          <li><strong>Backend:</strong> Python, Django, Django REST Framework, Node.js, Express.js</li>
          <li><strong>Database:</strong> PostgreSQL, MySQL, MongoDB</li>
          <li><strong>Cloud & Deployment:</strong> AWS, Azure, DigitalOcean, Render, Vercel</li>
          <li><strong>Tools:</strong> Git & GitHub, Docker, REST APIs, JWT Authentication</li>
        </ul>

        <h3>Industries We Serve</h3>
        <p>Our ERP systems are suitable for: Manufacturing, Construction, Retail, Wholesale, Healthcare, Education, Logistics, Real Estate, Finance, Hospitality, Agriculture, IT Services, E-Commerce, Government Organizations, NGOs.</p>

        <h3>Why Choose TK-INFOTECHSOFT for ERP Development?</h3>
        <p>At TK-INFOTECHSOFT, we understand that an ERP system is a long-term investment. That's why we focus on delivering solutions that are reliable, scalable, and tailored to your business needs. Our experienced developers combine technical expertise with industry knowledge to create ERP systems that simplify operations and support growth.</p>
        <p>We provide end-to-end services—from consulting and development to deployment, training, and ongoing support. Our commitment to quality, transparency, and customer satisfaction ensures that your ERP project is delivered on time and within budget.</p>
        <p>When you choose TK-INFOTECHSOFT, you gain a technology partner dedicated to helping your business operate more efficiently and compete more effectively in today's digital landscape.</p>

        <h3>Frequently Asked Questions</h3>
        <p><strong>Q1: What is an ERP system?</strong><br/>An ERP (Enterprise Resource Planning) system integrates multiple business functions into one centralized platform, helping organizations manage operations efficiently.</p>
        <p><strong>Q2: Can the ERP be customized?</strong><br/>Yes. We develop ERP systems tailored to your workflows, industry, and business requirements.</p>
        <p><strong>Q3: Is the ERP cloud-based?</strong><br/>Yes. We offer both cloud-based and on-premises deployment options based on your preferences.</p>
        <p><strong>Q4: Can the ERP integrate with existing software?</strong><br/>Yes. Our ERP solutions can integrate with accounting software, payment gateways, CRM systems, HR tools, and other third-party applications.</p>
        <p><strong>Q5: Do you provide training and support?</strong><br/>Absolutely. We provide user training, documentation, maintenance, security updates, and long-term technical support.</p>

        <h3>Ready to Digitally Transform Your Business?</h3>
        <p>Your business deserves an ERP solution that grows with you. At TK-INFOTECHSOFT, we build intelligent ERP systems that streamline operations, improve productivity, and provide real-time insights for smarter decision-making.</p>
      </>
    )
  },
  {
    title: 'CRM',
    icon: 'bx bx-user-pin',
    headline: 'Strengthen Customer Relationships and Boost Sales',
    fullContent: (
      <>
        <p><strong>Turn Every Customer Interaction into a Lasting Business Opportunity</strong></p>
        <p>In today's competitive business environment, building strong customer relationships is no longer optional—it's essential. Customers expect personalized communication, quick responses, and consistent service throughout their journey with your business. Managing customer information through spreadsheets or disconnected tools often results in missed opportunities, delayed follow-ups, and reduced customer satisfaction.</p>
        <p>At TK-INFOTECHSOFT, we develop intelligent Customer Relationship Management (CRM) solutions that help businesses organize customer data, manage leads, automate sales processes, and deliver exceptional customer experiences. Our CRM systems are designed to centralize all customer interactions into one secure platform, allowing your sales, marketing, and support teams to work together efficiently.</p>
        <p>Whether you are a startup looking to organize your customer database or an enterprise managing thousands of clients, our customized CRM solutions help you improve communication, increase productivity, and maximize revenue.</p>

        <h3>Why Your Business Needs a CRM System</h3>
        <p>Every customer interaction is an opportunity to build trust and grow your business. Without a centralized CRM system, businesses often struggle with scattered customer information, inconsistent communication, and manual processes that waste valuable time.</p>
        <p>A CRM system provides a single platform where your team can access customer details, monitor sales opportunities, schedule follow-ups, and analyze performance in real time.</p>

        <h3>Benefits of a CRM System</h3>
        <ul>
          <li>Organize customer information in one place.</li>
          <li>Track leads from inquiry to conversion.</li>
          <li>Improve communication across departments.</li>
          <li>Increase sales productivity.</li>
          <li>Deliver personalized customer experiences.</li>
          <li>Automate repetitive sales tasks.</li>
          <li>Generate accurate reports and analytics.</li>
          <li>Strengthen customer loyalty and retention.</li>
          <li>Improve team collaboration.</li>
          <li>Make informed business decisions with real-time data.</li>
        </ul>

        <h3>Our CRM Development Philosophy</h3>
        <p>At TK-INFOTECHSOFT, we understand that every business has a unique sales process and customer journey. That's why we build customized CRM solutions tailored to your workflows, industry, and business objectives.</p>
        <p>Our CRM platforms are designed with simplicity, scalability, and efficiency in mind. We focus on creating user-friendly interfaces that enable teams to manage customers effortlessly while providing managers with powerful analytics and insights.</p>
        <p>By combining automation, intelligent reporting, and seamless integrations, we help businesses reduce manual work and focus on what matters most—building meaningful relationships with customers.</p>

        <h3>Comprehensive CRM Modules</h3>
        <p>Our CRM solutions include a wide range of modules that can be customized according to your business needs.</p>

        <h4>Lead Management</h4>
        <p>Capture leads from websites, social media, email campaigns, phone inquiries, and offline sources.</p>
        <p><strong>Features:</strong> Lead Capture Forms, Lead Assignment, Lead Qualification, Lead Scoring, Follow-up Scheduling, Lead Status Tracking.</p>

        <h4>Contact Management</h4>
        <p>Maintain a centralized database of all customer information.</p>
        <p><strong>Features:</strong> Customer Profiles, Communication History, Contact Categories, Notes & Attachments, Relationship Mapping, Customer Timeline.</p>

        <h4>Sales Pipeline Management</h4>
        <p>Visualize every stage of your sales process.</p>
        <p><strong>Features:</strong> Sales Funnel, Opportunity Tracking, Stage Management, Forecasting, Deal Progress Monitoring, Revenue Tracking.</p>

        <h4>Task & Activity Management</h4>
        <p>Ensure no customer interaction is missed.</p>
        <p><strong>Features:</strong> Task Assignment, Calendar Integration, Meeting Scheduling, Call Reminders, Follow-up Notifications, Activity History.</p>

        <h4>Marketing Automation</h4>
        <p>Create targeted campaigns and nurture leads automatically.</p>
        <p><strong>Features:</strong> Email Campaigns, SMS Campaigns, Customer Segmentation, Automated Workflows, Campaign Performance Reports, Lead Nurturing.</p>

        <h4>Customer Support Management</h4>
        <p>Provide faster and more efficient customer service.</p>
        <p><strong>Features:</strong> Ticket Management, Complaint Tracking, Service Requests, Knowledge Base, SLA Monitoring, Customer Feedback.</p>

        <h4>Reporting & Analytics</h4>
        <p>Generate valuable business insights.</p>
        <p><strong>Reports Include:</strong> Sales Reports, Lead Conversion Reports, Customer Acquisition Reports, Revenue Reports, Performance Dashboards, Customer Retention Analysis.</p>

        <h3>Our CRM Development Process</h3>
        <h4>1. Business Consultation</h4>
        <p>We understand your customer journey, sales process, and operational goals.</p>
        <h4>2. CRM Planning</h4>
        <p>Our team designs workflows, modules, dashboards, and automation strategies tailored to your business.</p>
        <h4>3. UI/UX Design</h4>
        <p>We create intuitive and responsive interfaces that make customer management simple and efficient.</p>
        <h4>4. Development</h4>
        <p>Using modern technologies, we build secure and scalable CRM applications.</p>
        <h4>5. Integration</h4>
        <p>We integrate your CRM with email services, payment gateways, ERP systems, accounting software, and third-party tools.</p>
        <h4>6. Testing</h4>
        <p>Our quality assurance team performs comprehensive testing to ensure reliability, performance, and security.</p>
        <h4>7. Deployment</h4>
        <p>We deploy your CRM with minimal downtime and provide data migration support if required.</p>
        <h4>8. Training & Support</h4>
        <p>We provide user training, documentation, maintenance, and ongoing technical support.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Centralized Customer Database:</strong> Store all customer information in one secure location.</li>
          <li><strong>Lead Tracking:</strong> Monitor every lead from initial inquiry to successful conversion.</li>
          <li><strong>Sales Automation:</strong> Automate repetitive tasks such as follow-ups, reminders, and email communications.</li>
          <li><strong>Workflow Automation:</strong> Reduce manual work through customizable automation rules.</li>
          <li><strong>Role-Based Access:</strong> Provide secure access based on employee responsibilities.</li>
          <li><strong>Customer Communication History:</strong> View emails, phone calls, meetings, and support interactions from one dashboard.</li>
          <li><strong>Mobile Accessibility:</strong> Access customer information anytime from any device.</li>
          <li><strong>Dashboard & Analytics:</strong> Track KPIs, sales targets, and team performance in real time.</li>
          <li><strong>Document Management:</strong> Store contracts, quotations, invoices, and customer documents securely.</li>
          <li><strong>API Integration:</strong> Connect your CRM with ERP systems, payment gateways, accounting software, marketing platforms, and other business applications.</li>
        </ul>

        <h3>Benefits of Our CRM Solutions</h3>
        <ul>
          <li>Improve Customer Satisfaction</li>
          <li>Increase Sales Efficiency</li>
          <li>Enhance Team Collaboration</li>
          <li>Automate Business Processes</li>
          <li>Reduce Administrative Work</li>
          <li>Improve Decision-Making</li>
          <li>Increase Lead Conversion Rates</li>
          <li>Strengthen Customer Relationships</li>
          <li>Improve Employee Productivity</li>
          <li>Scale with Your Business</li>
          <li>Enhance Customer Retention</li>
          <li>Boost Revenue Growth</li>
        </ul>

        <h3>Technologies We Use</h3>
        <ul>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Bootstrap, Next.js</li>
          <li><strong>Backend:</strong> Python, Django, Django REST Framework, Node.js, Express.js</li>
          <li><strong>Database:</strong> PostgreSQL, MySQL, MongoDB</li>
          <li><strong>Cloud & Deployment:</strong> AWS, Azure, Render, Vercel, DigitalOcean</li>
          <li><strong>Security:</strong> JWT Authentication, OAuth Integration, SSL Encryption, Role-Based Access Control, Data Backup & Recovery</li>
        </ul>

        <h3>Industries We Serve</h3>
        <p>Our CRM solutions are ideal for: Information Technology, Manufacturing, Healthcare, Education, Real Estate, Construction, Finance, Retail, Wholesale, Hospitality, Logistics, E-Commerce, Insurance, Travel & Tourism, Professional Services, NGOs, Government Organizations.</p>

        <h3>Why Choose TK-INFOTECHSOFT for CRM Development?</h3>
        <p>At TK-INFOTECHSOFT, we don't just build CRM software—we create solutions that strengthen customer relationships and drive business growth. Our experienced team works closely with you to understand your business processes and deliver a CRM platform that aligns perfectly with your goals.</p>
        <p>We focus on usability, scalability, and security, ensuring that your CRM system grows alongside your business. From consultation and development to deployment and ongoing support, we are committed to providing exceptional service at every stage of your digital transformation journey.</p>
        <p>Our customer-first approach, combined with modern technology and industry best practices, makes us a trusted partner for businesses seeking long-term success.</p>

        <h3>Frequently Asked Questions</h3>
        <p><strong>Q1: What is a CRM system?</strong><br/>A CRM (Customer Relationship Management) system helps businesses manage customer information, sales activities, marketing campaigns, and customer support from one centralized platform.</p>
        <p><strong>Q2: Can the CRM be customized?</strong><br/>Yes. We develop CRM solutions tailored to your business processes, industry, and specific operational requirements.</p>
        <p><strong>Q3: Can the CRM integrate with other software?</strong><br/>Absolutely. Our CRM systems can integrate with ERP platforms, accounting software, email services, payment gateways, and third-party business tools.</p>
        <p><strong>Q4: Is the CRM accessible on mobile devices?</strong><br/>Yes. Our CRM applications are fully responsive and optimized for desktops, tablets, and smartphones.</p>
        <p><strong>Q5: Do you provide maintenance and support?</strong><br/>Yes. We offer regular updates, security monitoring, feature enhancements, user training, and dedicated technical support.</p>

        <h3>Ready to Build Stronger Customer Relationships?</h3>
        <p>Your customers are your most valuable asset. With a customized CRM solution from TK-INFOTECHSOFT, you can streamline sales, improve communication, enhance customer experiences, and unlock new opportunities for growth.</p>
      </>
    )
  },
  {
    title: 'Portfolio Website',
    icon: 'bx bx-id-card',
    headline: 'Showcase Your Brand, Work, and Achievements',
    fullContent: (
      <>
        <p><strong>Create a Powerful First Impression That Opens New Opportunities</strong></p>
        <p>In today's digital world, your online presence is often the first interaction potential clients, employers, investors, or collaborators have with you. Whether you're an individual professional, freelancer, startup founder, creative artist, consultant, or established business, a well-designed portfolio website is one of the most effective ways to showcase your expertise, achievements, and unique value.</p>
        <p>At TK-INFOTECHSOFT, we create modern, responsive, and visually stunning portfolio websites that help individuals and businesses stand out in a competitive market. We combine creative design with strategic content and advanced technology to build portfolio websites that not only look impressive but also generate trust, attract opportunities, and convert visitors into clients.</p>
        <p>A portfolio website is more than a digital resume—it is your personal brand, your business showcase, and your online success story. It allows you to present your work professionally, highlight your skills, demonstrate your expertise, and make it easy for potential clients or employers to connect with you.</p>
        <p>Whether you are a software developer, designer, photographer, architect, digital marketer, consultant, student, startup, or company, our customized portfolio websites are designed to reflect your identity and support your long-term goals.</p>

        <h3>Why You Need a Portfolio Website</h3>
        <p>In today's competitive environment, simply having experience is not enough—you need a professional platform to present it effectively.</p>
        <p>A portfolio website provides a centralized space where visitors can explore your projects, services, achievements, certifications, testimonials, and contact information. Unlike social media profiles or online marketplaces, a portfolio website gives you complete control over your branding and presentation.</p>
        <p>A professional portfolio website helps you:</p>
        <ul>
          <li>Build trust and credibility.</li>
          <li>Showcase your work professionally.</li>
          <li>Strengthen your personal or company brand.</li>
          <li>Attract new clients and employers.</li>
          <li>Increase online visibility.</li>
          <li>Generate business inquiries.</li>
          <li>Demonstrate expertise and experience.</li>
          <li>Differentiate yourself from competitors.</li>
          <li>Share your success stories.</li>
          <li>Create long-term professional value.</li>
        </ul>

        <h3>Our Portfolio Website Development Philosophy</h3>
        <p>At TK-INFOTECHSOFT, we believe every portfolio should tell a compelling story. Instead of simply displaying projects, we create websites that communicate your journey, skills, achievements, and vision in a way that resonates with your audience.</p>
        <p>Every portfolio is carefully designed to align with your personality or business identity. We focus on creating clean layouts, engaging visuals, intuitive navigation, and strategic content placement that encourages visitors to explore your work and take action.</p>
        <p>Our goal is to ensure that your portfolio website becomes a powerful marketing tool that helps you achieve your professional objectives, whether it's finding new clients, securing a job, attracting investors, or building a stronger online reputation.</p>

        <h3>Our Portfolio Website Services</h3>
        <h4>Personal Portfolio Website</h4>
        <p>Showcase your skills, education, experience, projects, and achievements with a professional online portfolio.</p>
        <p><strong>Ideal for:</strong> Students, Job Seekers, Software Developers, Designers, Engineers, Researchers.</p>

        <h4>Freelancer Portfolio</h4>
        <p>Present your services, client testimonials, pricing, and completed projects to attract high-quality clients.</p>

        <h4>Creative Portfolio</h4>
        <p><strong>Designed for:</strong> Graphic Designers, UI/UX Designers, Photographers, Videographers, Artists, Animators, Content Creators.</p>

        <h4>Business Portfolio</h4>
        <p>Highlight your company's services, products, achievements, clients, and success stories.</p>

        <h4>Startup Portfolio</h4>
        <p>Present your startup's mission, vision, team, products, milestones, and investor information professionally.</p>

        <h4>Agency Portfolio</h4>
        <p>Display your team's expertise, completed projects, case studies, and service offerings.</p>

        <h3>Our Development Process</h3>
        <h4>1. Requirement Analysis</h4>
        <p>We understand your goals, audience, branding, and professional objectives.</p>

        <h4>2. Content Planning</h4>
        <p>We organize your information into a clear and engaging structure.</p>
        <p><strong>Typical sections include:</strong> Home, About, Skills, Services, Projects, Experience, Education, Certifications, Testimonials, Blog, Contact.</p>

        <h4>3. UI/UX Design</h4>
        <p>Our designers create modern layouts that emphasize readability, professionalism, and visual appeal.</p>

        <h4>4. Development</h4>
        <p>We build responsive, fast, and SEO-friendly websites using modern technologies.</p>

        <h4>5. Testing</h4>
        <p>We ensure your portfolio performs flawlessly across different browsers and devices.</p>

        <h4>6. Deployment</h4>
        <p>Your website is deployed with secure hosting, domain configuration, and SSL encryption.</p>

        <h4>7. Maintenance</h4>
        <p>We continue supporting your website with updates, performance improvements, and security enhancements.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Modern Responsive Design:</strong> Your portfolio looks perfect on desktops, tablets, and smartphones.</li>
          <li><strong>Professional Homepage:</strong> Capture attention with an engaging hero section, professional introduction, and clear call-to-action.</li>
          <li><strong>About Section:</strong> Tell your story, background, values, and professional journey.</li>
          <li><strong>Skills Showcase:</strong> Highlight your technical and professional skills with attractive visual elements.</li>
          <li><strong>Project Gallery:</strong> Display completed projects with descriptions, images, videos, technologies used, and live/demo links.</li>
          <li><strong>Experience Timeline:</strong> Present your work experience and career growth in an organized timeline.</li>
          <li><strong>Education & Certifications:</strong> Showcase your academic qualifications and professional certifications.</li>
          <li><strong>Services Section:</strong> Clearly explain the services you offer to potential clients.</li>
          <li><strong>Testimonials:</strong> Display genuine feedback from clients, employers, or collaborators.</li>
          <li><strong>Contact Form:</strong> Allow visitors to reach you quickly through a secure inquiry form.</li>
          <li><strong>Social Media Integration:</strong> Connect your website with LinkedIn, GitHub, Behance, Dribbble, Instagram, Facebook, YouTube, X (Twitter).</li>
          <li><strong>Resume Download:</strong> Allow recruiters or clients to download your latest resume or company profile.</li>
          <li><strong>Blog Integration:</strong> Share articles, tutorials, case studies, and updates to demonstrate expertise and improve SEO.</li>
          <li><strong>SEO Optimization:</strong> Improve your visibility on search engines through optimized structure, metadata, and content.</li>
          <li><strong>Fast Performance:</strong> Optimized code, images, and caching ensure a smooth browsing experience.</li>
        </ul>

        <h3>Benefits of Our Portfolio Websites</h3>
        <ul>
          <li>Strong Professional Branding</li>
          <li>Increased Online Visibility</li>
          <li>Better First Impression</li>
          <li>Higher Client Conversion</li>
          <li>Improved Job Opportunities</li>
          <li>Enhanced Credibility</li>
          <li>Easy Content Updates</li>
          <li>Mobile-Friendly Experience</li>
          <li>SEO-Optimized Structure</li>
          <li>Secure & Scalable Platform</li>
          <li>Long-Term Business Value</li>
          <li>Personalized Design</li>
        </ul>

        <h3>Technologies We Use</h3>
        <ul>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, React.js, Next.js</li>
          <li><strong>Backend (Optional):</strong> Python, Django, Node.js, Express.js</li>
          <li><strong>Database (If Required):</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Deployment:</strong> Vercel, Netlify, AWS, Render, DigitalOcean</li>
          <li><strong>Additional Integrations:</strong> Google Analytics, Google Maps, EmailJS, Contact Forms, Live Chat, Newsletter Integration</li>
        </ul>

        <h3>Industries & Professionals We Serve</h3>
        <p>Our portfolio websites are ideal for: Software Developers, Full-Stack Developers, UI/UX Designers, Graphic Designers, Photographers, Architects, Engineers, Doctors, Lawyers, Teachers, Students, Consultants, Marketing Professionals, Startups, Small Businesses, Agencies, Creative Professionals, Corporate Organizations.</p>

        <h3>Why Choose TK-INFOTECHSOFT?</h3>
        <p>At TK-INFOTECHSOFT, we understand that every portfolio represents a unique story. Our team works closely with you to understand your goals, achievements, and vision before designing a website that truly reflects your identity.</p>
        <p>We focus on creating visually appealing, fast, and user-friendly portfolio websites that leave a lasting impression. From personal branding to business promotion, our customized solutions help you stand out and achieve your professional objectives.</p>
        <p>With transparent communication, timely delivery, modern technologies, and dedicated post-launch support, we are committed to delivering portfolio websites that not only look exceptional but also drive meaningful opportunities.</p>

        <h3>Frequently Asked Questions</h3>
        <p><strong>Q1: Who needs a portfolio website?</strong><br/>Anyone who wants to showcase their work professionally, including developers, designers, freelancers, consultants, startups, agencies, and businesses.</p>
        <p><strong>Q2: Can I update my portfolio myself?</strong><br/>Yes. We can provide an easy-to-use content management system or admin panel, allowing you to update projects, services, blogs, and other content without technical knowledge.</p>
        <p><strong>Q3: Will my portfolio be mobile-friendly?</strong><br/>Absolutely. Every portfolio website we build is fully responsive and optimized for all screen sizes.</p>
        <p><strong>Q4: Can you integrate my social media and GitHub?</strong><br/>Yes. We can integrate LinkedIn, GitHub, Behance, Dribbble, YouTube, Instagram, X (Twitter), and other professional platforms.</p>
        <p><strong>Q5: Do you provide hosting and maintenance?</strong><br/>Yes. We offer domain assistance, hosting setup, website maintenance, performance optimization, security updates, and long-term technical support.</p>

        <h3>Ready to Showcase Your Success?</h3>
        <p>Your achievements deserve a platform that reflects your professionalism and potential. At TK-INFOTECHSOFT, we create portfolio websites that inspire confidence, strengthen your brand, and open doors to new opportunities.</p>
        <p>Whether you're building your personal brand, promoting your business, or attracting clients and employers, we're here to help you make a lasting impression.</p>
      </>
    )
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
          <h2 id="software-services-title" style={{ letterSpacing: '0.1em', animation: 'whyBrandGlow 3.8s ease-in-out infinite' }}>Our Software Services</h2>
<br/>
          <div className="software-services-layout" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="software-service-tabs" role="tablist" aria-label="Software services" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {softwareServices.map((service, index) => (
                <button
                  className={`software-service-tab ${activeSoftwareService === index ? 'is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeSoftwareService === index}
                  aria-controls="software-service-panel"
                  id={`software-service-tab-${index}`}
                  key={service.title}
                  onClick={() => setActiveSoftwareService(index)}
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
                  <span className="software-service-inner">{service.title}</span>
                </button>
              ))}
            </div>

            <article
              className="software-service-card"
              id="software-service-panel"
              role="tabpanel"
              aria-labelledby={`software-service-tab-${activeSoftwareService}`}
            >
              <h3>{softwareServices[activeSoftwareService].title}</h3>
              <h4>{softwareServices[activeSoftwareService].headline}</h4>
              <div className="software-service-content-details">
                {softwareServices[activeSoftwareService].fullContent ? (
                  <div className="rich-service-layout">
                    <div className="rich-image-space">
                      <span>Image Space</span>
                    </div>
                    <div className="rich-text-content">
                      {softwareServices[activeSoftwareService].fullContent}
                    </div>
                  </div>
                ) : (
                  softwareServices[activeSoftwareService].points.map((point, index) => {
                    const parts = point.split(' - ');
                    const title = parts[0];
                    const desc = parts.slice(1).join(' - ') || point;
                    const isReverse = index % 2 !== 0;

                    return (
                      <div className={`zigzag-row ${isReverse ? 'reverse' : ''}`} key={index}>
                        <div className="zigzag-content">
                          <h5>
                            <i className="bx bxs-check-circle"></i>
                            {title}
                          </h5>
                          <p>{desc}</p>
                        </div>
                        <div className="zigzag-image-space">
                          <span>Image Space</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="software-services-section offered-courses-section" aria-labelledby="offered-courses-title">
        <div className="site-container software-services-inner">
          <h2 id="offered-courses-title" style={{ letterSpacing: '0.1em', animation: 'whyBrandGlow 3.8s ease-in-out infinite' }}>Course Offered</h2>
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
