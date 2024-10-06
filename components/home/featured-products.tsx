"use client";
import React from 'react'
import { title } from '../primitives'
import { Card, CardBody, Spacer } from '@nextui-org/react'
import Image from 'next/image'
import { FaGlobe, FaBox, FaHeadphones } from "react-icons/fa";
import Product11 from '../../public/static/sofa/11.png'
import Product2 from '../../public/static/lights/hanging-light.png'
import Product3 from '../../public/static/sofa/3.png'
import Product4 from '../../public/static/sofa/4.png'
import Product6 from '../../public/static/sofa/6.png'
import Product7 from '../../public/static/sofa/7.png'

const FeaturedProducts = () => {
  return (
    <div className='w-full flex flex-col'>
        <div className={title({fullWidth:true,class:"text-center"})}>
            Featured Products
        </div>
        <Spacer y={16}/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 h-auto'>
            <div className='flex flex-col justify-start items-center'>
                <Card className='w-full'>
                    <CardBody className='justify-center items-center content-center h-96'>
                        <Image src={Product11} alt='P1' height={350}/>
                    </CardBody>
                </Card>
                <Spacer y={2}/>
                <div className='text-md md:text-lg text-center'>
                    Product 1
                </div>
                <div className='text-md md:text-lg text-center'>
                    ⭐⭐⭐⭐⭐
                </div>
                <div className='text-md md:text-lg text-center text-default-800'>
                   <strong>$100</strong>
                </div>
            </div>
            <div className='flex flex-col justify-start items-center'>
                <Card className='w-full'>
                    <CardBody className='justify-center items-center content-center h-96'>
                        <Image src={Product2} alt='P1' height={350}/>
                    </CardBody>
                </Card>
                <Spacer y={2}/>
                <div className='text-md md:text-lg text-center'>
                    Product 2
                </div>
                <div className='text-md md:text-lg text-center'>
                    ⭐⭐⭐⭐⭐
                </div>
                <div className='text-md md:text-lg text-center text-default-800'>
                   <strong>$100</strong>
                </div>
            </div>
            <div className='flex flex-col justify-start items-center'>
                <Card className='w-full'>
                    <CardBody className='justify-center items-center content-center h-96'>
                        <Image src={Product3} alt='P1' height={350}/>
                    </CardBody>
                </Card>
                <Spacer y={2}/>
                <div className='text-md md:text-lg text-center'>
                    Product 3
                </div>
                <div className='text-md md:text-lg text-center'>
                    ⭐⭐⭐⭐⭐
                </div>
                <div className='text-md md:text-lg text-center text-default-800'>
                   <strong>$100</strong>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts
