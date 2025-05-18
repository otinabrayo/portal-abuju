import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');

    if (formData.username === 'wairimu' && formData.password === 'love') {
      localStorage.setItem('authenticated', 'true');
      navigate('/subject');
    } else {
      setError('Invalid username or password !!!');
    }
  };

  return (
    <div className="bg-[#FFD1DC] p-10 rounded-3xl flex flex-col items-center justify-center h-screen text-black">
      <div className='bg-[url(/src/assets/hands_up.jpg)] bg-cover bg-center p-10 rounded-3xl'>
        <p className='text-4xl font-bold'>Wairimu's Grieviance Portal ❤️</p>
        <br />
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            autoComplete="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
            className='border-3 border-pink-400 rounded-md p-3 mb-6 mt-3 focus:border-green-500 focus:outline-none'
            required
          />
          <br />
          <input
            autoComplete="current-password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            className='border-3 border-pink-400 rounded-md p-3 mb-6 focus:border-green-500 focus:outline-none'
            required
          />
          <br />
          {error && (<p className="text-red-500 mb-4">{error}</p>)}
          <button
            type="submit"
            className='bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
