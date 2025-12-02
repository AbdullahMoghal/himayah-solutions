import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './DigitalTrustPrivacy.css'

const DigitalTrustPrivacy = () => {
  const subsections = [
    {
      title: 'Customer Identity (CIAM)',
      description: 'Unlock excellence with a human-centered CIAM approach. Customer Identity & Access Management is the first interaction customers have with companies to conduct business on their digital platforms. It is more than authentication—CIAM enables your customers to manage their relationship, data preference, and consent while enforcing controls, enabling personalization, and establishing trust.',
      capabilities: [
        'Simplify security for your customers',
        'Human-centered CIAM approach',
        'Customer relationship and data preference management',
        'Consent management and enforcement',
        'Personalization and trust establishment'
      ]
    },
    {
      title: 'Data Protection & Compliance',
      description: 'Build broad data security programs. Do your data protection and compliance programs work together to protect personal data and user rights? We can help your organization institute standards, capabilities, controls, solutions, and operating models that govern and manage data-handling risks throughout the data lifecycle.',
      capabilities: [
        'Govern and manage data-handling risks throughout the data lifecycle',
        'Strengthen data privacy and security safeguards',
        'Enable transparency and user control of data',
        'Help determine compliance with regulatory and contractual obligations',
        'Institutionalize standards, capabilities, controls, and operating models'
      ]
    },
    {
      title: 'Digital Trust & Online Protection',
      description: 'Providing advisory, implementation, and managed services. Data & Digital Trust is the confidence and reliance in a company\'s digital platform, asset, product, or service and their data practices by consumers, patients, users, regulators, and shareholders. It can be achieved through scalable governance, measurable risk management, trusted identity management, and compliance with digital regulations.',
      capabilities: [
        'Scalable governance and measurable risk management',
        'Trusted identity management',
        'Compliance with digital regulations',
        'Advisory, implementation, and managed services',
        'Build consumer confidence in digital platforms and data practices'
      ]
    },
    {
      title: 'Enterprise Identity',
      description: 'Transform your identity management landscape. Are you prepared for the future of the cyber identity landscape? We can help your organization create an actionable roadmap to your desired outcomes that includes achieving efficiencies, reducing risks, and enabling digital transformation.',
      capabilities: [
        'Achieve efficiencies, reduce risks, and enable digital transformation',
        'Real-world environment testing to identify and simulate potential threats',
        'Scalable and adaptive identity security methods specific to business requirements',
        'Actionable roadmap to desired identity management outcomes',
        'Future-ready cyber identity landscape preparation'
      ]
    },
    {
      title: 'Privacy Governance & Compliance',
      description: 'Enhance your privacy strategy. Strengthen your organization\'s privacy governance & compliance through tested practices, baseline assessments, and leading-edge technology. We can assist your privacy efforts with data identification, cataloging, and governance, establishing Privacy by Design processes for new technology.',
      capabilities: [
        'Data identification, cataloging, and governance',
        'Establish Privacy by Design processes for new technology',
        'Assist with cybersecurity framework readiness',
        'Operational support for processes before, during, and after privacy technology implementation',
        'Tested practices and baseline assessments'
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
    <div className="digital-trust-privacy-page">
      {/* Hero Section */}
      <motion.section
        className="digital-trust-privacy-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Digital Trust & Privacy</h1>
          <p className="hero-description">
            Protect what matters—your data, your customers, your future. Our Digital Trust & Privacy services are designed to 
            help you safeguard your organization and its customers. We help you build consumer confidence and enhance their 
            experience through effective customer and enterprise identity management, governance, and digital ethics.
          </p>
        </div>
      </motion.section>

      {/* Main Description Section */}
      <section className="digital-trust-privacy-intro">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Prioritize Trust and Safety</h2>
            <p>
              We prioritize trust and safety in all your business interactions—whether through communications, supply chain, 
              or digital products. Our trust and privacy services ensure data integrity, regulatory compliance, and secure 
              access management, enabling you to enhance customer experiences while safeguarding your organization.
            </p>
            <p>
              From navigating current regulations to preparing for future ones, we help you reduce risk and align your operations 
              with the latest standards. Integrating trust and privacy into your core operations not only contributes to more 
              streamlined operations but also strengthens your entire value chain.
            </p>
            <p>
              Fostering long-term trust with your customers and business associates, we can help you build toward sustainable 
              success and drive progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subsections */}
      <section className="digital-trust-privacy-subsections">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Digital Trust & Privacy Services
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
        className="digital-trust-privacy-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>Ready to Build Digital Trust & Privacy?</h2>
          <p>Contact us today to discuss your digital trust and privacy needs and discover how we can help protect your data, customers, and future.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default DigitalTrustPrivacy

