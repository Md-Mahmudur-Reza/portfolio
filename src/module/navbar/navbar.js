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

  const scrollToHero = () => {
    const otherSection = document.getElementById("hero");
    otherSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAboutMe = () => {
    const otherSection = document.getElementById("aboutme");
    otherSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const otherSection = document.getElementById("experience");
    otherSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    const otherSection = document.getElementById("work");
    otherSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const otherSection = document.getElementById("contact");
    otherSection.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    const pdfPath = "/Resume.pdf";
    window.open(pdfPath, "_blank");
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeft}>
          <Image
            onClick={scrollToHero}
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
              <a onClick={scrollToAboutMe} className={styles.navbarText}>
                About
              </a>
            </li>
            <li>
              <a onClick={scrollToExperience} className={styles.navbarText}>
                Experience
              </a>
            </li>
            <li>
              <a onClick={scrollToWork} className={styles.navbarText}>
                Work
              </a>
            </li>
            <li>
              <a onClick={scrollToContact} className={styles.navbarText}>
                Contact
              </a>
            </li>
            <li>
              <div className={styles.resumeButton} onClick={openResume}>
                Resume
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
