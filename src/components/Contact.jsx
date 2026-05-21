import styles from './Contact.module.css'
import { profile } from '../data/portfolio'
import { SiGmail, SiGithub,SiWhatsapp } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {

  return (
    <footer id="contacto" className={styles.bar}>
      <div className={styles.text}>Let's talk</div>
      <div className={styles.links}>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Contacto%20Portfolio&body=Hola%20Ramiro`} target="_blank" className={styles.btn}>
          <span className={styles.mobileTextMail}><SiGmail/></span>
          <span className={styles.desktopTextMail}>{profile.email} →</span>
        </a>
        <a href="" className={styles.btn}>
          <span className={styles.mobileText}><SiWhatsapp/></span>
            <span className={styles.desktopText}>Whatsapp</span>
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            <span className={styles.mobileText}><BsLinkedin/></span>
            <span className={styles.desktopText}>Linkedin</span>
          </a>
        )}
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            <span className={styles.mobileText}><SiGithub/></span>
            <span className={styles.desktopText}>GitHub</span>
          </a>
        )}
      </div>
    </footer>
  )
}
