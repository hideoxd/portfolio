import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Kotlin', icon: '🟣' },
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Git', icon: '🔀' },
  { name: 'MySQL', icon: '💾' },
];

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee">
        <div className="tech-marquee__track">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="tech-marquee__item">
              <span className="tech-marquee__icon">{tech.icon}</span>
              <span className="tech-marquee__name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-marquee-wrapper {
          position: relative;
          background: transparent;
        }
        
        .tech-marquee {
          position: relative;
          overflow: hidden;
          padding: 1.5rem 0;
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          margin: 0 2rem;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          mask-image: linear-gradient(90deg, transparent 2%, black 10%, black 90%, transparent 98%);
          -webkit-mask-image: linear-gradient(90deg, transparent 2%, black 10%, black 90%, transparent 98%);
        }
        
        .tech-marquee__track {
          display: flex;
          gap: 2rem;
          animation: marquee 30s linear infinite;
          width: max-content;
          padding: 0 1rem;
        }
        
        .tech-marquee__item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        
        .tech-marquee__item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }
        
        .tech-marquee__icon {
          font-size: 1.25rem;
        }
        
        .tech-marquee__name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .tech-marquee:hover .tech-marquee__track {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .tech-marquee {
            margin: 0 1rem;
            border-radius: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
