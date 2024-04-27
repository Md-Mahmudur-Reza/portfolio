import React from "react";
import Image from "next/image";

import github from "../../../public/social/github.svg";
import styles from "./social.module.css";

export default function Social() {
  return (
    <div className={styles.socialSection}>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <Image src={github} alt="github" />
        </li>
      </ul>
    </div>
  );
}
