import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='bg-rose-400 p-10 rounded-3xl'>
        <h1 className='text-3xl font-bold'>
          Welcome to your very own Grieviance Portal, abuju
        </h1>
        <br />
        <p>
          As requested, you can submit your lame made-up grievances, for my viewing pleasure.
        </p>
        <br />
        <p className='text-xl'>
          Login to your account:
        </p>
        <br />
        <button
          type='button'
          className='cursor-pointer bg-rose-300 text-white text-xl px-30 py-3
          rounded-md hover:scale-[1.05] transform
          transition-transform duration-400 transition-all duration-300'
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default WelcomePage;