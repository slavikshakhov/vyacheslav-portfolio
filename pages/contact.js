
import {useState} from 'react'
import i18n, { withTranslation } from '../i18n'
import {NextSeo} from 'next-seo'


const Contact = ({t}) => {
  const SEO = {
    title: 'Contact Me',                            
    description: 'Contect information',

    openGraph: {
        title: 'Contact Me',
        description: 'Contect information',
    }
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const onFormSubmit = async (e) => {
    e.preventDefault()
    console.log(name, email, message)
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, subject, message})
    })
    console.log(res)

  
  }
  return (
    <div className="h-screen px-8 sm:px-16 md:px-52 pt-32 bg-gray-200 flex flex-col items-center space-y-12">
      <NextSeo {...SEO} />         
      <h2 className='text-2xl text-gray-600 font-bold'>{t('title')}</h2>
      <form onSubmit={onFormSubmit} className='flex flex-col space-y-3 md:space-y-2' style={{width: '600px'}}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
          <input 
            type="text" 
            placeholder={t('name')} 
            autoComplete='false' 
            className='md:flex-1 px-5 py-2 text-xl outline-none' 
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            />
          <input 
            type="email" 
            placeholder={t('email')} 
            autoComplete='false' 
            className='md:flex-1 px-5 py-2 text-xl outline-none' 
            value={email}
            required
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
          onChange={e => setMessage(e.target.value)}
          >

        </textarea>
        <button type='submit' className='w-full filled-btn rounded-none text-lg font-medium uppercase'>{t('send')}</button>
      </form>
    </div>    
  )
}
export default withTranslation('contact')(Contact)