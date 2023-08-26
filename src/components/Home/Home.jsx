import React, { useEffect, useState } from 'react'
import FilterBox from './FilterBox'

import Card from './Card';

import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import Banner from './Banner/Banner';
import BestRental from './BestRental/BestRental';
import Journey from '../Journey/Journey';
import Brands from './Brands/Brands';
import AboutUs from '../AboutUs/AboutUs';
import Testimonial from '../Testimonial/Testimonial';
import Pricing from '../Pricing/Pricing';


export default function Home() {
  const[cars,setCar]=useState('')
  const[asc,setAsc]=useState(false)
  const[location,setLocation]=useState('')
  const[fuelType,setFuelType]=useState('')
  const[brand,setBrand]=useState('')

  const[carType,setCarType]=useState('')
  const[availabilityDate,setAvailabilityDate]=useState('')
const[currentPage,setCurrentPage]=useState('')

const[isLoading,setIsLoading]=useState(true)
useEffect(()=>{
  setIsLoading(true)
  setTimeout(()=>{
    setIsLoading(false)
  },1000)
},[currentPage])
const itemsPerpage=8
  let handleCars=(car)=>{
 
    setCar(car)
  }
  let handleLocation=(location)=>{
    setLocation(location)
  }
  let handleFuelType=(fuel)=>{
    setFuelType(fuel)
  }
  let handleBrand=(brand)=>{
    setBrand(brand)
  }

  let handleCarType=(cartype)=>{
    setCarType(cartype)
  }

  let handleAvailabilityDate=(availability)=>{
    setAvailabilityDate(availability)
  }


  const {  data: allcars = [] } = useQuery({
    queryKey: ['allcars',cars,
    location,
    fuelType,
    brand,
    currentPage,
    itemsPerpage,
    asc,
    carType,

    availabilityDate],
    queryFn: async () => {
      const res = await fetch(`https://car-rental-server-ashy.vercel.app/allcars?search=${cars}&location=${location}&fueltype=${fuelType}&brand=${brand}&cartype=${carType}&availability=${availabilityDate}&sort=${asc?"asc":'des'}&page=${currentPage}&limit=${itemsPerpage}`)
      
      return res.json()
      
    },


  })
 

  const totalPages= Math.ceil(allcars.length/itemsPerpage)
  let pageNumber=[]
  for(let i =0;i<=totalPages;i++){
    pageNumber.push(i)
  }
  return (
    <>
  <Helmet>
    <title>Car Hunting|Home</title>
  </Helmet>
   <Banner/>
  

<Brands/>

   <FilterBox handleCars={handleCars} handleLocation={handleLocation}
handleFuelType={handleFuelType}
handleBrand={handleBrand}

handleCarType={handleCarType}
handleAvailabilityDate={handleAvailabilityDate} asc={asc} setAsc={setAsc} />
   
   {/* Car Area */}
  
  {isLoading ? <div className='text-center mt-20 '>
     <span className={`loading loading-spinner text-info w-16 `}></span>
  </div> : <div className='grid lg:grid-cols-4 mt-12 container mx-auto gap-12 md:grid-cols-2 grid-1  '>
   
   {allcars.length===0?<h1 className='text-center lg:text-2xl'>No Cars Found</h1>:allcars.map((allcar,index)=><Card  key={index }{...allcar}/>)}
   
   
      </div>}
   

  <div className='text-center mt-16'>
  {pageNumber.map((pages,index)=>{return <button key={index} onClick={(e)=>setCurrentPage(pages)} className={` me-4 btn ${currentPage===pages?'bg-sky-600 duration-200 text-white':'bg-slate-200 duration-200'}`}>{pages}</button>})}

  </div>

  <BestRental/>
  <Journey/>
  <AboutUs/>
  <Testimonial/>

<Pricing/>
    </>
  )
  
}
