import React from 'react'

function Subject() {
  return (
    <div className='pt-10 justify-center items-center text-black'>
      <div className='bg-[url(/src/assets/ours.jpg)] bg-cover bg-center p-10 rounded-3xl justify-center items-center'>
        <h1 className='text-3xl font-bold'>Submit a Grieviance 🌹</h1>
        <form
          action="https://formspree.io/f/xeognvez"
          method='POST'
          className=" flex flex-col w-full md:w-7/12"
        >
          <input
            required
            type="text"
            name="Title"
            placeholder='Title'
            className='border-3 rounded-md p-3 mb-6 mt-3'
          />
          <textarea
            name="Message"
            placeholder="What's bothering you babe 😘"
            className='border-3 rounded-md p-9 mb-6'
            required
          />
          <br />
          <p className='text-xl'>Mood :</p>
          <select
            required
            name="Mood"
            className='border-3 rounded-md p-3 mb-6'
          >
            <option value="" disabled selected>Select your mood</option>
            <option value="😠 are you serious">😠 are you serious</option>
            <option value="😢 sad">😢 sad</option>
            <option value="😡 angry">😡 angry</option>
            <option value="🤦‍♀️ stressed">🤦‍♀️ stressed</option>
            <option value="👎 booooo!! fuck off">👎 booooo!! fuck off</option>
          </select>
          <br />
          <p className='text-xl'>Severity :</p>
          <select
            required
            name="Severity"
            className='border-3 rounded-md p-3 mb-6'
          >
            <option value="" disabled selected>Select severity</option>
            <option value="Saying you love me would make me feel better">Saying you love me would make me feel better.</option>
            <option value="Buying me some Yorghut/Chocolate would fix this">Buying me some snack would fix this.</option>
            <option value="You're a shitty boyfriend">You're a shitty boyfriend.</option>
            <option value="I could use a hug right now">I could use a hug right now.</option>
            <option value="Please call me ASAP red Alert⏰ BRIAN">Please call me ASAP red Alert⏰ BRIAN.</option>
            <option value="I'm not sure what to do babe reach out to me">I'm not sure what to do babe reach out to me.</option>
          </select>

          <button type='submit'
            className='bg-green-500 rounded-md pt-3 pb-3 pl-7 pr-7
              hover:scale-[1.05] transform text-xl
              transition-transform duration-400'
            onClick={() => {
              window.location.href = '/thankyou'
            }}
          >
            Submit 💌
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subject;