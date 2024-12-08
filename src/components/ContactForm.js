import React from 'react'

function ContactForm() {
  return (
   
    <div className='form flex flex-col gap-3 bg-slate-500 p-6 rounded-lg shadow-lg max-w-md w-full 'style={{ width: '348px', height: '394px' }}>
        <input  placeholder='Email' type='text' className='p-3'/>
        <input placeholder='Name' type='text' className='p-3'/>
        <input placeholder='Message' type='text' className='p-5'/>
        <button className='bg-red-600 text-white'>Send</button>
    </div>
  )
}

export default ContactForm