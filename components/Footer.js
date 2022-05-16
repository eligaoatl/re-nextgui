import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <p>Copyright: &copy; E Inc 2022</p>
            </div>
        </footer>
    )
}