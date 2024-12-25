import React from 'react'

function ContactForm() {
  return (
    <div className='form flex flex-col gap-3 bg-[#1C2932] p-6 rounded-lg shadow-lg max-w-md w-full 'style={{ width: '348px', height: '394px' }}>
        <input  placeholder='Name' type='text' className='p-3 rounded-3xl'/>
        <input placeholder='Mobile' type='text' className='p-3 rounded-3xl'/>
        <input placeholder='Email (Optional)' type='text' className='p-3 rounded-3xl'/>
        <input placeholder='Reason for contacting' type='text' className='p-5 rounded-3xl'/>
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Book Appointment</button>
    </div>
  )
}

export default ContactForm