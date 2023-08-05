import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AiOutlineMenuFold } from 'react-icons/ai';
import {GrFormClose} from 'react-icons/gr';
export default function Header() {
    const location = useLocation();
    const{user,logOut}=useAuth()
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prevState) => !prevState);
    };
  return (
    <>
      <header className=' navbar flex justify-around items-center bg-white  '>
        <div>
        <h1 className='italic font-bold text-2xl'>Car Hunting</h1>
        </div>

        <ul className='lg:flex justify-center items-center hidden gap-6 '>
      <li className={`font-medium cursor-pointer hover:text-sky-500 duration-200 ${location.pathname === '/' ? 'text-sky-500' : ''}`}>
        <Link to="/">Home</Link>
      </li>
     {user&& <li className={`font-medium cursor-pointer hover:text-sky-500 duration-200 ${location.pathname === '/dashboard' ? 'text-sky-500' : ''}`}>
        <Link to="/dashboard">Dashboard</Link>
      </li>}

{user?.email?<li className={`  font-medium cursor-pointer hover:text-sky-500 duration-200 ${location.pathname === '/dashboard' ? 'text-sky-500' : ''}`} onClick={logOut}>
     Logout
      </li>:<li className={`  font-medium cursor-pointer hover:text-sky-500 duration-200  ${location.pathname === '/dashboard' ? 'text-sky-500' : ''}`}>
        <Link to="/login">Login</Link>
      </li>}
      
   {!user?.email&&   <li className='font-medium cursor-pointer hover:text-sky-500 duration-200'>
        <Link to="/signup">Signup</Link>
      </li>}

    {user?.email&&  <li >
      <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
      </li>}
    </ul>
    


    <div className="relative lg:hidden block">
      <button
        onClick={toggleDropdown}
        className="block lg:hidden px-4 py-2 btn text-black bg-slate-100 rounded-md focus:outline-none"
      >
        {isOpen?<GrFormClose className='text-xl'/>:<AiOutlineMenuFold className='text-xl'/>}
      </button>
      {isOpen && (
        <div className="lg:hidden absolute right-0 mt-2 w-40 z-50 bg-white rounded-md shadow-lg">
          <ul className="py-2 text-center">
          <li className={`font-medium cursor-pointer hover:text-sky-500 duration-200 ${location.pathname === '/' ? 'text-sky-500' : ''}`}>
        <Link to="/">Home</Link>
      </li>
     {user&& <li className={` mt-5 font-medium cursor-pointer hover:text-sky-500 duration-200 ${location.pathname === '/dashboard' ? 'text-sky-500' : ''}`}>
        <Link to="/dashboard">Dashboard</Link>
      </li>}

{user?.email?<li className={`  mt-5 font-medium cursor-pointer hover:text-sky-500 duration-200 ${location.pathname === '/dashboard' ? 'text-sky-500' : ''}`} onClick={logOut}>
     Logout
      </li>:<li className={` mt-5 font-medium cursor-pointer hover:text-sky-500 duration-200 ${location.pathname === '/dashboard' ? 'text-sky-500' : ''}`}>
        <Link to="/login">Login</Link>
      </li>}
      
   {!user?.email&&   <li className='  mt-5 font-medium cursor-pointer hover:text-sky-500 duration-200'>
        <Link to="/signup">Signup</Link>
      </li>}

    {user?.email&&  <li className=' mt-5' >
      <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
      </li>}
          </ul>
        </div>
      )}
    
    </div>













    
      </header>
    </>
  )
}
