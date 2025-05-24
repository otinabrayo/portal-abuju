import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center px-4'>
      <h1 className="text-4xl font-bold text-pink-700 mb-6">🌹 Grieviance Portal</h1>

      <div className='bg-pink-200 p-10 rounded-3xl shadow-lg max-w-md w-full transform transition-all hover:scale-105 hover:shadow-xl'>
        <h1 className='text-xl sm:text-2xl font-semibold text-pink-900 mb-4'>
          Hello Babe 😍<br /> Welcome to your very own Grieviance Portal, abuju 😘
        </h1>

        <p className='text-md text-pink-800 mb-6'>
          As requested, you can submit your serious😒 or lame 🤣made-up grievances, for my viewing pleasure.
        </p>

        <div className="flex flex-col gap-4">
          <a
            onClick={() => navigate('/login')}
            className='inline-block w-full sm:w-auto px-6 py-3 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-full shadow-md transition duration-300 transform hover:scale-105 cursor-pointer'
          >
            🔐 Login to Your Account
          </a>

          {/* <a
            onClick={() => navigate('/register')}
            className='inline-block w-full sm:w-auto px-6 py-3 bg-pink-400 hover:bg-pink-400 text-white font-bold rounded-full shadow-md transition duration-300 transform hover:scale-105 cursor-pointer'
          >
            ✒ Create New Account
          </a> */}

        </div>
        <p className="mt-6 text-sm text-pink-700">
          — don't forget to smile 😙
        </p>
      </div>
    </div>
  )
}

export default WelcomePage;