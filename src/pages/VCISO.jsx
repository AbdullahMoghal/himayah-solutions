import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './VCISO.css'

const VCISO = () => {
  const subsections = [
    {
      title: 'Security Strategy and Roadmap Development',
      description: 'Develop comprehensive security strategies aligned with your business objectives. Our vCISO services help you create actionable roadmaps that prioritize security initiatives, allocate resources effectively, and establish clear milestones for achieving your cybersecurity goals. We work with you to build a strategic vision that supports business growth while maintaining robust security posture.',
      capabilities: [
        'Comprehensive security strategy development',
        'Actionable roadmap creation with clear milestones',
        'Resource allocation and prioritization',
        'Alignment with business objectives and growth',
        'Strategic vision for long-term security posture'
      ]
    },
    {
      title: 'Governance, Risk, and Compliance (GRC) Oversight',
      description: 'Establish effective governance structures and ensure compliance with industry standards and regulations. Our vCISO team provides oversight of your governance, risk, and compliance programs, helping you navigate complex regulatory requirements while maintaining operational efficiency. We help you build frameworks that integrate risk management into your daily operations.',
      capabilities: [
        'Governance structure establishment and oversight',
        'Risk management framework integration',
        'Compliance with industry standards and regulations',
        'Regulatory requirement navigation',
        'Operational efficiency through effective GRC programs'
      ]
    },
    {
      title: 'Board and Executive Reporting',
      description: 'Deliver clear, actionable security insights to leadership. Our vCISO services include comprehensive board and executive reporting that translates technical security metrics into business-relevant information. We help you communicate security posture, risks, and strategic initiatives in a way that enables informed decision-making at the highest levels of your organization.',
      capabilities: [
        'Board-level security reporting and presentations',
        'Executive security briefings and strategic insights',
        'Translation of technical metrics to business language',
        'Risk communication and decision support',
        'Strategic initiative alignment with business goals'
      ]
    },
    {
      title: 'Incident Response Planning and Tabletop Exercises',
      description: 'Prepare your organization to respond effectively to cyber incidents. Our vCISO services include developing comprehensive incident response plans and conducting realistic tabletop exercises that test your organization\'s readiness. We help you build response capabilities, establish clear communication protocols, and ensure your team can act decisively when incidents occur.',
      capabilities: [
        'Comprehensive incident response plan development',
        'Realistic tabletop exercise design and execution',
        'Response capability building and testing',
        'Communication protocol establishment',
        'Incident readiness assessment and improvement'
      ]
    },
    {
      title: 'Vendor Risk Management',
      description: 'Manage and mitigate risks across your vendor ecosystem. Our vCISO services help you establish robust vendor risk management programs that assess, monitor, and manage third-party security risks. We work with you to develop vendor security requirements, conduct risk assessments, and ensure your supply chain doesn\'t become a weak link in your security posture.',
      capabilities: [
        'Vendor risk assessment and management programs',
        'Third-party security requirement development',
        'Supply chain security oversight',
        'Vendor security monitoring and evaluation',
        'Risk mitigation strategies for vendor relationships'
      ]
    },
    {
      title: 'Policy Development and Program Maturity Assessments',
      description: 'Build comprehensive security policies and measure program effectiveness. Our vCISO services include developing security policies, standards, and procedures that align with industry best practices and regulatory requirements. We also conduct maturity assessments to help you understand where your security program stands and identify opportunities for improvement.',
      capabilities: [
        'Security policy, standard, and procedure development',
        'Program maturity assessments and benchmarking',
        'Industry best practice alignment',
        'Gap analysis and improvement roadmap development',
        'Continuous program enhancement strategies'
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
    <div className="vciso-page">
      {/* Hero Section */}
      <motion.section
        className="vciso-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>vCISO (Virtual Chief Information Security Officer)</h1>
          <p className="hero-description">
            Strengthen your security program with executive‑level leadership at a fraction of the cost of a full‑time CISO. 
            Our vCISO services provide strategic cybersecurity leadership, governance, and oversight to help organizations 
            build and maintain effective security programs without the overhead of a full-time executive position.
          </p>
        </div>
      </motion.section>

      {/* Main Description Section */}
      <section className="vciso-intro">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Executive-Level Security Leadership</h2>
            <p>
              A Virtual Chief Information Security Officer (vCISO) provides the strategic leadership and expertise of a full-time 
              CISO without the associated costs and commitment. Our vCISO services deliver executive-level cybersecurity guidance, 
              helping organizations navigate complex security challenges, establish effective governance structures, and build 
              resilient security programs.
            </p>
            <p>
              With 20+ years of Fortune 50 cybersecurity leadership experience, our vCISO team brings unparalleled expertise 
              to every engagement. We serve as trusted advisors who help organizations reduce risk, improve resilience, and 
              confidently navigate today's rapidly changing threat landscape.
            </p>
            <p>
              Whether you need ongoing strategic guidance, project-based leadership, or interim CISO support, our flexible 
              vCISO services are tailored to meet your organization's specific needs and budget constraints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subsections */}
      <section className="vciso-subsections">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            vCISO Service Offerings
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

      {/* Benefits Section */}
      <section className="vciso-benefits">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose vCISO Services?
          </motion.h2>
          <motion.div
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="benefit-item" variants={itemVariants}>
              <h3>Cost-Effective Leadership</h3>
              <p>Access executive-level security expertise at a fraction of the cost of a full-time CISO</p>
            </motion.div>
            <motion.div className="benefit-item" variants={itemVariants}>
              <h3>Flexible Engagement</h3>
              <p>Choose from ongoing advisory, project-based, or interim leadership models</p>
            </motion.div>
            <motion.div className="benefit-item" variants={itemVariants}>
              <h3>Proven Experience</h3>
              <p>20+ years of Fortune 50 cybersecurity leadership experience</p>
            </motion.div>
            <motion.div className="benefit-item" variants={itemVariants}>
              <h3>Strategic Focus</h3>
              <p>Align security initiatives with business objectives and growth strategies</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="vciso-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2>Ready to Strengthen Your Security Leadership?</h2>
          <p>Contact us today to discuss your vCISO needs and discover how we can help you build a stronger security program with executive-level leadership.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default VCISO

