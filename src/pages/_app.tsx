import { GlobalMainLayout } from "layouts/index";

import type { AppProps } from "next/app";

import "styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalMainLayout>
      <Component {...pageProps} />
    </GlobalMainLayout>
  );
}

export default MyApp;
