

import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const LanguageTandem = ({t}) => {
  const SEO = {
        title: 'Language Tandem',                            
        description: 'Details about Language Tandem App',

        openGraph: {
            title: 'Language Tandem',
            description: 'Details about Language Tandem App',
        }
    }
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 xl:mx-44 mt-20 mb-10 xl:mt-40">
      <NextSeo {...SEO} />          
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-x-10">
          <div className="mb-5">
              <div className="w-96 h-96 p-5 bg-blue-400 flex flex-col items-center justify-around">
                <div className="w-2/3 bg-yellow-500"><img src="/assets/tandem.jpg" alt=""  /></div>  
                <div className="">
                    <h3 className="text-2xl font-semibold uppercase text-center">Language Tandem</h3>
                    <p className="text-sm text-center">App to find language partners</p>
                </div>                 
            </div> 
          </div>
          <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between flex-col xl:flex-row ">
                <h2 className="text-2xl font-bold text-center xl:text-left">Language Tandem</h2>
                <span className='text-lg text-gray-600 font-bold xl:text-right'>React, Redux, Node.js, MySQL</span>
              </div>              
              <p className='text-gray-500'>
                This app requires user registration and authentication. The purpose of the app is to allow users to find potential language exchange partners. The matching is based on the language(s) spoken and the ones the user would like to practice. Complex MySQL relationships were used. The user then can contact any of the potential partners from the matched list. The live chat is enabled for those currently online. The user can change his or her language choices at any time. 
              </p>
              <div className="">
                <h2 className="text-xl font-semibold">Technologies, Tools</h2>
                <p className="text-gray-500">
                  React, Redux, Socket.io, Node.js, MySQL, GitHub Pages, Heroku
                </p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                  
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://slavikshakhov.github.io/tandem-react-client/" target='_blank'>
                        view Project
                    </a>
                </button>
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/tandem-react-client" target='_blank'>
                        GitHub - Client
                    </a>
                </button>
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/tandem-node-server" target='_blank'>
                        GitHub - Server
                    </a>
                </button>
              </div>
              
              
          </div>
      </div>
    </div>    
  )
}
export default withTranslation('tandem')(LanguageTandem)