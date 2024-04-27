import styles from "./herosection.module.css";

export default function Herosection() {
  return (
    <div className={styles.heroSection} id="hero">
      <div className={styles.innerheroSection}>
        <div className={styles.introText}>Hi, I&apos;m</div>
        <div className={styles.nameText}>Reza.</div>
        <div className={styles.profText}>I build things for the web.</div>
        <div className={`${styles.detailsText}`}>
          I’m a passionate software developer with hands-on experience across
          the fullstack technologies. Aspiring to contribute my skills and
          dedication to a dynamic CO-OP Internship opportunity, where innovation
          meets real-world impact.
        </div>
      </div>
    </div>
  );
}
