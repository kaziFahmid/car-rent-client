import React ,{ useEffect, useState } from 'react'
import { Button, Modal } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import { BsFillFuelPumpFill} from 'react-icons/bs';
import { BsFillHeartFill} from 'react-icons/bs';
import { ImLocation} from 'react-icons/im';
import { BsCalendarDateFill} from 'react-icons/bs';
import {GiCarWheel} from 'react-icons/gi';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCarOwner from '../hooks/useCarOwner';
import useFav from '../hooks/useFav';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card({_id,carname, location, brand, price, cartype, availability,photo,fueltype,username,email}) {
  const[isCarOwner,isCarOwnerLoading]=useCarOwner()
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
const navigate=useNavigate()
  const{user}=useAuth()
 const [refetch,favourites]=useFav()


  const[carInfo,setCarInfo]=useState({})

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const[carPic,setCarPic]=useState('')
const[myName,setMyName]=useState(user?.displayName)
const[carName,setCarName]=useState(carInfo.carname)
const[carType,setCarType]=useState(carInfo.cartype)
const[ownerName,setownerName]=useState('')
const[carId,setCarId]=useState('')
const[fuelType,setFuelType]=useState('')
const[pickup,setPickup]=useState('')
const[priceCar,setPriceCar]=useState('')
const[myemail,setMyEmail]=useState(user?.email)
const[carOwnerEmail,setCarOwnerEmail]=useState('')
const[phone,setPhone]=useState('')
const[availabilityDate,setAvailabilityDate]=useState(carInfo.availability)

let handleFav=(favCars)=>{
  if(!user){
    return navigate('/login')
  }
   axios.post(`/favourites`,favCars)
   .then((res)=>{
    if(res.insertedId){
      refetch()
      toast.success('Favourite!!')
    }
   })
}

let handleDele=(_id)=>{
axios.delete(`/favourites/${_id}`)
.then(res=>{
  if(res.deletedCount>0){
    refetch()
  }
})
}

  
    const showModal = (cars) => {
      if(!user){
        navigate('/login')
      }
      setFuelType(cars.fueltype)
      setPriceCar(cars.price)
      setCarName(cars.carname)
      setCarType(cars.cartype)
      setCarPic(cars.photo)
      setCarOwnerEmail(cars.email)
      setCarId(cars._id)
setAvailabilityDate(cars.availability)
setownerName(cars.username)
      setOpen(true);
    };
  
    const handleOk = () => {
      if (!myName||
        !carName||
       !carType||
       !ownerName||
       !carId||
       !fuelType||
       !pickup||
       !priceCar||
       !myemail||
       !carOwnerEmail||
       !phone||
       !availabilityDate) {
        toast.error('Please fill in all the required fields.');
        return;
      }
      setConfirmLoading(true);
let carbooking={carPic,
  myName,
  carName,
  carType,
  ownerName,
  carId,
  fuelType,
  pickup,
  priceCar: +priceCar,
  myemail,
  carOwnerEmail,
  phone,
  availabilityDate}
 axios.post('/carbookings',carbooking)
 .then((res)=>{
  if(res.insertedId){
    toast.success('Booking Successful')
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  }
})
      
    };
  
    const handleCancel = () => {
  
      setOpen(false);
    };
  
  return (
  <>
   <Toaster />

  <div data-aos="flip-left" className="card  bg-white shadow-xl pb-6 ">
    <div className='flex justify-between items-center px-5 my-3'>
    <div className=" flex flex-col ">
     <h2 className='text-xl font-semibold'>{carname}</h2>
    <p className='text-slate-400 font-semibold' >{cartype}</p>
    </div>
    <div >
      {isCarOwner.carowner?'': <BsFillHeartFill  onClick={()=>{favourites.some((x)=>x.id===_id)?handleDele(_id):handleFav({id:_id,carname, location, brand, price, cartype, availability,photo,fueltype,username,email})}} className={`text-2xl cursor-pointer hover:text-red-500 duration-200 ${favourites.some((x)=>x.id===_id)&&'text-red-500'}`}/>}
  
    </div>
    
    </div>
   <figure className="px-10 ">
     <img src={photo} alt="Shoes" className="rounded-xl img-fluid" />
   </figure>
   
   <div >
   
    <ul className='flex justify-center items-center gap-8 mt-5'>
   
     <li className='flex justify-center items-center gap-2 '> <BsFillFuelPumpFill  className='text-lg text-slate-400 '/>{fueltype}</li>
     <li className='flex justify-center items-center gap-2 '> <GiCarWheel  className='text-lg text-slate-400 '/>{brand}</li>
    </ul>
 
    <ul className=' mt-4 mx-2 ' >
     <li className='flex justify-between items-center    '><ImLocation className='text-lg text-slate-400  '/><span>{location}</span></li>
     <li className='flex justify-between items-center mt-3 '> <BsCalendarDateFill className='text-lg  text-slate-400  '/><span>{availability}</span></li>
    </ul>
  
 
 
 
 
 
 
   </div>
   <div className="flex justify-around items-center mt-6">
 <h1 className='text-3xl  font-bold'>${price}/</h1>
       <Button className= "btn bg-sky-600 text-white " onClick={()=>{showModal({_id,carname, location, brand, price, cartype, availability,photo,fueltype,username,email})}} disabled={isCarOwner.carowner&&true}>Rent Now</Button>
     </div>
 </div>
 
  
  
  
  
  
 <Modal
  okButtonProps={{ style: { backgroundColor: '#0284C7' } }}
        title="Rent Car"
        
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >


<form className='h-96 overflow-y-auto' >
<div className='lg:w-44 mx-auto'>
<img src={carPic}alt="Shoes" className="rounded-xl img-fluid" />
</div>
<div >

<div  className='mt-4'>

      <label htmlFor="myname" className="block mb-2 font-bold">
        My Name:
      </label>
      <input
        type="text"
        defaultValue={myName}
        id="myname"

        name="myname"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>



    <div  className='mt-4'>
      <label htmlFor="carname" className="block mb-2 font-bold">
        Car Name:
      </label>
      <input
        type="text"
        id="carname"
        defaultValue={carName}

        name="carname"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>

    <div className='mt-4' >
      <label htmlFor="cartype" className="block mb-2 font-bold">
        Car Type:
      </label>
      <input
        type="text"
        id="cartype"
        defaultValue={carType}

        name="cartype"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>

    <div className='mt-4' >
      <label htmlFor="availability" className="block mb-2 font-bold">
       Availability Date:
      </label>
      <input
        type="date"
        id="availability"
        defaultValue={availabilityDate}
      
        name="availability"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>




    <div className='mt-4'>
      <label htmlFor="pickupdate" className="block mb-2 font-bold">
       Select Pickup Date:
      </label>
      <input
        type="date"
        id="pickupdate"
        onChange={(e)=>setPickup(e.target.value)}
        name="pickupdate"
        defaultValue={pickup}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
    </div>









    <div className='mt-4' >
      <label htmlFor="email" className="block mb-2 font-bold">
        Email:
      </label>
      <input
        type="text"
        id="email"
        defaultValue={myemail}
        
        name="email"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>


    <div className='mt-4' >
      <label htmlFor="phone" className="block mb-2 font-bold">
        Phone:
      </label>
      <input
        type="number"
        id="phone"
        name="phone"
        defaultValue={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
    </div>


</div>


</form>
    

        
      </Modal>

  
  </>
 
 
  )
}
