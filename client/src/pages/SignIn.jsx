import React from 'react'

function SignIn() {

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChange(e) {
    e.target.value
  }
  return (
    <div className='mx-auto max-w-lg'>
        <h1 className='text-3xl my-8 text-center'>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
                type='email'
                placeholder='Email'
                className='border rounded-lg p-3 my-4'
                onChange={handleChange}
            />
            <input
                type='password'
                placeholder='Password'
                className='border rounded-lg p-3 my-4'
                onChange={handleChange}
            />
            <button className='bg-blue-400 text-white p-2 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default SignIn