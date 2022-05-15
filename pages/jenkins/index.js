import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function ListOfJenkinsPage() {
  return (
    <div>List of Jenkins Servers
    <Link href='/'>
        <h1 className={styles.card}>
            Back to home page
        </h1>
    </Link>
    </div>


  )
}
