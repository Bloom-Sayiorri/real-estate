import React from 'react'
// import  { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='flex items-center '>
      <div>
        <p></p>
        <span></span>
      </div>
      <ul className="flex gap-4 p-4 items-end justify-end float-left">
        <a className="text-3xl" href='https://twitter.com/'><FaXTwitter/></a>
        <a className="text-slate-600 text-3xl" href='https://github.com/Bloom-Sayiorri'><FaGithub/></a>
        <a className="text-blue-900 text-3xl" href='www.linkedin.com/in/bloom-tauta'><FaLinkedin/></a>
      </ul>
    </footer>
  )
}

export default Footer