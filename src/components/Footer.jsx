import React from 'react'
import styles from '../style'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className='w-full bg-lightGray mt-16'>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          {/* Main Footer Content */}
          <div className='flex flex-col items-center text-center mb-8'>
            {/* Brand Section */}
            <div className='max-w-2xl'>
              <h1 className='font-poppins font-bold mb-4'>
                <span className='text-gradient text-[18px]'>CollectHub IT Solutions PVT.LTD</span>
              </h1>
              <p className='text-gray-600 text-[13px] leading-[20px] mb-6'>
                Your trusted payment collection platform for businesses.
              </p>

              {/* Contact Information */}
              <div className='flex flex-col sm:flex-row justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center'>
                  <svg className='w-4 h-4 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <a href='mailto:info@collecthub.com' className='text-[12px] text-gray-600 hover:text-primary transition-all'>
                    info@collecthub.com
                  </a>
                </div>
                <div className='flex items-start gap-2 justify-center'>
                  <svg className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <p className='text-[12px] text-gray-600 leading-[18px]'>
                    Office No 3, 3rd Floor, 1st Commercial Plaza, New Jallo Town & Market L, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='font-poppins text-[12px] text-gray-600 text-center'>
              © 2024 CollectHub IT Solutions PVT.LTD. All Rights Reserved.
            </p>
            <div className='flex gap-4'>
              {socialMedia.map((social) => (
                <a
                  href={social.link}
                  key={social.id}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-primary transition-all border border-gray-300'
                >
                  <img
                    src={social.icon}
                    alt={social.id}
                    className='w-4 h-4 object-contain'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
