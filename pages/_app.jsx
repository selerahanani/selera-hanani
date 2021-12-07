import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import '../styles/app.scss';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [store, setStore] = useState();

  useEffect(() => {
    const x = localStorage.getItem('store');
    console.log('x', x);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} store={store} setStore={setStore} />
      </Layout>
    </>
  );
}

export default MyApp;
