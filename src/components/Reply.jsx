import React, { useState } from 'react';
import { FaHeart, FaPaperPlane } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

function Reply() {
  const [replyMessage, setReplyMessage] = useState('');
  const [moodFeedback, setMoodFeedback] = useState('');
  const [actionPlan, setActionPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!replyMessage.trim()) {
      setError('Please write a response before sending.');
      return;
    }

    if (!moodFeedback) {
      setError('Please select how you feel about this.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mdkgrejr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Type: 'Reply',
          ReplyMood: moodFeedback,
          ReplyMessage: replyMessage,
          actionPlan: actionPlan,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reply');
      }

      // Clear form
      setReplyMessage('');
      setMoodFeedback('');
      setActionPlan('');

      // Show success message and redirect
      alert('Your reply has been sent! ❤️');
      navigate('/');
    } catch (err) {
      setError('Failed to send reply. Please try again.');
      console.error('Reply submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-pink-300 p-4 rounded-lg shadow-2xl">
      <h1 className="text-3xl font-bold text-center mb-4">Responding to my Love Otina ❤</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-medium mb-2">Your Reply:</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="mb-2">
          <label htmlFor="moodFeedback" className="block text-sm font-medium text-rose-700">
            How do you feel about this?
          </label>
          <select
            id="moodFeedback"
            value={moodFeedback}
            onChange={(e) => setMoodFeedback(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={isLoading}
          >
            <option value="" disabled>Select your feeling about it</option>
            <option value="😊">😊 Happy</option>
            <option value="😐">😐 Neutral</option>
            <option value="😔">😔 Sad</option>
            <option value="😡">😡 Angry</option>
            <option value="😕">😕 Confused</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="replyMessage" className="block text-sm font-medium text-rose-700">
            Write your response:
          </label>
          <textarea
            id="replyMessage"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            rows="4"
            className="text-rose-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={isLoading}
            placeholder="Write your heartfelt response here..."
          />
        </div>

        <div className="mb-2">
          <label htmlFor="actionPlan" className="text-rose-700 block text-sm font-medium text-gray-700">
            What actions will you take?
          </label>
          <textarea
            id="actionPlan"
            value={actionPlan}
            onChange={(e) => setActionPlan(e.target.value)}
            rows="3"
            className="text-rose-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={isLoading}
            placeholder="List the actions you'll take to address this..."
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              Send Reply <FaPaperPlane className="ml-2" />
            </>
          )}
        </button>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Sent with love <FaHeart className="inline-block ml-1" />
        </p>
      </div>
    </div>
  );
}

export default Reply;