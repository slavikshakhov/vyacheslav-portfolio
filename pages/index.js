

import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'
import Image from 'next/image'



const Home = ({t}) => {
  
  const SEO = {
        title: t('seo-title'),                            
        description: t('seo-description'),

        openGraph: {
            title: 'Home',
            description: t('seo-description'),
        }
    }
  return (
    <div className="relative">
      <NextSeo {...SEO} />  
      
        <img src="/assets/valencia.jpg" className="h-screen object-cover bg-center"/>
        <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center space-y-5">
                <h1 className="text-white text-3xl md:text-4xl font-bold">Slavik <span className="text-yellow-600">Shakhov</span></h1>
                <p className="text-white text-xl xl:text-2xl font-medium">{t('developer-type')}</p>
            </div>
            
        </div>
              
      
    </div>    
  )
}
export default withTranslation('home')(Home)