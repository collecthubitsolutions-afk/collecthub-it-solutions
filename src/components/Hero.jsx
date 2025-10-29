import styles from '../style'
import { useNavigate } from 'react-router-dom'
import { discount ,robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id='home' className={`${styles.paddingY} bg-white`}>
      <div className={`${styles.flexCenter} flex-col text-center xl:px-0 sm:px-16 px-6`}>
        <div className='inline-flex items-center py-[6px] px-4 bg-orange-gradient rounded-[10px] mb-4 shadow-md'>
          <svg className='w-[32px] h-[32px] text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <p className='ml-2 text-[14px] font-medium'>
            <span className='text-white'>Fast & Secure</span>{" "}
            <span className='text-white'>Payment Collection</span>
          </p>
        </div>

        <h1 className='font-poppins font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-darkGray leading-[36px] sm:leading-[48px] md:leading-[54px] lg:leading-[60px] max-w-4xl px-4'>
          Accept Payments with{" "}
          <span className='text-gradient'>Easypaisa & JazzCash</span>
        </h1>

        <p className='text-gray-600 text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] max-w-2xl mt-5 px-4'>
          Seamlessly collect payments from your customers using Pakistan's most trusted mobile payment platforms. Quick, secure, and hassle-free payment collection for your business.
        </p>

        {/* Payment Method Badges */}
        <div className='flex gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap justify-center items-center px-4'>
          <div className='bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[16px] shadow-lg'>
            Easypaisa
          </div>
          <div className='bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[16px] shadow-lg'>
            JazzCash
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 w-full max-w-md px-4'>
          <button
            onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}
            className='bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-[14px] sm:text-[15px] hover:bg-secondary transition-all duration-300 shadow-md w-full sm:w-auto'
          >
            Learn More
          </button>
          <button
            onClick={() => document.getElementById('substores')?.scrollIntoView({ behavior: 'smooth' })}
            className='border-2 border-primary text-primary px-6 sm:px-8 py-3 rounded-lg font-semibold text-[14px] sm:text-[15px] hover:bg-dimOrange transition-all duration-300 w-full sm:w-auto'
          >
            View Our Stores
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
