import React from 'react'
import  { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div>
        footer    
      </div>
      <ul>
        <a href='https://twitter.com/'><FaXTwitter/></a>
        <a href='https://github.com/Bloom-Sayiorri'><FaGithub/></a>
        <a href='www.linkedin.com/in/bloom-tauta'><FaLinkedin/></a>
      </ul>
    </footer>
  )
}

export default Footer