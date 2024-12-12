import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
    return (
        <div className='bg-black p-4'>
            <div className='social flex flex-row justify-between'>
                <div className='social-ico text-3xl text-white flex flex-row gap-3'>
                    <a href='https://www.facebook.com/ksrlosal3' className='pointer'><FaFacebookSquare /></a>
                    <FaLinkedin/>
                    <FaInstagram/>
                </div>
                <div className='email'>
                    <p className='text-white'>email@example.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer