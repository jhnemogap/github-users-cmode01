import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>github-users-cmode01</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
