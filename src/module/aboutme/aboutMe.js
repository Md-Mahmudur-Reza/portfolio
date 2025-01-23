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
            Hello! My name is Md Mahmudur Reza and I enjoy bringing ideas to
            life through the realm of technology. My journey into the world of
            computer began in 2008, when I encountered my first computer and I
            immersed myself in into the fascinating intricacies of the internet.
            It was then that I became captivated by the inner workings of the
            web and embarked on creating my own websites, sparking my initial
            interest in HTML and CSS.
          </div>
          <div className={styles.section}>
            Driven by this curiosity, I pursued a Bachelor&apos;s degree in
            Computer Science and Engineering, honing my skills and knowledge in
            the field. Upon graduation, I transitioned into the professional
            sphere, joining a tech company where I immersed myself in developing
            both frontend and backend solutions for diverse clientele.
          </div>
          <div className={styles.section}>
            I have successfully completed my Master&apos;s degree in Applied Computing (MAC) at the University of Windsor, 
            equipping me with advanced technical skills and a strong foundation in software development. 
            I am now eagerly seeking a full-time software engineering role that allows me to apply my expertise, 
            contribute to innovative projects, and continue exploring new horizons.
          </div>
          <div className={styles.section}>
            Here are a few technologies I&apos;ve been working with recently:
          </div>
          <ul className={styles.techlist}>
            <li className={styles.techitem}>Python</li>
            <li className={styles.techitem}>JavaScript</li>
            <li className={styles.techitem}>C</li>
            <li className={styles.techitem}>GraphQL</li>
            <li className={styles.techitem}>Bash Scripting</li>
            <li className={styles.techitem}>Django</li>
            <li className={styles.techitem}>NextJS</li>
            <li className={styles.techitem}>Git</li>
            <li className={styles.techitem}>MySQL</li>
            <li className={styles.techitem}>Machine Learning</li>
          </ul>
        </div>
        <div className={styles.imagesection}>
          <Image className={styles.image} src={pic} alt="profile pic" />
        </div>
      </div>
    </div>
  );
}
