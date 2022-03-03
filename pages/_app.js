import '../styles/globals.css'
import '../styles/animation.css'
import { AnimateSharedLayout } from "framer-motion";
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth < 1150) setFlag(true);
  }, []);

  return <AnimateSharedLayout exitBeforeEnter>
    {
      flag ? <div>Mobile view is not available yet!</div> : <Component {...pageProps} />
    }
  </AnimateSharedLayout>
}

export default MyApp
