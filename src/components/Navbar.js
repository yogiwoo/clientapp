import React from 'react'
function Navbar() {
  return (
    <header className='header flex justify-between p-8'>
        <a href="/" className='logo text-3xl'>Niranjan China</a>
        <nav className='navbar flex'>
            {/* <a href='#contact' className='mx-2'>Contact</a> */}
            {/* <a href='#events' className='mx-2 cursor-pointer'>Events</a>
            <a href='/' className='mx-2'>About</a>
            <a href='/' className='mx-2'>Video</a> */}
        </nav>
    </header>
  )
}

export default Navbar