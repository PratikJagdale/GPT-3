import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Snipperator" key="title"/>
        <meta property="og:description" content="Code Snippet Generator!" key="description"/>
        <meta
          property="og:image"
          content="https://earth.hoyd.net/wp-content/uploads/2022/08/hoyd_an_old_computer_powered_on_in_a_dark_green_room_with_wires_d1750f4b-749d-4adb-93fb-ce28b0664422.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
