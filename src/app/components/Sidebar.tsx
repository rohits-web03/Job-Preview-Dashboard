import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    const sidebarItems=[
        {id:1,icon_src:'/users.svg', icon_alt:'Applicants svg',label:'Applicants',value:400},
        {id:1,icon_src:'/user-check.svg', icon_alt:'Matches svg',label:'Matches',value:100},
        {id:1,icon_src:'/message-sidebar.svg', icon_alt:'Message svg',label:'Messages',value:147},
        {id:1,icon_src:'/views.svg', icon_alt:'Eye svg',label:'Views',value:800}
    ];
  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-8 p-8 border-l border-[#E7E7E7]'>
        <div className='flex justify-center items-center gap-4'>
            <button className='flex justify-center items-center gap-2 border-2 border-[#DC4A2D] rounded-lg px-4 py-2'>
                <Image src='/trash.svg' alt='Trash svg' width={22} height={22} />
                <p className='text-base text-[#DC4A2D]'>Delete job</p>
            </button>
            <button className='flex justify-center items-center gap-2 bg-[#DC4A2D] rounded-lg px-4 py-2'>
                <Image src='/edit.svg' alt='Edit svg' width={22} height={22} />
                <p className='text-base text-white'>Edit job</p>
            </button>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-4'>
            {sidebarItems.map((item)=>(
                <div key={item.id} className='w-full flex justify-between items-center pb-4 border-b border-[#E7E7E7]'>
                    <div className='flex justify-center items-center gap-3'>
                        <Image src={item.icon_src} alt={item.icon_alt} width={22} height={22} />
                        <p>{item.label}</p>
                    </div>
                    <p className='font-semibold'>{item.value}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar