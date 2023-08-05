import React from 'react'

const BestRental = () => {
  return (
   <>
   <div className='text-center mt-36'>
    <p className='text-sky-500'>WHY CHOOSE US</p>
    <h1 className='text-3xl'>Best Car Rental Services</h1>
    <p>We provide Best classic  services as below</p>
   </div>
   <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
      <div>
        <img src='https://i.ibb.co/f9mSMGP/Group-77.png' className='img-fluid'/>
      </div>
     
   <ul className='flex  flex-col items-center gap-12 justify-center'>
    <li>
      <div>
      <h3 className='text-xl  font-semibold mb-3'>24/7 Customer Support</h3>
        <p>We keep our valued customers happy and provide 24/7 customer support</p>
      </div>
    </li>
    <li>
    <div>
 <h3 className='text-xl font-semibold mb-3'>Best Price Guarantee</h3>
        <p>We keep our valued customers happy and provide 24/7 customer support</p>
 </div>
    </li>
    <li>
 <div>
 <h3 className='text-xl  font-semibold mb-3'>All locations in Tanzania</h3>
        <p>We keep our valued customers happy and provide 24/7 customer support</p>
 </div>
    </li>
   </ul>
    
    </div>
   
   
   
   
   
   
   </>
  )
}

export default BestRental
