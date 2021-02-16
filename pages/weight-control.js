

import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const WeightControl = ({t}) => {
  const SEO = {
        title: 'Weight Control',                            
        description: 'Details about Weight Control App',

        openGraph: {
            title: 'Weight Control',
            description: 'Details about Weight Control App',
        }
    }
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 xl:mx-52 mt-20 mb-10 xl:mt-40">
      <NextSeo {...SEO} />          
      <div className="flex flex-col xl:flex-row items-center xl:items-start space-x-10">
          <div className="mb-5">
              <div className="w-96 h-96 p-5 bg-yellow-500 flex flex-col items-center justify-around">
                <div className="w-2/3 bg-yellos-500"><img src="/assets/weightloss.png" alt=""  /></div>  
                <div className="">
                    <h3 className="text-2xl font-semibold uppercase text-center">Weight Control</h3>
                    <p className="text-sm text-center">App to keep track of colories consumed and burned</p>
                </div>                 
            </div> 
          </div>
          <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Weight Control</h2>
                <span className='text-lg text-gray-600 font-bold'>Angular, Firebase</span>
              </div>              
              <p className='text-gray-500'>
                After registration, a user is asked to provide his or her age, gender, height and weight followed by a popup asking for how many kilograms (0.5, 1.0, 1.5 etc) per week one desires to lose. This will calculate the caloric deficit per day necessary to achieve the set goal, based on the body parameters and goals provided when registered. The caloric deficit or surmout is calculated not only based on the difference between total amount of calories consumed with food and burned by activities, but also by the basal metabolic rate that is dependent on body parameters, age and gender. Every time a user consumes food or performs an activity, he or she clicks a corresponding icon to recalculate the total amount of caloric deficit or surmount and also the grams of fat that is lost or gained since midnight of the current day. The results are visualized in the table live. It is also possible to view the summery for all previous days.                 
              </p>              
              <div className="">
                <h2 className="text-xl font-semibold">Languages, Technologies, Tools</h2>
                <p className="text-gray-500">
                  Angular, Typescript, Javascript, CSS, HTML, Material Design, AngularFirestore, AngularFireAuth, Firebase
                </p>
              </div>
              <div className="flex items-center justify-center space-x-5">
                  
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://weight-loss-app-146e6.firebaseapp.com/login" target='_blank'>
                        view Project
                    </a>
                </button>
                <button className="filled-btn px-4 py-2 rounded-none xl:px-8 xl:py-2 xl:rounded-3xl">
                    <a href="https://github.com/slavikshakhov/slavik-weight-loss-app" target='_blank'>
                        GitHub
                    </a>
                </button>
                
              </div>             
          </div>
      </div>
    </div>      
  )
}
export default withTranslation('weight')(WeightControl)