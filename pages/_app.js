import '../styles/globals.css'
import { appWithTranslation } from '../i18n'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
  
  
}

export default appWithTranslation(MyApp)
