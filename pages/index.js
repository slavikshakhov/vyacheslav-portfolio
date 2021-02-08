
import i18n, { withTranslation } from '../i18n'



const Home = ({t}) => {
  
  return (
    <div class="p-5">
      <h1>{t('heading')}</h1>
      <p class="text-center text-red-500 text-2xl font-medium">From Index</p>
     
    </div>
  )
}


export default withTranslation('common')(Home)