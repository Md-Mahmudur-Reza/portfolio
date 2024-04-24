import styles from "./page.module.css";
import Navbar from "../module/navbar/navbar";
import Herosection from "../module/herosection/herosection";
import AboutMe from "../module/aboutme/aboutMe";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Herosection />
      <AboutMe />

      <div className={styles.socialMedia}></div>
      <div className={styles.body}></div>
    </main>
  );
}
