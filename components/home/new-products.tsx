"use client";
import React from 'react'
import Image from 'next/image'
import AppLogo from '../../public/logo/logo-no-background.svg'
import Light from '../../public/static/lights/hanging-light.png'
import Sofa from '../../public/static/sofa/9.png'
import Chair from '../../public/static/sofa/8.png'
import { Button, Card, CardBody, CardFooter, Spacer } from '@nextui-org/react'
import { title, subtitle } from "@/components/primitives";
import { FaLightbulb, FaBolt, FaInbox } from 'react-icons/fa'
import { ReadMore } from '../read-more';


export const NewProducts = () => {

    return (
        <div className='flex flex-col md:flex-row  gap-6 w-full h-auto'>
            <Card className='basis-full md:basis-1/4'>
                <CardBody className='flex flex-col justify-start items-center -mt-4'>
                    <Image src={Light} alt='Light' height={200} width={150} />
                    <Spacer y={10} />
                    <div className='text-md md:text-lg text-start w-full'>
                        Hanging Lights
                    </div>
                    <Spacer y={5} />
                    <div className='text-xs md:text-sm text-start text-pretty text-default-500'>
                        Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient LED lighting, and adjustable height.
                    </div>
                </CardBody>
                <CardFooter className='justify-center'>
                    <ReadMore />
                </CardFooter>
            </Card>
            <Card className='basis-full md:basis-1/2'>
                <CardBody className='flex flex-col justify-center items-center'>
                    <div className='text-md md:text-lg text-center w-full'>
                        Designed Sofa
                    </div>
                    <Spacer y={5} />
                    <div className='text-xs md:text-sm text-center text-pretty text-default-500'>
                        Introducing our newest sofa, the perfect combination of style and comfort, designed to elevate your living space and provide ultimate relaxation.
                    </div>
                    <Spacer y={10} />
                    <Image src={Sofa} alt='Sofa' />
                </CardBody>
                <CardFooter className='justify-center'>
                    <ReadMore />
                </CardFooter>
            </Card>
            <Card className='basis-full md:basis-1/4'>
                <CardBody>
                    <div className='text-md md:text-lg text-start w-full'>
                        Nova Chair
                    </div>
                    <Spacer y={5} />
                    <div className='text-xs md:text-sm text-start text-pretty text-default-500'>
                    a stylish and comfortable addition to any room, with its sleek design and plush cushions creating the ultimate seating experience.
                    </div>
                    <Spacer y={10} />
                    <Image src={Chair} alt='Chair' />
                </CardBody>
                <CardFooter className='justify-center'>
                    <ReadMore />
                </CardFooter>
            </Card>
        </div>
    )
}
