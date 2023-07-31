import React, { useState } from 'react'
import { AiFillCar } from 'react-icons/ai';
import { PiSteeringWheelBold } from 'react-icons/pi';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import useCarOwner from '../hooks/useCarOwner';
import useCarRenter from '../hooks/useCarRenter';
import { AiOutlineMenuFold } from 'react-icons/ai';
import {GrFormClose} from 'react-icons/gr';
import { Helmet } from 'react-helmet';

export default function Dashboard() {
const [isCarOwner,isCarOwnerLoading]=useCarOwner()
const[isCarRenter,isCarRenterLoading]=useCarRenter()
const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
const isActive = (pathname) => location.pathname === pathname;
  return (
    <>
    <Helmet>
    <title>Car Hunting|Dashboard</title>
  </Helmet>
     <div className='grid lg:grid-cols-12 grid-cols-1 '>
        <div className='lg:col-span-2'>
            <div className='bg-white h-screen pt-14 lg:block hidden shadow-sm'>
            {isCarOwner.carowner && (
          <div>
            <h1 className='text-center font-bold text-3xl text-black'>Car Owner</h1>
            <ul className='mx-8 mt-16'>
              <Link to='/'>
                <li
                  className={`flex place-items-center items-center gap-3 mt-5 text-base font-semibold cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/') ? 'text-sky-500' : ''
                  }`}
                >
                  <AiFillHome />
                  Home
                </li>
              </Link>
              <Link to='/dashboard/addcar'>
                <li
                  className={`flex place-items-center items-center gap-3 text-base font-semibold  cursor-pointer hover:text-sky-500 duration-200 mt-5 ${
                    isActive('/dashboard/addcar') ? 'text-sky-500' : ''
                  }`}
                >
                  <AiFillCar />
                  Add Car
                </li>
              </Link>
              <Link to='/dashboard/managecars'>
                <li
                  className={`flex place-items-center items-center gap-3 mt-5 text-base font-semibold cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/dashboard/managecars') ? 'text-sky-500' : ''
                  }`}
                >
                  <PiSteeringWheelBold />
                  Manage Cars
                </li>
              </Link>
            </ul>
          </div>
        )}

        {/* car renter */}
        {isCarRenter.carrenter && (
          <div>
            <h1 className='text-center font-bold text-3xl text-black'>Car Renter</h1>
            <ul className='mx-8 mt-16'>
              <Link to='/'>
                <li
                  className={`flex place-items-center items-center gap-3 mt-5 text-base font-semibold cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/') ? 'text-sky-500' : ''
                  }`}
                >
                  <AiFillHome />
                  Home
                </li>
              </Link>
              <Link to='/dashboard/mybookings'>
                <li
                  className={`flex place-items-center items-center gap-3 mt-5 text-base font-semibold  cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/dashboard/mybookings') ? 'text-sky-500' : ''
                  }`}
                >
                  <AiFillCar />
                  My Bookings
                </li>
              </Link>
              <Link to='/dashboard/paymenthistory'>
                <li
                  className={`flex place-items-center items-center gap-3 mt-5 text-base font-semibold cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/dashboard/paymenthistory') ? 'text-sky-500' : ''
                  }`}
                >
                  <FaMoneyBillWaveAlt />
                  Payment History
                </li>
              </Link>
            </ul>
          </div>
        )}


 
            </div>
        </div>
        <div className='lg:col-span-10'>
        <div className="navbar flex justify-between items-center bg-white shadow-sm text-neutral-content">
  <a className="btn btn-ghost normal-case text-xl text-black">Dashboard</a>
  <div className="relative lg:hidden block">
      <button
        onClick={toggleDropdown}
        className="block lg:hidden px-4 py-2 text-black btn bg-slate-200 rounded-md focus:outline-none"
      >
{isOpen?<GrFormClose className='text-xl'/>:<AiOutlineMenuFold className='text-xl'/>}
      </button>
      {isOpen && (
        <div className="lg:hidden absolute z-50  top-10 right-0 mt-2 w-40 bg-white rounded-md shadow-lg p-2">
         {isCarRenter.carrenter&& <ul className="py-2">
          <Link to='/'>
                <li
                  className={`flex  place-items-center items-center gap-3  text-base font-semibold cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/') ? 'text-sky-500' : ' text-black'
                  }`}
                >
                  <AiFillHome />
                  Home
                </li>
              </Link>
              <Link to='/dashboard/mybookings'>
                <li
                  className={` mt-5 flex place-items-center items-center gap-3  text-base font-semibold  cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/dashboard/mybookings') ? 'text-sky-500' : 'text-black'
                  }`}
                >
                  <AiFillCar />
                  My Bookings
                </li>
              </Link>
              <Link to='/dashboard/paymenthistory'>
                <li
                  className={`flex mt-5 place-items-center items-center gap-3  text-base font-semibold cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/dashboard/paymenthistory') ? 'text-sky-500' : ' text-black'
                  }`}
                >
                  <FaMoneyBillWaveAlt />
                  Payment History
                </li>
              </Link>
          </ul>}


{isCarOwner.carowner&& <ul className="py-2">
<Link to='/'>
                <li
                  className={`flex place-items-center items-center gap-3  text-base font-semibold cursor-pointer mt-5 hover:text-sky-500 duration-200 ${
                    isActive('/') ? 'text-sky-500' : 'text-black'
                  }`}
                >
                  <AiFillHome />
                  Home
                </li>
              </Link>
              <Link to='/dashboard/addcar'>
                <li
                  className={`flex place-items-center items-center gap-3 text-base font-semibold mt-5  cursor-pointer hover:text-sky-500 duration-200  ${
                    isActive('/dashboard/addcar') ? 'text-sky-500' : 'text-black'
                  }`}
                >
                  <AiFillCar />
                  Add Car
                </li>
              </Link>
              <Link to='/dashboard/managecars'>
                <li
                  className={`flex place-items-center items-center gap-3  text-base mt-5 font-semibold cursor-pointer hover:text-sky-500 duration-200 ${
                    isActive('/dashboard/managecars') ? 'text-sky-500' : 'text-black'
                  }`}
                >
                  <PiSteeringWheelBold />
                  Manage Cars
                </li>
              </Link>
          </ul>}





















        </div>
      )}
      
    </div>
</div>
<Outlet/>

        </div>


     </div>
    </>
  )
}
