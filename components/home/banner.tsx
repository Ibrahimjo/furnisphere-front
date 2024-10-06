"use client";
import React from 'react'
import Image from 'next/image'
import AppLogo from '../../public/logo/logo-no-background.svg'
import SofaChair from '../../public/static/sofa/5.png'
import { Button, Spacer } from '@nextui-org/react'
import { title, subtitle } from "@/components/primitives";
import { FaLightbulb, FaBolt, FaInbox} from 'react-icons/fa'


export const HomeBanner = () => {

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full h-auto bg-content1 rounded-md">
        <div className='flex flex-col items-center justify-center gap-3'>
            <Image src={AppLogo}  height={60} alt='Logo'/>
            <div className="w-full md:w-2/3 my-2 text-md lg:text-lg text-default-600 block max-w-full text-center">
                Top Quality, Best Price!
            </div>
            <Button radius='sm' color='secondary' variant='shadow'>View All Promo</Button>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Image src={SofaChair} alt='Sofa' width={300} height={300} className='hover:scale-110 hover:rotate-6 transition-transform'/>
        </div>
        <div className='flex flex-col items-left justify-center gap-4 p-2'>
            <div className='flex flex-row items-center justify-center gap-5'>
                <FaLightbulb size={33}/>
                <div className='w-full md:w-2/3 my-2 text-sm lg:text-md text-default-400 block max-w-full'>True marvel of engineering and design, durable frame that can support the heaviest of loads.</div>
            </div>
            <div className='flex flex-row items-center justify-center gap-5'>
                <FaBolt size={33}/>
                <div className='w-full md:w-2/3 my-2 text-sm lg:text-md text-default-400 block max-w-full'>Includes high-quality fabrics, metal frames, and innovative composites.</div>
            </div>
            <div className='flex flex-row items-center justify-center gap-5'>
                <FaInbox size={33}/>
                <div className='w-full md:w-2/3 my-2 text-sm lg:text-md text-default-400 block max-w-full'>Stylish addition to your living room, or a functional piece for your outdoor patio.</div>
            </div>
        </div>
      </div>
    )
}
