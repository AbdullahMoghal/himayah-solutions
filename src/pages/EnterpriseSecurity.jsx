import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './EnterpriseSecurity.css'

const EnterpriseSecurity = () => {
  const subsections = [
    {
      title: 'Secure by Design',
      description: 'Elevate cyber protection with Secure by Design. Our end-to-end centralized workflow management solution integrates cybersecurity by leveraging automation into the software development life cycle (SDLC). This allows organizations to address their security activities throughout the process and across multiple business teams, proactively elevating cyber posture and mitigating risk effectively.',
      capabilities: [
        'Integrate security into the software development lifecycle',
        'Centralized workflow management for security activities',
        'Automation-driven security processes',
        'Proactive risk mitigation across development teams',
        'SDLC security integration and optimization'
      ]
    },
    {
      title: 'Cloud Security',
      description: 'End-to-end, enterprise-grade security management in the cloud. Our Cloud Security services provide comprehensive protection for your cloud infrastructure, ensuring that your digital transformation is safeguarded from start to finish. We help strengthen your technical foundation with robust security measures and comprehensive cloud protection.',
      capabilities: [
        'Enterprise-grade cloud security management',
        'Multi-cloud security (AWS, Azure, GCP)',
        'Cloud-native security technology integration',
        'End-to-end security management scaled to business requirements',
        'Cloud infrastructure protection and monitoring'
      ]
    },
    {
      title: 'Security Architecture',
      description: 'Activate resilient Security Architecture for core networks. Integrate critical measures into your organization\'s technological infrastructure to enhance the modernization of your network architecture while safeguarding its key components. We help you manage risk in these areas to bring resilience to your core technologies and extended networks.',
      capabilities: [
        'Zero Trust architecture design',
        'Mobile and endpoint security',
        'Threat and vulnerability management/testing',
        'Security-based asset management and critical infrastructure',
        'Network segmentation & secure infrastructure design'
      ]
    },
    {
      title: 'Application Security',
      description: 'Integrate Application Security into the software development lifecycle. Through purpose-driven processes, we equip your organization with the ability to mitigate risks early in the development and acquisition lifecycles. In addition, we provide a range of static and dynamic testing tools that integrate into software development processes.',
      capabilities: [
        'Drive cyber risk evaluation',
        'Facilitate the design, testing, and implementation of software development controls',
        'Coordinate a shift left in the software development lifecycle',
        'Static and dynamic application security testing (SAST/DAST)',
        'Early risk mitigation in development and acquisition lifecycles'
      ]
    },
    {
      title: 'Emerging Technology',
      description: 'Drive innovation while mitigating threats. Integrate security into the design, build, implementation, and maintenance of next-gen technologies. Built to assist your organization\'s efforts, Emerging Technology services are designed to drive secure innovation to meet your cybersecurity goals.',
      capabilities: [
        'Evaluate cyber threats from new technologies',
        'Strategize implementation plans and mitigate adoption risks',
        'Align technology to drive innovation that supports business objectives',
        'Security integration for next-gen technology deployment',
        'Threat assessment and mitigation for emerging technologies'
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
    <div className="enterprise-security-page">
      {/* Hero Section */}
      <motion.section
        className="enterprise-security-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Enterprise Security</h1>
          <p className="hero-description">
            Security solutions that support digital transformation. Our Enterprise Security services are designed to help you 
            safeguard your digital transformation from start to finish. We advise you on how to strengthen your technical 
            foundation with robust security measures, secure development practices, and broad cloud and application protection. 
            Find out how you can embrace innovation while being protected against threats.
          </p>
        </div>
      </motion.section>

      {/* Main Description Section */}
      <section className="enterprise-security-intro">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Innovation Protection Strategies</h2>
            <p>
              Our enterprise security services are designed to help you protect your digital assets. We can assist your 
              organization with building and maintaining a secure infrastructure that protects your technical environment and 
              supports a resilient transformation.
            </p>
            <p>
              With our focus on secure development and deployment, you can feel confident that your applications and cloud 
              solutions are fortified against vulnerabilities. We implement leading practices and advanced security protocols to 
              help keep your systems safe from potential threats.
            </p>
            <p>
              As you adopt new technologies, our cutting-edge security solutions can help you preserve your innovations. We keep 
              you ahead of emerging risks, so you can continue to grow and evolve toward a stronger digital future with peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subsections */}
      <section className="enterprise-security-subsections">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Enterprise Security Services
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
        className="enterprise-security-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>Ready to Strengthen Your Enterprise Security?</h2>
          <p>Contact us today to discuss your enterprise security needs and discover how we can help protect your digital transformation.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default EnterpriseSecurity


