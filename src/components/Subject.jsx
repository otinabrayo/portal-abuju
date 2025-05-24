import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThankYou from './ThankYou';

function Subject() {
  const [formData, setFormData] = useState({
    Title: '',
    Message: '',
    Mood: '',
    Severity: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Title || !formData.Message || !formData.Mood || !formData.Severity) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xeognvez', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      navigate('/thankyou');
      setError('');
      setFormData({
        Title: '',
        Message: '',
        Mood: '',
        Severity: ''
      });
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    }
  };

  return (
    <div className="relative rounded-xl justify-center items-center text-black bg-pink-200 h-screen p-20">
      <button
        className="absolute top-6 right-6 bg-white text-pink-500 border border-pink-400 px-4 py-2 rounded-full shadow hover:bg-pink-100 font-semibold z-50"
        onClick={() => navigate('/')}
      >
        Log Out
      </button>
      <div className="bg-[url(/assets/ours.jpg)] bg-cover bg-center p-10 rounded-3xl justify-center items-center">
        <h1 className="text-3xl font-bold">Submit a Grieviance 🌹</h1>
        <span className="block my-3 text-left">
          Click to fill{' '}
          <button
            onClick={() => navigate('/o_subject')}
            type="button"
            className="transition transform hover:scale-1.01 ml-2 bg-gradient-to-r from-pink-200 to-pink-400 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Grieviance to my Girlfriend ❤
          </button>
        </span>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <ThankYou />}
        <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-7/12">
          <input
            required
            type="text"
            name="Title"
            placeholder="Title"
            value={formData.Title}
            onChange={handleChange}
            className="border-3 border-pink-400 rounded-md p-3 mb-6 mt-3 focus:border-green-500 focus:outline-none"
          />
          <textarea
            name="Message"
            placeholder="What's bothering you babe 😘"
            value={formData.Message}
            onChange={handleChange}
            className="border-3 border-pink-400 rounded-md p-9 mb-6 focus:border-green-500 focus:outline-none"
            required
          ></textarea>
          <p className="text-xl">Mood :</p>
          <select
            required
            name="Mood"
            value={formData.Mood}
            onChange={handleChange}
            className="border-3 border-pink-400 rounded-md p-3 mb-6 focus:border-green-500 focus:outline-none"
          >
            <option value="" disabled>Select your mood</option>
            <option value="😠 are you serious">😠 are you serious</option>
            <option value="😢 sad">😢 sad</option>
            <option value="😡 angry">😡 angry</option>
            <option value="🤦‍♀️ stressed">🤦‍♀️ stressed</option>
            <option value="👎 booooo!! fuck off">👎 booooo!! fuck off</option>
          </select>
          <p className="text-xl">Severity :</p>
          <select
            required
            name="Severity"
            value={formData.Severity}
            onChange={handleChange}
            className="border-3 border-pink-400 rounded-md p-3 mb-6 focus:border-green-500 focus:outline-none"
          >
            <option value="" disabled>Select severity</option>
            <option value="Saying you love me would make me feel better">
              Saying you love me would make me feel better.
            </option>
            <option value="Buying me some Yorghut/Chocolate would fix this">
              Buying me some snack would fix this.
            </option>
            <option value="You're a shitty boyfriend">You're a shitty boyfriend.</option>
            <option value="I could use a hug right now">I could use a hug right now.</option>
            <option value="Please call me ASAP red Alert⏰ BRIAN">
              Please call me ASAP red Alert⏰ BRIAN.
            </option>
            <option value="I'm not sure what to do babe reach out to me">
              I'm not sure what to do babe reach out to me.
            </option>
          </select>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105"
          >
            Submit 💌
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subject;
