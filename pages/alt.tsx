import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

import Layout from '../components/Layout'

const IndexPage = () => {
  const { user, isLoading } = useUser()

  return (
    <Layout title="Alt | Serverless Next.js + Auth0 Demo App">
      <h1>Serverless Next.js + Auth0 Demo App</h1>
      <p>This is a page that uses explicitly defined auth endpoints</p>
      {isLoading && (
        <p>
          is loading user info
        </p>
      )}
      {!isLoading && !user && (
        <>
          <Link href="/api/auth/alt-login">Login</Link>{" "}
          (via <code>/api/auth/alt-login</code>)
        </>
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
      {!isLoading && user && (
        <>
          <Link href="/api/auth/alt-logout">Logout</Link>{" "}
          (via <code>/api/auth/alt-logout</code>)
        </>
      )}
    </Layout>
  )
}

export default IndexPage
