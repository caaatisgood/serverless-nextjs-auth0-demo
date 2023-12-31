import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link>
          {/* {" | "} */}
          {/* <Link href="/alt">Alt</Link> */}
        </nav>
      </header>
      {children}
      <hr />
      <footer>
        <a href="https://github.com/caaatisgood/serverless-nextjs-auth0-demo" target="_blank">
          Source
        </a>
      </footer>
    </div>
  )
}

export default Layout
