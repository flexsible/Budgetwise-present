import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { sessionStore } from '../stores/stores'
import Swal from 'sweetalert2'
// import Navigation from './Navigation'

export default function LandingPage () {
  const navigate = useNavigate()
  const [session, setSession] = useAtom(sessionStore)
  // const onClickHandler = () => {
  //   if (session.user.role === 'authenticated') {
  //     navigate('/budgets')
  //   } else if (!session) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Please login to access the features!'
  //     })
  //   }
  // }

  const onClickHandler = () => {
    const storedToken = localStorage.getItem('sb-jakimybhtjdbdhptzkxw-auth-token')
    if (!storedToken) {
      Swal.fire({
        title: 'Oops! Please login to access the features',
        showCancelButton: true,
        confirmButtonText: 'OK',
        icon: 'error'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate('/auth/login')
        }
      })
    }
    if (storedToken) {
      navigate('/budgets')
    }
  }

  return (
    <>
    {/* <Navigation/> */}
      <div className="py-6 flex gap-6 justify-center bg-biru h-screen bg-line bg-no-repeat bg-bottom bg-contain" id='hero'>
        <div className='flex flex-col place-content-center items-start me-4 md:px-8'>
          <h2 className='text-white text-2xl text-left drop-shadow-lg font-semibold md:text-xl'>Smart Choices, Brighter Futures</h2>
          <h1 className='text-6xl font-bold text-white drop-shadow-lg my-1 md:text-5xl'>
            <span className='text-[#F4D35E]'>NAVIGATE YOUR </span>FINANCE <br /> WITH <span className='text-[#F4D35E]'>CONFIDENCE</span>
          </h1>
          <h2 className='text-[#F4D35E] text-2xl drop-shadow-lg font-semibold md:text-xl'>Your Path to Financial Success</h2>
          <button onClick={onClickHandler} className="my-6 block font-bold text-white rounded-lg px-6 py-4 text-xl bg-[#EE946B] md:px-5 md:py-3 md:text-lg">Get Started</button>
        </div>
        <div className='flex items-center me-4'>
          <img src="/Home_logo.png" alt="" />
        </div>
      </div>
    </>
  )
}
