import { useRouter } from "next/router"

export default function JenkinsServerPage() {
  console.log(useRouter)
  return (
    <div>Server ID: [id]</div>
  )
}
