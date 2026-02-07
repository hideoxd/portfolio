import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
    const { experience, education } = usePortfolio();

    return (
        <div className="experience-page">
            <section className="exp-hero">
                <div className="exp-hero__glow" />
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="section-subtitle">My Journey</span>
                        <h1>Work <span className="text-gradient">Experience</span></h1>
                        <p className="exp-hero__desc">Professional experience and educational background</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="exp-section">
                        <div className="section-header" style={{ textAlign: 'left' }}>
                            <h2><Briefcase size={24} style={{ marginRight: '0.75rem', verticalAlign: 'middle', color: 'var(--text-secondary)' }} />Work Experience</h2>
                        </div>
                        <div className="exp-timeline">
                            {experience.map((exp, i) => (
                                <motion.div key={exp.id} className="exp-item glass-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <div className="exp-item__dot" />
                                    <div className="exp-item__header">
                                        <h3 className="exp-item__title">{exp.position}</h3>
                                        <span className="exp-item__company">{exp.company}</span>
                                    </div>
                                    <div className="exp-item__meta">
                                        <span><Calendar size={14} />{exp.duration}</span>
                                        <span><MapPin size={14} />{exp.location}</span>
                                    </div>
                                    <p className="exp-item__desc">{exp.description}</p>
                                    {exp.achievements && (
                                        <ul className="exp-item__list">
                                            {exp.achievements.map((a, idx) => <li key={idx}><CheckCircle2 size={14} />{a}</li>)}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="exp-section">
                        <div className="section-header" style={{ textAlign: 'left' }}>
                            <h2><GraduationCap size={24} style={{ marginRight: '0.75rem', verticalAlign: 'middle', color: 'var(--text-secondary)' }} />Education</h2>
                        </div>
                        <div className="edu-grid">
                            {education.map((edu, i) => (
                                <motion.div key={edu.id} className="edu-card glass-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <div className="edu-card__icon"><GraduationCap size={24} /></div>
                                    <h3 className="edu-card__degree">{edu.degree}</h3>
                                    <span className="edu-card__institution">{edu.institution}</span>
                                    <span className="edu-card__duration"><Calendar size={14} />{edu.duration}</span>
                                    <p className="edu-card__desc">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .exp-hero{position:relative;padding:8rem 0 4rem;text-align:center;overflow:hidden}
        .exp-hero__glow{position:absolute;top:0;left:50%;transform:translateX(-50%);width:800px;height:400px;background:radial-gradient(ellipse,rgba(255,255,255,0.05),transparent 70%);pointer-events:none}
        .exp-hero__desc{font-size:1.25rem;color:var(--text-secondary);max-width:600px;margin:1rem auto 0}
        .exp-section{margin-bottom:4rem}
        .exp-timeline{position:relative;padding-left:2rem;border-left:2px solid rgba(255,255,255,0.1)}
        .exp-item{position:relative;padding:1.5rem;margin-bottom:1.5rem;margin-left:1rem}
        .exp-item__dot{position:absolute;left:-2.625rem;top:1.5rem;width:12px;height:12px;background:white;border-radius:50%;box-shadow:0 0 20px rgba(255,255,255,0.3)}
        .exp-item__header{margin-bottom:0.75rem}
        .exp-item__title{font-size:1.25rem;font-weight:600;margin-bottom:0.25rem}
        .exp-item__company{color:var(--text-secondary);font-weight:500}
        .exp-item__meta{display:flex;gap:1.5rem;margin-bottom:1rem;font-size:0.875rem;color:var(--text-tertiary)}
        .exp-item__meta span{display:flex;align-items:center;gap:0.375rem}
        .exp-item__desc{color:var(--text-secondary);line-height:1.7;margin-bottom:1rem}
        .exp-item__list{list-style:none;display:flex;flex-direction:column;gap:0.5rem}
        .exp-item__list li{display:flex;align-items:flex-start;gap:0.5rem;color:var(--text-secondary);font-size:0.9rem}
        .exp-item__list svg{color:#22c55e;flex-shrink:0;margin-top:0.25rem}
        .edu-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem}
        .edu-card{padding:2rem;text-align:center}
        .edu-card__icon{width:60px;height:60px;display:flex;align-items:center;justify-content:center;background:white;border-radius:var(--radius-xl);color:black;margin:0 auto 1.25rem;box-shadow:0 0 30px rgba(255,255,255,0.1)}
        .edu-card__degree{font-size:1.125rem;font-weight:600;margin-bottom:0.5rem}
        .edu-card__institution{color:var(--text-secondary);font-weight:500;display:block;margin-bottom:0.75rem}
        .edu-card__duration{display:flex;align-items:center;justify-content:center;gap:0.5rem;font-size:0.875rem;color:var(--text-tertiary);margin-bottom:1rem}
        .edu-card__desc{color:var(--text-secondary);font-size:0.9rem;line-height:1.6}
        @media(max-width:768px){.exp-timeline{padding-left:1rem}.exp-item{margin-left:0.5rem}.exp-item__dot{left:-1.875rem}}
      `}</style>
        </div>
    );
}
