import React from 'react'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

export default function Addcar() {
  const{user}=useAuth()
  let handleAddCar=(e)=>{
e.preventDefault()
let username = e.target.username.value;
    let carname = e.target.carname.value;
    let email = e.target.email.value;
    let location = e.target.location.value;
    let brand = e.target.brand.value;
    let price = e.target.price.value;
    let cartype = e.target.cartype.value;
    let availability = e.target.availabilitydate.value; // Corrected the name here
    let photo = e.target.photo.value;
    let fueltype = e.target.fueltype.value;
const cars={username,
  carname,
  email,
  location,
  brand,
  price:parseInt(price),
  cartype,
  fueltype,
  availability,
  
  photo}
  axios.post('/allcars',cars)
  .then(res=>{
    if(res.insertedId){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'New Car Has been Added',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })



  }
  return (
    <>
    <Helmet>
    <title>Car Hunting|Addcar</title>
  </Helmet>
    <form onSubmit={handleAddCar}  className='h-96  '>
  
  <div className="p-4  mx-auto grid-cols-1   lg:grid lg:grid-cols-2 md:gap-4">
  <div className="mb-4">
      <label htmlFor="username" className="block mb-2 font-bold">
        User Name:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={user?.displayName}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>

    <div className="mb-4">
      <label htmlFor="carname" className="block mb-2 font-bold">
        Car Name:
      </label>
      <input
        type="text"
        id="carname"
        name="carname"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 font-bold">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={user?.email}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>

    <div className="mb-4">
      <label htmlFor="location" className="block mb-2 font-bold">
        Location:
      </label>
      <select
        id="location"
        name="location"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      >
        <option disabled >Select a location</option>
        <option value="NewYork">NewYork</option>
        <option value="Florida">Florida</option>
        <option value="Calfornia">Calfornia</option>
       
      </select>
    </div>

    <div className="mb-4">
      <label htmlFor="fueltype" className="block mb-2 font-bold">
        Fuel Type:
      </label>
      <select
        id="fueltype"
        name="fueltype"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      >
      
        <option disabled >Fuel Type</option>
  <option value="Hybrid">Hybrid</option>
  <option value="Diesel">Diesel</option>
     
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="brand" className="block mb-2 font-bold">
        Brand:
      </label>
      <select
        id="brand"
        name="brand"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      >

        <option disabled >Select Brand</option>
  <option>Toyota</option>
  <option>BMW</option>
 
      </select>
    </div>

    <div className="mb-4">
      <label htmlFor="price" className="block mb-2 font-bold">
        Price:
      </label>
      <input
        type="number"
        id="price"
        name="price"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="cartype" className="block mb-2 font-bold">
        Car Type:
      </label>
      <select
        id="cartype"
        name="cartype"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      >
      <option disabled >Select a Car Type</option>
  <option>Crossover</option>
  <option>Sedan</option>
  <option>SUV</option>
       
      </select>
    </div>

    <div className="mb-4">
      <label htmlFor="availabilitydate" className="block mb-2 font-bold">
        Availability Date:
      </label>
      <input
        type="date"
        id="availabilitydate"
        name="availabilitydate"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
  
    </div>





    <div className="mb-4">
      <label htmlFor="photo" className="block mb-2 font-bold">
        Photo:
      </label>
      <input
        type="text"
        id="photo"
        name="photo"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
  
    </div>






  </div>
<div className='text-center '>
<button className='text-white btn bg-blue-500'>Submit</button>
</div>
  </form>
    

    
    
    
    
    
    </>
  
  )
}
