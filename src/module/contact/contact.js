"use client";
import React from "react";
import Image from "next/image";

import github from "../../../public/social/github.svg";
import linkedin from "../../../public/social/linkedin.svg";

import styles from "./contact.module.css";

export default function Contact() {
  const selectRoute = (selectedPath) => {
    window.open(selectedPath, "_blank");
  };
  return (
    <div className={styles.contactSection} id="contact">
      <h1 className={styles.title}>Get In Touch</h1>
      <div className={styles.contactText}>
        I am currently seeking a full-time software engineering role where I can leverage my skills and 
        contribute to impactful projects. If my experience aligns with your team&apos;s needs, feel free to reach 
        out—I&apos;m always open to new opportunities and collaborations.


      </div>

      <div className={styles.mail}>
        <a href="mailto:mahmudreza27@gmail.com">Say Hello</a>
      </div>
      <div className={styles.socialSection}>
        <div className={styles.socialItem}>
          <Image
            className={styles.icon}
            onClick={() =>
              selectRoute("https://www.linkedin.com/in/md-mahmudur-reza/")
            }
            src={linkedin}
            alt="linkedin"
          />
        </div>
        <div className={styles.socialItem}>
          <Image
            className={styles.icon}
            onClick={() => selectRoute("https://github.com/Md-Mahmudur-Reza")}
            src={github}
            alt="github"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyright}>
          © Md Mahmudur Reza. All Rights Reserved.
        </div>
        <div className={styles.developed}>Developed by Md Mahmudur Reza</div>
      </div>
    </div>
  );
}
