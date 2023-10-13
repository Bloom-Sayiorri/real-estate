import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('api/auth/signup',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setFormData(data);
  };

  return (
    <div className='mx-auto my-5 max-w-lg'>
      <h1 className='my-8 text-center text-3xl'>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text" placeholder="Username" id='username' onChange={handleChange}
          className='border rounded-lg p-3 my-4'
        />
        <input
          type="email" placeholder="Email" id='email' onChange={handleChange}
          className=' border rounded-lg p-3 my-4'
        />
        <input
          type="password" placeholder="Password" id='password' onChange={handleChange}
          className=' border rounded-lg p-3 my-4'
        />
        <button className="bg-blue-500 text-white border rounded-lg p-3 hover:opacity-90 disabled:bg-slate-500">Sign Up</button>
      </form>
      <div className="flex gap-3 my-7">
        <p className="flex">Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp