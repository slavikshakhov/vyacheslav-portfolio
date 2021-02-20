import {useState} from 'react'
import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const LanguageTandem = ({t}) => {
  const SEO = {
        title: t('seo-title'),                            
        description: t('seo-descripton'),

        openGraph: {
            title: t('seo-title'),
            description: t('seo-descripton')
        }
  }
  const [isPopupOpen, setPopupOpen] = useState(false)

  const openPopup = () => {
    setPopupOpen(true);    
  }
  const closePopup = () => {
    setPopupOpen(false)
  }
  console.log(isPopupOpen)
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 xl:mx-44 mt-20 mb-10 xl:mt-40">
      <NextSeo {...SEO} />          
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-x-10">
          <div className="mb-5">
              <div className="w-96 h-96 p-5 bg-blue-400 flex flex-col items-center justify-around">
                <div className="w-2/3 bg-yellow-500"><img src="/assets/tandem.jpg" alt=""  /></div>  
                <div className="">
                    <h3 className="text-2xl font-semibold uppercase text-center">{t('title')}</h3>
                    <p className="text-sm text-center">{t('subtitle')}</p>
                </div>                 
            </div> 
          </div>
          <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between flex-col xl:flex-row ">
                <h2 className="text-2xl font-bold text-center xl:text-left">{t('title')}</h2>
                <span className='text-lg text-gray-600 font-bold xl:text-right'>{t('title-technologies')}</span>
              </div>              
              <p className='text-gray-500 text-justify'>
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
                    <a href="https://weight-loss-app-146e6.firebaseapp.com/login" target='_blank'>
                        {t('open-project')}
                    </a>
                </buttonon>
                <button  className={
                  `filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl ${isPopupOpen && 'hidden'}`
                  }>
                    <a href="https://github.com/slavikshakhov/tandem-react-client" target='_blank'>
                        GitHub - Client
                    </a>
                </button>
                <button  className={
                  `filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl ${isPopupOpen && 'hidden'}`
                  }>
                    <a href="https://github.com/slavikshakhov/tandem-node-server" target='_blank'>
                        GitHub - Server
                    </a>
                </button>
                 <div className={`bg-blue-200 rounded-md shadow-lg absolute left-0 top-0 px-3 py-2 text-sm ${!isPopupOpen && 'hidden'}`}>
                  <p>{t('popup-text')}</p>  
                  <p><span className='font-semibold'>{t('username-key')}:</span> {t('username-value')},<span className='font-semibold'> {t('password-key')}:</span> {t('password-value')}</p> 
                  <div className="flex space-x-2 items-center justify-center mt-2">
                    <button onClick={closePopup} className='popup-btn bg-yellow-400 hover:bg-yellow-500'>
                      <a href="https://slavikshakhov.github.io/tandem-react-client/" target='_blank'>
                        {t('live-project-btn')}
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
export default withTranslation('tandem')(LanguageTandem)

