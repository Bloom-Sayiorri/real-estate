import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='shadow-md bg-slate-200'>
      <div className='flex justify-between p-3 max-w-6xl mx-auto items-center'>
        <Link to='/'>
          <div className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <h1 className='text-slate-400'>Realtors</h1>
            <h1 className='text-blue-900'>Estates</h1>
          </div>
        </Link>
          
        <form className="bg-slate-100 rounded-md items-center p-3 flex sm:text-sm">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48"
          />
          <FaSearch className='text-blue-400'/>
        </form>

        <ul className='flex gap-4 sm:gap-6'>
          <Link to='/' className=''>Home</Link>
          <Link to='/about' className=''>About</Link>
          <Link to='/sign-in' className=''>SignIn</Link>
        </ul>
      </div>
    </header>
    
  )
} 

export default Header