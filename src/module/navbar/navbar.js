import styles from './navbar.module.css'


export default function Navbar(){
    return (
        <div className={styles.navbar}>
        <div className={styles.logo}>
          R
        </div>
        <ul className={styles.navItems}>
          <li><a href='#'>01. About</a></li>
          <li><a href='#'>02. Experience</a></li>
          <li><a href='#'>03. Work</a></li>
          <li><a href='#'>04. Contact</a></li>
          <li><a href='#'>Resume</a></li>
        </ul>
      </div>
    )
}