import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const [redirecting, setRedirecting] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative rounded-xl justify-center items-center text-black bg-[url(/assets/flower.jpg)] bg-cover bg-center h-screen pt-40 p-10">
      <span className="text-8xl animate-pulse absolute top-6">❤</span>
      <button
        className="absolute top-6 right-6 bg-white text-pink-500 border border-pink-400 px-4 py-2 rounded-full shadow hover:bg-pink-100 font-semibold z-50"
        onClick={() => navigate('/login')}
      >
        Log Out
      </button>
      <div className=" pt-40 bg-cover bg-center border-3 border-pink-100 rounded-2xl">

        <div className="pt-10 justify-center items-center text-black flex flex-col gap-4 p-10 rounded-3xl">
          {redirecting ? (
            <div className="animate-spin rounded-full border-4 border-pink-500 border-t-transparent w-8 h-8"></div>
          ) : (
            <>
              <h1 className="text-3xl font-bold animate-bounce">Thank You Babe💕.</h1>
              <p className="bg-black rounded-md px-2 py-1 text-zinc-50 text-xl">Your Grieviance has been sent to your <span className="text-rose-500"> love 💌</span>.</p>
              <p className="bg-black rounded-md px-2 py-1 text-zinc-50 text-xl">I'll get back to you very soon! ✔ I Love you so much Babe 💕</p>
              <button
                onClick={() => {
                  setRedirecting(true);
                  setTimeout(() => {
                    navigate('/subject');
                  }, 1000);
                }}
                className="hover:scale-[1.12] bg-fuchsia-900 text-white px-4 py-2 rounded-md cursor-pointer shadow-md hover:shadow-lg transition duration-300"
              >
                Submit Another
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThankYou;