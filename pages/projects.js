

import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'
import Link from 'next/link'


const Projects = ({t}) => {
  const SEO = {
        title: t('seo-title'),                            
        description: t('seo-description'),

        openGraph: {
            title: t('seo-title'),
            description: t('seo-description'),
        }
    }
  return (
    <div className="px-5 lg:px-32 xl:px-52 pt-20 pb-10 xl:pt-28 bg-gray-200">
      <NextSeo {...SEO} />          
      <div className="mb-3 text-center md:text-left">
        <h2 className='text-2xl md:text-3xl font-bold'>{t('projects-title')}</h2>
        <p className="text-sm text-gray">{t('projects-subtitle')}</p>
      </div>      
      <p className="text-gray-500">
          {t('projects-description')} 
      </p>
      <div className="flex flex-wrap justify-center mt-8">
          <div className="relative m-3 details">
            <div className="w-64 md:w-72 xl:w-80 p-5 bg-yellow-500 flex flex-col items-center space-y-3">
                <div className="w-2/5 bg-yellos-500"><img src="/assets/pig.png" alt=""  /></div>    
                <h3 className="text-xl xl:text-2xl font-semibold uppercase">{t('home-finances-title')}</h3>
                <p className="text-sm text-center">{t('home-finances-subtitle')}</p>
            </div>    
            <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-90 overlay">
                <div className="flex flex-col items-center justify-center space-y-3 w-full h-full">  
                    <p className="text-yellow-500 text-xl xl:text-2xl">{t('home-finances-title')}</p>                  
                    <p className="text-white hover:text-gray-400 text-lg xl:text-xl font-semibold z-30">
                        <Link href="/home-finances"><a>{t('more')}</a></Link>
                    </p>    
                </div>
            </div> 
          </div>
        <div className="relative m-3 details">
            <div className="w-64 md:w-72 xl:w-80  p-5 bg-blue-400 flex flex-col items-center space-y-3">
                <div className="w-2/5"><img src="/assets/tandem.jpg" alt=""  /></div>    
                <h3 className="text-xl xl:text-2xl font-semibold uppercase">{t('tandem-title')}</h3>
                <p className="text-sm text-center">{t('tandem-subtitle')}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-90 overlay">
                <div className="flex flex-col items-center justify-center space-y-3 w-full h-full">  
                    <p className="text-yellow-500 text-xl xl:text-2xl">{t('tandem-title')}</p>                  
                    <p className="text-white hover:text-gray-400 text-xl font-semibold z-30">
                        <Link href="/language-tandem"><a>{t('more')}.</a></Link>
                    </p>    
                </div>
            </div> 
        </div>  
        
        <div className="relative m-3 details">
            <div className="w-64 md:w-72 xl:w-80  p-5 bg-red-400 flex flex-col items-center space-y-3">
                <div className="w-2/5"><img src="/assets/weightloss.png" alt=""  /></div>    
                <h3 className="text-xl xl:text-2xl font-semibold uppercase">{t('weight-control-title')}</h3>
                <p className="text-sm text-center">{t('weight-control-subtitle')}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-90 overlay">
                <div className="flex flex-col items-center justify-center space-y-3 w-full h-full">  
                    <p className="text-yellow-500 text-xl xl:text-2xl">{t('weight-control-title')}</p>                  
                    <p className="text-white hover:text-gray-400 text-xl font-semibold z-30">
                        <Link href="/weight-control"><a>{t('more')}</a></Link>
                    </p>    
                </div>
            </div> 
        </div>
        
        <div className="relative m-3 details">
            <div className="w-64 md:w-72 xl:w-80  p-5 bg-pink-400 flex flex-col items-center space-y-3">
                <div className="w-2/5"><img src="/assets/checkers.png" alt=""  /></div>    
                <h3 className="text-xl xl:text-2xl font-semibold uppercase">{t('checkers-title')}</h3>
                <p className="text-sm text-center">{t('checkers-subtitle')}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-90 overlay">
                <div className="flex flex-col items-center justify-center space-y-3 w-full h-full">  
                    <p className="text-yellow-500 text-xl xl:text-2xl">{t('checkers-title')}</p>                  
                    <p className="text-white hover:text-gray-400 text-xl font-semibold z-30">
                        <Link href="/checkers"><a>{t('more')}</a></Link>
                    </p>    
                </div>
            </div> 
        </div>
        
        <div className="relative m-3 details">
            <div className="w-64 md:w-72 xl:w-80  p-5 bg-yellow-300 flex flex-col items-center space-y-3">
                <div className="w-2/5"><img src="/assets/chat.png" alt=""  /></div>    
                <h3 className="text-xl xl:text-2xl font-semibold uppercase">{t('chat-title')}</h3>
                <p className="text-sm text-center">{t('chat-subtitle')}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-90 overlay">
                <div className="flex flex-col items-center justify-center space-y-3 w-full h-full">  
                    <p className="text-yellow-500 text-xl xl:text-2xl">{t('chat-title')}</p>                  
                    <p className="text-white hover:text-gray-400 text-xl font-semibold z-30">
                        <Link href="/chat"><a>{t('more')}</a></Link>
                    </p>    
                </div>
            </div> 
        </div>       
      </div>
    </div>    
  )
}
export default withTranslation('projects')(Projects)