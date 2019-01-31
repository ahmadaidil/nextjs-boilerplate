import React, { Fragment } from 'react'
import Head from 'next/head'

export default class index extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Nextjs Boilerplate</title>
        </Head>
        <div>
          <a href="/counter">Go to counter page</a>
        </div>
        <style jsx>
          {`
            div {
              text-align: center;
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 5rem;
            }
            a {
              text-decoration: none;
              color: #000;
            }
          `}
        </style>
      </Fragment>
    )
  }
}
