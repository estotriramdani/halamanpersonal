import '../styles/globals.scss';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'react-trix/dist/react-trix';
import '../styles/utils/trix.css';
import '../styles/theme/theme-1.css';
import Head from 'next/head';
import { metaDescription, metaKeyword } from '../src/data/staticDataString';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeyword} />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
