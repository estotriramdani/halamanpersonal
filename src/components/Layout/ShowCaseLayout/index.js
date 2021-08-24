import Head from 'next/head';
import React from 'react';
import Gap from '../../atoms/Gap';
import Navbar from '../../moleculs/Navbar';

function ShowCaseLayout({ title, metaDescription = 'meta', children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>
      <Navbar />
      <div className="container">{children}</div>
      <Gap height={70} />
    </div>
  );
}

export default ShowCaseLayout;
