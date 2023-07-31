
import React, { useEffect, useState } from 'react';




import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
export default function CheckoutForm({price,_id,carPic,carName,carType,carId,pickup}) {
    const stripe = useStripe();
    const{user}=useAuth()
    const elements = useElements();
  const[cardError,setCardError]=useState('')
const[clientSecret,setClientSecret]=useState('')
const[processing,setProcessing]=useState(false)
const[transactionId,setTransactionId]=useState('')
useEffect(()=>{
    axios.post(`/create-payment-intent`,{price})
    .then(res=>{
        setClientSecret(res.clientSecret)
    })
},[])


const { refetch, data: carbookings = [] } = useQuery({

    queryKey: ['carbookings'],
    queryFn: async () => {
      const res = await fetch(`https://car-rental-server-ashy.vercel.app/carbookings?email=${user?.email}`)
      return res.json()
    },
  })










    const handleSubmit = async (event) => {

      event.preventDefault();
  
      if (!stripe || !elements) {
    
        return;
      }
  
  
      const card = elements.getElement(CardElement);
  
 


      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
        setCardError('')
        console.log('[PaymentMethod]', paymentMethod);
      }

setProcessing(true)
      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
       clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
             email: user?.email||'unknown ',
             name: user?.displayName||'anonymous ',
            },
          },
        },
      );

if(confirmError){
    setCardError('')
}
setProcessing(false)
if(paymentIntent.status==='succeeded'){
    setTransactionId(paymentIntent.id)
 const payment={
    email:user?.email,transactionId:paymentIntent.id,price,
    id:_id,
    carId,
    carpic:carPic,
    carname:carName,
    cartype:carType,
pickup
}
axios.post(`/payments`,payment)
.then(res=>{
    if(res.insertedId){
        refetch()
    }
})
}





    };
  
  return (
   <>
   
   <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='bg-sky-600 btn text-white mt-12' type="submit" disabled={!stripe||!clientSecret ||processing}>
        Pay
      </button>
    </form>

    {cardError && <p className='text-red-600'>{cardError}</p>}
   
   {transactionId&& <p  className='text-green-600'>Transaction Complete with  transactionId:{transactionId}</p>}
   
   
   
   
   
   </>
  )
}
