import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

export default function Login() {
    const{signInUser}=useAuth()
    let navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
let handleSubmit=(e)=>{
e.preventDefault()
let email=e.target.email.value;
let password=e.target.password.value;
e.target.reset()
signInUser(email,password)
.then((result) => {
    
    const user = result.user;

Swal.fire('Login Done')
    navigate(from, { replace: true });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

  return (
    <>
        <Helmet>
    <title>Car Hunting|Login</title>
  </Helmet>


 


<div >
<section className="border-red-500   mt-11 flex items-center justify-center">
    <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div className="md:w-1/2 px-5">
        <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
        <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
        <form onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required/>
          </div>

          <div className="text-right mt-2">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>

          <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>

        <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-500" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-500" />
        </div>

      

        <div className="text-sm flex justify-between items-center mt-3">
          <p>If you don't have an account...</p>
          <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "><Link to='/signup'>Register</Link></button>
        </div>
      </div>

      <div className="w-1/2 md:block hidden ">
        <img src="https://images.unsplash.com/photo-1589750602846-60028879da9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl img-fluid" alt="page img"/>
      </div>

    </div>
  </section>

</div>














      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
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
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
              
            </div>
<p className='mt-20 text-sky-600'><Link to='/signup'>Register</Link></p>
          </form>

         
        </div>
      </div> */}
    </>
  )
}
