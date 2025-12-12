import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3>Himaya Solutions</h3>
            <p>Protect. Build Resilience. Grow Securely.</p>
            <p>Trusted cybersecurity consulting partner helping organizations strengthen their security posture.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/vciso">vCISO</Link></li>
              <li><Link to="/services/enterprise-security">Enterprise Security</Link></li>
              <li><Link to="/services/digital-trust-privacy">Digital Trust & Privacy</Link></li>
              <li><Link to="/services/cyber-strategy-transformation">Cyber Strategy & Transformation</Link></li>
              <li><Link to="/services/cyber-defense-resilience">Cyber Defense & Resilience</Link></li>
              <li><Link to="/services">View All Services</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: info@himayasolutions.com</li>
              <li>Website: www.himayasolutions.com</li>
              <li>Location: Dallas, Texas</li>
            </ul>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Himaya Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

