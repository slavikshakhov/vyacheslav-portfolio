import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import i18n, { withTranslation } from '../../i18n'
import LanguageSwitcher from '../components/LanguageSwitcher'


const Navigation = ({t}) => {
    const router = useRouter()    
    return (
        <div className="navigation">
            <p className={ `hover:text-gray-400 ${router.pathname === '/' && 'active'}` }>
                <Link href="/"><a>{t('home')}</a></Link>
            </p>
            <p className={ `hover:text-gray-400 ${router.pathname === '/about' && 'active'}` }>
                <Link href="/about"><a>{t('about')}</a></Link>
            </p>
            <p className={ `hover:text-gray-400 ${router.pathname === '/skills' && 'active'}` }>
                <Link href="/skills"><a>{t('skills')}</a></Link>
            </p>
            <p className={ `hover:text-gray-400 ${router.pathname === '/projects' && 'active'}` }>
                <Link href="/projects"><a>{t('projects')}</a></Link>
            </p>
            <p className={ `hover:text-gray-400 ${router.pathname === '/contact' && 'active'}` }>
                <Link href="/contact"><a>{t('contact')}</a></Link>
            </p>      
            <LanguageSwitcher />     
        </div>
    )
}

export default withTranslation('navigation')(Navigation)
