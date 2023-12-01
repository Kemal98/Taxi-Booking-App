import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center border-b-[1px] p-3 shadow-lg justify-between'>
        <div className='flex items-center gap-10'>
            <Image src={'/logo.png'} alt='logo' width={170} height={100}/>
            <ul className='hidden md:flex gap-6'>
                <li className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</li>
                <li className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</li>
            </ul>
        </div>
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default NavBar



















