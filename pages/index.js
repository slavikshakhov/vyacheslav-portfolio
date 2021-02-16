
import i18n, { withTranslation } from '../i18n'
import Image from 'next/image'
import Link from 'next/link'
import {NextSeo} from 'next-seo'

import LanguageSwitcher from '../src/components/LanguageSwitcher'



const Home = ({t}) => {
  const SEO = {
        title: 'Home',                            // page.title  <-- backend
        description: 'Main page',

        openGraph: {
            title: 'Home',
            description: 'Main page',
        }
    }
  return (
    <div className="p-5">
      <NextSeo {...SEO} />    
      <LanguageSwitcher />
      <div className="space-y-8 flex flex-col">
        <div className="flex self-start lg:ml-8 bg-gray-100 flex-col md:flex-row md:rounded-full flex justify-between items-center space-x-5 w-full lg:w-2/3 md:w-4/5 px-5 py-1">
          <div className="flex items-center justify-between w-52 p-5">
            
            <Image
              src="/assets/founder.jpg"
              alt="Picture of the author"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-1 flex-wrap flex-col space-y-2">
            <h1 className="text-blue-500 text-2xl font-bold">React</h1>
            <p className="text-gray-500" style={{fontFamily: 'Roboto'}}>{t('react')}</p>
            <button className="bg-transparent hover:bg-blue-500 w-32 border-2 border-blue-500">
              <Link href='/frontend' className=""><a className='text-gray-500 hover:text-white font-semibold p-3'>Projects</a></Link>
            </button>            
          </div>
        </div>
          <div className="flex self-end lg:mr-8 bg-gray-100 flex-col md:flex-row md:rounded-full flex justify-between items-center space-x-5 w-full lg:w-2/3 md:w-4/5 px-5 py-1">
          <div className="flex items-center justify-between w-52 p-5">
            
            <Image
              src="/assets/founder.jpg"
              alt="Picture of the author"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-1 flex-wrap flex-col space-y-2">
            <h1 className="text-blue-500 text-2xl font-bold">React</h1>
            <p className="text-gray-500" style={{fontFamily: 'Roboto'}}>{t('react')}</p>
            <button className="bg-transparent hover:bg-blue-500 w-32 border-2 border-blue-500">
              <Link href='/test' className=""><a className='text-gray-500 hover:text-white font-semibold p-3'>Projects</a></Link>
            </button>            
          </div>
        </div>  
        
      </div>
    </div>
    
  )
}


export default withTranslation('home')(Home)