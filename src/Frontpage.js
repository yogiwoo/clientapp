import React from 'react'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'

export default function Frontpage() {
  return (
    <div className='front-page'>
        <Navbar/>
        <div className='intro bg-customBg text-white'>
          <ContactForm/>
        </div>
    </div>
  )
}
