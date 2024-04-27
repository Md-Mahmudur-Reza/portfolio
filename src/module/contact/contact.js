import React from "react";

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactSection} id="contact">
      <h1 className={styles.title}>Get In Touch</h1>
      <div className={styles.contactText}>
        Currently I&apos;m looking for CO-OP Internship. So if you think that I
        have the power of Superman to lift up your team please let me know, my
        inbox is alway open.
      </div>

      <div className={styles.mail}>
        <a href="mailto:mahmudreza27@gmail.com">Say Hello</a>
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
