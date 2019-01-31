import React, { Fragment } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const counterPage = ({ count, incrementCount, decrementCount }) => (
  <Fragment>
    <Head>
      <title>Counter - Nextjs Boilerplate</title>
    </Head>
    <div>
      <button onClick={incrementCount}>increment</button>
      {count}
      <button onClick={decrementCount}>decrement</button>
    </div>
    <style jsx>
      {`
        div {
          text-align: center;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10rem;
        }
        div button {
          font-size: 2rem;
          margin: 2rem;
          border-radius: 8px;
        }
      `}
    </style>
  </Fragment>
)

counterPage.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired
}

export default counterPage
