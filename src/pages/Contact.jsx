import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const socialIcons = { github: Github, linkedin: Linkedin, twitter: Twitter, instagram: Instagram };

export default function Contact() {
    const { personal } = usePortfolio();
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => setSent(true), 1000);
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero__glow" />
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="section-subtitle">Get In Touch</span>
                        <h1>Let's <span className="text-gradient">Connect</span></h1>
                        <p className="contact-hero__desc">Have a project in mind? I'd love to hear from you.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2>Contact Information</h2>
                            <p className="contact-info__desc">Feel free to reach out through any of the following methods</p>

                            <div className="contact-info__items">
                                <div className="contact-info__item glass-card">
                                    <div className="contact-info__icon"><Mail size={22} /></div>
                                    <div><span className="contact-info__label">Email</span><a href={`mailto:${personal.email}`}>{personal.email}</a></div>
                                </div>
                                <div className="contact-info__item glass-card">
                                    <div className="contact-info__icon"><Phone size={22} /></div>
                                    <div><span className="contact-info__label">Phone</span><span>{personal.phone}</span></div>
                                </div>
                                <div className="contact-info__item glass-card">
                                    <div className="contact-info__icon"><MapPin size={22} /></div>
                                    <div><span className="contact-info__label">Location</span><span>{personal.location}</span></div>
                                </div>
                                <div className="contact-info__item glass-card">
                                    <div className="contact-info__icon"><Clock size={22} /></div>
                                    <div><span className="contact-info__label">Response Time</span><span>Within 24 hours</span></div>
                                </div>
                            </div>

                            <div className="contact-socials">
                                <span>Connect with me:</span>
                                <div className="contact-socials__links">
                                    {Object.entries(personal.socialLinks).map(([platform, url]) => {
                                        const Icon = socialIcons[platform];
                                        if (!Icon || !url) return null;
                                        return <motion.a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="contact-social-link" whileHover={{ scale: 1.1, y: -2 }}><Icon size={20} /></motion.a>;
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="contact-form-wrap glass-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            {sent ? (
                                <div className="contact-success">
                                    <CheckCircle size={60} />
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                                    <button className="btn btn-primary" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>Send Another</button>
                                </div>
                            ) : (
                                <>
                                    <div className="contact-form__header"><MessageSquare size={24} /><h3>Send a Message</h3></div>
                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="contact-form__row">
                                            <div className="input-group"><label className="input-label">Name</label><input type="text" className="input" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
                                            <div className="input-group"><label className="input-label">Email</label><input type="email" className="input" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
                                        </div>
                                        <div className="input-group"><label className="input-label">Subject</label><input type="text" className="input" placeholder="Project Inquiry" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required /></div>
                                        <div className="input-group"><label className="input-label">Message</label><textarea className="input textarea" placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
                                        <button type="submit" className="btn btn-primary contact-form__submit"><Send size={18} />Send Message</button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
        .contact-hero{position:relative;padding:8rem 0 4rem;text-align:center;overflow:hidden}
        .contact-hero__glow{position:absolute;top:0;left:50%;transform:translateX(-50%);width:800px;height:400px;background:radial-gradient(ellipse,rgba(255,255,255,0.05),transparent 70%);pointer-events:none}
        .contact-hero__desc{font-size:1.25rem;color:var(--text-secondary);max-width:600px;margin:1rem auto 0}
        .contact-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:3rem;align-items:start}
        .contact-info h2{margin-bottom:0.75rem}
        .contact-info__desc{color:var(--text-secondary);margin-bottom:2rem}
        .contact-info__items{display:flex;flex-direction:column;gap:1rem;margin-bottom:2rem}
        .contact-info__item{display:flex;align-items:center;gap:1rem;padding:1.25rem}
        .contact-info__icon{width:50px;height:50px;display:flex;align-items:center;justify-content:center;background:white;border-radius:var(--radius-lg);color:black;flex-shrink:0}
        .contact-info__label{display:block;font-size:0.75rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem}
        .contact-info__item a,.contact-info__item span:not(.contact-info__label){color:var(--text-primary);font-weight:500}
        .contact-info__item a:hover{color:var(--text-secondary)}
        .contact-socials{display:flex;flex-direction:column;gap:1rem}
        .contact-socials span{color:var(--text-tertiary);font-size:0.875rem}
        .contact-socials__links{display:flex;gap:0.75rem}
        .contact-social-link{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:var(--radius-lg);color:var(--text-secondary);transition:all 0.2s ease}
        .contact-social-link:hover{background:white;border-color:white;color:black}
        .contact-form-wrap{padding:2rem}
        .contact-form__header{display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem}
        .contact-form__header svg{color:var(--text-secondary)}
        .contact-form{display:flex;flex-direction:column;gap:1.25rem}
        .contact-form__row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        .contact-form__submit{width:100%;margin-top:0.5rem}
        .textarea{min-height:150px;resize:vertical}
        .input-group{display:flex;flex-direction:column}
        .contact-success{text-align:center;padding:2rem}
        .contact-success svg{color:#22c55e;margin-bottom:1rem}
        .contact-success h3{margin-bottom:0.5rem}
        .contact-success p{color:var(--text-secondary);margin-bottom:1.5rem}
        @media(max-width:1024px){.contact-grid{grid-template-columns:1fr}}
        @media(max-width:768px){.contact-form__row{grid-template-columns:1fr}}
      `}</style>
        </div>
    );
}
