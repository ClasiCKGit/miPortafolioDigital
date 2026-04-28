import styles from './Projects.module.css'
import { projects } from '../data/portfolio'
import Reveal from './Reveal'

function MonitorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f0ede6" strokeWidth="1" opacity="0.15">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>// proyectos destacados</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <Reveal key={project.id} direction="up" delay={i * 100}>
          <article className={styles.card}>
            <div className={styles.screenshot}>
              {project.screenshot ? (
                <img src={project.screenshot} alt={project.title} className={styles.screenshotImg} />
              ) : (
                <>
                  <MonitorIcon />
                  <span className={styles.screenshotHint}>screenshot del proyecto</span>
                </>
              )}
            </div>
            <div className={styles.body}>
              <p className={styles.num}>// {project.id}</p>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={styles.footer}>
              <a href={project.url} className={styles.link} target="_blank" rel="noopener noreferrer">
                Ver proyecto →
              </a>
              <a href={project.github} className={styles.linkDim} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
