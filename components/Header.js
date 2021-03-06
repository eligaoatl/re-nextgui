import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href='/jenkins'>
                            <a>Build</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/jenkins'>
                            <a>Deploy</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}