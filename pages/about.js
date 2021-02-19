import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'
import Link from 'next/link'



const About = ({t}) => {
  const SEO = {
        title: t('main-title'),                            
        description: t('title'),

        openGraph: {
            title: t('main-title'),
            description: t('title')
        }
    }
  return (
    <div className="mx-5 lg:mx-32 xl:mx-52 mt-20 mb-10 xl:mt-32">
      <NextSeo {...SEO} />          
      <h2 className='text-2xl xl:text-3xl font-bold text-center xl:text-left'>{t('main-title')}</h2>
      <p className='text-sm text-gray-500 text-center xl:text-left'>{t('main-subtitle')}</p>
      <div className="flex flex-col justify-center items-center xl:flex-row space-x-12 mt-3 xl:mt-8">
        
            <img src="/assets/profile-pic.png" alt=""  className='bg-gray-500' style={{width: '300px', height: '400px'}}/>
     
        <div className='mt-5 xl:mt-0'>
            <h2 className="text-xl xl:text-2xl font-bold">{t('title')}</h2>
            <p className="text-gray-500 mt-4 text-justify">{t('body')}</p>
            <hr className='my-5 xl:my-10' />
            <div className="flex flex-col md:flex-row ">
                <div className="flex-1 space-y-0 md:space-y-4">
                    <p className="text-gray-900">{t('name')}: <span className='text-gray-500'>Slavik Shakhov</span> </p>
                    <p className="text-gray-900">{t('from')}: <span className='text-gray-500'>Valencia, {t('country')}</span> </p>
                </div>
                <div className="flex-1">
                    <p className="text-gray-900">Email: <span className='text-yellow-600'>v.shakhov@yahoo.ca</span></p>
                </div>
            </div>
            <div className='flex items-center justify-center md:justify-end space-x-6 mt-8'>
              {/* 
              <button className="filled-btn">
                <a href=''>{t('resume-btn')}</a>
              </button>              
              */}                
                <button className="outlined-btn px-10 text-lg font-bold">
                  <Link href='/projects'><a>{t('projects-btn')}</a></Link>
                </button>
                
            </div>
        </div>
      </div>
      
      
    </div>    
  )
}
export default withTranslation('about')(About)