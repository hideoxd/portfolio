import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUp } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  const { personal } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__content">
          {/* Logo & Description */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="footer__avatar"
                />
              </div>
              <span className="footer__logo-text">{personal.name}</span>
            </Link>
            <p className="footer__description">
              {personal.tagline}. Building digital experiences that make a difference.
            </p>
            <div className="footer__socials">
              {Object.entries(personal.socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon || !url) return null;
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__section-title">Quick Links</h4>
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__section">
            <h4 className="footer__section-title">Contact</h4>
            <ul className="footer__contact">
              <li>
                <a href={`mailto:${personal.email}`} className="footer__link">
                  {personal.email}
                </a>
              </li>
              <li>
                <span className="footer__link">{personal.phone}</span>
              </li>
              <li>
                <span className="footer__link">{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} {personal.name}. Made with{' '}
            <Heart size={14} className="footer__heart" /> All rights reserved.
          </p>
          <motion.button
            className="footer__scroll-top"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          background: var(--bg-secondary);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 0 2rem;
          margin-top: auto;
          overflow: hidden;
        }

        .footer__glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03), transparent 70%);
          pointer-events: none;
        }

        .footer__content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer__brand {
          max-width: 350px;
        }

        .footer__logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1rem;
        }

        .footer__logo-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .footer__avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .footer__logo:hover .footer__logo-icon {
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
        }

        .footer__logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer__description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .footer__socials {
          display: flex;
          gap: 0.75rem;
        }

        .footer__social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .footer__social-link:hover {
          background: white;
          border-color: white;
          color: black;
        }

        .footer__section-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .footer__links,
        .footer__contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__link {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer__link:hover {
          color: var(--text-primary);
        }

        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer__copyright {
          font-size: 0.875rem;
          color: var(--text-tertiary);
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .footer__heart {
          color: #ef4444;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .footer__scroll-top {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .footer__scroll-top:hover {
          background: white;
          border-color: white;
          color: black;
        }

        @media (max-width: 768px) {
          .footer__content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer__brand {
            max-width: none;
          }

          .footer__bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
