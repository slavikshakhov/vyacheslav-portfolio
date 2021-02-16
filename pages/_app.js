import '../styles/globals.css'
import { appWithTranslation } from '../i18n'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Navigation from '../src/components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <div className='relative'>
      <DefaultSeo {...SEO} />
     
        <div className="">
          <Navigation />
        </div>
        <div className="">
          <Component {...pageProps} />
        </div>
          
      
    </div>
  )
  
  
}

export default appWithTranslation(MyApp)
