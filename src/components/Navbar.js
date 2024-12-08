import React from 'react'
function Navbar() {
  return (
    <header className='header flex justify-between p-8'>
        <a href="/" className='logo'>Logo</a>
        <nav className='navbar flex'>
            <a href='/' className='mx-2'>Contact</a>
            <a href='/' className='mx-2'>Work</a>
            <a href='/' className='mx-2'>About</a>
            <a href='/' className='mx-2'>Video</a>
        </nav>
    </header>
  )
}

export default Navbar