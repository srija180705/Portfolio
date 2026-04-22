import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import photo from '../photo.jpeg';

const DATA = {
  name: 'Srija Polisetty',
  tagline: 'AI & Data Engineering Enthusiast | ML, NLP & Full-Stack Developer',
  about:
    "Hi! I'm an AI student who enjoys building things that actually work. From predicting when machines might fail to working on multilingual language models, I like turning data into something useful (and sometimes impressive \uD83E\uDD29). When I'm not coding, I'm probably learning something new or debugging something I broke earlier.",
  researchInterests: [
    'Machine Learning & Predictive Modeling',
    'Natural Language Processing (NLP)',
    'Data Engineering & Big Data (Airflow, Spark, Iceberg)',
    'Deep Learning & Neural Networks',
  ],
  stats: [
    { label: 'CGPA',       value: '8.53' },
    { label: 'Projects',   value: '2+' },
  ],
  skills: {
    'Languages':       ['Python', 'Java', 'C', 'SQL'],
    'Web':             ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    'Data & ML':       ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'],
    'Big Data':        ['Apache Airflow', 'Apache Iceberg', 'Spark', 'Hadoop'],
    'Tools':           ['Docker', 'Git', 'GitHub', 'MongoDB', 'MySQL', 'VS Code'],
  },
  education: [
    {
      school: 'Mahindra Ecole Centrale, Hyderabad',
      degree: 'B.Tech in Artificial Intelligence',
      year: '2023 – Present',
      score: 'CGPA: 8.53 / 10',
    },
    {
      school: 'Fiitjee Junior College, Hyderabad',
      degree: 'Intermediate (MPC)',
      year: '2021 – 2023',
      score: '89.8%',
    },
    {
      school: 'Meridian School, Hyderabad (CBSE)',
      degree: 'Class X',
      year: '2020 – 2021',
      score: '90%',
    },
  ],
  awards: [
    'Rs. 1,00,000 annual merit-based scholarship for consistent academic excellence',
    'IBM Data Science Professional Certificate (Coursera)',
  ],
  phone: '+91 6305865472',
  personalEmail: 'polisetty.srija123@gmail.com',
  collegeEmail: 'srija.polisetty@mechyd.ac.in',
  linkedin: 'https://linkedin.com/in/srija-polisetty',
};

// Typing animation hook
function useTyping(text, speed = 45) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
}

function Home() {
  const typedTagline = useTyping(DATA.tagline, 30);

  return (
    <div className="page home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-label">{'<hello world />'}</p>
          <h1 className="hero-name">
            {DATA.name}<span className="blink-cursor">_</span>
          </h1>
          <p className="hero-tagline">
            {typedTagline}<span className="type-cursor">|</span>
          </p>
          <div className="hero-cta-row">
            <Link to="/projects"    className="btn-primary">see my work →</Link>
            <Link to="/experience"  className="btn-ghost">experience ↗</Link>
          </div>
        </div>

        <div className="hero-avatar">
          <img src={photo} alt="Srija Polisetty" className="avatar-photo" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        {DATA.stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section className="section">
        <h2 className="section-title"><span className="section-num">01.</span> about me</h2>
        <p className="section-body">{DATA.about}</p>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section">
        <h2 className="section-title"><span className="section-num">02.</span> research interests</h2>
        <ul className="interest-list">
          {DATA.researchInterests.map((item) => (
            <li key={item} className="interest-item">
              <span className="bullet">▸</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── SKILLS ── */}
      <section className="section">
        <h2 className="section-title"><span className="section-num">03.</span> skills</h2>
        <div className="skills-section">
          {Object.entries(DATA.skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <span className="skill-cat-label">{category}</span>
              <div className="skills-grid">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="section">
        <h2 className="section-title"><span className="section-num">04.</span> education</h2>
        <div className="edu-list">
          {DATA.education.map((e, i) => (
            <div key={i} className="edu-item">
              <div className="edu-dot" />
              <div className="edu-body">
                <div className="edu-top-row">
                  <span className="edu-school">{e.school}</span>
                  <span className="edu-year">{e.year}</span>
                </div>
                <div className="edu-bottom-row">
                  <span className="edu-degree">{e.degree}</span>
                  <span className="edu-score">{e.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="section">
        <h2 className="section-title"><span className="section-num">05.</span> awards & certs</h2>
        <ul className="interest-list">
          {DATA.awards.map((a) => (
            <li key={a} className="interest-item">
              <span className="bullet">★</span> {a}
            </li>
          ))}
        </ul>
      </section>

{/* ── FOOTER ── */}
      <div className="page-footer">

        <div className="footer-contacts">
          <span className="footer-prompt">$ reach me at</span>
          <div className="footer-links">
            <a href="mailto:polisetty.srija123@gmail.com" className="footer-link">
              <span className="footer-link-icon">✉</span> polisetty.srija123@gmail.com
            </a>
            <a href="mailto:se23uari094@mahindrauniversity.edu.in" className="footer-link">
              <span className="footer-link-icon">✉</span> se23uari094@mahindrauniversity.edu.in
            </a>
            <a href="tel:+916305865472" className="footer-link">
              <span className="footer-link-icon">☏</span> +91 6305865472
            </a>
            <a href="https://linkedin.com/in/srija-polisetty" target="_blank" rel="noreferrer" className="footer-link">
              <span className="footer-link-icon">in</span> srija-polisetty
            </a>
            <a href="https://github.com/srija180705" target="_blank" rel="noreferrer" className="footer-link">
              <span className="footer-link-icon">Git</span> srija180705
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-fun-row">
          <span className="footer-fun-label">$ currently_into</span>
          <div className="footer-fun-items">
            <span className="fun-pill">🎬 editing reels no one asked for</span>
            <span className="fun-pill">🇫🇷 bonjour-ing in French</span>
            <span className="fun-pill">🇩🇪 guten tag-ing in German</span>
            <span className="fun-pill">🔥 365+ day Duolingo streak</span>
            <span className="fun-pill">🐛 debugging at 2am (again)</span>
            <span className="fun-pill">☕ fuelled by coffee + curiosity</span>
          </div>
        </div>

        <p className="footer-sign">
          built with React · deployed on GitHub Pages · designed by me
        </p>

      </div>

    </div>
  );
}

export default Home;
