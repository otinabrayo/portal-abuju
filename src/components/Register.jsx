import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

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

            navigate('/login');
        } catch (error) {
            console.error('Google Sign In Error:', error);
            setError('Failed to sign in with Google. Please try again.');
        }
    };

    const handleGoogleError = () => {
        setError('Google Sign In was unsuccessful. Please try again.');
    };

    return (
        <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Create Your Account ❤️</h1>

                <div className="mb-6">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        useOneTap={false}
                        theme="filled_blue"
                        text="signup_with"
                        shape="rectangular"
                        width="400"
                        type="standard"
                        size="large"
                    />
                </div>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue login</span>
                    </div>
                </div>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <a href="/portal-abuju/login" className="text-pink-500 hover:text-pink-600 font-small">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
