import '../styles/globals.css'
import '../styles/animation.css'
import { AnimateSharedLayout } from "framer-motion";
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1280) setFlag(true);
  }, []);

  return <AnimateSharedLayout exitBeforeEnter>
    {
      flag ?
        <div>Mobile view is not available yet!</div> :
        <div style={{ minWidth: '1280px' }}><Component {...pageProps} /></div>
    }
  </AnimateSharedLayout>
}

export default MyApp
