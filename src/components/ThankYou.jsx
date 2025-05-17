import React from 'react'

function ThankYou() {
  return (
    <div className='bg-[url(/src/assets/ours.jpg)] bg-cover bg-center border-2 rounded-3xl'>
    <div className='pt-10 justify-center items-center text-black
    flex flex-col gap-4  p-10 rounded-3xl justify-center items-center
    '>
      <h1 className='text-3xl font-bold'>Thank You 😋, Anne Wairimu.</h1>
      <p className='text-xl text-center'>Your Grieviance has been sent to
        <br />
        <span className='text-blue-500 font-bold text-2xl'>Brian Otina 💌</span>.
        <br />
        He will get back to you very soon! <br />
        (He will think about it and then reply)
      </p>
        <br />
        <button
          onClick={() => {
            window.location.href = '/subject'
          }}
          className='hover:scale-[1.12] bg-fuchsia-900 text-white px-4 py-2 rounded-md cursor-pointer'>
          Submit Another
        </button>
    </div>
    </div>
  )
}

export default ThankYou;