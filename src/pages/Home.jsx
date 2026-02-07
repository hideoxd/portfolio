import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Code2, Rocket, ExternalLink, Github, Star, Zap, Heart } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import TypeWriter from '../components/UI/TypeWriter';
import TechMarquee from '../components/UI/TechMarquee';
import SocialLinks from '../components/UI/SocialLinks';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Home() {
  const { personal, about, skills, projects, services } = usePortfolio();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const topSkills = skills.slice(0, 6);

  const typeWriterWords = ['Developer', 'Designer', 'Creator', 'Problem Solver'];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />

        <motion.div
          className="container hero__container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__content" variants={itemVariants}>
            <motion.div className="hero__badge" variants={itemVariants}>
              <Sparkles size={14} />
              <span>Available for freelance work</span>
              <span className="hero__badge-dot"></span>
            </motion.div>

            <motion.h1 className="hero__title" variants={itemVariants}>
              Hi, I'm <span className="text-gradient-animated">{personal.name}</span>
              <br />
              <span className="hero__subtitle">
                <TypeWriter words={typeWriterWords} />
              </span>
            </motion.h1>

            <motion.p className="hero__description" variants={itemVariants}>
              {personal.bio}
            </motion.p>

            <motion.div className="hero__actions" variants={itemVariants}>
              <Link to="/projects" className="btn btn-primary">
                <Zap size={18} />
                View My Work
                <ArrowRight size={18} />
              </Link>
              <a href="/Apranshu-CV.pdf" download="Apranshu-CV.pdf" className="btn btn-secondary">
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div className="hero__social" variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__image-wrapper"
            variants={itemVariants}
          >
            <div className="hero__image-glow" />
            <div className="hero__image-ring hero__image-ring--1" />
            <div className="hero__image-ring hero__image-ring--2" />
            <motion.img
              src={personal.avatar}
              alt={personal.name}
              className="hero__image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="hero__floating-card hero__floating-card--1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={20} />
              <span>Clean Code</span>
            </motion.div>
            <motion.div
              className="hero__floating-card hero__floating-card--2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket size={20} />
              <span>Fast Delivery</span>
            </motion.div>
            <motion.div
              className="hero__floating-card hero__floating-card--3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={20} />
              <span>Passion Driven</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </section>

      {/* Tech Marquee Section */}
      <section className="tech-section">
        <div className="container">
          <motion.div
            className="tech-section__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Tech Stack</span>
            <h3>Technologies I Work With</h3>
          </motion.div>
        </div>
        <TechMarquee />
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">My Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-description">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            className="skills-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="skill-card__header">
                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__level">{skill.level}%</span>
                </div>
                <div className="skill-card__bar">
                  <motion.div
                    className="skill-card__progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <span className="skill-card__category badge">{skill.category}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="skills-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/about" className="btn btn-secondary">
              View All Skills
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section projects-section">
        <div className="projects-section__glow" />
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Recent Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              A showcase of my latest and greatest work
            </p>
          </motion.div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="project-card__image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                  />
                  <div className="project-card__overlay">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                      <Github size={20} />
                    </a>
                  </div>
                  <span className="project-card__featured">
                    <Star size={14} />
                    Featured
                  </span>
                </div>
                <div className="project-card__content">
                  <span className="project-card__category badge-accent">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="project-card__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="projects-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/projects" className="btn btn-primary">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="services-section__glow" />
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">What I Do</span>
            <h2 className="section-title">Services I Offer</h2>
            <p className="section-description">
              End-to-end solutions for your digital needs
            </p>
          </motion.div>

          <div className="services-grid">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="service-card__icon">
                  <Zap size={28} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <div className="service-card__arrow">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-section__glow" />
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="cta-card__bg" />
            <div className="cta-card__content">
              <motion.div
                className="cta-card__icon"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={40} />
              </motion.div>
              <h2 className="cta-card__title">Let's Create Something <span className="text-gradient-animated">Amazing</span></h2>
              <p className="cta-card__description">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary cta-card__btn">
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 0 4rem;
        }

        .hero__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.4;
        }

        .hero__glow--1 {
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.08);
          top: -200px;
          left: -200px;
          animation: float 20s ease-in-out infinite;
        }

        .hero__glow--2 {
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.05);
          bottom: -100px;
          right: -100px;
          animation: float 15s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        .hero__container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .hero__badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 10px #22c55e;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero__title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero__subtitle {
          display: block;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          min-height: 2.5rem;
        }

        .hero__description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .hero__actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .hero__social {
          margin-top: 1rem;
        }

        .hero__image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero__image-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
          border-radius: 50%;
          filter: blur(80px);
        }

        .hero__image-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.15);
        }

        .hero__image-ring--1 {
          width: 380px;
          height: 380px;
          animation: spin 30s linear infinite;
        }

        .hero__image-ring--2 {
          width: 430px;
          height: 430px;
          animation: spin 40s linear infinite reverse;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero__image {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
        }

        .hero__floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 500;
          box-shadow: var(--shadow-lg);
          z-index: 2;
        }

        .hero__floating-card svg {
          color: var(--text-secondary);
        }

        .hero__floating-card--1 {
          top: 5%;
          right: 0;
        }

        .hero__floating-card--2 {
          bottom: 20%;
          left: 0;
        }

        .hero__floating-card--3 {
          bottom: 5%;
          right: 10%;
        }

        .hero__scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        .hero__scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .hero__scroll-wheel {
          width: 4px;
          height: 8px;
          background: white;
          border-radius: 4px;
          animation: scrollWheel 2s ease-in-out infinite;
        }

        @keyframes scrollWheel {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(8px); }
        }

        /* Tech Section */
        .tech-section {
          padding: 4rem 0;
          background: transparent;
          position: relative;
          overflow: visible;
        }

        .tech-section__header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .tech-section__header h3 {
          font-size: 1.5rem;
          margin-top: 0.5rem;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .skill-card {
          padding: 1.5rem;
        }

        .skill-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .skill-card__name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-card__level {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .skill-card__bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .skill-card__progress {
          height: 100%;
          background: white;
          border-radius: var(--radius-full);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

        .skills-cta {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        /* Projects Section */
        .projects-section {
          position: relative;
          background: var(--bg-secondary);
        }

        .projects-section__glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03), transparent 70%);
          pointer-events: none;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all var(--transition-base);
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: var(--shadow-xl), 0 0 40px rgba(255, 255, 255, 0.05);
        }

        .project-card__image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .project-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
          filter: grayscale(30%);
        }

        .project-card:hover .project-card__image {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .project-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .project-card:hover .project-card__overlay {
          opacity: 1;
        }

        .project-card__link {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-lg);
          color: white;
          transition: all var(--transition-fast);
        }

        .project-card__link:hover {
          background: white;
          color: black;
          transform: scale(1.1);
        }

        .project-card__featured {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem 0.75rem;
          background: white;
          border-radius: var(--radius-full);
          color: black;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .project-card__content {
          padding: 1.5rem;
        }

        .project-card__category {
          margin-bottom: 0.75rem;
        }

        .badge-accent {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .project-card__title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .project-card__description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-card__tech-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .projects-cta {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        /* Services Section */
        .services-section {
          position: relative;
        }

        .services-section__glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03), transparent 70%);
          pointer-events: none;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          padding: 2rem;
          text-align: left;
          position: relative;
        }

        .service-card__icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: var(--radius-lg);
          color: black;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        }

        .service-card__title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .service-card__description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .service-card__arrow {
          color: var(--text-tertiary);
          opacity: 0;
          transform: translateX(-10px);
          transition: all var(--transition-base);
        }

        .service-card:hover .service-card__arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* CTA Section */
        .cta-section {
          position: relative;
          padding-bottom: 4rem;
        }

        .cta-section__glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03), transparent 70%);
          pointer-events: none;
        }

        .cta-card {
          position: relative;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-2xl);
          overflow: hidden;
        }

        .cta-card__bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.05), transparent 70%);
          pointer-events: none;
        }

        .cta-card__content {
          position: relative;
          z-index: 1;
        }

        .cta-card__icon {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .cta-card__title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-card__description {
          color: var(--text-secondary);
          max-width: 500px;
          font-size: 1.1rem;
        }

        .cta-card__btn {
          position: relative;
          z-index: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero__container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero__content {
            order: 2;
          }

          .hero__image-wrapper {
            order: 1;
            margin-bottom: 2rem;
          }

          .hero__description {
            margin: 0 auto 2rem;
          }

          .hero__actions {
            justify-content: center;
          }

          .hero__social {
            display: flex;
            justify-content: center;
          }

          .hero__floating-card {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 5rem 0 3rem;
          }

          .hero__image {
            width: 250px;
            height: 250px;
          }

          .cta-card {
            padding: 2.5rem 1.5rem;
          }

          .cta-card__title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
