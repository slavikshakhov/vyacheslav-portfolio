import React, {useState, useContext} from 'react'
import { withTranslation } from 'react-i18next';
import { I18nContext } from 'next-i18next'

const LanguageSwitcher = ({i18n}) => {   
    const { i18n: { language } } = useContext(I18nContext)
    
    
    const handleLanguage = ({target: {value}}) => {        
        i18n.changeLanguage(value)
    }
    return (
        <select onChange={handleLanguage} className='bg-black text-white outline-none'> 
            <option value="en">en</option> 
            <option value="es">es</option>   
            <option value="de">de</option>          
        </select>
    )
}

export default withTranslation()(LanguageSwitcher)
