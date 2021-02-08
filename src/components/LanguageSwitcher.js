import React, {useState, useContext} from 'react'
import { withTranslation } from 'react-i18next';
import { I18nContext } from 'next-i18next'

const LanguageSwitcher = ({i18n}) => {
    const [lg, setLg] = useState('en')    
    const { i18n: { language } } = useContext(I18nContext)
        
    const handleChange = (e) => {
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    const handleLanguage = (val) => {
        i18n.changeLanguage(val)
    }
    return (
        <div>  
            <button className="p-2 bg-pink-500 focus:outline-none text-white" onClick={() => {
                language === 'en' ? handleLanguage('de') : handleLanguage('en')
            }}>
                {language === 'en' ? 'de' : 'en'}
                </button>         
            <select className="p-2 bg-blue-500 focus:outline-none" name="" onChange={handleChange}>                
                <option value="de">de</option>
                <option value="en">en</option>
            </select>             
        </div>
    )
}

export default withTranslation()(LanguageSwitcher)
