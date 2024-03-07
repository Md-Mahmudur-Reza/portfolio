import styles from './header.module.css'


export default function Header(){
    return (
        <div className={styles.wholeText}>
        <div className={styles.introText}>
            Hi, my name is
        </div>
        <div className={styles.nameText}>
            Md Mahmudur Reza.
        </div>
        <div className={styles.profText}>
            I am a build things that runs in browser.
        </div>
        <div className={styles.detailsText}>
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </div>
            </div>
    )
}