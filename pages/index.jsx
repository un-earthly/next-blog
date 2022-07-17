import Head from 'next/head'
import Blogs from './blogs'

export default function Home() {
  return (
    <div className='font-poppins'>
      <Head>
        <title>LNC | LATE NIGHT CODER | THE MERN STAR.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/6463/6463383.png" />
      </Head>
      <Blogs />
    </div>
  )
}