import React from 'react';

function ThankYou() {
  const [redirecting, setRedirecting] = React.useState(false);

  return (
    <div className="rounded-xl justify-center items-center text-black bg-[url(/assets/flower.jpg)] bg-cover bg-center h-screen pt-40 p-10">
      <div className="bg-[url(/assets/3_rivers.jpg)] pt-40 bg-cover bg-center border-2 rounded-2xl">
        <div className="pt-10 justify-center items-center text-black flex flex-col gap-4 p-10 rounded-3xl">
          {redirecting ? (
            <div className="animate-spin rounded-full border-4 border-pink-500 border-t-transparent w-8 h-8"></div>
          ) : (
            <>
              <h1 className="text-3xl font-bold animate-bounce">Thank You 😋, Anne Wairimu 💕.</h1>
              <p className="bg-black rounded-md px-2 py-1 text-zinc-50 text-xl">Your Grieviance has been sent to <span className="text-rose-500">Brian Otina 💌</span>.</p>
              <p className="bg-black rounded-md px-2 py-1 text-zinc-50 text-xl">He will get back to you very soon! ✔ (He will think about it and then reply)</p>
              <button
                onClick={() => {
                  setRedirecting(true);
                  setTimeout(() => {
                    window.location.href = '/portal-abuju/subject';
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