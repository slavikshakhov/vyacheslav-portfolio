import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const Checkers = ({t}) => {
  const SEO = {
        title: 'Checkers Game',                            
        description: 'Details about Checkers Game App',

        openGraph: {
            title: 'Checkers Game',
            description: 'Details about Checkers Game App',
        }
    }
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 xl:mx-52 mt-20 mb-10 xl:mt-40">
      <NextSeo {...SEO} />          
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-x-10">
          <div className="mb-5">
              <div className="w-96 h-96 p-5 bg-pink-400 flex flex-col items-center justify-around">
                <div className="w-2/3 bg-yellos-500"><img src="/assets/checkers.png" alt=""  /></div>  
                <div className="">
                    <h3 className="text-2xl font-semibold uppercase text-center">Checkers Game</h3>
                    <p className="text-sm text-center">App to play checkers with scores table</p>
                </div>                 
            </div> 
          </div>
          <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-center xl:text-left">Checkers App</h2>
                <span className='text-lg text-gray-600 font-bold'>React, Redux</span>
              </div>              
              <p className='text-gray-500'>
                This React application is a classic checkers game. Each move is recorded in the summery table with a move from / to location, type of piece moved and whether it resulted in a capture of an opponent piece. Each cell of the board is actually a React component. Since the game requires complex data sharing between multiple components, I used Redux rather than React Context. 
              </p>
              <div className="">
                <h2 className="text-xl font-semibold">Technologies</h2>
                <p className="text-gray-500">React, Redux, GitHub Pages</p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                  
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://slavikshakhov.github.io/slavik-checkers-app/" target='_blank'>
                        view Project
                    </a>
                </button>
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/slavik-checkers-app" target='_blank'>
                        GitHub
                    </a>
                </button>                
              </div>             
          </div>
      </div>
    </div>     
  )
}
export default withTranslation('checkers')(Checkers)