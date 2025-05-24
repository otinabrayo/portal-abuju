import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Check for specific credentials
      if (formData.username === 'wairimu' && formData.password === 'love') {
        console.log('Login successful, setting authentication...');
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('username', formData.username);
        navigate('/subject');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#FFD1DC] p-10 rounded-3xl flex flex-col items-center justify-center h-screen text-black">
      <button
        className="absolute top-5 bg-white text-pink-500 border border-pink-400 px-4 py-2 rounded-full shadow hover:bg-pink-100 font-semibold z-50 flex items-center gap-2"
        onClick={() => navigate('/')}
      >
        <span>←</span>Back to Welcome Page
      </button>
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
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account? <a href="/register" className="text-pink-500 hover:text-pink-600">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
