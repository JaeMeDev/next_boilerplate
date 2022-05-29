import '../styles/globals.css';

import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import defaultNextSeoConfig from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultNextSeoConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
