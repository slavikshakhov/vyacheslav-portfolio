

import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'

import LanguageSwitcher from '../src/components/LanguageSwitcher'


const Frontend = ({t}) => {
  const SEO = {
        title: 'Front End',                            
        description: 'Projects in React, Angular, CSS, SASS, html, tailwind',

        openGraph: {
            title: 'Front End',
            description: 'Projects in React, Angular, CSS, SASS, html, tailwind',
        }
    }
  return (
    <div>
      <NextSeo {...SEO} /> 
      <LanguageSwitcher />         
      <p>{t('description')}</p>
    </div>    
  )
}
export default withTranslation('frontend')(Frontend)