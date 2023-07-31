import React from 'react'
import useAuth from '../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function MyBookings() {
    const{user}=useAuth()
    const navigate=useNavigate()
    const token=localStorage.getItem('access-token')
    const { refetch, data: carbookings = [] } = useQuery({

        queryKey: ['carbookings',user?.email],
        queryFn: async () => {
          const res = await fetch(`https://car-rental-server-ashy.vercel.app/carbookings?email=${user?.email}`,{
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
let handleRemove=(_id)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/carbookings/${_id}`)
             .then((res)=>{
       if(res.deletedCount>0){
        refetch()
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
    }

})
         
        }
      })

}



  return (
    <>
     <Helmet>
    <title>Car Hunting|Dashboard|Mybookings</title>
  </Helmet>
      <div className="overflow-x-auto h-96 overflow-y-auto  mt-14">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-sky-600 text-white'>
       
        <th>Photo of Car</th>
        <th>Car Name</th>
        <th>Car Type</th>
        <th>Car Owner Email</th>
        <th>Availability Date</th>
        <th>Pickup Date</th>
        <th>Price</th>
        <th>My Email</th>
        <th>My Number</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

        {carbookings.map((carbooking,index)=>{return <tr key={index} className="bg-base-200">

        <td>
        <div className="avatar">
  <div className="w-16 mask mask-squircle">
    <img src={carbooking.carPic} />
  </div>
</div>
            </td>
        <td>{carbooking.carName}</td>
        <td>{carbooking.carType}</td>
        <td>{carbooking.carOwnerEmail}</td>
        <td>{carbooking.availabilityDate}</td>
        <td>{carbooking.pickup}</td>
        <td>${carbooking.priceCar}</td>
        <td>{carbooking.myemail}</td>
        <td>{carbooking.phone}</td>
        <td >
        <button className="btn bg-sky-600 text-white" onClick={()=>window.my_modal_1.showModal(carbooking._id)}>View</button>
<dialog id="my_modal_1" className="modal">
   
  <form method="dialog" className="modal-box">
   <div className='flex justify-between items-center'>
   <div>
    <h3 className="font-bold lg:text-lg">{carbookings.find((x)=>x._id===carbooking._id).carName}</h3>
    <small>{carbookings.find((x)=>x._id===carbooking._id).carType}</small>
    </div>

    <h1 className='lg:text-2xl'>${carbookings.find((x)=>x._id===carbooking._id).priceCar}</h1>
   </div>
  
  <div >
    <img src={carbookings.find((x)=>x._id===carbooking._id).carPic} className='img-fluid' />
  </div>
<ul>
    <li><strong>Fuel:</strong> <span>{carbookings.find((x)=>x._id===carbooking._id).fuelType} </span></li>
    <li className='mt-3'><strong>AvailabilityDate:</strong> <span>{carbookings.find((x)=>x._id===carbooking._id).availabilityDate} </span></li>
</ul>
    <div className="modal-action">
     
      <button className="btn bg-red-600 text-white">Close</button>
    </div>
  </form>
</dialog>
       <Link to={`/dashboard/payment/${carbooking._id}`}><button className='btn bg-yellow-500 text-white'>Pay </button></Link>
            <button className='btn bg-red-500 text-white'onClick={()=>{handleRemove(carbooking._id)}}>Remove</button>
        </td>
      </tr>
     })}
     
    </tbody>
  </table>
</div>
    </>
  )
}
