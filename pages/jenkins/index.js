import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'

export default function ListOfJenkinsPage() {
  return (
      <Layout>List of Jenkins Servers
        <Link href='/'>
            <h1 className={styles.card}>
                Back to home page
            </h1>
        </Link>
    </Layout>


  )
}
