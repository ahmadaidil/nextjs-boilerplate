import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import favicons from '../config/favicon'
import { manifestPath, stylePath } from '../config/constant'

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="theme-color" content="#ffffff" />
          {favicons.map((favicon) => (
            <link
              {...favicon}
              key={favicon.href}
            />
          ))}
          <link rel="manifest" href={manifestPath} />
          <link rel="stylesheet" href={stylePath} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
