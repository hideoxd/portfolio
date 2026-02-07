import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/projects', label: 'Projects', icon: Code },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const location = useLocation();
  const { personal } = usePortfolio();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* ===== Desktop Sidebar (Left) ===== */}
      <motion.nav
        className="sidebar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="sidebar__content glass-card">
          {/* Logo / Profile Picture */}
          <Link to="/" className="sidebar__brand">
            <div className="sidebar__logo">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="sidebar__avatar"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="sidebar__nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <li key={link.path} className="sidebar__item">
                  <Link to={link.path} className={`sidebar__link ${isActive ? 'active' : ''}`}>
                    <div className="sidebar__icon-box">
                      <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                      {isActive && (
                        <motion.div
                          className="sidebar__active-indicator"
                          layoutId="sidebarActive"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                    <span className="sidebar__label">{link.label}</span>

                    {/* Hover Tooltip Effect */}
                    <div className="sidebar__tooltip">
                      {link.label}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
      </motion.nav>

      {/* ===== Mobile Navigation (Bottom) ===== */}
      <nav className="mobile-nav">
        <div className="mobile-nav__container glass-card">
          {/* Profile Picture for Mobile */}
          <Link to="/" className="mobile-nav__brand">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="mobile-nav__avatar"
            />
          </Link>

          {navLinks.slice(0, 4).map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;

            return (
              <Link key={link.path} to={link.path} className={`mobile-nav__item ${isActive ? 'active' : ''}`}>
                <div className="mobile-nav__icon">
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <motion.div
                      className="mobile-nav__indicator"
                      layoutId="mobileActive"
                    />
                  )}
                </div>
                <span className="mobile-nav__label">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <style>{`
        /* ===== Sidebar (Desktop) ===== */
        .sidebar {
          position: fixed;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%) !important;
          height: auto;
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .sidebar__content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 1.5rem 0.75rem;
          background: rgba(5, 5, 5, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sidebar__brand {
          display: flex;
          justify-content: center;
          text-decoration: none;
          margin-bottom: 0.5rem;
        }

        .sidebar__logo {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .sidebar__avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sidebar__brand:hover .sidebar__logo {
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .sidebar__logo-text {
          display: none;
        }

        .sidebar__nav {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .sidebar__link {
          position: relative;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .sidebar__icon-box {
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          transition: all 0.3s;
          background: transparent;
        }

        .sidebar__link:hover .sidebar__icon-box {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          transform: translateX(4px);
        }

        .sidebar__link.active .sidebar__icon-box {
          background: white;
          color: black;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
        }

        .sidebar__active-indicator {
          display: none;
        }

        .sidebar__label {
          display: none;
        }

        /* Improved Tooltip */
        .sidebar__tooltip {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          background: white;
          color: black;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .sidebar__tooltip::before {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 4px;
          border-style: solid;
          border-color: transparent white transparent transparent;
        }

        .sidebar__link:hover .sidebar__tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(15px);
        }


        /* ===== Mobile Nav (Floating Dock) ===== */
        .mobile-nav {
          display: none;
          position: fixed;
          bottom: 24px;
          left: 0;
          right: 0;
          z-index: 9999;
          justify-content: center;
          padding: 0 16px;
          pointer-events: none;
        }

        .mobile-nav__container {
          pointer-events: auto;
          display: flex;
          flex-direction: row !important;
          align-items: center;
          justify-content: space-between;
          
          /* Dynamic Size */
          width: 100%;
          max-width: 420px;
          height: 64px;
          
          /* Glass Style */
          background: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          
          padding: 0 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
          
          overflow-x: auto; 
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          gap: 4px;
        }

        /* Hide scrollbar but keep functionality */
        .mobile-nav__container::-webkit-scrollbar {
          display: none;
        }

        .mobile-nav__brand {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mobile-nav__avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.2s ease;
        }

        .mobile-nav__brand:hover .mobile-nav__avatar {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .mobile-nav__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          width: auto;
          min-width: 48px;
          height: 100%;
          transition: all 0.2s ease;
        }

        .mobile-nav__label {
          display: none;
        }

        .mobile-nav__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          padding: 8px;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .mobile-nav__item svg {
          width: 24px;
          height: 24px;
          stroke-width: 2px;
        }

        /* Active State */
        .mobile-nav__item.active {
          color: white;
        }
        
        .mobile-nav__item.active .mobile-nav__icon {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .mobile-nav__indicator {
          display: none;
        }
        
        /* Active Dot Below */
        .mobile-nav__item.active::after {
          content: '';
          position: absolute;
          bottom: 8px;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 8px white;
        }


        /* ===== Responsive Queries ===== */
        @media (max-width: 1024px) {
          .sidebar {
            display: none !important;
          }
          
          .mobile-nav {
            display: flex;
            padding-bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
    </>
  );
}
