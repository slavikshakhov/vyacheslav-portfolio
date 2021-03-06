
import {useState} from 'react'
import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'
import emailjs from 'emailjs-com';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const Contact = ({t}) => {
  const SEO = {
    title: t('seo-title'),
    openGraph: {
        title: t('seo-title')        
    }
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [success, setSuccess] = useState(false)

  const onFormSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(publicRuntimeConfig.SERVICE_ID, publicRuntimeConfig.TEMPLATE_ID, e.target, publicRuntimeConfig.USER_ID)
      .then((result) => {
          console.log(result.text);   
          setSuccess(true);       
      }, (error) => {
          console.log(error.text);
      });
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setTimeout(() => {
        setSuccess(false)
      }, 4500);
  }
  
  return (
    <div className="h-screen px-8 sm:px-16 pt-32 bg-gray-200 flex flex-col items-center space-y-12">
      <NextSeo {...SEO} />         
      <h2 className='text-2xl text-gray-600 font-bold'>{t('title')}</h2>
      <form onSubmit={onFormSubmit} className='flex flex-col space-y-3 md:space-y-2 contact'>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
          <input 
            type="text" 
            placeholder={t('name')} 
            autoComplete='false' 
            className='md:flex-1 px-5 py-2 text-xl outline-none' 
            value={name}
            required
            name='name'
            onChange={(e) => setName(e.target.value)}
            />
          <input 
            type="email" 
            placeholder={t('email')} 
            autoComplete='false' 
            className='md:flex-1 px-5 py-2 text-xl outline-none' 
            value={email}
            required
            name='name'
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>  
        <input 
            type="text" 
            placeholder={t('subject')} 
            autoComplete='false' 
            className='px-5 py-2 text-xl outline-none' 
            value={subject}            
            onChange={(e) => setSubject(e.target.value)}
            />   
        <textarea 
          rows="7" 
          placeholder={t('message')}
          className='px-5 py-2 text-xl outline-none w-full'
          value={message}
          required
          name='message'
          onChange={e => setMessage(e.target.value)}
          >

        </textarea>
        <button type='submit' className='w-full filled-btn rounded-none text-lg font-medium uppercase'>{t('send')}</button>
        <div className={`w-full bg-blue-400 text-blue-900 text-center px-3 py-2 ${success ? 'block' : 'hidden'}`}>Your email was sent successfully!</div>
      </form>
      
    </div>    
  )
}
export default withTranslation('contact')(Contact)