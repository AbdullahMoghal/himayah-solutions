import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const services = [
    {
      title: 'vCISO',
      description: 'Executive-level security leadership at a fraction of the cost',
      image: '/service-icons/vciso-icon.svg'
    },
    {
      title: 'Risk Assessments',
      description: 'Identify gaps, quantify risk, and build a clear path to remediation',
      image: '/service-icons/risk-assessments-icon.svg'
    },
    {
      title: 'Security Architecture',
      description: 'Design and optimize secure cloud and on-prem architectures',
      image: '/service-icons/security-architecture-icon.svg'
    },
    {
      title: 'Compliance & Regulatory',
      description: 'Ensure compliance with evolving regulatory requirements',
      image: '/service-icons/compliance-icon.svg'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-image hero-logo-bg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        </motion.div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Protect. Build Resilience. Grow Securely.
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Himaya Solutions is a trusted cybersecurity consulting partner helping organizations strengthen their security posture, reduce cyber risk, and meet regulatory requirements with confidence.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="services-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div
            className="features-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="features-text">
              <h2>Why Choose Himaya Solutions?</h2>
              <ul className="features-list">
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  20+ years of Fortune 50 cybersecurity leadership experience
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Proven delivery across financial services, healthcare, retail, and technology industries
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Deep expertise in risk management, governance, compliance, and security engineering
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Practical, business‑aligned recommendations—not theoretical reports
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Flexible delivery including vCISO, project-based engagements, and long-term advisory support
                </motion.li>
              </ul>
            </div>
            <div className="features-image">
              <img src="/service-icons/security-features-icon.svg" alt="Security Features" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Strengthen Your Cybersecurity Posture?</h2>
          <p>Let Himaya Solutions help you protect your business, build resilience, and grow securely</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get Started Now
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home

