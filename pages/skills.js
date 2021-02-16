import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'
import Link from 'next/link'


const Skills = ({t}) => {
  const SEO = {
        title: 'My Skills',                            
        description: 'Summery of my skills',

        openGraph: {
            title: 'My Skills',
            description: 'Summery of my skills',
        }
    }
  return (
    <div className="mt-28">
      <NextSeo {...SEO} />          
      <div className="space-y-8 flex flex-col">
        <div className="flex self-start lg:ml-8 flex-col md:flex-row md:rounded-full flex justify-between items-center space-x-5 w-full lg:w-4/5 px-5 py-1">
          <div className="flex items-center justify-between w-48 p-5">          
            <img
              src="/assets/front-end.png"
              alt="Picture of the author"              
              className=""
            />
          </div>
          <div className="flex flex-1 flex-wrap flex-col space-y-1">
            <h1 className="text-2xl font-bold text-center md:text-left">{t('frontend-title')}</h1>
            <p className="text-gray-500" style={{fontFamily: 'Roboto'}}>
                {t('react-before-link')} <Link href='/projects'><a className='link'>{t('react-link1')}</a></Link> {t('react-after-link')}
            </p>
            <p className="text-gray-500" style={{fontFamily: 'Roboto'}}>{t('angular-before-link')} <Link href='/weight-control'><a className='link'>{t('angular-link1')}</a></Link> {t('angular-after-link')}</p>
            <hr className='border-t-2' />
            <div className="text-gray-600">
                <p className=''>{t('frontend-languages')}: <span className='font-medium'>CSS, SASS, HTML, Javascript, Typescript</span></p>
                <p>{t('frontend-technologies')}: <span className='font-medium'>React, Redux, Angular, Bootstrap, TailwindCSS, Tachyons, Material UI, JQuery</span></p>
            </div>               
          </div>
        </div>
        <div className="flex self-end lg:mr-8 flex-col md:flex-row md:rounded-full flex justify-between items-center space-x-5 w-full lg:w-4/5 px-5 py-1">
          <div className="flex items-center justify-between w-48 p-5">          
            <img
              src="/assets/server.png"
              alt="Picture of the author"              
              className=""
            />
          </div>
          <div className="flex flex-1 flex-wrap flex-col space-y-1">
            <h1 className="text-2xl font-bold text-center md:text-left">{t('server-title')}</h1>
            <p className="text-gray-500" style={{fontFamily: 'Roboto'}}>
                {t('server-description-before-link')} <Link href='/projects'><a className='link'>{t('server-link1')}</a></Link>. {t('server-description-after-link')} 
            </p>
            <hr className='border-t-2' />
            <div className="text-gray-600">
                <p className=''>{t('server-languages')}: <span className='font-medium'>Javascript, Typescript</span></p>
                <p>{t('server-technologies')}: <span className='font-medium'>Node.js, Express.js</span></p>
            </div>               
          </div>
        </div>
         <div className="flex self-start lg:ml-8 flex-col md:flex-row md:rounded-full flex justify-between items-center space-x-5 w-full lg:w-4/5 px-5 py-1">
          <div className="flex items-center justify-between w-48 p-5">          
            <img
              src="/assets/database.png"
              alt="Picture of the author"              
              className=""
            />
          </div>
          <div className="flex flex-1 flex-wrap flex-col space-y-1">
            <h1 className="text-2xl font-bold text-center md:text-left">{t('database-title')}</h1>
            <p className="text-gray-500" style={{fontFamily: 'Roboto'}}>
                {t('database-description')} 
            </p>
            <hr className='border-t-2' />
            <div className="text-gray-600">       
                <p>{t('database-tools')}: <span className='font-medium'>GraphQL, Sequelize, AngularFirestore</span></p>
                <p>{t('databases')}: <span className='font-medium'>MySQL, PostgreSQL, SQLite, MongoDB, Firebase</span></p>
            </div>               
          </div>
        </div>
        </div>
    </div>
  )
}
export default withTranslation('skills')(Skills)