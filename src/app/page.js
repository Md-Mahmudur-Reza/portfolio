import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../module/navbar/navbar'
import Header from '../module/header/header'
import AboutMe from '../module/aboutme/aboutMe'
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
