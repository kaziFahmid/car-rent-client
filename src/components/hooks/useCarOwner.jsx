
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

export default function useCarOwner() {
  const navigate=useNavigate()
    const {user}=useAuth()
    const token=localStorage.getItem('access-token')
        const { data: isCarOwner = [],isLoading:isCarOwnerLoading} = useQuery({
            queryKey: ['carowner',user?.email],
            queryFn: async () => {
              const res = await fetch(`https://car-rental-server-ashy.vercel.app/user/carowner/${user?.email}`,{
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
    
    
    
      return [isCarOwner,isCarOwnerLoading]
}
