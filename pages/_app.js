import '../styles/globals.css'
import '../styles/animation.css'
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return <AnimateSharedLayout exitBeforeEnter>
    <Component {...pageProps} />
  </AnimateSharedLayout>
}

export default MyApp
