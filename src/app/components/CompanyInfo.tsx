import React from 'react';
import Image from 'next/image';

const CompanyInfo = () => {
  return (
    <div className='flex flex-col justify-center items-start py-10 pl-24 border-t border-[#E7E7E7]'>
      <div className='flex justify-start items-center gap-2'>
        <Image src='/atlassian-companylogo.svg' alt='Atlassian Company Logo svg' width={22} height={22} />
        <p className='font-semibold'>Atlassian</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-4 gap-4 md:gap-8'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <div className='flex flex-col justify-center items-start gap-1 text-base'>
            <p className='text-[#6E6D6D]'>Company size</p>
            <p className='text-[#3D3D3D]'>1k-2k Employees</p>
          </div>
          <div className='flex flex-col justify-center items-start gap-1 text-base'>
            <p className='text-[#6E6D6D]'>Sector</p>
            <p className='text-[#3D3D3D]'>Information Technology, Infrastructure</p>
          </div>
          <div className='flex flex-col justify-center items-start gap-1 text-base'>
            <p className='text-[#6E6D6D]'>Founded In</p>
            <p className='text-[#3D3D3D]'>2019</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
          <div className='flex flex-col justify-center items-start gap-1 text-base'>
            <p className='text-[#6E6D6D]'>Type</p>
            <p className='text-[#3D3D3D]'>Private</p>
          </div>
          <div className='flex flex-col justify-center items-start gap-1 text-base'>
            <p className='text-[#6E6D6D]'>Funding</p>
            <p className='text-[#3D3D3D]'>Bootstrapped</p>
          </div>
          <div className='flex flex-col justify-center items-start gap-1 text-base'>
            <p className='text-[#6E6D6D]'>Founded By</p>
            <p className='text-[#3D3D3D]'>Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo