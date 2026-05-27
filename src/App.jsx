import styles from './App.module.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Reveal from './components/Reveal'
import { useTheme } from './hooks/useTheme'

export default function App() {
  
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Reveal direction="up" delay={150}>
          <section className={styles.section}>
            <Hero />
          </section>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <section className={styles.section}>
            <About />
          </section>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <section className={styles.section}>
            <Projects theme={theme} />
          </section>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <section className={styles.section}>
            <Contact />
          </section>
        </Reveal>
      </div>
    </div>
  )
}
