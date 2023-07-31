import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { updateProfile } from 'firebase/auth'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

export default function Signup() {
    const{user, createUser}=useAuth()
    let navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
let handleSubmit =(e)=>{
    e.preventDefault()
    let username=e.target.username.value;
    let email=e.target.email.value;
    let password=e.target.password.value;
    let role=e.target.role.value;
    let photo=e.target.photo.value
    e.target.reset()
    createUser(email,password)
    .then((userCredential) => {
     
        const user = userCredential.user;
        console.log(user)
        updateProfile(user, {
            displayName: username, photoURL: photo
          }).then(() => {
            axios.post(`/allusers`,{email:user.email,username:user.displayName,photo:user.photoURL,role})
            .then((res)=>{
                if(res.insertedId){
                    Swal.fire('Signup  Successfull!')
                }
                navigate(from, { replace: true });
            })
          }).catch((error) => {
            
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


}
  return (
    <div>
          <Helmet>
    <title>Car Hunting|Signup</title>
  </Helmet>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
         Signup to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
        
        <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
             
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>




          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
               Select Role
              </label>
              
            </div>
            <div className="mt-2">
            <select
                id="role"
                name="role"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              
              >
                <option value="">Select Role</option>
                <option value="Carowner">Car Owner</option>
                <option value="Carrenter">Car Renter</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
             
            </div>
            <div className="mt-2">
              <input
                id="photo"
                name="photo"
                type="photo"
         
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Signup
            </button>
            
          </div>
<p className='mt-20 text-sky-600'><Link to='/login'>Login</Link></p>
        </form>

       
      </div>
    </div>
  </div>
  )
}
