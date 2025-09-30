"use client"
import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import Logo from '../public/Images/For Boodi - White FHA.png'

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const runnav = (): void => {
    setIsClick(!isClick);
  };

  const handleClick = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => {
    setIsClick(false);
  };

  return (
    <div>
      <nav className='bg-gray-900 transition-all duration-500 fixed top-0 w-full z-50'>
        <div className='justify-start ml-4 sm:ml-6 md:ml-9'>
          <div className='flex items-center justify-between h-16'>
            
            {/* Left: Logo */}
            <div className='flex items-center flex-grow'>
              <div className='flex-shrink-0'>
                <Link href="/" className='text-white font-bold text-xl'>
                  <Image src={Logo} alt="FHA Logo" className="h-8 sm:h-10 w-auto object-contain" />
                </Link>
              </div>
            </div>

            {/* Center: Nav Links */}
            <div className='hidden md:flex justify-center'>
              <div className='flex items-center space-x-4 lg:space-x-6'>
                <Link href="/" className='text-white hover:text-blue-500 p-2 rounded-lg transition-colors'>
                  Home
                </Link>
                <Link href="#Aboutus" className='text-white hover:text-blue-500 p-2 rounded-lg transition-colors'>
                  About Us
                </Link>
                <Link href="#Services" className='text-white hover:text-blue-500 p-2 rounded-lg transition-colors'>
                  Services
                </Link>
              </div>
            </div>

            {/* Right: Contact Us Button */}
            <div className='hidden lg:flex items-center justify-end mr-4 flex-grow'>
              <button 
                onClick={handleClick} 
                className='bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition-colors'
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center mr-4'>
              <button 
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors'
                onClick={runnav}
                aria-label="Toggle menu"
              >
                {isClick ? (
                  <svg
                    fill="none"
                    className="w-6 h-6"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    className="w-6 h-6"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
            isClick ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
          style={{ top: '64px' }}
        />

        {/* Mobile Menu - Slide from Right */}
        <div 
          className={`md:hidden fixed right-0 top-16 h-full w-64 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isClick ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='px-4 pt-6 pb-3 space-y-3'>
            <Link 
              href="/" 
              className='text-white block hover:text-blue-500 hover:bg-gray-800 p-3 rounded-lg transition-colors'
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#Aboutus" 
              className='text-white block hover:text-blue-500 hover:bg-gray-800 p-3 rounded-lg transition-colors'
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              href="#Services" 
              className='text-white block hover:text-blue-500 hover:bg-gray-800 p-3 rounded-lg transition-colors'
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="#Contact" 
              className='text-white block hover:text-blue-500 hover:bg-gray-800 p-3 rounded-lg transition-colors'
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}