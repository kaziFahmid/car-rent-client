import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function PaymentHistory() {
  const navigate=useNavigate()
  const{user}=useAuth()
  const token=localStorage.getItem('access-token')
  const { refetch, data: payments = [] } = useQuery({

    queryKey: ['payments',user?.email],
    queryFn: async () => {
      const res = await fetch(`https://car-rental-server-ashy.vercel.app/payments?email=${user?.email}`,{
        headers:{
          authorization:`bearer ${token}`
        }
      })
      if (!res.ok) {
       
        navigate('/login') 
      }
      return res.json()
    },
  })
  return (
    <>
     <Helmet>
    <title>Car Hunting|Dashboard|Paymenthistory</title>
  </Helmet>
      <div className="overflow-x-auto h-96 overflow-y-auto mt-14">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-sky-600 text-white'>
        <th>Sl</th>
        <th>Car Name</th>
        <th>Car Picture</th>
        <th>Car Type</th>
        <th>Email</th>
        <th>TransactionId</th>
        <th>Price</th>
        <th>Pickup</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {payments.map((payment,index)=>{return <tr className="bg-base-200">
     <td>{index+1}</td>
        <td>{payment.carname}</td>
        <td><div className="avatar">
  <div className="w-16 rounded-full">
    <img src={payment.carpic} />
  </div>
</div></td>
        <td>{payment.cartype}</td>
        <td>{payment.email}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.price}</td>
        <td>{payment.pickup}</td>
        <td><span className='text-white bg-green-500 px-5 rounded-lg'>Paid</span></td>
      </tr>})}
      
    
    </tbody>
  </table>
</div>
    </>
  )
}
