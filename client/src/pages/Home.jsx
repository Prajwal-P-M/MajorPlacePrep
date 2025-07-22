import React from 'react'
import Navbar from '../componants/Navbar'
import Header from '../componants/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
      <Navbar></Navbar>
      <Header></Header>
    </div>
  )
}

export default Home

