/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MdDelete } from 'react-icons/Md';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/Ai';

const Checkout = ({ cart, subTotal, removeFromCart, addToCart }) => {
    return (
        <>
            <h1 className='text-center pt-6 text-4xl font-semibold'>CheckOut</h1>
            <div className='flex justify-center flex-col sm:flex-row'>
                <div className='flex flex-col justify-center'>
                    <div>
                        <h1 className='text-xl font-semibold mx-2 mt-4 sm:mx-10'>Delivery Details</h1>
                        <div className="mx-5 sm:mx-20 flex flex-col sm:flex-row align-middle">
                            <input className='border-2 w-[100%] sm:mx-2 my-2 px-2 h-10 rounded' placeholder='Name' type="text" />
                            <input className='border-2 w-[100%] sm:mx-2 my-2 px-2 h-10 rounded' placeholder='E-mail' type="text" />
                        </div>
                        <div className="mx-5 sm:mx-20 flex flex-col sm:flex-row align-middle">
                            <textarea className='border-2 w-[100%] sm:mx-2 my-2 px-2 rounded' placeholder='Address' name="" id="" rows="2"></textarea>
                        </div>
                        <div className="mx-5 sm:mx-20 flex flex-col sm:flex-row align-middle">
                            <input className='border-2 w-[100%] sm:mx-2 my-2 px-2 h-10 rounded' placeholder='Phone' type="text" />
                            <input className='border-2 w-[100%] sm:mx-2 my-2 px-2 h-10 rounded' placeholder='City' type="text" />
                        </div>
                        <div className="mx-5 sm:mx-20 flex flex-col sm:flex-row align-middle">
                            <input className='border-2 w-[100%] sm:mx-2 my-2 px-2 h-10 rounded' placeholder='State' type="text" />
                            <input className='border-2 w-[100%] sm:mx-2 my-2 px-2 h-10 rounded' placeholder='PinCode' type="text" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mx-2 mt-4 sm:mx-10'>Review your Cart</h1>
                        {Object.keys(cart).map((k) => {
                            return <div className="items m-2 flex py-4 mx-5 sm:mx-20" key={k}>
                                <img src="" className='w-32 h-auto object-contain' alt="" />
                                <div className='px-4 w-[100%]'>
                                    <div className='flex justify-between'>
                                        <h3>{cart[k].name}</h3>
                                        <span><MdDelete onClick={() => { removeFromCart(k, cart[k].qty, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-xl my-1 cursor-pointer' /></span>
                                    </div>
                                    <h4>Size: {cart[k].size}</h4>
                                    <div className="quantity flex items-center">
                                        <AiFillMinusSquare onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                                        <h1>{cart[k].qty}</h1>
                                        <AiFillPlusSquare onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='h-8 w-8 fill-black-700 cursor-pointer mx-1' />
                                    </div>
                                    <h4 className="text-right font-bold">₹{cart[k].price}</h4>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-xl font-semibold mx-2 sm:mx-32 mt-4'>Order Summary</h1>
                        <div className="my-4 flex justify-between mx-5">
                            <div className="total">
                                <h1>Subtotal</h1>
                                <h1>Shipping</h1>
                            </div>
                            <div className="total text-right">
                                <h1>{subTotal}</h1>
                                <h1>Free</h1>
                            </div>
                        </div>
                        <hr className='border-1 border-black mx-5' />
                        <div className=" my-1 flex justify-between mx-5">
                            <div className="total">
                                <h1 className='font-bold'>Total :</h1>
                            </div>
                            <div className="total text-right">
                                <h1 className='font-bold'>{subTotal}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='cursor-pointer bg-black text-white p-3 my-4 mx-5 sm:w-32'>Pay ₹{subTotal}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout