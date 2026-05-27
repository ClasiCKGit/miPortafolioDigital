import styles from './About.module.css'
import { profile, stack } from '../data/portfolio'
import { FaReact } from "react-icons/fa";
import { DiNodejsSmall, DiGit } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { IoLogoDocker } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

const icons = {
  React: <FaReact />,
  TypeScript: <BsTypescript />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <DiNodejsSmall />,
  MySQL: <GrMysql />,
  Docker: <IoLogoDocker />,
  Git: <DiGit />,
}

export default function About() {
  return (
    <div className={styles.grid}>
      <div id="sobre-mi" className={styles.cell}>
        <p className={styles.label}>// sobre mí - ES</p>
        <p className={styles.bio}>{profile.bioEs}</p>
        <p className={styles.label}>// about me - En</p>
        <p className={styles.bio}>{profile.bioEn}</p>
      </div>
      <div className={styles.cell}>
        <p className={styles.label}>// stack</p>
        <ul id="stack" className={styles.techList}>
          {stack.map((item) => (
            <li key={item.name} className={styles.techRow}>
              <div className={styles.techName}><div className={styles.icon}>{icons[item.name]}</div>{item.name}</div>
              <span className={styles.techCat}>{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
