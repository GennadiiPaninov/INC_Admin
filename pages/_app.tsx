import type { AppProps } from "next/app";

import '@/styles/index.scss'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
