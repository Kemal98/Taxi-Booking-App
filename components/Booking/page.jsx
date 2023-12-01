import Address from './Address'
import Cars from './Cars'
import Payment from './Payment'

const Booking = () => {
  return (
     <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
         <div className='border-[1px] border-gray-400 rounded-md p-5 mt-3'>
          <Address/>
          <Cars/>
          <Payment/>
          <button className='w-full bg-yellow-400 mt-4 font-semibold rounded-md  py-1.5 '>Book</button>
        </div>
    </div>
  )
}

export default Booking