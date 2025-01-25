import styles from "./herosection.module.css";

export default function Herosection() {
  return (
    <div className={styles.heroSection} id="hero">
      <div className={styles.innerheroSection}>
        <div className={styles.introText}>Hi, I&apos;m</div>
        <div className={styles.nameText}>Mahmud.</div>
        <div className={styles.profText}>A passionate software developer.</div>
        <div className={`${styles.detailsText}`}>
        I&apos;m a passionate software developer with hands-on experience across full-stack technologies. 
        Eager to contribute my skills and dedication to a dynamic full-time software engineering role, 
        where I can drive innovation and create real-world impact.
        </div>
      </div>
    </div>
  );
}
