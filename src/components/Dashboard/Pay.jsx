import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
export default function Pay() {
    const data=useLoaderData()

  return (
    <>
      <Helmet>
    <title>Car Hunting|Dashboard|Pay</title>
  </Helmet>
   <div className=' '>

   <h1 className='text-center lg:text-3xl mt-16 text-xl'>Payment</h1>
    <h2 className='text-xl mb-5'>Pay {parseFloat(data.priceCar.toFixed(2))}</h2>
    <Elements stripe={stripePromise}>
      <CheckoutForm {...data} price={parseFloat(data.priceCar.toFixed(2))} />
      </Elements>
   </div>
    </>
  )
}
