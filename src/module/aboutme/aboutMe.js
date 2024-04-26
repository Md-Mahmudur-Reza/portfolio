import Image from "next/image";

import styles from "./aboutMe.module.css";
import pic from "../../../public/Picture/Image.jpeg";

export default function AboutMe() {
  return (
    <div className={` ${styles.aboutmeSection}`} id="aboutme">
      <div className={styles.title}>About Me</div>
      <div className={styles.detail}>
        <div className={styles.detailsection}>
          <div className={styles.section}>
            Hello! My name is Md Mahmudur Reza and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </div>
          <div className={styles.section}>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </div>
          <div className={styles.section}>
            Here are a few technologies I’ve been working with recently:
          </div>
          <ul className={styles.techlist}>
            <li className={styles.techitem}>Python</li>
            <li className={styles.techitem}>JavaScript</li>
            <li className={styles.techitem}>Django</li>
            <li className={styles.techitem}>NextJS</li>
          </ul>
        </div>
        <div className={styles.imagesection}>
          <Image className={styles.image} src={pic} alt="profile pic" />
        </div>
      </div>
    </div>
  );
}
