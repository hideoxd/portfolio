export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      {/* Subtle Orbs - Monochrome */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Grid Pattern */}
      <div className="grid-pattern"></div>

      <style>{`
        .animated-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.08);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.05);
          bottom: -150px;
          right: -150px;
          animation-delay: -5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.02);
          }
          50% {
            transform: translate(-15px, 15px) scale(0.98);
          }
          75% {
            transform: translate(-25px, -15px) scale(1.01);
          }
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
        }
      `}</style>
    </div>
  );
}
