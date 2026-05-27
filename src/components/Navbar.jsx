import styles from "./Navbar.module.css";
import { profile } from "../data/portfolio";
import { useState, useRef, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

import React from 'react'

export default function Navbar({theme, toggleTheme}) {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        {"<"}DevPortfolio {"/>"}
      </div>
      <div className={styles.links}>
        <a onClick={()=> scrollToSection("sobre-mi")}>Sobre mí</a>
        <a onClick={()=> scrollToSection("proyectos")}>Proyectos</a>
        <a onClick={()=> scrollToSection("stack")}>Stack</a>
        <a onClick={()=> scrollToSection("contacto")}>Contacto</a>
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
