'use client'

import Booking from '@/components/Booking/page'
import MapBox from '@/components/Map/Map'
import { UserButton } from '@clerk/nextjs'
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setLocation } from './state/UserLocation/userLocation';

export default function Home() {

  const dispatch = useDispatch()

  // const location = useSelector((state) => state.location.value);
  // console.log(location)

  useEffect(()=>{
    GetUserLocation()
  },[])
   
  const GetUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos)
      dispatch(setLocation({
        lng:pos.coords.longitude,
        lat:pos.coords.latitude
      }))
    })
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className=' '>
       <Booking/>
      </div>
      <div className='px-6 md:px-[0px]'>
        <MapBox/>
      </div>
    </div>
  )
}



