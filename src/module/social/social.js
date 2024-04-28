"use client";
import React from "react";
import Image from "next/image";

import github from "../../../public/social/github.svg";
import linkedin from "../../../public/social/linkedin.svg";
import styles from "./social.module.css";

export default function Social() {
  const selectRoute = (selectedPath) => {
    window.open(selectedPath, "_blank");
  };
  return (
    <div className={styles.socialSection}>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <Image
            className={styles.icon}
            onClick={() =>
              selectRoute("https://www.linkedin.com/in/md-mahmudur-reza/")
            }
            src={linkedin}
            alt="linkedin"
          />
        </li>
        <li className={styles.socialItem}>
          <Image
            className={styles.icon}
            onClick={() => selectRoute("https://github.com/Md-Mahmudur-Reza")}
            src={github}
            alt="github"
          />
        </li>
      </ul>
    </div>
  );
}
