import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

import Layout from '../components/Layout'

const IndexPage = () => {
  const { user, isLoading } = useUser()

  return (
    <Layout title="Home | Next.js + Serverless Next.js + Auth0 Example">
      <h1>Hello Next.js 👋</h1>
      {isLoading && (
        <p>
          is loading user info
        </p>
      )}
      {!isLoading && !user && (
        <Link href="/api/auth/login">Login</Link>
      )}
      {!isLoading && user && (
        <>
          <p>
            name: {user.name}
          </p>
          <p>
            nickname: {user.nickname}
          </p>
          <p>
            email: {user.email}
          </p>
          <p>
            updated at: {new Date(user.updated_at).toISOString()}
          </p>
        </>
      )}
    </Layout>
  )
}

export default IndexPage
