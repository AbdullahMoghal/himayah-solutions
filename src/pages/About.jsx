import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  const testimonials = [
    {
      quote: "Himaya Solutions helped transform our cybersecurity maturity within months. Their vCISO leadership was exceptional.",
      author: "CISO, Healthcare Organization"
    },
    {
      quote: "Their FDA cybersecurity expertise made our 510(k) submission process significantly smoother and more efficient.",
      author: "Director of Engineering, Medical Device Company"
    }
  ]

  return (
    <div className="about-page">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>About Himaya Solutions</h1>
          <p>Trusted cybersecurity consulting partner helping organizations strengthen their security posture</p>
        </div>
      </motion.section>

      <section className="about-story">
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
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="story-text">
              <h2>Our Mission</h2>
              <p>
                Our mission is simple: empower businesses to operate securely while enabling growth, innovation, and resilience.
              </p>
              <h2>About Us</h2>
              <p>
                Himaya Solutions was founded on the belief that strong cybersecurity starts with clarity, trust, and expert execution. With more than two decades of global cybersecurity leadership—including work with Fortune 50 enterprises—we bring unparalleled expertise and a practical, business‑focused approach to every engagement.
              </p>
              <p>
                We serve as trusted advisors who help organizations reduce risk, improve resilience, and confidently navigate today's rapidly changing threat landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Leadership
          </motion.h2>
          <motion.div
            className="team-member"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="team-member-content">
              <div className="team-member-image">
                <img 
                  src="/himaya-logos/PNG Version/transparent-logo-black.png" 
                  alt="Himaya Solutions Logo" 
                />
              </div>
              <div className="team-member-info">
                <h3>Munir Moghal</h3>
                <p className="team-member-title">Transforming cybersecurity for global enterprises, strengthening resilience in an evolving threat landscape</p>
                <div className="team-member-bio">
                  <p>
                    Results-driven and visionary information security executive with over 20 years of experience with deep expertise in IT, management consulting, emerging technologies, and multi-industry business acumen. Specialized in information security, risk management, cybersecurity strategy, architecture, and IT governance. Proven track record of designing and implementing enterprise-wide security strategies and business-focused programs for Fortune 50 companies and mitigating cyber risks. Experienced and specialized in leading global cross-functional teams, managing multimillion-dollar budgets, compliance, and fostering a culture of security awareness and resilience. Adept at prioritizing, aligning, and communicating security risk and strategies to senior executive leadership, board of directors, regulatory bodies, and stakeholders. Recognized for leading and delivering innovative solutions to protect the company by balancing capabilities across both cyber defense and resilience.
                  </p>
                  <div className="key-attributes">
                    <h4>Key Attributes:</h4>
                    <ul>
                      <li>
                        <strong>Strategic Leadership and Risk Management</strong> With over two decades of experience in developing information security strategies and governance roadmaps, provided clients with guidance in identifying and understanding security, privacy, and cyber risks. Developed multi-year cyber defense and resilience strategies, including metrics and reporting solutions. Proven ability to manage and engage senior stakeholders, including CROs, Chief Legal Counsels, Chief Auditors, CIOs, and CTOs. Managed and secured data for large-scale Fortune 1000 corporations, as well as federal and state government clients.
                      </li>
                      <li>
                        <strong>Deep Technical, Industry and Cybersecurity Expertise</strong> Highly skilled and specialized in technology and management consulting, with business and industry expertise spanning technology, finance, insurance, healthcare, life sciences, education, government, consumer, and industrial products. Possessing a proven skill set encompassing a broad range of information security services, along with expertise in digital transformation, program management, and extended enterprise security.
                      </li>
                      <li>
                        <strong>Regulatory Compliance</strong> Extensive experience in guiding companies through the identification of regulatory requirements to build effective risk management programs. Proficient in leading industry frameworks and regulatory standards, including NIST, NYDFS, DORA, EU AI Act, SEC rules, HIPAA, PCI, SOX/SOC, and ISO 27002 & 17799.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="about-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help secure your business</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default About
