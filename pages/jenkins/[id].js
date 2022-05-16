import { useRouter } from "next/router"
import Layout from '../../components/Layout'

export default function JenkinsServerPage() {
  const router = useRouter()

  return (
    <Layout title='Server Details'>
      <h1>Server ID: {router.query.id}</h1>
      <p>Jenkins:</p>
      <button onClick={() => router.push('/jenkins')}>Back to Home</button>
    </Layout>

  )
}
