import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CyberDefenseResilience.css'

const CyberDefenseResilience = () => {
  const subsections = [
    {
      title: 'Attack Surface Management',
      description: 'Reduce organizational risk by decreasing time to remediate. Deloitte offers industry-leading Attack Surface Management (ASM) that provides program assessments, audit services, design services, and build services. All to help you understand your organization\'s threat exposure, along with managed services to operate and continuously refine your ASM program.',
      capabilities: [
        'Program assessments and audit services',
        'Design and build services for ASM programs',
        'Understand organization\'s threat exposure',
        'Managed services to operate and continuously refine ASM programs',
        'Reduce organizational risk by decreasing time to remediate'
      ]
    },
    {
      title: 'Crisis & Incident Response',
      description: 'End-to-end solutions to help you safeguard trust across your business. Deloitte\'s Cyber Incident Readiness, Response, and Recovery (CIR3) team provides end-to-end incident response experience, assisting your organization with scalable and flexible options tailored to the specific needs of your business. We help you address potential adversarial events and help to achieve resiliency.',
      capabilities: [
        'End-to-end incident response experience',
        'Scalable and flexible options tailored to business needs',
        'Address potential adversarial events',
        'Achieve resiliency through comprehensive response',
        'Safeguard trust across your business'
      ]
    },
    {
      title: 'Security Operations',
      description: 'Learn how to modernize threat intelligence. Enhance your cybersecurity operations with our strategy and implementation services. We can help you transform your security operations centers (SOC) through modernization and threat intelligence programs. To support your security operations, we can help you modernize current SOC platforms, establish broad threat intelligence programs, and transform SOC with strategic initiatives.',
      capabilities: [
        'Modernize current SOC platforms',
        'Establish broad threat intelligence programs',
        'Transform SOC with strategic initiatives',
        'Strategy and implementation services for security operations',
        'Enhance cybersecurity operations with advanced capabilities'
      ]
    },
    {
      title: 'Technology Resilience',
      description: 'View how to ensure proactive resilience. With innovative architecture designs and integrated technologies, shift from reactive recovery to a proactive, resilience-centered approach. Provide an always-on experience for customers with our broad suite of services and solutions. To improve resilience, Deloitte can help you build secure, monitored, cloud-enabled infrastructure and enhance cyber incident readiness, response, and recovery.',
      capabilities: [
        'Build secure, monitored, cloud-enabled infrastructure',
        'Enhance cyber incident readiness, response, and recovery',
        'Develop technical fortitude to withstand disruptions',
        'Recover effectively from destructive cyberattacks',
        'Shift from reactive recovery to proactive resilience-centered approach'
      ]
    }
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

  return (
    <div className="cyber-defense-resilience-page">
      {/* Hero Section */}
      <motion.section
        className="cyber-defense-resilience-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Cyber Defense & Resilience</h1>
          <p className="hero-description">
            Maintain resilience no matter the threat with our cyber incident response services. Our Cyber Defense & Resilience 
            services can help you build a strong defense while preparing for recovery, so your business can thrive in the face of 
            uncertainty. From anticipating risks to bouncing back stronger after an incident, we've got you covered every step 
            of the way.
          </p>
        </div>
      </motion.section>

      {/* Main Description Section */}
      <section className="cyber-defense-resilience-intro">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Build Trust and Cyber Advantage</h2>
            <p>
              Our cybersecurity solutions are engineered to help organizations stay ahead of cyber threats and limit operational 
              disruptions. Combining sophisticated monitoring technology, advanced analytics, and proactive threat intelligence, we 
              help you build proactive strategies that identify and neutralize risks, while assisting your business, IT landscape, 
              and security operations to recover from incidents with limited impact.
            </p>
            <p>
              By also helping you modernize your security operations center (SOC), we can assist with rapid containment and response 
              services to evolving cyber threats. In the event of a cyber incident, our forensic specialists take rapid action to 
              investigate and advise you on containing the situation so you can get back to business sooner.
            </p>
            <p>
              Most importantly, our end-to-end restoration operations are designed to help you re-establish trust and strengthen 
              cyber strategies, so you can emerge stronger and more resilient than before. Our goal is to collaboratively help you 
              keep your business thriving in the face of evolving cyber threats, so you can operate with confidence and strength at 
              every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subsections */}
      <section className="cyber-defense-resilience-subsections">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Defense & Resilience Services
          </motion.h2>
          <motion.div
            className="subsections-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {subsections.map((subsection, index) => (
              <motion.div
                key={index}
                className="subsection-item"
                variants={itemVariants}
              >
                <div className="subsection-content">
                  <h3>{subsection.title}</h3>
                  <p className="subsection-description">{subsection.description}</p>
                  <ul className="subsection-capabilities">
                    {subsection.capabilities.map((capability, idx) => (
                      <li key={idx}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="cyber-defense-resilience-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>Ready to Build Cyber Defense & Resilience?</h2>
          <p>Contact us today to discuss your cyber defense and resilience needs and discover how we can help you build a strong defense while preparing for recovery.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default CyberDefenseResilience

