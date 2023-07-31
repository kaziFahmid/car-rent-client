import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import useCarOwner from './hooks/useCarOwner';

export default function OwnerRoute({children}) {
    const {user,loading}=useAuth()
    const [isCarOwner,isCarOwnerLoading]=useCarOwner()
    
    let location = useLocation();
    
    if(loading||isCarOwnerLoading){
        return <h1>.....Loading</h1>
    }
    if(user && isCarOwner.carowner){
        return children
    }
      return <Navigate to='/' state={{ from: location }} replace></Navigate>
}
