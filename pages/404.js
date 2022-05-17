import Link from 'next/link'
import Layout from '@/components/Layout'
import style from '@/styles/404.module.css'
import { FaExclamationCircle } from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <Layout>
            <div className={style.error}>
                <h1>
                    <FaExclamationCircle />404
                </h1>
                <h4>Resource is not found!</h4>
                <Link href='/'>Back to Home</Link>
            </div>
        </Layout>
    )
}