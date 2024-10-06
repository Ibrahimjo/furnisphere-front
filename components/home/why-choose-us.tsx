
import React from 'react'
import { title } from '../primitives'
import { Spacer } from '@nextui-org/react'
import Image from 'next/image'
import { FaGlobe, FaBox, FaHeadphones } from "react-icons/fa";

const WhyChoseUs = () => {
  return (
    <div className='w-full flex flex-col'>
        <div className={title({fullWidth:true,class:"text-center"})}>
            WHY TO CHOOSE US
        </div>
        <Spacer y={16}/>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            <div className='flex flex-col justify-start items-center'>
                <FaGlobe size={65}/>
                <Spacer y={4}/>
                <div className='text-md md:text-lg text-center'>
                    Global Delivery
                </div>
                <div className='text-xs md:text-sm text-center text-default-500'>
                Experience Hassle-Free Shipping and Seamless Global Connectivity with Our Trustworthy and Efficient Delivery Service, Bringing the World to Your Fingertips!
                </div>
            </div>
            <div className='flex flex-col justify-start items-center'>
                <FaBox size={65}/>
                <Spacer y={4}/>
                <div className='text-md md:text-lg text-center'>
                    Free Shipping
                </div>
                <div className='text-xs md:text-sm text-center text-default-500'>
                Shop to Your Heart&apos;s Content Without Worrying About Shipping Costs: Our Free Shipping Service Delivers Your Purchases with a Smile, Straight to Your Doorstep!
                </div>
            </div>
            <div className='flex flex-col justify-start items-center'>
                <FaHeadphones size={65}/>
                <Spacer y={4}/>
                <div className='text-md md:text-lg text-center'>
                    24/7 Support
                </div>
                <div className='text-xs md:text-sm text-center text-default-500'>
                Shop with Confidence Anytime, Anywhere: Our Free Shipping Service Comes with 24/7 Support to Ensure Your Packages Arrive Safely and On Time!
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoseUs
