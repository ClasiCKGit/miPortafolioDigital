import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Reveal.module.css'

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const { ref, visible } = useScrollReveal()

  const dirClass = {
    up: styles.fromUp,
    left: styles.fromLeft,
    right: styles.fromRight,
    fade: styles.fade,
  }[direction] || styles.fromUp

  return (
    <div
      ref={ref}
      className={`${styles.base} ${dirClass} ${visible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
