import {useState} from 'react'
import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const WeightControl = ({t}) => {
  const SEO = {
        title: t('seo-title'),                            
        description: t('seo-description'),

        openGraph: {
            title: t('seo-title'),
            description: t('seo-description'),
        }
  }
  const [isPopupOpen, setPopupOpen] = useState(false)

  const openPopup = () => {
    setPopupOpen(true);    
  }
  const closePopup = () => {
    setPopupOpen(false)
  }
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 xl:mx-52 mt-20 mb-10 xl:mt-40">
      <NextSeo {...SEO} />          
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-x-10">
          <div className="mb-5">
              <div className="w-96 h-96 p-5 bg-yellow-500 flex flex-col items-center justify-around">
                <div className="w-2/3 bg-yellos-500"><img src="/assets/weightloss.png" alt=""  /></div>  
                <div className="">
                    <h3 className="text-2xl font-semibold uppercase text-center">{t('title')}</h3>
                    <p className="text-sm text-center">{t('subtitle')}</p>
                </div>                 
            </div> 
          </div>
          <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{t('title')}</h2>
                <span className='text-lg text-gray-600 font-bold'>{t('title-technologies')}</span>
              </div>              
              <p className='text-gray-500'>
               {t('description')}        
              </p>              
              <div className="">
                <h2 className="text-xl font-semibold">{t('technologies')}</h2>
                <p className="text-gray-500">
                  {t('technologies-list')}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-5 relative">
                 <buttonon onClick={openPopup}  className={
                  `filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl ${isPopupOpen && 'hidden'}`
                  }>
                    {t('live-project-btn')}
                </buttonon> 
                
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/slavik-weight-loss-app" target='_blank'>
                        GitHub
                    </a>
                </button>
                <div className={`bg-blue-200 rounded-md shadow-lg absolute left-0 top-0 px-3 py-2 text-sm ${!isPopupOpen && 'hidden'}`}>
                  <p>{t('popup-text')}</p>  
                  <p><span className='font-semibold'>{t('email-key')}:</span> {t('email-value')},<span className='font-semibold'> {t('password-key')}:</span> {t('password-value')}</p> 
                  <div className="flex space-x-2 items-center justify-center mt-2">
                    <button onClick={closePopup} className='popup-btn bg-yellow-400 hover:bg-yellow-500'>
                      <a href="https://weight-loss-app-146e6.firebaseapp.com/login" target='_blank'>
                        {t('open-project')}
                      </a>
                    </button>
                    <button onClick={closePopup} className='popup-btn bg-red-400 hover:bg-red-500'>{t('cancel')}</button>
                  </div>
                </div>                
              </div>             
          </div>
      </div>
    </div>      
  )
}
export default withTranslation('weight')(WeightControl)

