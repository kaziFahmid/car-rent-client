import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Addcar from './components/Dashboard/Addcar';
import Managecars from './components/Dashboard/Managecars';
import Login from './components/Registration/Login/Login';
import Signup from './components/Registration/Signup/Signup';
import AuthProvider from './components/AuthProvider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyBookings from './components/Dashboard/MyBookings';
import PaymentHistory from './components/Dashboard/PaymentHistory';
import Pay from './components/Dashboard/Pay';
import EditCar from './components/Dashboard/EditCar';
import OwnerRoute from './components/OwnerRoute';
import RenterRoute from './components/RenterRoute';
import ErrorPage from './components/ErrorPage/ErrorPage ';





axios.defaults.baseURL=`https://car-rental-server-ashy.vercel.app/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
     
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'/dashboard/addcar',
        
        element:<OwnerRoute><Addcar/></OwnerRoute>

      },
      {
        path:'/dashboard/managecars',
        element:<OwnerRoute><Managecars/></OwnerRoute>
      },
      {
        path:'/dashboard/mybookings',
        element:<RenterRoute><MyBookings/></RenterRoute>
      },
      {
        path:'/dashboard/payment/:id',
        element:<RenterRoute><Pay/></RenterRoute>,
        loader: ({params})=> fetch(`https://car-rental-server-ashy.vercel.app/carbookings/${params.id}`)
      },
      {
        path:'/dashboard/paymenthistory',
        element:<RenterRoute><PaymentHistory/></RenterRoute>
      },
      {
        path:'/dashboard/edit/:id',
        element:<OwnerRoute><EditCar/></OwnerRoute>,
        loader: ({params})=> fetch(`https://car-rental-server-ashy.vercel.app/carrentercars/${params.id}`)
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
   
 
  </React.StrictMode>,
)
