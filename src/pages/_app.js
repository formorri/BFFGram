import '../styles/globals.scss';
import Amplify from '@aws-amplify/core'
import awsmobile from '../../src/aws-exports'
Amplify.configure(awsmobile)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
 