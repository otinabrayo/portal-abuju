import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

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

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Google Sign In Success:', decoded);

      // Store user info in localStorage
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('username', decoded.email);
      localStorage.setItem('userInfo', JSON.stringify({
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture
      }));

      navigate('/subject');
    } catch (error) {
      console.error('Google Sign In Error:', error);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  const handleGoogleError = () => {
    setError('Google Sign In was unsuccessful. Please try again.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Check for specific credentials
      if (formData.username === import.meta.env.VITE_USER && formData.password === import.meta.env.VITE_PASS) {
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

        <div className="mb-6">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
            theme="filled_blue"
            text="signin_with"
            shape="rectangular"
            width="100%"
          />
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

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
        <p className="text-sm text-center text-white mt-4">
          Don't have an account? <a onClick={() => navigate('/register')} className="text-pink-500 hover:text-pink-600 cursor-pointer">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
