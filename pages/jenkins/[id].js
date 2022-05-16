import { useRouter } from "next/router"

export default function JenkinsServerPage() {
  const router = useRouter()

  return (
    <div>
      <h1>Server ID: {router.query.id}</h1>
      <p>Jenkins:</p>
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>

  )
}
