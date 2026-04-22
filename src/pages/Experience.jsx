const EXPERIENCE = [
  {
    role: 'Research Intern — AI & Data Engineering',
    company: 'Navtech',
    period: '30 Jun 2025 – 2 Aug 2025',
    type: 'internship',
    points: [
      'Worked on AI research and data engineering pipelines.',
      'Gained hands-on experience with Apache Airflow DAGs for workflow orchestration.',
      'Worked with Apache Iceberg for schema evolution and large-scale data management.',
    ],
    tags: ['Apache Airflow', 'Apache Iceberg', 'Python', 'Data Engineering'],
  },
];

const COURSEWORK = [
  'Artificial Intelligence', 'Machine Learning', 'Natural Language Processing',
  'Computer Vision', 'Recommender Systems', 'Big Data Analytics',
  'Data Structures & Algorithms', 'Generative AI', 'Deep Neural Networks',
  'Design Analytics & Algorithm',
];

function Experience() {
  return (
    <div className="page exp-page">
      <div className="projects-header">
        <h1 className="projects-title">
          experience<span className="blink-cursor">_</span>
        </h1>
        <p className="projects-subtitle">where i've worked & what i've studied</p>
      </div>

      {/* ── WORK EXPERIENCE ── */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">01.</span> work experience
        </h2>

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-line" />
              <div className="timeline-node">
                <div className="tnode-dot" />
              </div>
              <div className="timeline-body">
                <div className="tl-header">
                  <div>
                    <h3 className="tl-role">{exp.role}</h3>
                    <p className="tl-company">{exp.company}</p>
                  </div>
                  <div className="tl-meta">
                    <span className="tl-period">{exp.period}</span>
                    <span className="tl-type">{exp.type}</span>
                  </div>
                </div>
                <ul className="tl-points">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="tl-point">
                      <span className="bullet">▸</span> {pt}
                    </li>
                  ))}
                </ul>
                <div className="tl-tags">
                  {exp.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "More coming soon" teaser */}
        <div className="coming-soon-card">
          <span className="cs-prompt">$ </span>
          <span className="cs-text">more experiences loading</span>
          <span className="blink-cursor">_</span>
        </div>
      </section>

      {/* ── RELEVANT COURSEWORK ── */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">02.</span> relevant coursework
        </h2>
        <div className="coursework-grid">
          {COURSEWORK.map((c, i) => (
            <div key={c} className="course-item">
              <span className="course-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="course-name">{c}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Experience;
