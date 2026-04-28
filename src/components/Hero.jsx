import styles from './Hero.module.css'
import { profile, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="sobre-mi" className={styles.hero}>
      <div className={styles.left}>
        <p className={`${styles.eyebrow} ${styles.animIn}`} style={{ animationDelay: '0ms' }}>// desarrollador de software</p>
        <h1 className={`${styles.name} ${styles.animIn}`} style={{ animationDelay: '80ms' }}>
          {profile.name.split(' ')[0]}
          <span>{profile.name.split(' ').slice(1).join(' ') || 'Apellido'}</span>
        </h1>
        <div className={`${styles.roleBar} ${styles.animIn}`} style={{ animationDelay: '180ms' }}>
          {stats.map((s) => (
            <div key={s.label} className={styles.roleItem}>
              <strong>{s.value}</strong>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.photoCard} ${styles.animIn}`} style={{ animationDelay: '120ms' }}>
        <div className={styles.photoFrame}>
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className={styles.photo} />
          ) : (
            <div className={styles.photoPlaceholder}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f0ede6" strokeWidth="1">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>tu foto aquí</span>
            </div>
          )}
        </div>
        <div className={styles.photoMeta}>
          <div className={styles.photoName}>{profile.name}</div>
          <div className={styles.photoRole}>{profile.role}</div>
          <div className={styles.photoLoc}>
            <span className={styles.dotSmall} />
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  )
}
