"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "MediSense AI",
    type: "FLAGSHIP / HEALTHCARE ML PLATFORM",
    description: "A deployed healthcare platform combining four disease-screening models with an LLM assistant and operational alerts.",
    result: "4 deployed ML/DL models",
    stack: "TensorFlow · FastAPI · React · Groq LLaMA · Twilio",
    details: "End-to-end preprocessing, feature engineering, evaluation, model serving, multilingual chat, voice input, WhatsApp alerts, and analytics.",
  },
  {
    number: "02",
    title: "Bharatiya Kanoon AI",
    type: "LLM / MULTILINGUAL LEGAL RAG",
    description: "Grounded tenant-rights answers across English, Hindi, and Marwari-Rajasthani legal queries.",
    result: "3 language interfaces",
    stack: "Embeddings · Vector search · FastAPI · React",
    details: "Document chunking, semantic retrieval, and a FastAPI backend designed to keep responses grounded in source acts.",
  },
  {
    number: "03",
    title: "Driver Safety System",
    type: "RESEARCH / COMPUTER VISION",
    description: "A real-time vision pipeline for fatigue, unsafe behavior, and driver authentication from live video.",
    result: "Live video inference",
    stack: "OpenCV · MediaPipe · Face recognition",
    details: "Research methodology and evaluation approach developed alongside the fatigue and access-control pipeline.",
  },
];

const systemNodes = [
  ["DATA", "Pandas · NumPy · SQL", "Structure the raw signal"],
  ["MODEL", "TensorFlow · Scikit-learn", "Train, test, and interrogate"],
  ["API", "FastAPI · REST", "Make inference usable"],
  ["APPLICATION", "React · LLaMA · Twilio", "Put intelligence in context"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(1);
  const active = systemNodes[activeNode];

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top"><span className="brand-mark">KR</span><span>KARAN / AI·ML</span></a>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          {[["About", "#about"], ["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <a className="nav-resume" href="/resume.pdf">Resume <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR AI/ML OPPORTUNITIES <span className="mono">/ 2026</span></p>
          <h1>I build AI systems<br /><em>that hold up.</em></h1>
          <p className="hero-lede">Karan Singh Rathore is an AI/ML engineer focused on applied machine learning, computer vision, and LLM applications that move from model training to usable software.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">See selected work <ArrowUpRight size={16} /></a><a className="button button-ghost" href="/resume.pdf">View resume <ArrowUpRight size={16} /></a></div>
          <div className="hero-links"><a href="https://github.com/karan-xsingh" target="_blank"><Github size={15} /> GitHub</a><a href="https://linkedin.com/in/karan-singh-rathore" target="_blank"><Linkedin size={15} /> LinkedIn</a><a href="mailto:ksinghrathore28@gmail.com"><Mail size={15} /> Email</a></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><div className="portrait-placeholder"><img src="/profile.jpg" alt="Karan Singh Rathore" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span>KR</span><small>ADD PHOTO / PROFILE.JPG</small></div><div className="portrait-caption"><span>DEHRADUN, INDIA</span><span>30° 19′ N / 78° 02′ E</span></div></div>
          <div className="orbit-label label-top">AI / ML<br /><strong>ENGINEERING</strong></div><div className="orbit-label label-bottom">BUILD → EVALUATE → DEPLOY</div>
        </div>
      </section>

      <section className="proof shell"><div className="proof-intro"><span className="section-index">00 / SIGNAL</span><p>Evidence over adjectives.<br />A practical systems mindset.</p></div><div className="proof-stat"><strong>04</strong><span>ML/DL models<br />deployed in MediSense</span></div><div className="proof-stat"><strong>03</strong><span>Languages in a<br />legal RAG system</span></div><div className="proof-stat"><strong>01</strong><span>Machine learning<br />internship at FlyRank</span></div></section>

      <section className="section shell" id="about"><div className="section-heading"><div><span className="section-index">01 / POSITION</span><h2>From model<br /><em>to product.</em></h2></div><p className="section-note">I am a third-year B.Tech CSE (AI/ML) student at DBS Global University. My work sits where model behavior, backend systems, and real user workflows meet.</p></div><div className="about-grid"><div className="about-statement">The interesting part is never only the model.<span>It is the chain around it:</span></div><div className="system-wrap"><div className="system-line" />{systemNodes.map((node, i) => <button key={node[0]} className={activeNode === i ? "system-node active" : "system-node"} onMouseEnter={() => setActiveNode(i)} onFocus={() => setActiveNode(i)}><span className="node-number">0{i + 1}</span><strong>{node[0]}</strong><small>{node[1]}</small></button>)}<div className="system-detail"><span className="mono">FOCUS / {active[0]}</span><strong>{active[2]}</strong><span>{active[1]}</span></div></div></div></section>

      <section className="section work-section shell" id="work"><div className="section-heading"><div><span className="section-index">02 / SELECTED WORK</span><h2>Built for the<br /><em>real world.</em></h2></div><p className="section-note">Three projects that show the range: production-minded ML, grounded retrieval, and real-time computer vision.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div><div className="project-content"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-detail"><span className="project-result">{project.result}</span><p>{project.details}</p><span className="stack">{project.stack}</span></div></div></article>)}</div></section>

      <section className="experience-band" id="experience"><div className="shell experience-layout"><div><span className="section-index">03 / EXPERIENCE</span><h2>Learning in the<br /><em>feedback loop.</em></h2></div><div className="experience-entry"><div className="experience-meta"><span>JUL — SEP 2026</span><span>REMOTE</span></div><h3>Machine Learning Intern <span>@ FlyRank</span></h3><p>Worked across data wrangling, embeddings, clustering, intent and opportunity modeling, and insight-to-action workflows. Delivered the “Google Search Ranking & Discoverability” capstone, reviewed and accepted by the lead track mentor.</p><div className="tag-row"><span>NLP PIPELINES</span><span>MODEL EVALUATION</span><span>FEATURE ENGINEERING</span></div></div></div></section>

      <section className="section shell" id="skills"><div className="section-heading"><div><span className="section-index">04 / TOOLKIT</span><h2>Technical,<br /><em>not ornamental.</em></h2></div><p className="section-note">The tools I use to move from a question to a working, inspectable system.</p></div><div className="skills-grid">{[["01", "PROGRAMMING", "Python · SQL · Java"], ["02", "MACHINE LEARNING", "Scikit-learn · Classification · Regression · Clustering · Feature engineering"], ["03", "DEEP LEARNING + VISION", "TensorFlow · Keras · CNNs · OpenCV · MediaPipe"], ["04", "LLM + NLP", "RAG · Embeddings · Semantic search · Vector retrieval · LLaMA · Hugging Face"], ["05", "ML ENGINEERING", "FastAPI · REST APIs · Model serving · Git · GitHub"], ["06", "DATA", "NumPy · Pandas · MySQL"]].map(([number, title, tools]) => <div className="skill-item" key={title}><span>{number}</span><div><strong>{title}</strong><p>{tools}</p></div></div>)}</div></section>

      <section className="credentials shell"><div><span className="section-index">05 / CREDENTIALS</span><h2>Still learning.<br /><em>Already shipping.</em></h2></div><div className="credential-list"><div><span>EDUCATION</span><strong>B.Tech, Computer Science (AI/ML)</strong><p>DBS Global University · 2024—2028</p></div><div><span>ACHIEVEMENT</span><strong>HackerRank 5-Star Python</strong><p>Software Engineer Intern Certification · Credential ID: 042C07A26D05</p></div><div><span>FOCUS NOW</span><strong>Applied AI systems</strong><p>Deepening model evaluation, deployment, and reliable LLM applications.</p></div></div></section>

      <footer className="footer shell" id="contact"><div><span className="section-index">06 / CONTACT</span><h2>Let&apos;s build something<br /><em>useful.</em></h2><p>For internships, collaborations, or thoughtful conversations about AI systems.</p></div><div className="footer-links"><a href="mailto:ksinghrathore28@gmail.com"><Mail size={16} /> ksinghrathore28@gmail.com</a><a href="https://github.com/karan-xsingh" target="_blank"><Github size={16} /> github.com/karan-xsingh</a><a href="https://linkedin.com/in/karan-singh-rathore" target="_blank"><Linkedin size={16} /> linkedin.com/in/karan-singh-rathore</a><a className="button button-primary" href="/resume.pdf">Download resume <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© 2026 KARAN SINGH RATHORE</span><span>BUILT WITH INTENT / AI·ML</span></div></footer>
    </main>
  );
}
