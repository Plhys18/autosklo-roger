import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import GlassRepairPage from './pages/GlassRepairPage'
import InsurancePage from './pages/InsurancePage'
import LocationsPage from './pages/LocationsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-secondary-50">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sluzby" element={<ServicesPage />} />
            <Route path="/opravy-skel" element={<GlassRepairPage />} />
            <Route path="/pojistovny" element={<InsurancePage />} />
            <Route path="/pobocky" element={<LocationsPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App