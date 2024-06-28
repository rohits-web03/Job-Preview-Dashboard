import React from 'react'

const Tabs = () => {
  return (
    <div className='font-sans font-semibold flex justify-start items-center gap-8 border-y-2 pl-16 py-4'>
        <p className='text-[#DC4A2D] text-lg underline underline-offset-[22px] cursor-pointer'>Job preview</p>
        <p className='text-[#B0B0B0] text-base cursor-pointer'>Applicants</p>
        <p className='text-[#B0B0B0] text-base cursor-pointer'>Match</p>
        <p className='text-[#B0B0B0] text-base cursor-pointer'>Messages</p>
    </div>
  )
}

export default Tabs;