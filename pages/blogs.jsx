import React from 'react'
import Head from 'next/head'

export default function Blogs() {
  return (
    <div>

      <Head>
        <title>Blogs - Late Night Coder</title>
      </Head>
      <div className="container mx-auto p-10 space-y-7">
        <h1 className='text-2xl'>Welcome! Lets get you updated!!</h1>
        <div className="px-5 w-2/4">
          <h2 className="text-xl">Here are the latest blogs</h2>

          <div className="container mx-auto p-3">
            <h3 className="font-semibold">learn js in 2022</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, exercitationem voluptatum fuga nisi sint est iure vel cum magnam praesentium!</p>
          </div>
          <div className="container mx-auto p-3">
            <h3 className="font-semibold">learn js in 2022</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, exercitationem voluptatum fuga nisi sint est iure vel cum magnam praesentium!</p>
          </div>
          <div className="container mx-auto p-3">
            <h3 className="font-semibold">learn js in 2022</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, exercitationem voluptatum fuga nisi sint est iure vel cum magnam praesentium!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
