

import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const Chat = ({t}) => {
  const SEO = {
        title: 'Live Chat',                            
        description: 'Details about Live Chat App',

        openGraph: {
            title: 'Live Chat',
            description: 'Details about Live Chat App',
        }
    }
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 xl:mx-52 mt-20 mb-10 xl:mt-40">
      <NextSeo {...SEO} />          
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-x-10">
          <div className="mb-5">
              <div className="w-96 h-96 p-5 bg-yellow-300 flex flex-col items-center justify-around">
                <div className="w-2/3 bg-yellos-500"><img src="/assets/chat.png" alt=""  /></div>  
                <div className="">
                    <h3 className="text-2xl font-semibold uppercase text-center">Live Chat App</h3>
                    <p className="text-sm text-center">App to chat privately with a selected user or publicly with a group of users</p>
                </div>                 
            </div> 
          </div>
          <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-center xl:text-left">Live Chat</h2>
              <span className='text-lg text-gray-600 font-bold'>React, Node.js</span>
            </div>              
              <p className='text-gray-500'>
                This is a classic chat application. The user can chat with other online users either in private chat with selected participant(s) or publicly with a group. 
              </p>
              <div className="">
                <h2 className="text-xl font-semibold">Technologies, Tools</h2>
                <p className="text-gray-500">
                  React, Tachions, Node.js, Socket.io, GitHub Pages, Heroku
                </p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                  
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://slavikshakhov.github.io/chat-react/" target='_blank'>
                        view Project
                    </a>
                </button>
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/chat-react" target='_blank'>
                        GitHub
                    </a>
                </button>
                
              </div>             
          </div>
      </div>
    </div>     
  )
}
export default withTranslation('chat')(Chat)