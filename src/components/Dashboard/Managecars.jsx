import React from 'react'
import useAllCars from '../hooks/useAllCars'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Managecars() {
  const [refetch,carrentercars]=useAllCars()
let handleDelete=(_id)=>{
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
      axios.delete(`/carrentercars/${_id}`)
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
    <div>
       <Helmet>
    <title>Car Hunting|Dashboard|Managecars</title>
  </Helmet>
    <div className="overflow-x-auto h-96 overflow-y-auto mt-32 ">
  <table className="table table-zebra">

    <thead>
      <tr className='bg-sky-600 text-white'>
        <th>Serial No </th>
        <th>Car Photo </th>
        <th>Car Name </th>
        <th>Car Type</th>
        <th>Brand</th>
        <th>Fuel Type</th>
        <th>Email</th>
        <th>User Name</th>
        <th>Availability</th>
        <th>Location</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{carrentercars.map((allcar,index)=>{return   <tr key={index}>
        <td>{index+1} </td>
        <td> <div className="avatar">
  <div className="w-16 mask mask-circle">
    <img src={allcar.photo} />
  </div>
</div></td>
        <td>{allcar.carname} </td>
        <td>{allcar.cartype}</td>
        <td>{allcar.brand}</td>
        <td>{allcar.fueltype}</td>
        <td>{allcar.email}</td>
        <td>{allcar.username}</td>
        <td>{allcar.availability}</td>
        <td>{allcar.location}</td>
        <td>{allcar.price}</td>
        <td ><button className='bg-red-500 btn text-white'onClick={()=>handleDelete(allcar._id)}>Delete</button><Link to={`/dashboard/edit/${allcar._id}`}> <button className='btn bg-green-600 text-white'>Edit</button></Link></td>
      </tr>})}
    
    
    </tbody>
  </table>
</div>
    </div>
  )
}
