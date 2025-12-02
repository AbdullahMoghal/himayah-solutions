import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CyberStrategyTransformation.css'

const CyberStrategyTransformation = () => {
  const subsections = [
    {
      title: 'Cyber Strategy',
      description: 'Implement transformative cyber programs. Our Cyber Strategy services help you align your cybersecurity position with your strategic objectives, market activities, regulatory requirements, and risk appetite. Through transforming and developing cyber programs, we help enterprises stay ahead of the evolving threat landscape while driving stakeholder confidence.',
      capabilities: [
        'Cyber strategy and program design',
        'Align cybersecurity with business goals and strategic objectives',
        'Risk assessment and risk quantification',
        'Market activity and regulatory requirement alignment',
        'Stakeholder confidence building through strategic cyber programs'
      ]
    },
    {
      title: 'Third Party Risk Management (TPRM)',
      description: 'Get end-to-end service with TPRM. Our Third Party Risk Management services help you manage and mitigate risks across your extended supply chain. We provide comprehensive solutions to assess, monitor, and manage third-party relationships while ensuring compliance and security throughout your vendor ecosystem.',
      capabilities: [
        'Extended third-party supply chain management',
        'Third-party risk assessment and monitoring',
        'Vendor relationship security and compliance',
        'End-to-end TPRM service delivery',
        'Supply chain risk mitigation strategies'
      ]
    },
    {
      title: 'ConvergeSECURITY',
      description: 'Empower business with cloud security. ConvergeSECURITY provides integrated cloud security solutions that help organizations secure their cloud infrastructure while enabling business growth. Our approach combines security best practices with cloud-native technologies to deliver comprehensive protection.',
      capabilities: [
        'Integrated cloud security solutions',
        'Cloud-native security technologies',
        'Business-enabling security architecture',
        'Comprehensive cloud infrastructure protection',
        'Security best practices for cloud environments'
      ]
    },
    {
      title: 'Cyber Metrics Analytics & Quantification',
      description: 'Illuminate organization risk. Our Cyber Metrics Analytics & Quantification services help you understand and measure your cybersecurity posture through data-driven insights. We provide advanced analytics and risk quantification methodologies to help you make informed decisions about your cyber investments.',
      capabilities: [
        'Risk quantification and analytics',
        'Data-driven cybersecurity insights',
        'Cyber investment decision support',
        'Advanced metrics and measurement methodologies',
        'Organization risk illumination and assessment'
      ]
    },
    {
      title: 'Cyber Governance & Compliance',
      description: 'How to bolster enterprise resilience. Bolster your organization\'s resilience against threats with a demonstrated methodology to enhance cyber capabilities. Our Cyber Governance & Compliance services can help you address requirements for monitoring and reporting compliance through maturity assessments and framework alignment.',
      capabilities: [
        'Facilitate maturity and compliance assessments using Cyber Strategy Control Framework',
        'Align with cyber industry standards and frameworks',
        'Establish security governance structures and operating models',
        'Cyber policies and standards development',
        'Monitoring and reporting compliance support'
      ]
    },
    {
      title: 'Cyber Transformation Management',
      description: 'How to enhance your cyber program. Strategically enhance your organization\'s cybersecurity capabilities, infrastructure, and culture. Through our structured approach, we can help you reduce the potential for and impact of cyber incidents by developing practices and policies that protect your organization from evolving cyber risks and threats.',
      capabilities: [
        'Develop practices and policies to protect from evolving cyber risks and threats',
        'Maintain security and privacy while implementing new technologies',
        'Build roadmap for near- and longer-term improvements',
        'Strategic cybersecurity capability enhancement',
        'Organizational culture transformation for cyber resilience'
      ]
    },
    {
      title: 'Software & Asset Management',
      description: 'How to optimize software security. Our approach assists you in managing, securing, and governing cyber software. We can also help you understand and align to compliance requirements set by regulatory bodies. In addition, we can assist you with optimizing your cyber software through vulnerability management and resilience strategies.',
      capabilities: [
        'Vulnerability risk identification, assessment, and classification',
        'Resilience and data loss prevention',
        'Obsolescence and disposition strategies',
        'Cyber software management, security, and governance',
        'Regulatory compliance alignment for software assets'
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
    <div className="cyber-strategy-transformation-page">
      {/* Hero Section */}
      <motion.section
        className="cyber-strategy-transformation-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Cyber Strategy & Transformation</h1>
          <p className="hero-description">
            Cyber solutions that simplify complexity, accelerate innovation and secure success. Our cyber services help you 
            align your cybersecurity position with your strategic objectives, market activities, regulatory requirements, and 
            risk appetite. Through transforming and developing cyber programs, we help enterprises stay ahead of the evolving 
            threat landscape while driving stakeholder confidence.
          </p>
        </div>
      </motion.section>

      {/* Main Description Section */}
      <section className="cyber-strategy-transformation-intro">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Align Cyber Defenses with Business Goals</h2>
            <p>
              Our Cyber Strategy & Transformation services help align your cyber defenses with your business goals. We empower 
              you to stay ahead of evolving threats, build stakeholder confidence, and support long-term success through tailored 
              cyber solutions, from strategy to risk management.
            </p>
            <p>
              Services include cyber strategy and program design, governance, risk assessment, risk quantification, and extended 
              third-party supply chain management. Our business professionals can help you protect your future by combining deep 
              cybersecurity knowledge to drive progress.
            </p>
            <p>
              Through transforming and developing cyber programs, we help enterprises stay ahead of the evolving threat landscape 
              while driving stakeholder confidence and enabling sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subsections */}
      <section className="cyber-strategy-transformation-subsections">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Strategy & Transformation Services
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
        className="cyber-strategy-transformation-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>Ready to Transform Your Cyber Strategy?</h2>
          <p>Contact us today to discuss your cyber strategy and transformation needs and discover how we can help align your cybersecurity with your business goals.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default CyberStrategyTransformation

