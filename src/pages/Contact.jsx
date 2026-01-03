import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm("mnjngzda")

  return (
    <div className="contact-page">
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Let's discuss how we can help secure your business</p>
        </div>
      </motion.section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Contact Information</h2>
              <div className="info-item">
                <h3>Email</h3>
                <p>info@himayasolutions.com</p>
              </div>
              <div className="info-item">
                <h3>Website</h3>
                <p>www.himayasolutions.com</p>
              </div>
              <div className="info-item">
                <h3>Location</h3>
                <p>Dallas, Texas</p>
              </div>
              <div className="info-item">
                <h3>Ready to Strengthen Your Cybersecurity Posture?</h3>
                <p>Let Himaya Solutions help you protect your business, build resilience, and grow securely.</p>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send us a Message</h2>
              
              {state.succeeded ? (
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#d4edda', 
                  border: '1px solid #c3e6cb', 
                  borderRadius: '5px',
                  color: '#155724',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{ marginTop: 0 }}>Thank you for your message!</h3>
                  <p>We will get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                    />
                    <ValidationError 
                      prefix="Company" 
                      field="company"
                      errors={state.errors}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={state.submitting}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  <ValidationError errors={state.errors} />
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
