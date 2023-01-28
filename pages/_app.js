import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(()=>{
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let keys = Object.keys(myCart);
    let subt = 0;
    for(let i=0; i<keys.length; i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty += qty;
    }else{
      newCart[itemCode] = {qty:1, price, name, size, variant};
    }
    setCart(newCart);  
    saveCart(newCart);
  }

  const removeFromCart = (itemCode, qty) => {
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty -= qty;
    }
    if(newCart[itemCode].qty<=0){
      delete newCart[itemCode];
    }
    setCart(newCart);  
    saveCart(newCart);
  }

  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
