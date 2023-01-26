import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImCart } from 'react-icons/Im';

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-lg'>
            <div className="logo mx-5">
                <Image src="/logo/sandlox_favicon.png" className='h-11' width={75} height={20} alt="" />
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-8 font-bold md:text-md'>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/sneakers'}><li>Sneakers</li></Link>
                    <Link href={'/'}><li>Sports</li></Link>
                    <Link href={'/'}><li>Formal</li></Link>
                </ul>
            </div>
            <div className="cart absolute right-0 top-4 mx-5">
                <ImCart className='h-6 w-6 fill-yellow-700'/>
            </div>
        </div>
    )
}

export default Navbar