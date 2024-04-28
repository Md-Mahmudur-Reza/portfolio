import styles from "./page.module.css";
import Navbar from "../module/navbar/navbar";
import Herosection from "../module/herosection/herosection";
import AboutMe from "../module/aboutme/aboutMe";
import Experience from "../module/experience/experience";
import Projects from "../module/projects/projects";
import Contact from "../module/contact/contact";
import Social from "../module/social/social";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Herosection />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Social />
    </main>
  );
}
