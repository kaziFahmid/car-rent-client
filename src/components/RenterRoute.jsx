import React from 'react'
import useAuth from './hooks/useAuth';

import { Navigate, useLocation } from 'react-router-dom';
import useCarRenter from './hooks/useCarRenter';


export default function RenterRoute({children}) {
    const {user,loading}=useAuth()
    const [isCarRenter,isCarRenterLoading]=useCarRenter()
    
    let location = useLocation();
    
    if(loading||isCarRenterLoading){
        return <h1>.....Loading</h1>
    }
    if(user && isCarRenter.carrenter){
        return children
    }
      return <Navigate to='/' state={{ from: location }} replace></Navigate>
}
