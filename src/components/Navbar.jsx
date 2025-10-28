import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar bg-white shadow-md px-8'>
      {/* Logo/Brand */}
      <h1
        onClick={() => navigate('/')}
        className='font-poppins font-bold text-darkGray cursor-pointer'
      >
        <span className='text-gradient text-[18px] sm:text-[20px]'>CollectHub IT Solutions PVT.LTD</span>
      </h1>

      {/* Navigation Links */}
      <ul className='list-none flex justify-end items-center gap-8'>
        <li
          onClick={() => scrollToSection('home')}
          className='font-poppins font-medium cursor-pointer text-[15px] text-darkGray hover:text-primary transition-all'
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection('payment-info')}
          className='font-poppins font-medium cursor-pointer text-[15px] text-darkGray hover:text-primary transition-all'
        >
          Why Choose Us
        </li>
        <li
          onClick={() => scrollToSection('substores')}
          className='font-poppins font-medium cursor-pointer text-[15px] text-darkGray hover:text-primary transition-all'
        >
          Substores
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
