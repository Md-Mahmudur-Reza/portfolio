import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './navbar'
import Header from './header'
import AboutMe from './aboutMe'
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <AboutMe />

      <div className={styles.socialMedia}>

      </div>
      <div className={styles.body}>

      </div>
    </main>
  )
}
