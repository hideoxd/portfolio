import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { MapPin, Mail, Phone, Award, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
    const { personal, about, skills } = usePortfolio();
    const categories = [...new Set(skills.map((s) => s.category))];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-hero__glow" />
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="section-subtitle">About Me</span>
                        <h1>Get to Know <span className="text-gradient-animated">{personal.name}</span></h1>
                        <p className="about-hero__desc">{personal.tagline}</p>
                    </motion.div>
                </div>
            </section>

            <section className="section about-bio">
                <div className="container">
                    <div className="about-bio__grid">
                        <motion.div className="about-bio__img-wrap" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="about-bio__glow" />
                            <img src={personal.avatar} alt={personal.name} className="about-bio__img" />
                            <motion.div
                                className="about-bio__badge"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles size={18} />
                                <span>{about.experience}</span>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2>A Passionate <span className="text-gradient">Developer</span></h2>
                            <div className="about-bio__text">
                                {about.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                            <div className="about-bio__info">
                                <div className="about-bio__info-item">
                                    <div className="about-bio__info-icon"><MapPin size={18} /></div>
                                    <span>{personal.location}</span>
                                </div>
                                <div className="about-bio__info-item">
                                    <div className="about-bio__info-icon"><Mail size={18} /></div>
                                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                                </div>
                                <div className="about-bio__info-item">
                                    <div className="about-bio__info-icon"><Phone size={18} /></div>
                                    <span>{personal.phone}</span>
                                </div>
                                <div className="about-bio__info-item">
                                    <div className="about-bio__info-icon"><Briefcase size={18} /></div>
                                    <span>{about.projectsCompleted} Projects Completed</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section about-skills">
                <div className="about-skills__glow" />
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Skills</span>
                        <h2 className="section-title">Technical Expertise</h2>
                        <p className="section-description">Technologies I use to build amazing products</p>
                    </div>
                    {categories.map((cat) => (
                        <div key={cat} className="about-skills__cat">
                            <h3 className="about-skills__cat-title"><Award size={20} />{cat}</h3>
                            <div className="about-skills__list">
                                {skills.filter((s) => s.category === cat).map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item glass-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.02, y: -3 }}
                                    >
                                        <div className="skill-item__head">
                                            <span>{skill.name}</span>
                                            <span className="skill-item__lvl">{skill.level}%</span>
                                        </div>
                                        <div className="skill-item__bar">
                                            <motion.div
                                                className="skill-item__prog"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style>{`
        .about-hero {
            position: relative;
            padding: 10rem 0 4rem;
            text-align: center;
            overflow: hidden;
        }
        
        .about-hero__glow {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 500px;
            background: radial-gradient(ellipse, rgba(255, 255, 255, 0.05), transparent 70%);
            pointer-events: none;
        }
        
        .about-hero__desc {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 1rem auto 0;
        }
        
        .about-bio__grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 4rem;
            align-items: center;
        }
        
        .about-bio__img-wrap {
            position: relative;
            display: flex;
            justify-content: center;
        }
        
        .about-bio__glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent);
            border-radius: 50%;
            filter: blur(80px);
        }
        
        .about-bio__img {
            width: 100%;
            max-width: 380px;
            border-radius: var(--radius-2xl);
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 60px rgba(255, 255, 255, 0.05);
            position: relative;
            z-index: 1;
        }
        
        .about-bio__badge {
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: white;
            border-radius: var(--radius-full);
            color: black;
            font-weight: 600;
            font-size: 0.9rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 2;
        }
        
        .about-bio__text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 1.5rem 0 2rem;
        }
        
        .about-bio__text p {
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 0;
        }
        
        .about-bio__info {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        
        .about-bio__info-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-secondary);
            font-size: 0.95rem;
        }
        
        .about-bio__info-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-md);
            color: var(--text-secondary);
        }
        
        .about-bio__info-item a {
            color: var(--text-secondary);
            transition: color 0.2s ease;
        }
        
        .about-bio__info-item a:hover {
            color: var(--text-primary);
        }
        
        .about-skills {
            background: var(--bg-secondary);
            position: relative;
            overflow: hidden;
        }
        
        .about-skills__glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 800px;
            height: 400px;
            background: radial-gradient(ellipse, rgba(255, 255, 255, 0.03), transparent 70%);
            pointer-events: none;
        }
        
        .about-skills__cat {
            margin-bottom: 2.5rem;
        }
        
        .about-skills__cat-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .about-skills__cat-title svg {
            color: var(--text-secondary);
        }
        
        .about-skills__list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.25rem;
        }
        
        .skill-item {
            padding: 1.5rem;
        }
        
        .skill-item__head {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;
            font-weight: 600;
        }
        
        .skill-item__lvl {
            color: var(--text-secondary);
            font-size: 0.875rem;
        }
        
        .skill-item__bar {
            height: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--radius-full);
            overflow: hidden;
        }
        
        .skill-item__prog {
            height: 100%;
            background: white;
            border-radius: var(--radius-full);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 1024px) {
            .about-bio__grid {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            .about-bio__img-wrap {
                justify-content: center;
            }
        }
        
        @media (max-width: 768px) {
            .about-hero {
                padding: 8rem 0 3rem;
            }
            .about-bio__info {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
}
