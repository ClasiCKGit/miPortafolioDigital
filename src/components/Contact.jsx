import styles from './Contact.module.css'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <footer id="contacto" className={styles.bar}>
      <div className={styles.text}>Let's talk</div>
      <div className={styles.links}>
        <a href={`mailto:${profile.email}`} className={styles.btnPrimary}>
          {profile.email} →
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            LinkedIn
          </a>
        )}
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            GitHub
          </a>
        )}
      </div>
    </footer>
  )
}
