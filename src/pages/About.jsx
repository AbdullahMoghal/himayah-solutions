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
            <div className="story-image">
              <img src="/himayah-solutions-Assets/6.png" alt="Our Story" />
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
