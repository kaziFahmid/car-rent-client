
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

export default function useCarRenter() {
    const {user}=useAuth()
    const navigate=useNavigate()
    const token=localStorage.getItem('access-token')
        const { data: isCarRenter = [],isLoading:isCarRenterLoading} = useQuery({
            queryKey: ['carrenter',user?.email],
            queryFn: async () => {
              const res = await fetch(`https://car-rental-server-ashy.vercel.app/user/carrenter/${user?.email}`,{
                headers:{
                  authorization:`bearer ${token}`
                }
              });
              if (!res.ok) {
       
                navigate('/') 
              }
              return res.json();
            },
          });
    
    
    
      return [isCarRenter,isCarRenterLoading]
}
