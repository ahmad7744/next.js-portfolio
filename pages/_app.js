import '../styles/globals.css';

// componentes 
import Layout from '../components/Layout';
import Transition from '../components/Transition';
// router

import {useRouter} from 'next/router'


// framer motaion
import {AnimatePresence, motion} from 'framer-motion'

function MyApp({ Component, pageProps }) {

  const router = useRouter ();
  return (
  
  <Layout>
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        <Transition/>
      <Component {...pageProps} />;
      </motion.div>
   

    </AnimatePresence>
  
  </Layout>
  );
  
}

export default MyApp;
