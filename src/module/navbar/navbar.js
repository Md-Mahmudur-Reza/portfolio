"use client";

import React, { useState } from "react";
import Image from "next/image";

import logo from "../../../public/only_logo_transperant_border_bg.png";

import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeft}>
          <Image
            // onClick={goHome}
            className={styles.logo}
            src={logo}
            alt="logo"
          />
        </div>
        <div className={`${styles.navbarRight} `}>
          <button
            className={styles.navbarToggle}
            onClick={toggleNavbar}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="navbarLinks"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}
            id="navbarLinks"
          >
            <li>
              <a className={styles.navbarText}>About</a>
            </li>
            <li>
              <a className={styles.navbarText}>Experience</a>
            </li>
            <li>
              <a className={styles.navbarText}>Work</a>
            </li>
            <li>
              <a className={styles.navbarText}>Contact</a>
            </li>
            <li>
              <div className={styles.resumeButton}> Resume</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
