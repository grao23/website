"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const experience = [
  {
    company: "84.51°",
    role: "Data Science Intern",
    period: "May 2026 — Aug 2026",
    image: "/images/84.51_logo.png",
    bullets: [
      "Built a reusable Optuna-based hyperparameter optimization framework for Kroger search-ranking models.",
      "Improved ranking quality by 1% and conversion by 0.5%, corresponding to an estimated $60M in incremental annual revenue.",
      "Executed 100 trials per experiment and reduced tuning time by 88%.",
      "Evaluated sampling strategies, feature weighting, and model configurations in Databricks and Azure.",
    ],
    tags: ["Python", "Optuna", "XGBoost", "Databricks", "Azure"],
  },
  {
    company: "Collins Aerospace",
    role: "Data Science Analyst",
    period: "Jan 2024 — Aug 2025",
    image: "/images/collins_aerospace.png",
    bullets: [
      "Developed predictive-maintenance and anomaly-detection models using aerospace operational and equipment data.",
      "Reduced troubleshooting time by 35% and supported approximately $750K in annual savings.",
      "Built SQL and ETL workflows across Snowflake, SQL Server, SAP, and Alteryx.",
      "Developed Spark + PyTorch/PyTorch Lightning image-classification workflows that reduced quality-control review time by 40%.",
    ],
    tags: ["PyTorch", "Spark", "SQL", "Snowflake", "Predictive Modeling"],
  },
];

const projects = [
  {
    title: "Amazon Recommendation System",
    subtitle: "Collaborative filtering + matrix factorization",
    description:
      "Built a product recommendation system using SVD-based collaborative filtering to model user-product preferences from explicit ratings. Achieved F1 0.852, precision 0.837, and recall 0.868.",
    tags: ["Python", "SVD", "Scikit-learn", "TensorFlow", "PyTorch"],
    href: "/projects/amazon-recommendation-system.html",
  },
  {
    title: "ExtraaLearn Lead Conversion",
    subtitle: "Classification + model selection",
    description:
      "Analyzed conversion behavior and built classification models to identify higher-propensity leads, comparing logistic regression, decision trees, random forests, and tuned model variants.",
    tags: ["Classification", "Random Forest", "GridSearchCV", "EDA"],
    href: "https://github.com/grao23/ExtraaLearn",
  },
  {
    title: "ISS Tracker",
    subtitle: "API + data engineering project",
    description:
      "Built a software project around ISS data retrieval and tracking, emphasizing API integration and programmatic data workflows.",
    tags: ["Python", "APIs", "Data Engineering"],
    href: "https://github.com/grao23/ISS-Tracker",
  },
  {
    title: "Housing Prediction",
    subtitle: "Regression modeling",
    description:
      "Built and evaluated a regression workflow for predicting housing prices from structured features and visualized fitted relationships.",
    tags: ["Regression", "Python", "Model Evaluation"],
    href: "https://github.com/grao23/Housing_Prediction",
  },
  {
    title: "NFL Prospect Production Scores",
    subtitle: "Sports analytics",
    description:
      "Created a quantitative workflow for evaluating and ranking NFL prospects from production-oriented performance data.",
    tags: ["Analytics", "Ranking", "Python"],
    href: "https://github.com/grao23/NFL_prospects_production_scores",
  },
];

const skills = [
  ["Languages", "Python, SQL, C++, R, Rust, MATLAB"],
  ["Machine Learning", "PyTorch, TensorFlow, Scikit-learn, XGBoost, Optuna, ranking, recommendation systems"],
  ["Data Systems", "Spark, Snowflake, SQL Server, Databricks, ETL, large-scale analytics"],
  ["Cloud & Dev", "Azure, Docker, Kubernetes, Git, JupyterLab"],
  ["Modeling", "Predictive modeling, statistical modeling, optimization, feature engineering, mathematical modeling"],
  ["Visualization", "Tableau, Power BI, experimentation reporting"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <div className="nav-inner">
          <a href="#top" className="wordmark">GR<span>.</span></a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">Who I am</a>
          </div>
          <a className="resume-pill" href="/gautam_rao_real_resume_.pdf" target="_blank" rel="noreferrer" aria-label="Download resume">
            <Download size={15} /> <span>Resume</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
            >
              Hi, I’m <span>Gautam Rao.</span>
            </motion.h1>

            <motion.p
              className="hero-copy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              I’m focused on Data Science and Machine Learning Modeling, optimization, and translating complex data into measurable business impact.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a className="primary-btn" href="#experience">Explore my work <ArrowUpRight size={17} /></a>
              <a className="secondary-btn" href="/gautam_rao_real_resume_.pdf" target="_blank" rel="noreferrer">Download resume <Download size={16} /></a>
              <a className="icon-btn" href="https://github.com/grao23" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a className="icon-btn" href="https://www.linkedin.com/in/gautamrao25/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a className="icon-btn" href="mailto:gautam.r.rao@gmail.com" aria-label="Email"><Mail size={19} /></a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="portrait-frame">
              <img src="/images/profile_headshot.jpeg" alt="Gautam Rao" />
              <div className="portrait-overlay">
                <div><MapPin size={14} /> Austin, TX</div>
                <strong>UT Austin</strong>
                <span>Scientific Machine Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="section-wrap">
        <SectionTitle
          index="01"
          title="Experience"
          description="Data Science and Machine Learning Modeling, optimization, and translating complex data into measurable business impact."
        />
        <div className="experience-stack">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.08}>
              <article className="experience-card">
                <div className={`experience-media ${item.company === "Collins Aerospace" || item.company === "84.51°" ? "contain-logo" : ""} ${item.company === "84.51°" ? "purple-logo" : ""}`}>
                  <img src={item.image} alt={item.company} />
                </div>
                <div className="experience-content">
                  <div className="experience-topline">
                    <div>
                      <div className="company">{item.company}</div>
                      <h3>{item.role}</h3>
                    </div>
                    <div className="period">{item.period}</div>
                  </div>
                  <ul>
                    {item.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <div className="tag-row">{item.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="education" className="section-wrap alt-bg">
        <SectionTitle index="02" title="Education" />
        <div className="education-grid">
          <Reveal>
            <div className="education-card featured">
              <div className="degree-year">Expected 2027</div>
              <h3>M.S. Scientific Machine Learning</h3>
              <p>The University of Texas at Austin</p>
              <p className="muted">Scientific Machine Learning · Modeling · Optimization · Numerical Methods</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="education-card">
              <div className="degree-year">2026</div>
              <h3>B.S. Computational Engineering</h3>
              <p>The University of Texas at Austin</p>
              <p className="muted">Data Science · Computer Science · Engineering Computation</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="section-wrap">
        <SectionTitle
          index="03"
          title="Projects"
          description="A selection of machine learning, analytics, and computational engineering work."
        />
        <div className="project-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.05}>
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer">
                <div className="project-index">0{i + 1}</div>
                <div>
                  <div className="project-subtitle">{project.subtitle}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="tag-row">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="project-link">View project <ArrowUpRight size={16} /></div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-wrap alt-bg" id="skills">
        <SectionTitle index="04" title="Skills" />
        <div className="skills-grid">
          {skills.map(([name, detail], i) => (
            <Reveal key={name} delay={(i % 3) * 0.04}>
              <div className="skill-card">
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section-wrap about-section">
        <div className="about-grid">
          <Reveal>
            <div className="about-photo">
              <img src="/images/who_i_am.jpg" alt="Gautam Rao" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <SectionTitle index="05" title="Who I am" />
              <div className="about-copy">
                <p>I am a prospective Data Scientist and Machine Learning Engineer focused on Big Data handling, Modeling, Optimization, and translating complex data into measurable business impact. I developed these skills through coursework in Predictive Machine Learning, Mathematics in Deep Learning, and Statistical Methods, which strengthened my foundation in data-driven decision-making and modern ML techniques.</p>
                <p>Outside of school and work, I enjoy staying active through sports, especially cricket, and I love spending time with my friends. I also spend a lot of time watching movies and TV shows, and I’m a big fan of  Game of Thrones, Attack on Titan, The Bear, and Jujutsu Kaisen.</p>
                <p>I also run a TikTok channel called WicketTalk, where I talk about cricket and everything around the sport. It’s a fun way for me to combine my interests with my love for the game.</p>
              </div>
              <div className="hero-actions about-actions">
                <a className="primary-btn" href="mailto:gautam.r.rao@gmail.com">Get in touch <Mail size={17} /></a>
                <a className="secondary-btn" href="/gautam_rao_real_resume_.pdf" target="_blank" rel="noreferrer">Download resume <Download size={16} /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div>© 2026 Gautam Rao</div>
          <div className="footer-links">
            <a href="https://github.com/grao23" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/gautamrao25/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:gautam.r.rao@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
