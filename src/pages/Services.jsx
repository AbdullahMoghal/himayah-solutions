import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'vCISO (Virtual Chief Information Security Officer)',
      shortTitle: 'vCISO',
      description: 'Strengthen your security program with executive‑level leadership at a fraction of the cost of a full‑time CISO.',
      features: [
        'Security strategy and roadmap development',
        'Governance, risk, and compliance (GRC) oversight',
        'Board and executive reporting',
        'Incident response planning and tabletop exercises',
        'Vendor risk management',
        'Policy development and program maturity assessments'
      ],
      image: '/himayah-solutions-Assets/1.png',
      link: '/services/vciso'
    },
    {
      title: 'Enterprise Security',
      shortTitle: 'Enterprise Security',
      description: 'Security solutions that support digital transformation. Safeguard your digital transformation from start to finish.',
      features: [
        'Secure by Design - SDLC security integration',
        'Cloud Security - End-to-end cloud security management',
        'Security Architecture - Network and infrastructure security',
        'Application Security - SDLC risk management',
        'Emerging Technology - Next-gen technology security'
      ],
      image: '/himayah-solutions-Assets/3.png',
      link: '/services/enterprise-security'
    },
    {
      title: 'Digital Trust & Privacy',
      shortTitle: 'Digital Trust & Privacy',
      description: 'Prioritize trust and safety in all your business interactions—whether through communications, supply chain, or digital products.',
      features: [
        'Data Protection & Compliance',
        'Enterprise Identity',
        'Privacy Governance & Compliance',
        'Digital Trust & Online Protection',
        'Customer Identity'
      ],
      image: '/himayah-solutions-Assets/2.png',
      link: '/services/digital-trust-privacy'
    },
    {
      title: 'Cyber Strategy & Transformation',
      shortTitle: 'Cyber Strategy & Transformation',
      description: 'Align your cyber defenses with your business goals. Stay ahead of evolving threats and build stakeholder confidence.',
      features: [
        'Cyber Governance & Compliance',
        'Cyber Strategy',
        'Software & Asset Management',
        'Cyber Transformation Management',
        'Third-Party Risk Management'
      ],
      image: '/himayah-solutions-Assets/4.png',
      link: '/services/cyber-strategy-transformation'
    },
    {
      title: 'Cyber Defense & Resilience',
      shortTitle: 'Cyber Defense & Resilience',
      description: 'Build a strong defense while preparing for recovery. Thrive in the face of uncertainty with comprehensive protection.',
      features: [
        'Attack Surface Management',
        'Technology Resilience',
        'Crisis & Incident Response',
        'Security Operations'
      ],
      image: '/himayah-solutions-Assets/7.png',
      link: '/services/cyber-defense-resilience'
    },
  ]

  const industries = [
    'Consumer',
    'Energy, Resources & Industrials',
    'Life Sciences & Health Care',
    'Financial Services',
    'Government & Public Services',
    'Technology, Media & Telecommunications'
  ]

  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: 'Fortune 50', label: 'Enterprise Leadership' },
    { number: 'Multi-Industry', label: 'Proven Delivery' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const [searchQuery, setSearchQuery] = useState('')

  // Filter services based on search query
  const filteredServices = services.filter(service => {
    if (!searchQuery.trim()) return true
    
    const query = searchQuery.toLowerCase()
    const searchableText = [
      service.title,
      service.shortTitle,
      service.description,
      ...service.features
    ].join(' ').toLowerCase()
    
    return searchableText.includes(query)
  })

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.section
        className="services-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="container">
          <h1>Our Services</h1>
          <p className="hero-description">
            End‑to‑end security expertise—from strategy and governance to technical cybersecurity assessments, 
            compliance readiness, incident response planning, and virtual CISO leadership. We deliver comprehensive 
            cybersecurity solutions that help organizations strengthen their security posture, reduce cyber risk, 
            and meet regulatory requirements with confidence.
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="services-explore">
        <div className="globe-container">
          <div className="globe-3d">
            {/* Longitude lines - vertical circles rotated around Y axis */}
            {[...Array(12)].map((_, i) => {
              const angle = i * 30
              return (
                <div
                  key={`long-${i}`}
                  className="globe-ring longitude-ring"
                  style={{
                    transform: `rotateY(${angle}deg)`
                  }}
                >
                  <div className="ring-circle"></div>
                </div>
              )
            })}
            {/* Latitude lines - horizontal circles rotated around X axis */}
            {[...Array(9)].map((_, i) => {
              const latAngle = -80 + (i * 20)
              const scale = Math.cos(latAngle * Math.PI / 180)
              return (
                <div
                  key={`lat-${i}`}
                  className="globe-ring latitude-ring"
                  style={{
                    transform: `rotateX(${latAngle}deg) scaleY(${scale})`
                  }}
                >
                  <div className="ring-circle"></div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Services
          </motion.h2>
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="service-card-header">
                  <h3>{service.shortTitle}</h3>
                </div>
                <p className="service-card-description">{service.description}</p>
                <Link to={service.link || "/contact"} className="service-link">
                  Find out more →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats/Accolades Section */}
      <section className="services-stats">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Catalog Section */}
      <section className="service-catalog">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Service Catalog
          </motion.h2>
          <motion.p
            className="catalog-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Search our comprehensive cybersecurity services by keyword to find exactly what you need.
          </motion.p>
          
          {/* Search Input */}
          <motion.div
            className="search-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              type="text"
              className="service-search-input"
              placeholder="Search services by keyword (e.g., cloud, compliance, incident response, strategy...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </motion.div>

          {/* Search Results */}
          <motion.div
            className="catalog-results"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="catalog-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Link to={service.link || "/contact"} className="catalog-item-link">
                    <div className="catalog-item-content">
                      <h3 className="catalog-item-title">{service.title}</h3>
                      <p className="catalog-item-description">{service.description}</p>
                      <div className="catalog-item-features">
                        <span className="features-label">Key Features:</span>
                        <ul className="catalog-features-list">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="more-features">+ {service.features.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      <span className="catalog-item-cta">Learn more →</span>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p>No services found matching "{searchQuery}".</p>
                <p>Try searching with different keywords or <button onClick={() => setSearchQuery('')} className="reset-search-btn">clear your search</button> to see all services.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Popular Keywords */}
          {!searchQuery && (
            <motion.div
              className="popular-keywords"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="keywords-label">Popular searches:</p>
              <div className="keywords-list">
                {['cloud security', 'compliance', 'incident response', 'risk management', 'strategy', 'governance', 'privacy', 'identity'].map((keyword, idx) => (
                  <button
                    key={idx}
                    className="keyword-tag"
                    onClick={() => setSearchQuery(keyword)}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <motion.h2
            className="section-title industries-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries
          </motion.h2>
          <motion.p
            className="industries-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            With our deep sector-specific experience, we'll work with you to foster innovative, secure, and sustainable growth.
          </motion.p>
          <motion.p
            className="industries-intro-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore how we've helped other clients navigate complex cybersecurity challenges across a wide range of industries.
          </motion.p>
          <motion.div
            className="industries-circles-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="industry-circle"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="services-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>Ready to Strengthen Your Cybersecurity Posture?</h2>
          <p>Contact us today to discuss your cybersecurity needs and discover how we can help protect your business, build resilience, and grow securely.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default Services
