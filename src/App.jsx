import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import EnterpriseSecurity from './pages/EnterpriseSecurity'
import DigitalTrustPrivacy from './pages/DigitalTrustPrivacy'
import CyberStrategyTransformation from './pages/CyberStrategyTransformation'
import CyberDefenseResilience from './pages/CyberDefenseResilience'
import VCISO from './pages/VCISO'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ParticleBackground />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/vciso" element={<VCISO />} />
            <Route path="/services/enterprise-security" element={<EnterpriseSecurity />} />
            <Route path="/services/digital-trust-privacy" element={<DigitalTrustPrivacy />} />
            <Route path="/services/cyber-strategy-transformation" element={<CyberStrategyTransformation />} />
            <Route path="/services/cyber-defense-resilience" element={<CyberDefenseResilience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

