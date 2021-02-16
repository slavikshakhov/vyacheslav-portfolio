

import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const HomeFinances = ({t}) => {
  const SEO = {
        title: 'Home Finances',                            
        description: 'Details about Home Finances App',

        openGraph: {
            title: 'Home Finances',
            description: 'Details about Home Finances App',
        }
    }
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 xl:mx-52 mt-20 mb-10 xl:mt-40">
      <NextSeo {...SEO} />          
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-x-10">
          <div className="mb-5">
              <div className="w-96 h-96 p-5 bg-yellow-500 flex flex-col items-center justify-around">
                <div className="w-1/2 bg-yellos-500"><img src="/assets/pig.png" alt=""  /></div>  
                <div className="">
                    <h3 className="text-2xl font-semibold uppercase">Home Finances</h3>
                    <p className="text-sm text-center">Financial Tracker</p>
                </div>                 
            </div> 
          </div>
          <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-center xl:text-left">Home Finances</h2>
                <span className='text-lg text-gray-600 font-bold'>React, Node.js, MySQL</span>
              </div>              
              <p className='text-gray-500'>
                After user registers, he or she may set the total balance of money available. Each transactin consists or an item and sum. The latter is either added to or subtracted from the total balance. I used my custom animations to show the magic. If the user wishes to view the transactions for a certain day, he or she may click on a selected day in a calendar. I built the calendar from scratch just using the Javascript Date object. I used React Context API to manage the global state and React Hooks for a local state management.      
              </p>              
              <div className="">                
                <h2 className="text-xl font-semibold">Technologies, Tools</h2>                
                <p className="text-gray-500">
                  React, React Hooks, Context API, CSS, TailwindCSS, Node.js, MySQL, GigHub Pages, Heroku
                </p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                  
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://slavikshakhov.github.io/homefinances-client/" target='_blank'>
                        view Project
                    </a>
                </button>
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/homefinances-client" target='_blank'>
                        GitHub - Client
                    </a>
                </button>
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/homefinances-server" target='_blank'>
                        GitHub - Server
                    </a>
                </button>
              </div>
              
              
          </div>
      </div>
    </div>    
  )
}
export default withTranslation('finances')(HomeFinances)