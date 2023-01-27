/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { ImCart } from 'react-icons/Im';
import { MdDelete } from 'react-icons/Md';
import { AiOutlineArrowRight, AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/Ai';

const Navbar = () => {

    const handleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef();

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
                <span onClick={handleCart}><ImCart className='h-6 w-6 fill-yellow-700 cursor-pointer' /></span>
            </div>

            <div ref={ref} className="sidebar flex flex-col items-center h-[100%] px-3 py-4 fixed top-0 right-0 bg-white transform transition-transform translate-x-full w-[20rem] shadow-2xl">
                <span onClick={handleCart}><AiOutlineArrowRight className='absolute top-3 left-3 cursor-pointer text-black900 font-bold text-2xl' /></span>
                <div className='flex flex-col items-center w-[100%]'>
                    <ImCart className='h-6 w-6 fill-black-700 cursor-pointer' />
                    <h2 className='font-bold pb-2'>Congrats! You got free delivery</h2>
                    <hr className='w-[100%] border-2 border-black cursor-pointer' />
                </div>

                <div className="w-[100%] flex justify-between">
                    <div className="total">
                        <h1>Subtotal</h1>
                        <h1>Shipping</h1>
                    </div>
                    <div className="total text-right">
                        <h1>₹5400</h1>
                        <h1>Free</h1>
                    </div>
                </div>

                <Link href={'/product/checkout'} className="w-[100%]"><button className='bg-black w-[100%] text-white p-3 my-2'>CheckOut</button></Link>


                <hr className='w-[100%] border-1 border-black cursor-pointer mt-2' />

                <div className="items w-[100%] flex py-4 shadow-lg">
                    <img src="https://m.media-amazon.com/images/I/71jSf1opuJL._AC_UL480_FMwebp_QL65_.jpg" className='w-32' alt="" />
                    <div className='px-4 w-[100%]'>
                        <div className='flex'>
                            <h3>Nike Air Jordan S-432SL</h3>
                            <span><MdDelete className='text-xl my-1' /></span>
                        </div>
                        <h4>Size: 10</h4>
                        <div className="quantity flex items-center">
                            <AiFillMinusSquare className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                            <h1>1</h1>
                            <AiFillPlusSquare className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                        </div>
                        <h4 className="text-right font-bold">₹1800</h4>
                    </div>
                </div>
                <div className="items w-[100%] flex py-4 shadow-lg">
                    <img src="https://m.media-amazon.com/images/I/71jSf1opuJL._AC_UL480_FMwebp_QL65_.jpg" className='w-32' alt="" />
                    <div className='px-4 w-[100%]'>
                        <div className='flex'>
                            <h3>Nike Air Jordan S-432SL</h3>
                            <span><MdDelete className='text-xl my-1' /></span>
                        </div>
                        <h4>Size: 10</h4>
                        <div className="quantity flex items-center">
                            <AiFillMinusSquare className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                            <h1>1</h1>
                            <AiFillPlusSquare className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                        </div>
                        <h4 className="text-right font-bold">₹1800</h4>
                    </div>
                </div>
                <div className="items w-[100%] flex py-4 shadow-lg">
                    <img src="https://m.media-amazon.com/images/I/71jSf1opuJL._AC_UL480_FMwebp_QL65_.jpg" className='w-32' alt="" />
                    <div className='px-4 w-[100%]'>
                        <div className='flex'>
                            <h3>Nike Air Jordan S-432SL</h3>
                            <span><MdDelete className='text-xl my-1' /></span>
                        </div>
                        <h4>Size: 10</h4>
                        <div className="quantity flex items-center">
                            <AiFillMinusSquare className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                            <h1>1</h1>
                            <AiFillPlusSquare className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                        </div>
                        <h4 className="text-right font-bold">₹1800</h4>
                    </div>
                </div>
                


            </div>

        </div>
    )
}

export default Navbar