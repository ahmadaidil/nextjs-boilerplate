import React, { Fragment } from 'react'
import Head from 'next/head'

export default class Homepage extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Nextjs Boilerplate</title>
        </Head>
        <div>
          #helloWorld
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
          `}
        </style>
      </Fragment>
    )
  }
}
