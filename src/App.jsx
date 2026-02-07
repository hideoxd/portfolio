import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CursorGlow from './components/UI/CursorGlow';
import ScrollProgress from './components/UI/ScrollProgress';
import AnimatedBackground from './components/UI/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="layout-content">
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
      <style>{`
        .layout-content {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          transition: margin-left 0.3s ease;
        }
        
        @media (min-width: 1025px) {
          .layout-content {
            margin-left: 0; /* Content spans full width */
            padding-right: 0;
          }
        }
        
        @media (max-width: 1024px) {
          .layout-content {
            margin-left: 0;
            padding-bottom: 80px; /* Space for bottom mobile nav */
          }
        }
      `}</style>
    </>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/projects" element={<PublicLayout><Projects /></PublicLayout>} />
        <Route path="/experience" element={<PublicLayout><Experience /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <ScrollProgress />
        <AnimatedBackground />
        <CursorGlow />
        <AppRoutes />
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;
