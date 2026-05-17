import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// ScrollToTop component ensures the window scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import FAQ from './pages/FAQ';
import HelpDesk from './pages/HelpDesk';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const Layout = () => {
  const location = useLocation();
  const isServiceDetail = location.pathname.startsWith('/services/');

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<HelpDesk />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
