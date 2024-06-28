import React from 'react';
import Image from 'next/image';

const JobPreview = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start pt-6 pl-24'>
      <div className='flex flex-col justify-center items-start gap-4'>
        <div className='flex justify-center items-center gap-2'>
          <h2 className='text-3xl font-semibold text-[#3D3D3D]'>Senior Product Designer</h2>
          <span className='hidden md:block bg-[#D1D1D1] rounded-full w-1 h-1'></span>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-[#888888]'>posted 2 days ago</p>
            <div className='flex justify-center items-center gap-1 bg-[#2bfa3639] opacity-50 px-2 py-1 rounded-full'>
              <span className='bg-[#0edd18] rounded-full w-[0.40rem] h-[0.40rem]'></span>
              <p className='text-[#0edd18] text-sm'>Open</p>
            </div>
          </div>
        </div>
        <div className='flex justify-start items-center gap-4'>
          <div className='flex justify-center items-center gap-2'>
            <Image src='/location.svg' alt='Location svg' width={15} height={15} />
            <p>Delaware, USA</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <Image src='/coins.svg' alt='Coins svg' width={15} height={15} />
            <p>$300k - $400k</p>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-start items-start gap-20 border-y border-[#E7E7E7] py-8 mt-4 text-sm'>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-[#6E6D6D]'>Skills Required</p>
          <div className='flex justify-center items-center gap-2 text-xs border-black border rounded-lg px-1 py-[0.15rem]'>
            <Image src='/figma-logo.svg' alt='Figma svg' width={15} height={15} />
            <p>Figma</p>
          </div>
          <div className='flex justify-center items-center gap-2 text-xs border-black border rounded-lg px-1 py-[0.15rem]'>
            <Image src='/adobe-illustrator.svg' alt='Adobe Illustrator svg' width={15} height={15} />
            <p>Adobe Illustrator</p>
          </div>
          <div className='flex justify-center items-center gap-2 text-xs border-black border rounded-lg px-1 py-[0.15rem]'>
            <Image src='/adobe-xd.svg' alt='Adobe XD svg' width={15} height={15} />
            <p>Adobe XD</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-[#6E6D6D]'>Preferred Language</p>
          <p className='text-[#3D3D3D] font-semibold'>English</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-[#6E6D6D]'>Type</p>
          <p className='text-[#3D3D3D] font-semibold'>Full time</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-[#6E6D6D]'>Years of Experience</p>
          <p className='text-[#3D3D3D] font-semibold'>3+ Years of Experience</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start gap-2 text-[#3D3D3D] text-sm py-8'>
        <p className='text-[#6E6D6D]'>About the job</p>
        <div className='flex flex-col justify-center items-start gap-1'>
          <p>1.Handle the UI/UX research design2.</p> 
          <p>2.Work on researching on latest web applications designs & trends3.</p>
          <p>3.Work on conceptualizing and visualizing4.</p> 
          <p>4.Work on creating graphics content and other graphic related works.</p>
        </div>
        <p>Benefits:</p>
        <div>
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </div>
        <p>Schedule:</p>
        <li>Day shift</li>
        <p>Supplemental pay types:</p>
        <div>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </div>
        <p>Work Location: In person</p>
      </div>
    </div>
  )
}

export default JobPreview