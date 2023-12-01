'use client'

import PaymentList from '@/data/PaymentList'
import Image from 'next/image'
import { useState } from 'react'

const Payment = () => {
    const [activePayment, setActivePayment] = useState('')
  return (
    <div className='mt-2'>
        <h2 className='font-semibold text-[18px]'>Payment methodes</h2>
        <div className=' grid grid-cols-5 pt-2'>
          {PaymentList.map((payment, index) => (
            <div onClick={() => setActivePayment(index)} className={` ${activePayment == index ? 'border-yellow-400 border-[2px]': 'border-gray-300'} flex items-center justify-center hover:border-yellow-400 duration-300 rounded-sm w-[50px] bg-white border-[1px]`}>
                <Image className='cursor-pointer   hover:scale-105 transition-transform duration-300 p-2' src={payment.image} width={100} height={40}/>
           </div>
          ))}
        </div>
    </div> 
  )
}

export default Payment