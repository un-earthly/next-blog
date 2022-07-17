import React from 'react'
import Head from 'next/head'
export default function Contact() {
  return (
    <div>

      <Head>
        <title>Contact - Late Night Coder</title>
      </Head>
      <form className='max-w-md flex items-center justify-center flex-col space-y-7 mx-auto'>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="input focus:outline-none bg-base-300 my-2 w-full rounded-md" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="input focus:outline-none bg-base-300 my-2 px-3 py-2 w-full rounded-md" required />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" className="input focus:outline-none bg-base-300 my-2 px-3 py-2 w-full rounded-md" required />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="subject">Message</label>
            <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" className="input focus:outline-none bg-base-300 my-2 h-40 w-full px-3 py-2 rounded-md" required />
          </div>
        </div>
        <button type="submit" className="btn btn-secondary w-full">
          Submit
        </button>
      </form>


    </div>
  )
}
