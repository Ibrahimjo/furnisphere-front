import Image from 'next/image'
import Logo from '../../public/image.png'
import { Spacer } from '@nextui-org/react'
import { title } from '../primitives'
const TrustedBy = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className={title({ fullWidth: true, class: "text-center" })}>
                TRUSTED BY
            </div>
            <Spacer y={16} />
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-7 w-full">
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="rounded-full bg-gray-400 flex items-center justify-center m-4">
                    <Image src={Logo} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default TrustedBy