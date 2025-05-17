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
    e.preventDefault(); // ✅ Prevent page reload
    console.log('Submitted'); // ✅ Test if this shows

    if (formData.username === 'wairimu' && formData.password === 'love') {
      localStorage.setItem('authenticated', 'true');
      navigate('/subject');
    }
  };

  return (
    <div className='p-10 rounded-3xl flex flex-col items-center justify-center h-screen text-black'>
      <div className='bg-[url(/src/assets/hands_up.jpg)] bg-cover bg-center p-10 rounded-3xl'>
        <p className='text-4xl font-bold'>Wairimu's Grieviance Portal ❤</p>
        <br />
        <form onSubmit={handleSubmit}> {/* ✅ THIS is the key */}
          <input
            autoComplete="username" // ✅ Add this to silence warning
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
            className='border-3 rounded-md p-3 mb-6 mt-3'
            required
          />
          <br />
          <input
            autoComplete="current-password" // ✅ Add this to silence warning
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            className='border-3 rounded-md p-3 mb-6'
            required
          />
          <br />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className='bg-green-500 rounded-md pt-3 pb-3 pl-7 pr-7
              hover:scale-[1.05] transform text-xl
              transition-transform duration-400'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
