import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center px-8 py-4'>
        <div className='bg-[#E7E7E7] px-4 py-2'>
            <Link href="/" passHref>
                <p className='text-[#DC4A2D]'>Logo</p>
            </Link>
        </div>
        <div className='flex justify-center items-center gap-3 border p-2 rounded-full'>
            <div className='bg-[#DC4A2D] flex justify-center items-center gap-1 px-3 py-2 rounded-full cursor-pointer'>
                <Image src='/briefcase-02.svg' alt='Jobs' width={12} height={12} />
                <p className='text-white text-sm'>Jobs</p>
            </div>
            <div className='flex justify-center items-center gap-1 px-2 py-1 cursor-pointer'>
                <div className='relative'>
                    <span className='absolute top-0 right-0 w-[0.45rem] h-[0.45rem] rounded-full bg-red-600'></span>
                    <Image src='/message-square-01.svg' alt='Messages' width={22} height={22} />
                </div>
                <p className='text-[#B0B0B0] text-sm'>Messages</p>
            </div>
            <div className='flex justify-center items-center gap-1 px-2 py-1 cursor-pointer'>
                <Image src='/coins-hand.svg' alt='Payments' width={22} height={22} />
                <p className='text-[#B0B0B0] text-sm'>Payments</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <div className='relative'>
                <span className='absolute top-0 right-1 w-[0.45rem] h-[0.45rem] rounded-full bg-red-600'></span>
                <Image src='/bell-02.svg' alt='Notification Bell' className='cursor-pointer' width={25} height={25} />
            </div>
            <div className='flex justify-center items-center cursor-pointer'>
                <Image src='/atlassian.svg' alt='Atlassian Logo' width={32} height={32} />
                <Image src='/chevron-down.svg' alt='Dropdown' width={15} height={15} />
            </div>
        </div>
    </header>
  )
}

export default Header;