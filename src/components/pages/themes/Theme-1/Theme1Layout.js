/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import React, { useEffect } from 'react';
import Head from 'next/head';
import Aos from 'aos';
import Theme1Footer from './Theme1Footer';
import Theme1Navigation from './Theme1Navigation';

export default function Theme1Layout({ title, children }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Head>
        <title>{title} | Esto Triramdani Nurlustiawan</title>
        <link rel="stylesheet" href="/css/theme-1.css" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      {children}
      <Theme1Footer />
      <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="/js/theme-1.js"></script>
    </>
  );
}