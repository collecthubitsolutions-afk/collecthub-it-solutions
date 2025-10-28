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

        <h1 className='font-poppins font-bold ss:text-[48px] text-[32px] text-darkGray ss:leading-[60px] leading-[42px] max-w-4xl'>
          Accept Payments with{" "}
          <span className='text-gradient'>Easypaisa & JazzCash</span>
        </h1>

        <p className='text-gray-600 text-[15px] leading-[24px] max-w-2xl mt-5'>
          Seamlessly collect payments from your customers using Pakistan's most trusted mobile payment platforms. Quick, secure, and hassle-free payment collection for your business.
        </p>

        {/* Payment Method Badges */}
        <div className='flex gap-4 mt-8 flex-wrap justify-center items-center'>
          <div className='bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold text-[16px] shadow-lg'>
            Easypaisa
          </div>
          <div className='bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-bold text-[16px] shadow-lg'>
            JazzCash
          </div>
        </div>

        <div className='flex gap-3 mt-8 flex-wrap justify-center'>
          <button
            onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}
            className='bg-primary text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-secondary transition-all duration-300 shadow-md'
          >
            Learn More
          </button>
          <button
            onClick={() => document.getElementById('substores')?.scrollIntoView({ behavior: 'smooth' })}
            className='border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-dimOrange transition-all duration-300'
          >
            View Our Stores
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
