import React, {useContext, useState} from 'react'
import { withTranslation } from '../i18n'
import LanguageSwitcher from '../src/components/LanguageSwitcher'
import {NextSeo} from 'next-seo'
const test = ({t}) => {
    //const { i18n: { language } } = useContext(I18nContext)
    const SEO = {
        title: 'Test Page',                            // page.title  <-- backend
        description: 'Just your normal about page',

        openGraph: {
            title: 'Test Page',
            description: 'Just your normal about page',
        }
    }
    return (
        <div>
            <NextSeo {...SEO} />    
            <h1>{t('text')}</h1>
            
            <LanguageSwitcher />
            <p className="txt">lalala</p>
            
        </div>
    )
}

export default withTranslation('footer')(test)
