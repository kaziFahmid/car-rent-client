import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'


export default function useAllCars() {
  const navigate=useNavigate()
  const{user}=useAuth()
  const token=localStorage.getItem('access-token')
    const { refetch, data: carrentercars = [] } = useQuery({
        queryKey: ['carrentercars',user?.email],
        queryFn: async () => {
          const res = await fetch(`https://car-rental-server-ashy.vercel.app/carrentercars?email=${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          if (!res.ok) {
       
            navigate('/login') 
          }
          return res.json()
        },
      })
  return [refetch,carrentercars]
}
