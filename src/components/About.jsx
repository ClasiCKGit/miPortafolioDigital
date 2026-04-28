import styles from './About.module.css'
import { profile, stack } from '../data/portfolio'

export default function About() {
  return (
    <div id="stack" className={styles.grid}>
      <div className={styles.cell}>
        <p className={styles.label}>// sobre mí - ES</p>
        <p className={styles.bio}>{profile.bioEs}</p>
        <p className={styles.label}>// about me - En</p>
        <p className={styles.bio}>{profile.bioEn}</p>
      </div>
      <div className={styles.cell}>
        <p className={styles.label}>// stack</p>
        <ul className={styles.techList}>
          {stack.map((item) => (
            <li key={item.name} className={styles.techRow}>
              <span className={styles.techName}>{item.name}</span>
              <span className={styles.techCat}>{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
