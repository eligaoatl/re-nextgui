import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'

export default function ListOfJenkinsPage() {
  return (
      <Layout>List of Jenkins Servers
          <div>
              <Link href='jenkins/alp-rt' className={styles.code}>
                  alp-rt
              </Link>
          </div>
          <div>
              <Link href='/'>
                  <h3 className={styles.card}>
                      Back to home page
                  </h3>
              </Link>
          </div>
    </Layout>
  )
}
