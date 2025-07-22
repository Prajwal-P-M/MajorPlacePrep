import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Header = () => {
 const navigate = useNavigate()
  const {userData, isLoggedIn}=useContext(AppContext)
  
 const start=async()=>{
  console.log()
      if(isLoggedIn){
        navigate('/header2')
      }

 }

  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      <img src={assets.header_img} alt=''
      className='w-36 h-36 rounded-full mb-6'></img>
      <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
      Hey {userData? userData.name:"Devloper"}!
  <img  className=' w-8 aspect-square'src={assets.hand_wave} alt='' ></img></h1>

   <h2 className=' text-3xl sm:text-5xl font-semibold mb-4'>Welcome to our app</h2>
   <p className=' mb-8 max-w-md'>lets start with a quick product tour and we will have you up and running in on time</p>
   <button onClick={start} className=' border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'>Get started</button>
    </div>
  )
}

export default Header
