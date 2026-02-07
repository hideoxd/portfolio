import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function SocialLinks({ size = 'md' }) {
  const { personal } = usePortfolio();
  const socialLinks = personal.socialLinks || {};

  const sizeClasses = {
    sm: 'social-links--sm',
    md: 'social-links--md',
    lg: 'social-links--lg',
  };

  return (
    <div className={`social-links ${sizeClasses[size]}`}>
      {Object.entries(socialLinks).map(([platform, url], index) => {
        const Icon = icons[platform];
        if (!Icon || !url) return null;

        return (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-links__item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon />
          </motion.a>
        );
      })}

      <style>{`
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links__item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .social-links__item:hover {
          background: white;
          border-color: white;
          color: black;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
        }
        
        .social-links--sm .social-links__item {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        
        .social-links--sm .social-links__item svg {
          width: 18px;
          height: 18px;
        }
        
        .social-links--lg .social-links__item {
          width: 56px;
          height: 56px;
          border-radius: 16px;
        }
        
        .social-links--lg .social-links__item svg {
          width: 26px;
          height: 26px;
        }
      `}</style>
    </div>
  );
}
