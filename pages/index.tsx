import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

import Layout from '../components/Layout'

const IndexPage = () => {
  const { user, isLoading } = useUser()

  return (
    <Layout title="Home | Serverless Next.js + Auth0 Demo App">
      <h1>Serverless Next.js + Auth0 Demo App</h1>
      <p>This is a demo project for reproducing auth endpoints failure when using <code>serverless-next.js</code> and <code>@auth0/nextjs-auth0</code></p>
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
