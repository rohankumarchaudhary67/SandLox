import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { ImCart } from 'react-icons/Im';
import { ImCross } from 'react-icons/Im';

const Navbar = () => {

    const handleCart = () => {
        if (ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref= useRef();

    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-lg'>
            <div className="logo mx-5">
                <Image src="/logo/sandlox_favicon.png" className='h-11' width={75} height={20} alt="" />
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-8 font-bold md:text-md'>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/sneakers'}><li>Sneakers</li></Link>
                    <Link href={'/sports'}><li>Sports</li></Link>
                    <Link href={'/formal'}><li>Formal</li></Link>
                </ul>
            </div>
            <div className="cart absolute right-0 top-4 mx-5">
                <span onClick={handleCart}><ImCart className='h-6 w-6 fill-yellow-700 cursor-pointer'/></span>
            </div>

            <div ref={ref} className="sidebar h-[100vh] p-10 absolute top-0 right-0 bg-yellow-200 transform transition-transform translate-x-full">
                <span onClick={handleCart}><ImCross className='absolute top-3 right-3 cursor-pointer text-yellow-900 text-lg' /></span>
                <h2 className='font-bold'>Your Shopping Cart</h2>

            </div>

        </div>
    )
}

export default Navbar