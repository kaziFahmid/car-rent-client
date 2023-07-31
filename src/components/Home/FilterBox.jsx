
import React from 'react'
import { ImLocation} from 'react-icons/im';
export default function FilterBox({handleCars,
  handleLocation,
  handleFuelType,
  handleBrand,

  handleCarType,
  handleAvailabilityDate,asc,
  setAsc}) {
  return (
    <div className='   mt-16 container mx-auto '>
        <div>
        <input type="text" onChange={(e)=>{handleCars(e.target.value)}} placeholder="Search Car" className="input input-bordered w-full " />
        </div>




        <div className='grid mt-5  gap-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center items-center'>
            <div className='relative'>
            <input type="search" onChange={(e)=>{handleLocation(e.target.value)}} placeholder="Search Location  " className="input input-bordered w-full relative ps-7" />
            <ImLocation className='absolute top-4 left-2 text-slate-300'/>
            </div>
            <select onChange={(e)=>{handleFuelType(e.target.value)}} className="select select-bordered ">
  <option defaultValue='Select Fuel Type' >Select Fuel Type</option>
  <option defaultValue='All'>All</option>
  <option defaultValue='Hybrid'>Hybrid</option>
  <option defaultValue='Diesel'>Diesel</option>
</select>


<select  onChange={(e)=>{handleBrand(e.target.value)}} className="select select-bordered " >

  <option  defaultValue='Select Brand'>Select Brand</option>
  <option defaultValue='All'>All</option>
  <option defaultValue='Toyota'>Toyota</option>
  <option defaultValue='BMW'>BMW</option>
</select>









<div >
<label className="block  font-semibold "> Sort by Price</label>
 <button className='btn bg-white 'onClick={()=>setAsc(!asc)}>{asc?'Price high to low':'Price low to high'}</button>
</div>









            <div className="p-4  flex-col lg:flex-row flex justify-center gap-6 items-center">
            <label className="block  font-semibold">Car Type:</label>









            
      <div className="flex items-center ">
    
        <input type="radio" onChange={(e)=>{handleCarType(e.target.value)}} id=" crossover" name="carType" value="Crossover" className="mr-2 radio checked:bg-blue-500 " />
        <label htmlFor=" crossover" className="cursor-pointer">
        Crossover
        </label>
      </div>
      <div className="flex items-center ">
        <input type="radio" onChange={(e)=>{handleCarType(e.target.value)}} id="sedan" name="carType" value="Sedan" className="mr-2 radio checked:bg-blue-500" />
        <label htmlFor="sedan" className="cursor-pointer">
          Sedan
        </label>
      </div>
      <div className="flex items-center ">
        <input type="radio" onChange={(e)=>{handleCarType(e.target.value)}} id="suv" name="carType" value="SUV" className="mr-2 radio checked:bg-blue-500" />
        <label htmlFor="suv" className="cursor-pointer ">
          SUV
        </label>
      </div>
    </div>





            <div>
            <label className="block  font-semibold">Availability:</label>
            <input type="date" onChange={(e)=>{handleAvailabilityDate(e.target.value)}}  className="input input-bordered w-full  " />
            </div>
            

    





        </div>


    </div>

  )
}
