import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang={'en'}>
      <Head>
        <title>Next App</title>
        <link href={'https://rsms.me/inter/inter.css'} rel={'stylesheet'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
