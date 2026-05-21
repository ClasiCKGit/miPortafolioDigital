import styles from "./Navbar.module.css";
import { profile } from "../data/portfolio";
import { useState, useRef, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        {"<"}DevPortfolio {"/>"}
      </div>
      <div className={styles.links}>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#stack">Stack</a>
        <a href="#contacto">Contacto</a>
      </div>
      <button className={styles.themeBtn} onClick={toggleTheme}>
        {theme === "dark" ? <BsFillMoonFill /> : <BsSunFill />}
      </button>
      <div className={styles.status}>
        {profile.available && <span className={styles.dot} />}
        {profile.available ? "Disponible" : "No disponible"}
        {profile.available ? <span className={styles.statusCity}> - {profile.location} </span> : ""}
      </div>
    </nav>
  );
}
