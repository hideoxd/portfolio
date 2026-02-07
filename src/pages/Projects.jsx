import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { ExternalLink, Github, Star, Filter } from 'lucide-react';

export default function Projects() {
    const { projects } = usePortfolio();
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(projects.map((p) => p.category))];
    const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

    return (
        <div className="projects-page">
            <section className="projects-hero">
                <div className="projects-hero__glow" />
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="section-subtitle">My Work</span>
                        <h1>Featured <span className="text-gradient">Projects</span></h1>
                        <p className="projects-hero__desc">A collection of projects that showcase my skills and experience</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="projects-filter">
                        <Filter size={18} />
                        {categories.map((cat) => (
                            <button key={cat} className={`projects-filter__btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
                        ))}
                    </div>

                    <motion.div className="projects-grid" layout>
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <motion.div key={project.id} className="project-card" layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -8 }}>
                                    <div className="project-card__img-wrap">
                                        <img src={project.image} alt={project.title} className="project-card__img" />
                                        <div className="project-card__overlay">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link"><ExternalLink size={20} /></a>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__link"><Github size={20} /></a>
                                        </div>
                                        {project.featured && <span className="project-card__featured"><Star size={14} />Featured</span>}
                                    </div>
                                    <div className="project-card__content">
                                        <span className="badge-accent">{project.category}</span>
                                        <h3 className="project-card__title">{project.title}</h3>
                                        <p className="project-card__desc">{project.description}</p>
                                        <div className="project-card__tech">
                                            {project.technologies.map((tech) => <span key={tech} className="project-card__tech-tag">{tech}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <style>{`
        .projects-hero{position:relative;padding:8rem 0 4rem;text-align:center;overflow:hidden}
        .projects-hero__glow{position:absolute;top:0;left:50%;transform:translateX(-50%);width:800px;height:400px;background:radial-gradient(ellipse,rgba(255,255,255,0.05),transparent 70%);pointer-events:none}
        .projects-hero__desc{font-size:1.25rem;color:var(--text-secondary);max-width:600px;margin:1rem auto 0}
        .projects-filter{display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:2rem;padding:0.5rem;background:rgba(255,255,255,0.02);border-radius:var(--radius-full);border:1px solid rgba(255,255,255,0.05)}
        .projects-filter svg{color:var(--text-tertiary);margin-left:0.5rem}
        .projects-filter__btn{padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:var(--text-secondary);background:transparent;border:none;border-radius:var(--radius-full);cursor:pointer;transition:all 0.2s ease}
        .projects-filter__btn:hover,.projects-filter__btn.active{color:var(--text-primary)}
        .projects-filter__btn.active{background:white;color:black}
        .projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:2rem}
        .project-card{background:rgba(10,10,10,0.8);border-radius:var(--radius-xl);overflow:hidden;border:1px solid rgba(255,255,255,0.05);transition:all 0.3s ease}
        .project-card:hover{border-color:rgba(255,255,255,0.15);box-shadow:0 20px 40px rgba(0,0,0,0.5),0 0 40px rgba(255,255,255,0.05)}
        .project-card__img-wrap{position:relative;height:220px;overflow:hidden}
        .project-card__img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;filter:grayscale(30%)}
        .project-card:hover .project-card__img{transform:scale(1.1);filter:grayscale(0%)}
        .project-card__overlay{position:absolute;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;gap:1rem;opacity:0;transition:opacity 0.3s ease}
        .project-card:hover .project-card__overlay{opacity:1}
        .project-card__link{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:var(--radius-lg);color:white;transition:all 0.2s ease}
        .project-card__link:hover{background:white;color:black;transform:scale(1.1)}
        .project-card__featured{position:absolute;top:1rem;left:1rem;display:flex;align-items:center;gap:0.375rem;padding:0.375rem 0.75rem;background:white;border-radius:var(--radius-full);color:black;font-size:0.75rem;font-weight:600}
        .project-card__content{padding:1.5rem}
        .badge-accent{display:inline-block;margin-bottom:0.75rem;padding:0.25rem 0.75rem;background:rgba(255,255,255,0.08);color:var(--text-primary);border:1px solid rgba(255,255,255,0.15);border-radius:var(--radius-full);font-size:0.75rem;font-weight:600}
        .project-card__title{font-size:1.25rem;margin-bottom:0.5rem}
        .project-card__desc{font-size:0.9rem;color:var(--text-secondary);margin-bottom:1rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
        .project-card__tech{display:flex;flex-wrap:wrap;gap:0.5rem}
        .project-card__tech-tag{padding:0.25rem 0.625rem;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-full);font-size:0.75rem;color:var(--text-secondary)}
        @media(max-width:768px){.projects-grid{grid-template-columns:1fr}}
      `}</style>
        </div>
    );
}
