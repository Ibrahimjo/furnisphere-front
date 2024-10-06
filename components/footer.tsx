"use client";
import Link from 'next/link'
import React from 'react'

const AppFooter = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 w-full px-4 py-2 md:w-2/3 mt-8'>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-secondary text-start text-md'>
            <strong>Useful Links</strong>
        </div>
        <Link className='text-sm text-default-400' href='/'>Home</Link>
        <Link className='text-sm text-default-400' href='/docs'>Docs</Link>
        <Link className='text-sm text-default-400' href='/pricing'>Pricing</Link>
        <Link className='text-sm text-default-400' href='/blog'>Blog</Link>
        <Link className='text-sm text-default-400' href='/about'>About</Link>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-secondary text-start text-md'>
            <strong>Useful Links</strong>
        </div>
        <Link className='text-sm text-default-400' href='/'>Home</Link>
        <Link className='text-sm text-default-400' href='/docs'>Docs</Link>
        <Link className='text-sm text-default-400' href='/pricing'>Pricing</Link>
        <Link className='text-sm text-default-400' href='/blog'>Blog</Link>
        <Link className='text-sm text-default-400' href='/about'>About</Link>
        <Link className='text-sm text-default-400' href='/pricing'>Pricing</Link>
        <Link className='text-sm text-default-400' href='/blog'>Blog</Link>
        <Link className='text-sm text-default-400' href='/about'>About</Link>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-secondary text-start text-md'>
            <strong>Useful Links</strong>
        </div>
        <Link className='text-sm text-default-400' href='/'>Home</Link>
        <Link className='text-sm text-default-400' href='/docs'>Docs</Link>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-secondary text-start text-md'>
            <strong>Useful Links</strong>
        </div>
        <Link className='text-sm text-default-400' href='/'>Home</Link>
        <Link className='text-sm text-default-400' href='/docs'>Docs</Link>
        <Link className='text-sm text-default-400' href='/docs'>Docs</Link>
      </div>
    </div>
  )
}

export default AppFooter
