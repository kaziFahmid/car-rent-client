import React from 'react'
import useAuth from '../hooks/useAuth'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import useAllCars from '../hooks/useAllCars'
import { Helmet } from 'react-helmet'


export default function EditCar() {
    const [refetch,carrentercars]=useAllCars()
    const{user}=useAuth()
  const data=useLoaderData()
 let handleSubmit=(e)=>{
e.preventDefault()
let username=e.target.username.value;
let carname=e.target.carname.value;
let email=e.target.email.value;
let location=e.target.location.value;
let fueltype=e.target.fueltype.value;
let price=e.target.price.value;
let availabilitydate=e.target.availabilitydate.value;
let photo=e.target.photo.value;

let editedCar={username,
    carname,
    email,
    location,
    fueltype,
    price,
    availabilitydate,
    photo}
axios.put(`/carrentercars/${data._id}`,editedCar)
.then(res=>{
    if(res.modifiedCount>0){
        refetch()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Edited has been done Successfuly ',
            showConfirmButton: false,
            timer: 1500
          })
    }
})

 }
  return (
    <>
          <Helmet>
    <title>Car Hunting|Dashboard|Editcar</title>
  </Helmet>
      <h2 className='text-center text-4xl font-semibold mt-5 '>Edit</h2>
        <form onSubmit={handleSubmit} className='h-96  overflow-y-auto mt-14  '>

  <div className="p-4  mx-auto grid-cols-1   lg:grid lg:grid-cols-2 md:gap-4">
  <div className="mb-4">
      <label htmlFor="username" className="block mb-2 font-bold">
        User Name:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={data?.username
        }
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
        defaultValue={data?.carname
        }
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
        defaultValue={data?.email
        }
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
        defaultValue={data?.location

        }
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
        defaultValue={data?.fueltype

        }
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
        defaultValue={data?.brand


        }
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
        defaultValue={data?.price


        }
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
        defaultValue={data?.cartype



        }
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
        defaultValue={data?.availability



        }
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
        defaultValue={data?.photo


        }
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
  
    </div>






  </div>
<div className='text-center '>
<button className='text-white btn bg-blue-500'>Save</button>
</div>
  </form>
    
    </>
  )
}
