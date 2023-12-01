'use client'

import ListCar from "@/data/ListCar"
import Image from 'next/image'
import { useState } from "react"

const Cars = () => {

  const [selectCart, setSelectCar] = useState('')


  return (
    <div className="mt-2 ">
     <h2 className="font-semibold text-[18px]">Select cars</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-2 items-center justify-center  mt-2">
           {ListCar.map((car, index)=> (
             <div 
              onClick={()=>{setSelectCar(index)}}
              className={`border-[1px] p-2 rounded-md ${selectCart == index ? 'border-yellow-500 border-[2px]' : ''} hover:border-yellow-400 cursor-pointer hover:scale-105 transition-transform duration-200`}  key={car.id} >
              <Image className="w-full" src={car.image} width={200} height={150}/>
              <div className="py-2  flex justify-between">
              <h2 className="text-[15px] text-gray-500 font-semibold">{car.name}</h2>
              <span className="text-black font-medium">{car.charges * 8} $</span>
           </div>
           </div>
           ))}
      </div>
    </div>
  )
}

export default Cars