const PROJECTS = [
  {
    id: 1,
    title: 'Hybrid Predictive Maintenance',
    subtitle: 'Enhanced CMAPSS NASA Dataset',
    description:
      'Built a hybrid ML pipeline to predict Remaining Useful Life (RUL) of aircraft engines. Applied weighted K-Means clustering for degradation stage detection and trained classification (Random Forest, XGBoost) + regression models hitting up to 95% accuracy.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'K-Means', 'Pandas', 'NumPy'],
    github: 'https://github.com/srija-polisetty/predictive-maintenance',
    period: 'Jan 2025 – May 2025',
    highlight: '95% accuracy',
  },
  {
    id: 2,
    title: 'Unified Multilingual NLP Model',
    subtitle: 'Indian Languages — 22 langs',
    description:
      'Developed a unified model for transliteration (22 languages), normalization (12 langs), and punctuation restoration (23 langs). Fine-tuned Gemma-3-1B-PT with multi-task instruction learning; benchmarked vs Sarvam using BLEU, CER, WER, and ChrF++.',
    tech: ['PyTorch', 'Gemma-3', 'Gemini API', 'HuggingFace', 'Python', 'NLP'],
    github: 'https://github.com/srija-polisetty/multilingual-nlp',
    period: 'Aug 2025 – Dec 2025',
    highlight: '22 languages',
  },
];

function Projects() {
  return (
    <div className="page projects-page">
      <div className="projects-header">
        <h1 className="projects-title">
          my projects<span className="blink-cursor">_</span>
        </h1>
        <p className="projects-subtitle">
          things i've built — click GitHub to explore the code
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-top">
              <span className="card-num">0{project.id}</span>
              <div className="card-badges">
                <span className="highlight-badge">{project.highlight}</span>
                <a href={project.github} target="_blank" rel="noreferrer" className="card-icon-link">
                  ⌥ GitHub
                </a>
              </div>
            </div>

            <div className="card-header">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-subtitle">{project.subtitle}</p>
            </div>

            <p className="card-desc">{project.description}</p>

            <div className="card-footer">
              <div className="card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <span className="card-period">{project.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
