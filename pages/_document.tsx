import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
return (
    <Html>
    <Head>
        <link
            href="https://cdn.sell.app/embed/style.css"
            rel="stylesheet"
        />
    </Head>
    <body>
        <Main />
        <NextScript />
    </body>
    </Html>
)
}
