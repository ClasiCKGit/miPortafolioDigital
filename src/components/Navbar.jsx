import styles from './Navbar.module.css'
import { profile } from '../data/portfolio'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Dev Portfolio</div>
      <div className={styles.links}>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#stack">Stack</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className={styles.status}>
        {profile.available && <span className={styles.dot} />}
        {profile.available ? 'Disponible' : 'No disponible'} — {profile.location}
      </div>
    </nav>
  )
}
